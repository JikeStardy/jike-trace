export const SITE = {
  name: 'Jike Trace',
  title: 'Jike Trace - Trace Logs From A Developer',
  description: 'A terminal-style blog about programming, technology, and developer life.',
  url: 'https://jikestardy.github.io',
  lang: 'zh-CN',
  author: 'JikeStardy',
  github: 'https://github.com/JikeStardy',
  rss: '/feed.xml',
} as const;

export const NAV_LINKS = [
  { href: '/posts/', label: 'POSTS' },
  { href: '/archive/', label: 'ARCHIVE' },
  { href: '/tags/', label: 'TAGS' },
  { href: '/about/', label: 'ABOUT' },
] as const;

export const POSTS_PER_PAGE = 10;
