---
title: "Understanding React Server Components"
date: 2024-04-12
description: "A practical guide to React Server Components — what they are, how they work, and when to use them in your Next.js applications."
tags: ["react", "nextjs", "performance"]
categories: ["前端"]
draft: false
---

# Understanding React Server Components

React Server Components (RSC) represent a paradigm shift in how we build React applications.

## The Problem

Traditional React apps ship all component JavaScript to the client. With RSC, data fetching happens on the server:

```jsx
// This runs ONLY on the server
import { db } from './db';

async function BlogPost({ id }) {
  const post = await db.posts.findById(id);
  return <article>{post.content}</article>;
}
```

## Key Benefits

- **Zero bundle size** — Server components do not ship JS to client
- **Direct backend access** — Query databases directly
- **Automatic code splitting** — Client components are automatically split

## When to Use What?

| Use Server Components | Use Client Components |
|----------------------|----------------------|
| Data fetching | Interactive UI |
| Backend access | Browser APIs |
| Sensitive logic | State management |

## Conclusion

RSCs are a powerful tool for building performant React applications. The key is understanding the boundary between server and client code.
