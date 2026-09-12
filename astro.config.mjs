import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteURL = 'https://ecocuriosa.com';
const articlesDirectory = new URL('./src/content/articles/', import.meta.url);
const articleLastModified = new Map();
const articleImages = new Map();

const parseFrontmatterValue = (frontmatter, key) =>
  frontmatter.match(new RegExp(`^${key}:\\s*["'](.+)["']\\s*$`, 'm'))?.[1];

for (const filename of await readdir(articlesDirectory)) {
  if (!filename.endsWith('.md')) continue;

  const article = await readFile(new URL(filename, articlesDirectory), 'utf8');
  const frontmatter = article.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const category = frontmatter.match(/^category:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
  const title = parseFrontmatterValue(frontmatter, 'title');
  const image = parseFrontmatterValue(frontmatter, 'image');
  const imageAlt = parseFrontmatterValue(frontmatter, 'imageAlt');
  const imageLicense = parseFrontmatterValue(frontmatter, 'imageLicense');
  const pubDate = frontmatter.match(/^pubDate:\s*([^\n]+)\s*$/m)?.[1]?.trim();
  const updatedDate = frontmatter.match(/^updatedDate:\s*([^\n]+)\s*$/m)?.[1]?.trim();
  const reviewedDate = frontmatter.match(/^reviewedDate:\s*([^\n]+)\s*$/m)?.[1]?.trim();

  // `lastmod` must reflect a real meaningful change. Use the latest substantive
  // update or verified review; otherwise the original publication date is the
  // only defensible timestamp.
  const candidateDates = [pubDate, updatedDate, reviewedDate]
    .filter(Boolean)
    .map((value) => new Date(value));
  const lastModifiedDate = candidateDates
    .filter((date) => !Number.isNaN(date.valueOf()))
    .sort((a, b) => a.valueOf() - b.valueOf())
    .at(-1);
  if (!category || !lastModifiedDate) continue;

  const slug = path.basename(filename, '.md');
  const articleURL = `${siteURL}/${category}/${slug}/`;
  articleLastModified.set(articleURL, lastModifiedDate);
  if (title && image && imageAlt) {
    articleImages.set(articleURL, {
      title,
      image: image.replace(/\.svg$/i, '.webp'),
      imageAlt,
      imageLicense,
    });
  }
}

const escapeXML = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll("'", '&apos;');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default defineConfig({
  site: 'https://ecocuriosa.com',
  // Las rutas HTML públicas usan una única forma canónica y evitan redirecciones.
  trailingSlash: 'always',
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
      name: 'image-sitemap-entries',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const sitemapFiles = (await readdir(dir)).filter((filename) => /^sitemap-\d+\.xml$/.test(filename));
          let injected = 0;

          for (const filename of sitemapFiles) {
            const sitemapURL = new URL(filename, dir);
            let xml = await readFile(sitemapURL, 'utf8');
            if (!xml.includes('xmlns:image=')) {
              xml = xml.replace('<urlset ', '<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ');
            }

            for (const [articleURL, metadata] of articleImages) {
              const blockPattern = new RegExp(`<url><loc>${escapeRegExp(articleURL)}</loc>([\\s\\S]*?)</url>`);
              const match = xml.match(blockPattern);
              if (!match || match[0].includes('<image:image>')) continue;

              const imageURL = new URL(metadata.image, siteURL).href;
              const imageEntry = [
                '<image:image>',
                `<image:loc>${escapeXML(imageURL)}</image:loc>`,
                `<image:title>${escapeXML(metadata.title)}</image:title>`,
                `<image:caption>${escapeXML(metadata.imageAlt)}</image:caption>`,
                metadata.imageLicense ? `<image:license>${escapeXML(metadata.imageLicense)}</image:license>` : '',
                '</image:image>',
              ].filter(Boolean).join('');
              xml = xml.replace(match[0], `<url><loc>${articleURL}</loc>${match[1]}${imageEntry}</url>`);
              injected += 1;
            }

            await writeFile(sitemapURL, xml);
          }

          logger.info(`Added image sitemap entries for ${injected} article pages`);
        },
      },
    },
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
