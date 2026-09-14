import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src', 'content', 'articles');
const distDirectory = path.join(root, 'dist');
const siteOrigin = 'https://ecocuriosa.com';

const articleFiles = (await readdir(articlesDirectory))
  .filter((filename) => filename.endsWith('.md'))
  .sort();
const issues = [];
const issue = (message) => issues.push(message);

const articleRoutes = [];
for (const filename of articleFiles) {
  const contents = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = contents.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+?)["']?\s*$/m)?.[1]?.trim();
  const slug = filename.replace(/\.md$/, '');
  if (!category) {
    issue(`${filename}: falta category en frontmatter`);
    continue;
  }
  articleRoutes.push({ filename, route: `/${category}/${slug}/`, canonical: `${siteOrigin}/${category}/${slug}/` });
}

// Keep the non-article pages under the same canonical/sitemap gate. Articles
// are discovered from content; these stable, hand-authored routes must not
// silently fall out of indexation checks.
const indexableStaticRoutes = [
  '/',
  '/fauna-fascinante/',
  '/especies-marinas/',
  '/fenomenos-naturales/',
  '/ciencia-curiosa/',
  '/aviso-legal/',
  '/contacto/',
  '/correcciones/',
  '/metodologia-editorial/',
  '/politica-de-cookies/',
  '/politica-de-privacidad/',
  '/sobre-nosotros/',
].map((route) => ({ route, canonical: `${siteOrigin}${route}` }));

const sitemapFiles = (await readdir(distDirectory)).filter((filename) => /^sitemap-\d+\.xml$/.test(filename));
const sitemap = (await Promise.all(sitemapFiles.map((filename) => readFile(path.join(distDirectory, filename), 'utf8')))).join('\n');
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const meta = (html, name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return html.match(new RegExp(`<meta\\s+[^>]*name=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'))?.[1]
    ?? html.match(new RegExp(`<meta\\s+[^>]*content=["']([^"']+)["'][^>]*name=["']${escaped}["'][^>]*>`, 'i'))?.[1]
    ?? '';
};

const canonicalFrom = (html) => html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
  ?? html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1]
  ?? '';

const checkIndexableRoute = async ({ route, canonical, filename }) => {
  const htmlPath = path.join(distDirectory, route, 'index.html');
  try {
    await stat(htmlPath);
  } catch {
    issue(`${filename ?? route}: falta HTML generado en ${route}`);
    return;
  }
  const html = await readFile(htmlPath, 'utf8');
  if (/\bnoindex\b/i.test(meta(html, 'robots'))) issue(`${route}: página indexable marcada noindex`);
  const generatedCanonical = canonicalFrom(html);
  if (generatedCanonical !== canonical) issue(`${route}: canonical inesperado (${generatedCanonical || '(vacío)'})`);
  const sitemapCount = sitemapLocations.filter((location) => location === canonical).length;
  if (sitemapCount !== 1) issue(`${route}: aparece ${sitemapCount} veces en sitemap (esperado 1)`);
};

for (const article of articleRoutes) {
  await checkIndexableRoute(article);
}

for (const page of indexableStaticRoutes) {
  await checkIndexableRoute(page);
}

for (const [relative, label] of [['buscar/index.html', 'búsqueda'], ['404.html', '404']]) {
  const html = await readFile(path.join(distDirectory, relative), 'utf8');
  if (!/\bnoindex\b/i.test(meta(html, 'robots'))) issue(`${label}: debe conservar noindex`);
}

const robots = await readFile(path.join(distDirectory, 'robots.txt'), 'utf8');
if (!/^Allow:\s*\/\s*$/m.test(robots)) issue('robots.txt: falta Allow: /');
if (/^Disallow:\s*\/\s*$/m.test(robots)) issue('robots.txt: Disallow: / bloquearía el sitio');
if (!new RegExp(`^Sitemap:\\s*${siteOrigin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/sitemap-index\\.xml\\s*$`, 'm').test(robots)) {
  issue('robots.txt: falta sitemap-index.xml canónico');
}

const sitemapIndex = await readFile(path.join(distDirectory, 'sitemap-index.xml'), 'utf8');
if (!sitemapIndex.includes(`${siteOrigin}/sitemap-0.xml`)) issue('sitemap-index.xml: falta sitemap-0.xml');

console.log(`Artículos publicados comprobados: ${articleRoutes.length}`);
console.log(`URLs de artículo en sitemap: ${articleRoutes.filter((article) => sitemapLocations.includes(article.canonical)).length}/${articleRoutes.length}`);
console.log(`Páginas estáticas indexables comprobadas: ${indexableStaticRoutes.length}`);
console.log(`URLs totales en sitemap: ${sitemapLocations.length}`);
console.log('Búsqueda y 404 con noindex: comprobados');
console.log(`Problemas de indexación: ${issues.length}`);
if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
}
