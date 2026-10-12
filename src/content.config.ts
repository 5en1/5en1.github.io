import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Club 5 en 1'),
    tags: z.array(z.enum(['competitions', 'trainings', 'club', 'news'])).default(['news']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    locale: z.enum(['es', 'en']).optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    type: z.enum(['competition', 'camp', 'other']).default('other'),
    registrationLink: z.string().url().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    locale: z.enum(['es', 'en']).optional(),
  }),
});

export const collections = { blog, events };
