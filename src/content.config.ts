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
     * Date of a substantive text/source update. This is distinct from
     * reviewedDate: an update may be published while human review metadata
     * remains pending.
     */
    updatedDate: z.date().optional(),
    /**
     * Sources are direct, structured URLs shown to readers. A model may
     * suggest candidates, but only a person can verify their correspondence
     * with the article and record reviewedDate/reviewedBy.
     */
    sources: z.array(sourceSchema).default([]),
    reviewedDate: z.date().optional(),
    reviewedBy: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
