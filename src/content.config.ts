import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artwork = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artwork' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.enum(['Digital', 'Traditional', 'Photography', 'Mixed Media']),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    featuredImage: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { artwork, blog };
