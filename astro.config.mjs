import { copyFile, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteURL = 'https://ecocuriosa.com';
const articlesDirectory = new URL('./src/content/articles/', import.meta.url);
const articleLastModified = new Map();

for (const filename of await readdir(articlesDirectory)) {
  if (!filename.endsWith('.md')) continue;

  const article = await readFile(new URL(filename, articlesDirectory), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
  const pubDate = frontmatter.match(/^pubDate:\s*([^\n]+)\s*$/m)?.[1]?.trim();
  const reviewedDate = frontmatter.match(/^reviewedDate:\s*([^\n]+)\s*$/m)?.[1]?.trim();

  // `lastmod` must reflect a real meaningful change. A verified review wins;
  // otherwise the original publication date is the only defensible timestamp.
  const lastModified = reviewedDate || pubDate;
  if (!category || !lastModified) continue;

  const slug = path.basename(filename, '.md');
  const date = new Date(lastModified);
  if (!Number.isNaN(date.valueOf())) {
    articleLastModified.set(`${siteURL}/${category}/${slug}/`, date);
  }
}

export default defineConfig({
  site: 'https://ecocuriosa.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Los resultados internos no aportan una página editorial única a Google.
      // Se mantienen accesibles para lectores, pero fuera del sitemap.
      filter: (page) => !page.endsWith('/buscar/') && !page.endsWith('/buscar'),
      serialize: (item) => {
        const lastmod = articleLastModified.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
    {
      name: 'alias-sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const from = new URL('sitemap-index.xml', dir);
          const to = new URL('sitemap.xml', dir);
          await copyFile(from, to);
          logger.info('Aliased sitemap-index.xml as sitemap.xml');
        },
      },
    },
  ],
});
