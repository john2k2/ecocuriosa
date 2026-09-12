import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteURL = 'https://ecocuriosa.com';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const articles = (await getCollection('articles'))
    .sort((a, b) => (b.data.updatedDate ?? b.data.pubDate).valueOf() - (a.data.updatedDate ?? a.data.pubDate).valueOf());

  const items = articles.map((article) => {
    const url = `${siteURL}/${article.data.category}/${article.id}/`;
    const date = article.data.updatedDate ?? article.data.pubDate;
    return [
      '<item>',
      `<title>${escapeXml(article.data.title)}</title>`,
      `<link>${url}</link>`,
      `<guid isPermaLink="true">${url}</guid>`,
      `<description>${escapeXml(article.data.description)}</description>`,
      `<pubDate>${date.toUTCString()}</pubDate>`,
      `<category>${escapeXml(article.data.category)}</category>`,
      '</item>',
    ].join('');
  }).join('');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    '<title>EcoCuriosa — Cuaderno de Ciencias Naturales</title>',
    `<link>${siteURL}/</link>`,
    '<description>Nuevas monografías de biodiversidad, océanos, geología y fenómenos naturales.</description>',
    '<language>es</language>',
    '<generator>EcoCuriosa</generator>',
    `<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml" />`,
    items,
    '</channel>',
    '</rss>',
  ].join('');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=86400',
    },
  });
};
