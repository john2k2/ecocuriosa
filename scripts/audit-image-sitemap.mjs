import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const articlesDirectory = path.join(root, 'src/content/articles');
const distDirectory = path.join(root, 'dist');
const siteURL = 'https://ecocuriosa.com';

const parseFrontmatterValue = (frontmatter, key) =>
  frontmatter.match(new RegExp(`^${key}:\\s*["'](.+)["']\\s*$`, 'm'))?.[1];

const articles = [];
for (const filename of (await readdir(articlesDirectory)).filter((name) => name.endsWith('.md'))) {
  const article = await readFile(path.join(articlesDirectory, filename), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
  const image = parseFrontmatterValue(frontmatter, 'image');
  if (!category || !image) continue;
  const slug = filename.replace(/\.md$/, '');
  articles.push({ url: `${siteURL}/${category}/${slug}/`, image: new URL(image.replace(/\.svg$/i, '.webp'), siteURL).href });
}

const sitemapFiles = (await readdir(distDirectory)).filter((filename) => /^sitemap-\d+\.xml$/.test(filename));
const sitemap = (await Promise.all(sitemapFiles.map((filename) => readFile(path.join(distDirectory, filename), 'utf8')))).join('\n');
const missing = articles.filter(({ url, image }) => {
  const urlBlock = sitemap.match(new RegExp(`<url><loc>${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>[\\s\\S]*?</url>`));
  return !urlBlock || !urlBlock[0].includes(`<image:loc>${image}</image:loc>`);
});

console.log(`Páginas de artículos comprobadas en sitemap: ${articles.length}`);
console.log(`Entradas de imagen comprobadas: ${articles.length - missing.length}`);
console.log(`Entradas de imagen faltantes: ${missing.length}`);
if (missing.length) {
  console.error(missing.map(({ url }) => url).join('\n'));
  process.exitCode = 1;
}
