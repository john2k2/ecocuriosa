import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDirectory = path.join(root, 'dist');
const siteOrigin = 'https://ecocuriosa.com';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(entryPath));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }
  return files;
}

const files = await htmlFiles(distDirectory);
const issues = [];
const canonicalOwners = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
let indexableCount = 0;
const categorySlugs = new Set([
  'fauna-fascinante',
  'especies-marinas',
  'fenomenos-naturales',
  'ciencia-curiosa',
]);

function meta(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return html.match(new RegExp(`<meta\\s+[^>]*name=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'))?.[1]
    ?? html.match(new RegExp(`<meta\\s+[^>]*content=["']([^"']+)["'][^>]*name=["']${escaped}["'][^>]*>`, 'i'))?.[1]
    ?? '';
}

function property(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return html.match(new RegExp(`<meta\\s+[^>]*property=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'))?.[1]
    ?? html.match(new RegExp(`<meta\\s+[^>]*content=["']([^"']+)["'][^>]*property=["']${escaped}["'][^>]*>`, 'i'))?.[1]
    ?? '';
}

function jsonLdNodes(html) {
  const nodes = [];
  for (const match of html.matchAll(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(match[1]);
      nodes.push(...(Array.isArray(parsed?.['@graph']) ? parsed['@graph'] : [parsed]));
    } catch {
      nodes.push({ '@type': '__invalid_jsonld__' });
    }
  }
  return nodes;
}

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(distDirectory, file).replaceAll(path.sep, '/');
  // Search Console ownership files intentionally contain only a token and are
  // not web pages; exclude them from page-metadata checks.
  if (/^google[a-f0-9]+\.html$/i.test(relative)) continue;
  const robots = meta(html, 'robots');
  const noindex = /\bnoindex\b/i.test(robots);
  if (!noindex) indexableCount += 1;
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim() ?? '';
  const description = meta(html, 'description');
  const canonical = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
    ?? html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1]
    ?? '';
  const canonicalCount = [...html.matchAll(/<link\s+[^>]*(?:rel=["']canonical["'][^>]*href=["'][^"']+["']|href=["'][^"']+["'][^>]*rel=["']canonical["'])[^>]*>/gi)].length;
  const ogUrl = property(html, 'og:url');
  const issue = (message) => issues.push(`${relative}: ${message}`);

  if (!/<html\b[^>]*\blang=["']es["']/i.test(html)) issue('falta lang="es"');
  if (!meta(html, 'viewport')) issue('falta meta viewport');
  if (!title) issue('falta <title>');
  if (!description) issue('falta meta description');
  if (!noindex) {
    // Character count is only a sanity guard: Google truncation depends on
    // rendered width, so allow Spanish editorial titles up to 80 characters.
    if (title.length < 10 || title.length > 80) issue(`title fuera de 10–80 caracteres (${title.length})`);
    if (description.length < 50 || description.length > 160) issue(`description fuera de 50–160 (${description.length})`);
    if (canonicalCount !== 1) issue(`canonical debe aparecer exactamente una vez (${canonicalCount})`);
    if (!canonical.startsWith(`${siteOrigin}/`)) issue(`canonical no canónico: ${canonical || '(vacío)'}`);
    if (!ogUrl) issue('falta og:url');
    else if (ogUrl !== canonical) issue(`og:url no coincide con canonical: ${ogUrl}`);
    if (!property(html, 'og:title')) issue('falta og:title');
    if (!property(html, 'og:description')) issue('falta og:description');
    if (!property(html, 'og:image')) issue('falta og:image');
    if (!/<script\b[^>]*type=["']application\/ld\+json["']/i.test(html)) issue('falta JSON-LD');
    const jsonLd = jsonLdNodes(html);
    const faqPages = jsonLd.filter((node) => node?.['@type'] === 'FAQPage');
    if (jsonLd.some((node) => node?.['@type'] === '__invalid_jsonld__')) issue('JSON-LD inválido');
    for (const faqPage of faqPages) {
      const questions = Array.isArray(faqPage.mainEntity) ? faqPage.mainEntity : [];
      if (!questions.length || questions.some((question) => (
        question?.['@type'] !== 'Question'
        || !question.name
        || question.acceptedAnswer?.['@type'] !== 'Answer'
        || !question.acceptedAnswer.text
      ))) issue('FAQPage sin preguntas/respuestas válidas');
      if (/revisión humana pendiente/i.test(html)) issue('FAQPage expone una ficha pendiente de revisión humana');
    }

    // Collection pages render a visible article index. Keep its ItemList in
    // lockstep with those cards so structured data cannot advertise a stale
    // or invented set of URLs.
    const categoryMatch = relative.match(/^([^/]+)\/index\.html$/);
    if (categoryMatch && categorySlugs.has(categoryMatch[1])) {
      const itemList = jsonLd.find((node) => node?.['@type'] === 'ItemList');
      const articleLinks = [...html.matchAll(/href=["'](\/[^"']+\/[^"']+\/)["']/gi)]
        .map((match) => match[1])
        .filter((url) => url.startsWith(`/${categoryMatch[1]}/`) && url !== `/${categoryMatch[1]}/`);
      const uniqueArticleLinks = [...new Set(articleLinks)];
      const listItems = Array.isArray(itemList?.itemListElement) ? itemList.itemListElement : [];
      if (!itemList) issue('página de categoría sin ItemList');
      else if (listItems.length !== uniqueArticleLinks.length) {
        issue(`ItemList no coincide con tarjetas visibles (${listItems.length} frente a ${uniqueArticleLinks.length})`);
      }
      const listUrls = listItems.map((item) => item?.url).filter(Boolean);
      if (new Set(listUrls).size !== listUrls.length) issue('ItemList contiene URLs duplicadas');
      if (listUrls.some((url) => !String(url).startsWith(`${siteOrigin}/${categoryMatch[1]}/`))) {
        issue('ItemList contiene una URL fuera de su categoría');
      }
    }
    if (canonical) {
      const owner = canonicalOwners.get(canonical);
      if (owner) issue(`canonical duplicado con ${owner}`);
      else canonicalOwners.set(canonical, relative);
    }
    for (const [value, owners, label] of [
      [title, titleOwners, 'title'],
      [description, descriptionOwners, 'description'],
    ]) {
      const owner = owners.get(value);
      if (owner) issue(`${label} duplicado con ${owner}`);
      else owners.set(value, relative);
    }
  }
}

console.log(`HTML generado comprobado: ${files.length}`);
console.log(`Páginas indexables: ${indexableCount}`);
console.log(`Problemas de metadatos: ${issues.length}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
