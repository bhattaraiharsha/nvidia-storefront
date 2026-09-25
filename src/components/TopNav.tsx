import { useState } from 'react';
import type { NavigateFn } from '@/types/navigation';
import { Search, Bell, Settings, Menu, X } from 'lucide-react';

type TopNavProps = {
  navigate: NavigateFn;
};

const navLinks = [
  { label: 'Home', target: 'home' as const },
  { label: 'Games', target: 'category' as const, category: 'action' },
  { label: 'Apps', target: 'home' as const },
  { label: 'Hardware', target: 'home' as const },
];

export default function TopNav({ navigate }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-nv-outline-variant bg-nv-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[container-max] items-center justify-between px-4 md:px-margin-desktop">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate({ name: 'home' })}
            className="flex items-center gap-2 font-headline-md text-headline-md font-bold tracking-tight text-nv-primary"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              toys
            </span>
            <span className="hidden sm:inline">GeForce Experience</span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => {
                  if (link.target === 'category') {
                    navigate({ name: 'category', category: link.category! });
                  } else {
                    navigate({ name: link.target });
                  }
                }}
                className={`font-label-md text-label-md transition-all duration-200 hover:text-nv-primary-fixed-dim ${
                  i === 1
                    ? 'border-b-2 border-nv-primary pb-2 font-bold text-nv-primary'
                    : 'text-nv-on-surface-variant hover:text-nv-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Search, Icons, Avatar */}
        <div className="flex items-center gap-4">
          <div className="relative hidden w-64 lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-nv-on-surface-variant" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full rounded-none border-b border-nv-outline-variant bg-[#0B0B0B] py-1.5 pl-10 pr-4 font-body-md text-nv-on-surface transition-colors placeholder:text-nv-on-surface-variant/50 focus:border-nv-primary focus:outline-none"
            />
          </div>

          <button className="transition-all duration-200 hover:text-nv-primary-fixed-dim active:scale-90 text-nv-on-surface-variant">
            <Bell className="h-5 w-5" />
          </button>
          <button className="transition-all duration-200 hover:text-nv-primary-fixed-dim active:scale-90 text-nv-on-surface-variant">
            <Settings className="h-5 w-5" />
          </button>

          <div className="h-8 w-8 overflow-hidden rounded-full border border-nv-outline-variant bg-nv-surface-variant">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-nv-primary-container to-nv-primary text-xs font-bold text-nv-on-primary">
              N
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-nv-outline-variant bg-nv-surface-container-low px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => {
                  if (link.target === 'category') {
                    navigate({ name: 'category', category: link.category! });
                  } else {
                    navigate({ name: link.target });
                  }
                  setMobileOpen(false);
                }}
                className="rounded-lg px-4 py-3 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { navigate({ name: 'cloud' }); setMobileOpen(false); }}
              className="rounded-lg px-4 py-3 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface"
            >
              Cloud Gaming
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
