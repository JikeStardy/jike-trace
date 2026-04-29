import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  site: 'https://jikestardy.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
  vite: {
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    ssr: { noExternal: ['lucide-react', 'framer-motion'] },
  },
});