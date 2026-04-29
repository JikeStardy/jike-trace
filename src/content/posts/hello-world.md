---
title: "Hello World - Welcome to Jike Trace"
date: 2024-03-15
description: "The first post on Jike Trace blog. Introducing the terminal-style static blog built with Astro, React, and Tailwind CSS."
tags: ["astro", "blog", "setup"]
categories: ["技术"]
draft: false
---

# Hello World

Welcome to **Jike Trace** — a terminal-style static blog system designed for developers who appreciate the aesthetics of early computing interfaces.

## Why Terminal Style?

The terminal aesthetic represents something pure and functional. Every pixel serves a purpose. Every character matters. This design philosophy resonates deeply with engineering culture.

```bash
# Initialize the blog
npm create astro@latest jike-trace
cd jike-trace
npm install
npm run dev
```

## Features

- **Zero-friction writing** — Write in Markdown, push to Git, done
- **Terminal aesthetics** — Monospace fonts, sharp corners, pixel decorations
- **Light/Dark themes** — Toggle between modes, preference persisted
- **Performance first** — Static output, minimal JavaScript

## Code Example

Here is a simple React component:

```tsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

## What is Next?

Stay tuned for more posts about web development, programming patterns, and engineering culture.

---

*Happy coding!*
