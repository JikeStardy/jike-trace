# Jike Trace

A terminal-style static blog built with Astro, React, and Tailwind CSS.

**Live Demo**: https://jikestardy.github.io

## Features

- **Terminal Aesthetic** - Monospace fonts, sharp corners, pixel decorations, ASCII dividers
- **Dark/Light Mode** - Toggle themes with persistence (localStorage)
- **SPA Navigation** - Client-side routing for static hosting (GitHub Pages compatible)
- **Content Collections** - Type-safe Markdown with Zod validation
- **Code Highlighting** - Shiki-powered syntax highlighting
- **RSS Feed** - Auto-generated `/feed.xml`
- **SEO Ready** - Sitemap, meta tags, Open Graph

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro v4 |
| Styling | Tailwind CSS v3 |
| UI | React 18 |
| Fonts | JetBrains Mono + Inter |
| Hosting | GitHub Pages |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `jike-trace` (or any name)
3. Set visibility: **Public** (required for GitHub Pages)
4. Click **Create repository**

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jike-trace.git

# Push to main branch
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. The workflow file `.github/workflows/deploy.yml` is already included in this project
6. GitHub will automatically build and deploy your site on every push to `main`

### Step 4: Update Site URL

After the first deployment completes:

1. Edit `astro.config.mjs`:
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   ```
   If using a custom repository name (not `jike-trace`), also add:
   ```js
   base: '/your-repo-name',
   ```

2. Commit and push:
   ```bash
   git add astro.config.mjs
   git commit -m "Update site URL"
   git push
   ```

3. Wait for the workflow to complete (check **Actions** tab)

4. Your site will be live at `https://YOUR_USERNAME.github.io/jike-trace/`

### Workflow Status

Check deployment status in the **Actions** tab of your repository.

## Writing Posts

Add Markdown files to `src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2024-01-15
description: "A brief description of your post"
tags: ["astro", "react"]
draft: false
---

# Your content here

Write in standard Markdown.
```

| Frontmatter | Required | Description |
|-------------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date |
| `description` | Yes | Short summary |
| `tags` | No | Array of tags |
| `draft` | No | Set `true` to hide |

Posts are automatically sorted by date (newest first).

## Project Structure

```
jike-trace/
├── src/
│   ├── components/      # Reusable components
│   │   ├── layout/      # Header, Footer, ThemeProvider
│   │   ├── post/        # PostCard, PostMeta, PostNav
│   │   └── ui/          # Tag, Button, Card
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── posts/       # Blog post list & detail
│   │   ├── tags/        # Tag index & filter
│   │   ├── index.astro  # Homepage
│   │   ├── archive.astro
│   │   ├── about.astro
│   │   ├── 404.astro
│   │   └── feed.xml.ts  # RSS feed
│   ├── content/
│   │   ├── config.ts    # Content collection schema
│   │   └── posts/       # Markdown blog posts
│   ├── utils/           # Helper functions
│   ├── consts.ts        # Site configuration
│   └── assets/styles/
│       └── global.css   # Global styles + terminal theme
├── public/
│   ├── favicon.svg
│   └── router.js        # SPA client-side router
├── .github/workflows/
│   └── deploy.yml       # GitHub Actions CI/CD
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

### Site Config

Edit `src/consts.ts`:

```ts
export const SITE = {
  name: 'Your Blog Name',
  title: 'Your Blog Title',
  description: 'Your blog description',
  url: 'https://yourusername.github.io',
  author: 'Your Name',
  github: 'https://github.com/yourusername',
};
```

### Colors

Edit CSS variables in `src/assets/styles/global.css`:

```css
:root {
  --bg-primary: #EBEBEB;    /* Light background */
  --bg-surface: #F5F5F5;    /* Card background */
  --accent-lime: #A3E635;   /* Highlight color */
  --text-primary: #111111;  /* Main text */
  --text-secondary: #666666;/* Muted text */
}
```

## License

MIT
