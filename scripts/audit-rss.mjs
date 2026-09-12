import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const rssPath = path.join(root, 'dist/rss.xml');
const siteURL = 'https://ecocuriosa.com';
const rss = await readFile(rssPath, 'utf8');
const filenames = (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md'));

const itemCount = (rss.match(/<item>/g) ?? []).length;
const missing = [];
for (const filename of filenames) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]?.trim();
  const slug = filename.replace(/\.md$/, '');
  const url = `${siteURL}/${category}/${slug}/`;
  if (!category || !rss.includes(`<guid isPermaLink="true">${url}</guid>`)) missing.push(filename);
}

const requiredTags = ['<rss version="2.0"', '<atom:link ', '<language>es</language>', '<description>'];
const missingTags = requiredTags.filter((tag) => !rss.includes(tag));
console.log(`Entradas RSS comprobadas: ${itemCount}/${filenames.length}`);
console.log(`URLs de artículos ausentes: ${missing.length}`);
console.log(`Elementos RSS obligatorios ausentes: ${missingTags.length}`);

if (itemCount !== filenames.length || missing.length || missingTags.length) {
  if (missing.length) console.error(`Faltan artículos: ${missing.join(', ')}`);
  if (missingTags.length) console.error(`Faltan elementos: ${missingTags.join(', ')}`);
  process.exitCode = 1;
}
