import { getGameById, games } from '@/data/games';
import type { NavigateFn } from '@/types/navigation';
import GameCard from '@/components/GameCard';
import { Star, Zap, ShoppingCart, Bookmark, ArrowLeft, Cpu, Gauge, MemoryStick, Monitor, CheckCircle2 } from 'lucide-react';

type GameDetailPageProps = {
  gameId: string;
  navigate: NavigateFn;
};

export default function GameDetailPage({ gameId, navigate }: GameDetailPageProps) {
  const game = getGameById(gameId);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <p className="font-headline-lg text-headline-lg text-nv-on-surface">Game not found</p>
        <button
          onClick={() => navigate({ name: 'home' })}
          className="mt-4 rounded bg-nv-primary-container px-6 py-3 font-label-md text-label-md font-bold text-nv-on-primary-container"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const relatedGames = games.filter((g) => g.category === game.category && g.id !== game.id).slice(0, 3);

  const reviews = [
    { user: 'GamerX99', text: 'Absolutely gorgeous implementation of path tracing. It makes a classic feel brand new again. Performance is demanding but worth it for the visuals.', recommended: true },
    { user: 'TechEnthusiast', text: 'A perfect tech demo for modern GPUs. The way light interacts with the glass and metal surfaces is incredibly realistic.', recommended: true },
  ];

  return (
    <div className="space-y-8">
      {/* Back button */}
      <button
        onClick={() => navigate({ name: 'category', category: game.category })}
        className="flex items-center gap-2 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:text-nv-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
      </button>

      {/* Hero Section */}
      <section className="relative flex h-[716px] items-end overflow-hidden rounded-lg border-b border-nv-outline-variant pb-12 md:h-[640px]">
        <div className="absolute inset-0 z-0">
          <img src={game.image} alt={game.title} className="h-full w-full object-cover opacity-60 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-nv-background via-nv-background/80 to-transparent" />
        </div>

        <div className="relative z-20 w-full">
          <div className="mx-auto max-w-[container-max] px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
              <div className="flex flex-col gap-4 md:col-span-8">
                {/* Badges */}
                <div className="mb-2 flex items-center gap-2">
                  {game.tags.map((tag) => (
                    <span key={tag} className="rounded bg-nv-surface-variant px-2 py-1 font-label-sm text-label-sm uppercase text-nv-on-surface">
                      {tag}
                    </span>
                  ))}
                  {game.rtx && (
                    <span className="flex items-center gap-1 rounded bg-nv-surface-variant px-2 py-1 font-label-sm text-label-sm uppercase text-nv-primary">
                      <Zap className="h-3 w-3" /> RTX ON
                    </span>
                  )}
                </div>

                <h1 className="font-display-lg text-display-lg text-nv-on-surface">{game.title}</h1>
                <p className="max-w-2xl font-body-lg text-body-lg text-nv-on-surface-variant">{game.description}</p>

                {/* CTAs */}
                <div className="mt-6 flex items-center gap-4">
                  <button className="flex items-center gap-2 rounded bg-nv-primary-container px-8 py-4 font-label-md text-label-md text-nv-on-primary-container transition-colors hover:bg-nv-primary-fixed-dim">
                    <ShoppingCart className="h-4 w-4" />
                    {game.freeToPlay ? 'Play Free' : `Buy Now - $${game.price}`}
                  </button>
                  <button className="flex items-center gap-2 rounded border border-nv-outline-variant px-6 py-4 font-label-md text-label-md text-nv-on-surface transition-all rtx-glow">
                    <Bookmark className="h-4 w-4" />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        {/* Main Content */}
        <div className="flex flex-col gap-12 lg:col-span-8">
          {/* About */}
          <div className="rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-8">
            <h2 className="mb-4 font-headline-md text-headline-md text-nv-primary">About This Game</h2>
            <p className="mb-4 font-body-md text-body-md text-nv-on-surface-variant">{game.longDescription}</p>
            <p className="font-body-md text-body-md text-nv-on-surface-variant">
              {game.developer} delivers a breathtaking experience with stunning visuals and performance. {game.rtx ? 'Powered by full ray tracing and DLSS 3.5, every frame is upgraded with physically based textures and breathtaking global illumination.' : 'Optimized for smooth performance with DLSS 3 AI upscaling.'}
            </p>
          </div>

          {/* Rating */}
          <div className="rounded-lg border border-nv-outline-variant bg-nv-surface-container p-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-display-lg text-display-lg text-nv-primary">{game.rating}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(game.rating) ? 'fill-nv-primary text-nv-primary' : 'text-nv-outline-variant'}`}
                    />
                  ))}
                </div>
                <p className="mt-1 font-label-sm text-label-sm text-nv-on-surface-variant">{game.reviewCount} reviews</p>
              </div>
              <div className="h-16 w-px bg-nv-outline-variant" />
              <div>
                <p className="font-headline-md text-headline-md text-nv-on-surface">Very Positive</p>
                <p className="font-body-md text-body-md text-nv-on-surface-variant">95% of reviews are positive</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="mb-6 font-headline-md text-headline-md text-nv-primary">User Reviews</h2>
            <div className="flex flex-col gap-4">
              {reviews.map((review) => (
                <div key={review.user} className="rounded-lg border border-nv-outline-variant bg-nv-surface-container p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-nv-primary text-nv-primary" />
                      <span className="font-label-md text-label-md text-nv-on-surface">{review.user}</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-nv-on-surface-variant">Recommended</span>
                  </div>
                  <p className="font-body-md text-body-md text-nv-on-surface-variant">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          {/* System Requirements */}
          <div className="flex flex-col gap-4 rounded-lg border border-nv-outline-variant bg-nv-surface-container-high p-6">
            <h3 className="mb-2 font-headline-md text-headline-md text-nv-primary">System Requirements</h3>
            <div className="border-b border-nv-outline-variant pb-4">
              <h4 className="mb-2 font-label-sm text-label-sm uppercase text-nv-on-surface-variant">Minimum (1080p, High)</h4>
              <ul className="flex flex-col gap-2 font-body-md text-body-md">
                <ReqRow label="OS" value="Windows 10/11" />
                <ReqRow label="CPU" value="Intel i7-6700 / Ryzen 5 3600" />
                <ReqRow label="RAM" value="16 GB" />
                <ReqRow label="GPU" value="NVIDIA RTX 3060" highlight />
              </ul>
            </div>
            <div className="pt-2">
              <h4 className="mb-2 font-label-sm text-label-sm uppercase text-nv-primary">Recommended (4K, Ultra)</h4>
              <ul className="flex flex-col gap-2 font-body-md text-body-md">
                <ReqRow label="OS" value="Windows 10/11" />
                <ReqRow label="CPU" value="Intel i7-12700K / Ryzen 9 5900X" />
                <ReqRow label="RAM" value="32 GB" />
                <ReqRow label="GPU" value="NVIDIA RTX 4080" highlight />
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-6">
            <h3 className="mb-4 font-headline-md text-headline-md text-nv-primary">Features</h3>
            <ul className="flex flex-col gap-3 font-body-md text-body-md text-nv-on-surface">
              {game.pathTracing && <FeatureItem icon={MemoryStick} label="Full Path Tracing" />}
              {game.rtx && <FeatureItem icon={Zap} label="Ray Tracing" />}
              {game.dlss && <FeatureItem icon={Cpu} label="DLSS 3 Support" />}
              {game.reflex && <FeatureItem icon={Gauge} label="NVIDIA Reflex" />}
              <FeatureItem icon={Monitor} label="Single-player" />
              <FeatureItem icon={CheckCircle2} label="Cloud Ready" />
            </ul>
          </div>

          {/* Store Availability */}
          <div className="rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-6">
            <h3 className="mb-4 font-headline-md text-headline-md text-nv-primary">Available On</h3>
            <div className="flex flex-wrap gap-2">
              {game.stores.map((store) => (
                <span key={store} className="flex items-center gap-2 rounded border border-nv-outline-variant bg-nv-surface-container px-3 py-2 font-label-md text-label-md font-semibold text-nv-on-surface">
                  {store}
                  <span className="h-1.5 w-1.5 rounded-full bg-nv-primary" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <section>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-nv-on-surface">More Like This</h2>
          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
            {relatedGames.map((g) => (
              <GameCard key={g.id} game={g} navigate={navigate} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ReqRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <li className="flex justify-between">
      <span className="text-nv-on-surface-variant">{label}:</span>
      <span className={highlight ? 'font-bold text-nv-primary' : 'text-nv-on-surface'}>{value}</span>
    </li>
  );
}

function FeatureItem({ icon: Icon, label }: { icon: typeof Cpu; label: string }) {
  return (
    <li className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-nv-primary" />
      {label}
    </li>
  );
}
