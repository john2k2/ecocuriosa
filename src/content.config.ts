import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sourceSchema = z.object({
  title: z.string(),
  url: z.url(),
  publisher: z.string().optional(),
  accessedDate: z.date().optional(),
  evidenceType: z.enum(['primary', 'review', 'dataset', 'institutional', 'secondary']).optional(),
  scope: z.string().optional(),
});

const articlesCollection = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipo Editorial EcoCuriosa'),
    image: z.string(),
    imageAlt: z.string(),
    imageCredit: z.string().optional(),
    imageLicense: z.url().optional(),
    imageCreator: z.string().optional(),
    imageLicensePage: z.url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /**
     * Every source must be an editorially checked, direct URL. A model may
     * suggest candidates but must never populate this field without review.
     */
    sources: z.array(sourceSchema).default([]),
    reviewedDate: z.date().optional(),
    reviewedBy: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
