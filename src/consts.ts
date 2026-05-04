const BASE = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

export const SITE = {
  name: 'Jike Trace',
  title: 'Jike Trace - Trace Logs From A Developer',
  description: 'A terminal-style blog about programming, technology, and developer life.',
  url: 'https://jikestardy.github.io',
  lang: 'zh-CN',
  author: 'JikeStardy',
  github: 'https://github.com/JikeStardy',
  rss: `${BASE}/feed.xml`,
} as const;

export const NAV_LINKS = [
  { href: `${BASE}/posts/`, label: 'POSTS' },
  { href: `${BASE}/archive/`, label: 'ARCHIVE' },
  { href: `${BASE}/tags/`, label: 'TAGS' },
  { href: `${BASE}/about/`, label: 'ABOUT' },
] as const;

export const POSTS_PER_PAGE = 10;
