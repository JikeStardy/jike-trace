---
title: "Using Astro Content Collections for Blog Posts"
date: 2024-03-20
description: "A deep dive into Astro Content Collections — how to structure, validate, and query your Markdown content with TypeScript safety."
tags: ["astro", "typescript", "content"]
categories: ["前端"]
draft: false
---

# Using Astro Content Collections

Astro Content Collections provide a type-safe way to organize and query your Markdown content. Let us explore how to set them up for a blog.

## Defining the Collection

First, create a config file at `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
```

## Benefits

1. **Type safety** — Catch missing or invalid frontmatter at build time
2. **Validation** — Zod schemas ensure data consistency
3. **Query API** — Filter, sort, and paginate with ease

This is why Astro is the perfect choice for content-heavy static sites.
