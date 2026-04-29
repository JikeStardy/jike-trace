import { defineCollection, z } from 'astro:content';
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});
export const collections = { posts: postsCollection };
