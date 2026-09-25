import { games, categories, getFeaturedGames } from '@/data/games';
import type { NavigateFn } from '@/types/navigation';
import GameCard from '@/components/GameCard';
import { ArrowRight, Zap, Cpu, Gauge, MemoryStick, Sparkles } from 'lucide-react';

type HomePageProps = {
  navigate: NavigateFn;
};

export default function HomePage({ navigate }: HomePageProps) {
  const featured = getFeaturedGames();
  const heroGame = games[0]; // Cyberpunk
  const actionGames = games.filter((g) => g.category === 'action').slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="group relative overflow-hidden rounded-lg border border-nv-outline-variant/30 glass-panel">
        <div className="absolute inset-0 z-0">
          <img
            src={heroGame.image}
            alt={heroGame.title}
            className="h-full w-full object-cover opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nv-surface via-nv-surface/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-nv-surface via-nv-surface/50 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[400px] flex-col justify-end p-8 md:p-12">
          <div className="mb-4 flex gap-2">
            <span className="rounded border border-nv-outline-variant/50 bg-nv-surface-container-high px-3 py-1 font-label-sm text-label-sm text-nv-on-surface">
              Featured
            </span>
            <span className="flex items-center gap-1 rounded border border-nv-primary/50 bg-nv-primary/20 px-3 py-1 font-label-sm text-label-sm text-nv-primary">
              <Zap className="h-3 w-3" /> RTX ON
            </span>
          </div>
          <h1 className="mb-4 font-display-lg text-display-lg text-nv-on-surface">{heroGame.title}</h1>
          <p className="mb-8 max-w-2xl font-body-lg text-body-lg text-nv-on-surface-variant">
            {heroGame.longDescription}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate({ name: 'game', gameId: heroGame.id })}
              className="flex items-center gap-2 rounded bg-nv-primary-container px-8 py-3.5 font-label-md text-label-md font-bold text-nv-on-primary-container transition-colors hover:bg-nv-primary"
            >
              <span className="material-symbols-outlined text-base">play_arrow</span>
              Play Now
            </button>
            <button
              onClick={() => navigate({ name: 'game', gameId: heroGame.id })}
              className="rounded border border-nv-outline bg-transparent px-8 py-3.5 font-label-md text-label-md text-nv-on-surface transition-all hover:border-nv-primary hover:text-nv-primary rtx-glow"
            >
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Category Quick Browse */}
      <section>
        <h2 className="mb-6 font-headline-lg text-headline-lg text-nv-on-surface">Browse by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate({ name: 'category', category: cat.id })}
              className="bento-hover flex flex-col items-center gap-3 rounded-lg border border-nv-outline-variant/30 bg-nv-surface-container-low p-6"
            >
              <span className="material-symbols-outlined text-3xl text-nv-primary">{cat.icon}</span>
              <span className="font-headline-md text-headline-md font-bold text-nv-on-surface">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* RTX Featured Games */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <Zap className="h-5 w-5 text-nv-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-nv-primary">RTX Showcase</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-nv-on-surface">Featured RTX Titles</h2>
          </div>
          <button
            onClick={() => navigate({ name: 'category', category: 'action' })}
            className="flex items-center gap-1 font-label-sm text-label-sm text-nv-primary transition-colors hover:text-nv-primary-fixed-dim"
          >
            View All <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Trending in Action */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-headline-lg text-headline-lg text-nv-on-surface">Trending in Action</h2>
          <button
            onClick={() => navigate({ name: 'category', category: 'action' })}
            className="flex items-center gap-1 font-label-sm text-label-sm text-nv-primary transition-colors hover:text-nv-primary-fixed-dim"
          >
            View All <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {actionGames.map((game) => (
            <GameCard key={game.id} game={game} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Tech Showcase Bento */}
      <section>
        <h2 className="mb-6 font-headline-lg text-headline-lg text-nv-on-surface">Powered by RTX</h2>
        <div className="grid h-auto grid-cols-1 gap-gutter md:h-[400px] md:grid-cols-3">
          {/* Large feature */}
          <div className="group relative col-span-1 overflow-hidden rounded-lg border border-nv-outline-variant/20 bg-[#1A1A1A] md:col-span-2">
            <img
              src="https://images.pexels.com/photos/28122495/pexels-photo-28122495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="DLSS 3.5"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h3 className="mb-2 font-display-lg text-display-lg text-nv-on-surface">DLSS 3.5</h3>
              <p className="mb-6 max-w-lg font-body-lg text-body-lg text-nv-on-surface-variant">
                Experience higher framerates and incredible image quality in top titles, powered by AI.
              </p>
              <a className="inline-flex w-fit items-center gap-2 font-label-md text-label-md text-nv-primary hover:underline">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Reflex card */}
          <div className="bento-hover flex flex-col justify-between rounded-lg border border-nv-outline-variant/20 bg-nv-surface-container-low p-6">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-nv-primary/10">
                <Gauge className="h-6 w-6 text-nv-primary" />
              </div>
              <h3 className="mb-2 font-headline-md text-headline-md text-nv-on-surface">NVIDIA Reflex</h3>
              <p className="font-body-md text-body-md text-nv-on-surface-variant">
                The lowest latency and best responsiveness for competitive games.
              </p>
            </div>
            <div className="mt-8">
              <div className="h-1 w-full overflow-hidden rounded-full bg-nv-surface-variant">
                <div className="h-full w-[85%] bg-gradient-to-r from-nv-primary to-nv-primary-fixed" />
              </div>
              <p className="mt-2 text-right font-label-sm text-label-sm text-nv-on-surface-variant">Up to 85% lower latency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Gaming CTA */}
      <section className="glass-panel flex flex-col items-center justify-between gap-8 rounded-lg border border-nv-outline-variant/30 p-8 md:flex-row">
        <div className="max-w-xl">
          <h4 className="mb-2 flex items-center gap-3 font-headline-md text-headline-md font-bold text-nv-on-surface">
            <Cpu className="h-7 w-7 text-nv-primary" />
            GeForce NOW Cloud Gaming
          </h4>
          <p className="font-body-md text-body-md text-nv-on-surface-variant">
            Play your favorite PC titles with powerful GeForce RTX performance on any device. Instant access with zero downloads.
          </p>
        </div>
        <button
          onClick={() => navigate({ name: 'cloud' })}
          className="flex-shrink-0 rounded border border-nv-outline-variant bg-nv-surface px-6 py-3 font-label-md text-label-md uppercase tracking-wider text-nv-on-surface transition-all hover:border-nv-primary hover:text-nv-primary luminescent-border-hover"
        >
          Explore Cloud Gaming
        </button>
      </section>
    </div>
  );
}
