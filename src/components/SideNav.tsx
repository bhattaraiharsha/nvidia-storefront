import { categories } from '@/data/games';
import type { NavigateFn, Page } from '@/types/navigation';
import { Cpu, Download, HelpCircle, Bolt } from 'lucide-react';

type SideNavProps = {
  navigate: NavigateFn;
  currentPage: Page;
};

export default function SideNav({ navigate, currentPage }: SideNavProps) {
  const activeCategory = currentPage.name === 'category' ? currentPage.category : '';

  return (
    <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-64px)] w-64 flex-col border-r border-nv-outline-variant/30 bg-nv-surface-container-low py-6 lg:flex">
      {/* Storefront Header */}
      <div className="mb-6 flex items-center gap-4 px-6">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-nv-surface-variant border border-nv-outline-variant/50">
          <Cpu className="h-5 w-5 text-nv-primary" />
        </div>
        <div>
          <h2 className="font-headline-md text-headline-md font-bold text-nv-primary">Storefront</h2>
          <p className="font-label-sm text-label-sm mt-0.5 text-nv-on-surface-variant opacity-70">Browse Library</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => navigate({ name: 'category', category: cat.id })}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 font-label-md text-label-md transition-all duration-200 ${
                isActive
                  ? 'border-r-4 border-nv-primary bg-nv-secondary-container text-nv-primary'
                  : 'border-r-4 border-transparent text-nv-on-surface-variant hover:bg-nv-surface-variant hover:text-nv-on-surface'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}>
                {cat.icon}
              </span>
              <span className={isActive ? 'font-bold' : ''}>{cat.label}</span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="my-3 border-t border-nv-outline-variant/30 pt-3">
          <button
            onClick={() => navigate({ name: 'cloud' })}
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 font-label-md text-label-md transition-all duration-200 ${
              currentPage.name === 'cloud'
                ? 'border-r-4 border-nv-primary bg-nv-secondary-container text-nv-primary'
                : 'border-r-4 border-transparent text-nv-on-surface-variant hover:bg-nv-surface-variant hover:text-nv-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">cloud</span>
            <span className={currentPage.name === 'cloud' ? 'font-bold' : ''}>Cloud Gaming</span>
            <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-nv-primary" />
          </button>
        </div>
      </nav>

      {/* CTA */}
      <div className="mt-auto px-6 pb-4">
        <button className="flex w-full items-center justify-center gap-2 rounded border border-nv-primary px-3 py-3 font-label-md text-label-md font-bold uppercase tracking-wider text-nv-primary transition-all hover:bg-nv-primary/10 luminescent-border-hover">
          <Bolt className="h-4 w-4" />
          Upgrade to Pro
        </button>
      </div>

      {/* Footer links */}
      <div className="space-y-1 border-t border-nv-outline-variant/30 px-4 pt-3">
        <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2 font-label-sm text-label-sm text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface">
          <Download className="h-4 w-4" />
          Downloads
        </a>
        <a href="#" className="flex items-center gap-3 rounded-lg px-4 py-2 font-label-sm text-label-sm text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface">
          <HelpCircle  className="h-4 w-4" />
          Support
        </a>
      </div>
    </aside>
  );
}
