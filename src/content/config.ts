import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipo Editorial EcoCuriosa'),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles: articlesCollection,
};
