/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-terminal': '#0A0A0A',
        'accent-lime': '#A3E635',
        'accent-lime-dim': '#84CC16',
        'border-default': '#111111',
        'border-dim': '#999999',
      },
      fontFamily: {
        display: ['"JetBrains Mono"', '"Fira Code"', '"SF Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { 'reading': '720px' },
      keyframes: {
        'cursor-blink': { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.2s step-end infinite',
      },
    },
  },
  plugins: [],
};