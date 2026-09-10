import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
