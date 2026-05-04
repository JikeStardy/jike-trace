import { useState } from 'react';
import { Menu, Rss } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { SITE, NAV_LINKS } from '../../consts';

const BASE = (import.meta.env.BASE_URL || '').replace(/\/$/, '');

interface TagBarProps {
  tags: { tag: string; count: number }[];
}

function TopTagBar({ tags }: TagBarProps) {
  if (tags.length === 0) return null;
  return (
    <div className="border-b py-1.5" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-surface)' }}>
      <div
        className="max-w-6xl mx-auto px-4 md:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider shrink-0 mr-1" style={{ color: '#A3E635' }}>
          $ tags
        </span>
        {tags.map(({ tag, count }) => (
          <a
            key={tag}
            href={`${BASE}/tags/${tag}/`}
            className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 border transition-all duration-200 hover:bg-[#A3E635] hover:text-[#0A0A0A] hover:border-[#A3E635] shrink-0"
            style={{ borderColor: 'var(--border-dim)', color: 'var(--text-secondary)', background: 'transparent' }}
          >
            [{tag}] {count > 1 ? `x${count}` : ''}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Header({ tags }: { tags?: { tag: string; count: number }[] }) {
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="border-b" style={{ borderColor: 'var(--border-default)' }}>
          <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
            <a href={`${BASE}/`} className="font-display font-bold text-lg tracking-tight transition-colors hover:text-[#A3E635]" style={{ color: 'var(--text-primary)' }}>
              {SITE.name}
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="terminal-btn">{link.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                data-theme-toggle="true"
                className="p-2 border transition-all duration-200 hover:bg-[#A3E635] hover:text-[#0A0A0A]"
                style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                )}
              </button>
              <a href={`${BASE}/feed.xml`} target="_blank" className="hidden md:flex p-2 border transition-all duration-200 hover:bg-[#A3E635] hover:text-[#0A0A0A]" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }} aria-label="RSS Feed">
                <Rss size={16} />
              </a>
              <button onClick={() => setMobileOpen(true)} className="md:hidden p-2 border transition-all duration-200 hover:bg-[#A3E635] hover:text-[#0A0A0A]" style={{ borderColor: 'var(--border-default)', color: 'var(--text-primary)' }} aria-label="Open menu">
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
        {tags && tags.length > 0 && <TopTagBar tags={tags} />}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="flex items-center justify-between px-4 h-14 border-b" style={{ borderColor: '#999' }}>
            <span className="font-display font-bold text-lg" style={{ color: '#EBEBEB' }}>{SITE.name}</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 border hover:bg-[#A3E635] hover:text-[#0A0A0A]" style={{ borderColor: '#999', color: '#EBEBEB' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-4">
            {NAV_LINKS.map((link, i) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="font-display text-2xl font-bold py-2 border-b hover:text-[#A3E635]" style={{ borderColor: '#999', color: '#EBEBEB' }}>
                <span className="mr-3" style={{ color: '#A3E635' }}>{String(i + 1).padStart(2, '0')}</span>{link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Hide scrollbar for tag bar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; }
      `}</style>
    </>
  );
}
