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
let indexableCount = 0;

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
  const issue = (message) => issues.push(`${relative}: ${message}`);

  if (!/<html\b[^>]*\blang=["']es["']/i.test(html)) issue('falta lang="es"');
  if (!meta(html, 'viewport')) issue('falta meta viewport');
  if (!title) issue('falta <title>');
  if (!description) issue('falta meta description');
  if (!noindex) {
    if (description.length < 50 || description.length > 160) issue(`description fuera de 50–160 (${description.length})`);
    if (!canonical.startsWith(`${siteOrigin}/`)) issue(`canonical no canónico: ${canonical || '(vacío)'}`);
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
    if (canonical) {
      const owner = canonicalOwners.get(canonical);
      if (owner) issue(`canonical duplicado con ${owner}`);
      else canonicalOwners.set(canonical, relative);
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
