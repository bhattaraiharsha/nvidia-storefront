import { useState } from 'react';
import { games, categories, getGamesByCategory, type GameCategory } from '@/data/games';
import type { NavigateFn } from '@/types/navigation';
import GameCard from '@/components/GameCard';

type CategoryPageProps = {
  category: string;
  navigate: NavigateFn;
};

export default function CategoryPage({ category, navigate }: CategoryPageProps) {
  const cat = categories.find((c) => c.id === category) ?? categories[0];
  const [filter, setFilter] = useState<'all' | 'rtx' | 'free' | 'dlss'>('all');

  let categoryGames = getGamesByCategory(cat.id as GameCategory);

  // If not enough games in category, show all games as fallback for browsing
  if (categoryGames.length < 3) {
    categoryGames = games;
  }

  const filteredGames = categoryGames.filter((g) => {
    if (filter === 'rtx') return g.rtx;
    if (filter === 'free') return g.freeToPlay;
    if (filter === 'dlss') return g.dlss;
    return true;
  });

  const heroGame = categoryGames.find((g) => g.rtx) ?? categoryGames[0];

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <header className="mb-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-nv-primary">
            <span className="material-symbols-outlined">{cat.icon}</span>
            <span className="font-label-md text-label-md uppercase tracking-widest">Category</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-nv-on-surface">{cat.label} Games</h1>
          <p className="mt-4 max-w-2xl font-body-lg text-body-lg text-nv-on-surface-variant">{cat.description}</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel flex items-center gap-2 rounded-full border border-nv-outline-variant/50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-nv-primary" />
            <span className="font-label-sm text-label-sm uppercase text-nv-on-surface">{filteredGames.length} Titles</span>
          </div>
        </div>
      </header>

      {/* Hero Feature */}
      {heroGame && (
        <section className="bento-hover group relative overflow-hidden rounded-lg border border-nv-outline-variant/30">
          <div className="absolute inset-0 z-0">
            <img
              src={heroGame.image}
              alt={heroGame.title}
              className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nv-background via-nv-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-nv-background via-nv-background/50 to-transparent" />
          </div>
          <div className="relative z-10 flex min-h-[500px] w-full flex-col justify-end p-8 md:w-2/3 md:p-12">
            <div className="mb-6 flex flex-wrap gap-2">
              {heroGame.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-nv-outline-variant/50 bg-nv-surface-container-highest px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-nv-on-surface"
                >
                  {tag}
                </span>
              ))}
              {heroGame.rtx && (
                <span className="flex items-center gap-1 rounded-sm border border-nv-primary/50 bg-nv-primary/20 px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-nv-primary">
                  <span className="material-symbols-outlined text-[14px]">memory</span> RTX ON
                </span>
              )}
              {heroGame.pathTracing && (
                <span className="rounded-sm border border-nv-outline-variant/50 bg-nv-surface-variant px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-nv-on-surface">
                  Path Tracing
                </span>
              )}
            </div>
            <h2 className="mb-4 font-headline-lg text-headline-lg font-bold text-nv-on-surface md:text-[56px] md:leading-[1.1]">
              {heroGame.title}
            </h2>
            <p className="mb-8 max-w-xl font-body-lg text-body-lg text-nv-on-surface-variant">{heroGame.longDescription}</p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate({ name: 'game', gameId: heroGame.id })}
                className="flex items-center gap-2 rounded bg-nv-primary px-8 py-4 font-label-md text-label-md font-bold uppercase tracking-wider text-nv-on-primary transition-all hover:bg-nv-primary-fixed hover:shadow-[0_0_15px_rgba(118,185,0,0.5)]"
              >
                Play Now <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                onClick={() => navigate({ name: 'game', gameId: heroGame.id })}
                className="glass-panel rounded border border-nv-outline-variant px-6 py-4 font-label-md text-label-md uppercase tracking-wider text-nv-on-surface transition-all hover:border-nv-primary hover:text-nv-primary"
              >
                View Specs
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Filter Chips */}
      <div className="custom-scroll flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all' as const, label: `All ${cat.label} Titles` },
          { id: 'rtx' as const, label: 'RTX ON', dot: true },
          { id: 'dlss' as const, label: 'DLSS 3' },
          { id: 'free' as const, label: 'Free-to-Play' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex flex-shrink-0 items-center gap-1.5 rounded px-4 py-2 font-label-md text-label-md font-bold whitespace-nowrap transition-colors ${
              filter === f.id
                ? 'bg-nv-primary text-nv-on-primary'
                : 'border border-nv-outline-variant bg-nv-surface-container text-nv-on-surface-variant hover:bg-nv-surface-variant hover:text-nv-on-surface'
            }`}
          >
            {f.dot && <span className="h-2 w-2 rounded-full bg-nv-primary" />}
            {f.label}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} navigate={navigate} />
        ))}
      </div>

      {/* Tech Banner */}
      <section className="glass-panel mt-gutter mb-12 flex flex-col items-center justify-between gap-8 rounded-lg border border-nv-outline-variant/30 p-8 md:flex-row">
        <div className="max-w-xl">
          <h4 className="mb-2 flex items-center gap-3 font-headline-md text-headline-md font-bold text-nv-on-surface">
            <span className="material-symbols-outlined text-[32px] text-nv-primary">memory</span>
            Power On Demand
          </h4>
          <p className="font-body-md text-body-md text-nv-on-surface-variant">
            Experience {cat.label} games the way they were meant to be played. Maximize framerates and image quality with AI-powered DLSS and real-time Ray Tracing exclusively on GeForce RTX GPUs.
          </p>
        </div>
        <button className="flex-shrink-0 rounded border border-nv-outline-variant bg-nv-surface px-6 py-3 font-label-md text-label-md uppercase tracking-wider text-nv-on-surface transition-all hover:border-nv-primary hover:text-nv-primary luminescent-border-hover">
          Explore RTX Hardware
        </button>
      </section>
    </div>
  );
}
