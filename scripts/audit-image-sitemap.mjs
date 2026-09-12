import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

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
  const imagePath = image.replace(/\.svg$/i, '.webp').replace(/^\//, '');
  articles.push({ url: `${siteURL}/${category}/${slug}/`, image: new URL(imagePath, siteURL).href, imagePath });
}

const sitemapFiles = (await readdir(distDirectory)).filter((filename) => /^sitemap-\d+\.xml$/.test(filename));
const sitemap = (await Promise.all(sitemapFiles.map((filename) => readFile(path.join(distDirectory, filename), 'utf8')))).join('\n');
const missing = articles.filter(({ url, image }) => {
  const urlBlock = sitemap.match(new RegExp(`<url><loc>${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>[\\s\\S]*?</url>`));
  return !urlBlock || !urlBlock[0].includes(`<image:loc>${image}</image:loc>`);
});

const undersized = [];
for (const { url, imagePath } of articles) {
  try {
    const metadata = await sharp(path.join(root, 'dist', imagePath)).metadata();
    if ((metadata.width ?? 0) < 1200) {
      undersized.push({ url, width: metadata.width ?? 0, height: metadata.height ?? 0 });
    }
  } catch {
    undersized.push({ url, width: 0, height: 0 });
  }
}

console.log(`Páginas de artículos comprobadas en sitemap: ${articles.length}`);
console.log(`Entradas de imagen comprobadas: ${articles.length - missing.length}`);
console.log(`Entradas de imagen faltantes: ${missing.length}`);
console.log(`Imágenes WebP de al menos 1200 px: ${articles.length - undersized.length}/${articles.length}`);
console.log(`Imágenes WebP por debajo de 1200 px o ilegibles: ${undersized.length}`);
if (missing.length || undersized.length) {
  if (missing.length) console.error(missing.map(({ url }) => url).join('\n'));
  if (undersized.length) console.error(undersized.map(({ url, width, height }) => `${url} (${width}x${height})`).join('\n'));
  process.exitCode = 1;
}
