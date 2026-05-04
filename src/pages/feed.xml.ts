import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context: { site: string }) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 20);
  const base = (import.meta.env.BASE_URL || '').replace(/\/$/, '');
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `${base}/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
