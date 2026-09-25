import { useParams, Link } from 'react-router-dom';
import { games } from '@/data/games';
import { Play, Sparkles, ArrowLeft } from 'lucide-react';

export default function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return (
      <div className="space-y-4 p-6 text-nv-on-surface">
        <h2 className="text-xl font-bold">Game Not Found</h2>
        <Link to="/" className="inline-flex items-center gap-2 text-nv-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Storefront
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link to="/" className="inline-flex items-center gap-2 font-label-md text-label-md text-nv-on-surface-variant hover:text-nv-primary">
        <ArrowLeft className="h-4 w-4" /> Back to Storefront
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="overflow-hidden rounded-lg border border-nv-outline-variant bg-nv-surface-container lg:col-span-7">
          <img src={game.image} alt={game.title} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            {game.supportsRtx && (
              <span className="inline-flex items-center gap-1 rounded bg-nv-primary-container px-2.5 py-1 font-label-sm text-label-sm font-bold text-nv-primary">
                <Sparkles className="h-3.5 w-3.5" /> RTX RAY TRACING ENABLED
              </span>
            )}
            <h1 className="font-display-lg text-display-lg font-bold text-nv-on-surface">{game.title}</h1>
            <p className="font-body-lg text-body-lg text-nv-on-surface-variant">{game.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded bg-nv-primary px-6 py-3 font-label-md text-label-md font-bold text-nv-on-primary hover:brightness-110 active:scale-95">
              <Play className="h-4 w-4 fill-current" /> Play Now
            </button>
            <span className="font-headline-md text-headline-md font-bold text-nv-primary">
              {game.price === 0 ? 'Free' : `$${game.price}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}