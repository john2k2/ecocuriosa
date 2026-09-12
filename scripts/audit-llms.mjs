import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const llmsPath = path.join(root, 'public/llms.txt');
const siteURL = 'https://ecocuriosa.com';
const llms = await readFile(llmsPath, 'utf8');
const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md')).sort();
const missing = [];
const stale = [];
const nonCanonical = [];
const seenUrls = new Set();
const canonicalUrls = [];

for (const filename of filenames) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const title = frontmatter.match(/^title:\s*["'](.+)["']\s*$/m)?.[1]?.trim();
  const description = frontmatter.match(/^description:\s*["'](.+)["']\s*$/m)?.[1]?.trim();
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim();
  const slug = filename.replace(/\.md$/, '');
  if (!title || !description || !category) {
    stale.push(`${filename} (frontmatter incompleto)`);
    continue;
  }

  const url = `${siteURL}/${category}/${slug}/`;
  if (!url.endsWith('/')) nonCanonical.push(url);
  if (seenUrls.has(url)) stale.push(`${filename} (URL duplicada)`);
  seenUrls.add(url);
  canonicalUrls.push(url);
  const expected = `- [${title}](${url}): ${description}`;
  if (!llms.includes(expected)) missing.push(filename);
}

const articleLinks = canonicalUrls.filter((url) => llms.includes(`](${url}):`));
const duplicateUrls = articleLinks.filter((url) => {
  const matches = llms.match(new RegExp(`\\]\\(${url.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}\\):`, 'g')) ?? [];
  return matches.length > 1;
});

console.log(`Entradas de artículos comprobadas en llms.txt: ${filenames.length}`);
console.log(`Entradas faltantes o desactualizadas: ${missing.length + stale.length}`);
console.log(`URLs de artículos no canónicas: ${nonCanonical.length}`);
console.log(`URLs de artículos duplicadas: ${duplicateUrls.length}`);

if (missing.length) console.error(`Faltan en llms.txt: ${missing.join(', ')}`);
if (stale.length) console.error(`Metadatos no verificables: ${stale.join(', ')}`);
if (nonCanonical.length) console.error(`URLs sin barra final: ${nonCanonical.join(', ')}`);
if (articleLinks.length !== filenames.length) {
  console.error(`llms.txt contiene ${articleLinks.length} enlaces de artículos, pero hay ${filenames.length} archivos.`);
  process.exitCode = 1;
}
if (missing.length || stale.length || nonCanonical.length || articleLinks.length !== filenames.length || duplicateUrls.length) {
  process.exitCode = 1;
}
