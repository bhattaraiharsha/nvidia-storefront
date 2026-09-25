import { Link } from 'react-router-dom';
import type { Game } from '@/data/games';
import { Play, Sparkles } from 'lucide-react';

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-nv-outline-variant bg-nv-surface-container transition-all duration-300 hover:border-nv-primary/50 hover:shadow-lg hover:shadow-nv-primary/5">
      <div className="relative aspect-video w-full overflow-hidden bg-nv-surface-variant">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {game.supportsRtx && (
          <span className="absolute left-2 top-2 flex items-center gap-1 rounded bg-black/80 px-2 py-0.5 font-label-sm text-label-sm font-bold text-nv-primary backdrop-blur-md">
            <Sparkles className="h-3 w-3" /> RTX ON
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="truncate font-headline-md text-headline-md font-bold text-nv-on-surface">
          {game.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-nv-on-surface-variant">
          {game.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-label-md text-label-md font-bold text-nv-primary">
            {game.price === 0 ? 'Free to Play' : `$${game.price}`}
          </span>
          <Link
            to={`/game/${game.id}`}
            className="flex items-center gap-1.5 rounded bg-nv-primary-container px-3 py-1.5 font-label-sm text-label-sm font-bold text-nv-on-primary transition-all hover:bg-nv-primary active:scale-95"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}