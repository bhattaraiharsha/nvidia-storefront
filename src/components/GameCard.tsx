import type { Game } from '@/data/games';
import type { NavigateFn } from '@/types/navigation';
import { ShoppingCart, Star, Zap, Cpu, Gauge, Sparkles } from 'lucide-react';

type GameCardProps = {
  game: Game;
  navigate: NavigateFn;
};

export default function GameCard({ game, navigate }: GameCardProps) {
  return (
    <article
      onClick={() => navigate({ name: 'game', gameId: game.id })}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-transparent bg-[#1A1A1A] game-card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-nv-surface-container">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {game.rtx && (
            <span className="flex items-center gap-1 rounded border border-nv-primary/30 bg-black/80 px-2 py-1 font-label-sm text-label-sm font-bold text-nv-primary backdrop-blur-sm">
              <Zap className="h-3 w-3" /> RTX
            </span>
          )}
          {game.dlss && (
            <span className="rounded border border-nv-primary/30 bg-black/80 px-2 py-1 font-label-sm text-label-sm font-bold text-nv-primary backdrop-blur-sm">
              DLSS 3
            </span>
          )}
          {game.pathTracing && (
            <span className="rounded border border-white/10 bg-black/80 px-2 py-1 font-label-sm text-label-sm text-nv-on-surface backdrop-blur-sm">
              Path Tracing
            </span>
          )}
          {game.reflex && (
            <span className="rounded border border-white/10 bg-black/80 px-2 py-1 font-label-sm text-label-sm text-nv-on-surface backdrop-blur-sm">
              Reflex
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-label-sm text-label-sm text-nv-on-secondary-container">{game.developer}</p>
        <h3 className="mt-1 font-headline-md text-headline-md font-bold leading-tight text-nv-on-surface line-clamp-1">
          {game.title}
        </h3>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {game.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-nv-surface-container-high px-2 py-1 font-label-sm text-label-sm text-nv-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-nv-primary text-nv-primary" />
          <span className="font-label-sm text-label-sm font-bold text-nv-on-surface">{game.rating}</span>
          <span className="font-label-sm text-label-sm text-nv-on-surface-variant">({game.reviewCount})</span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-nv-outline-variant/20 pt-4">
          {game.freeToPlay ? (
            <span className="font-headline-md text-headline-md font-bold text-nv-primary">Free to Play</span>
          ) : (
            <span className="font-headline-md text-headline-md font-bold text-nv-on-surface">${game.price}</span>
          )}
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 rounded bg-nv-primary-container px-4 py-2 font-label-md text-label-md font-bold text-nv-on-primary-container transition-colors hover:bg-nv-primary"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {game.freeToPlay ? 'Play Free' : 'Get Game'}
          </button>
        </div>
      </div>
    </article>
  );
}

export function TechBadge({ icon: Icon, label }: { icon: typeof Cpu; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded border border-nv-outline-variant/60 bg-nv-surface-container px-3 py-2">
      <Icon className="h-4 w-4 text-nv-primary" />
      <span className="font-label-md text-label-md font-semibold text-nv-on-surface">{label}</span>
    </div>
  );
}

export function FeatureIcon({ icon: Icon, label }: { icon: typeof Cpu; label: string }) {
  return (
    <li className="flex items-center gap-2 font-body-md text-body-md text-nv-on-surface">
      <Icon className="h-5 w-5 text-nv-primary" />
      {label}
    </li>
  );
}

export { Cpu, Gauge, Sparkles, Zap };
