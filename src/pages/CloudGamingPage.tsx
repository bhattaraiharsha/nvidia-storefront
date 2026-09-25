import { games } from "@/data/games";
import type { NavigateFn } from "@/types/navigation";
import GameCard from "@/components/GameCard";
import {
  Zap,
  Cloud,
  Play,
  CreditCard,
  Gauge,
  Tv,
  Sparkles,
  CheckCircle2,
  HardDrive,
  RefreshCw,
} from "lucide-react";

type CloudGamingPageProps = {
  navigate: NavigateFn;
};

export default function CloudGamingPage({ navigate }: CloudGamingPageProps) {
  const cloudGames = games.slice(0, 8);

  return (
    <div className="custom-scroll space-y-12">
      {/* Hero Showcase */}
      <section className="relative overflow-hidden rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-6 md:p-10">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-nv-primary/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Text content */}
          <div className="space-y-5 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded border border-nv-outline-variant bg-nv-surface-container-high px-3 py-1">
              <Zap className="h-4 w-4 text-nv-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-nv-primary">
                GeForce NOW Cloud Streaming
              </span>
              <span className="text-nv-outline">/</span>
              <span className="font-label-sm text-label-sm font-semibold tracking-wider text-nv-on-surface">
                RTX 4080 SuperPODs
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg leading-none tracking-tight text-nv-on-surface">
              Game On. <span className="text-nv-primary">4000+ Games</span>{" "}
              Waiting in the Cloud.
            </h1>

            <p className="max-w-xl font-body-lg text-body-lg text-nv-on-surface-variant">
              Play your favorite PC titles with powerful GeForce RTX performance
              on any device. Instant access with zero downloads or storage
              required.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 rounded bg-nv-primary-container px-6 py-3 font-label-md text-label-md font-bold text-nv-on-primary transition-all hover:bg-nv-primary rtx-glow-hover active:scale-95">
                <Play className="h-4 w-4 text-nv-on-primary" />
                <span>Stream Now</span>
              </button>
              <button className="flex items-center gap-2 rounded border border-nv-outline-variant px-5 py-3 font-label-md text-label-md font-semibold text-nv-on-surface transition-all hover:border-nv-primary hover:text-nv-primary">
                <CreditCard className="h-4 w-4" />
                <span>Join Free</span>
              </button>
            </div>

            {/* Spec indicators */}
            <div className="grid grid-cols-3 gap-4 border-t border-nv-outline-variant/60 pt-4">
              <SpecIndicator label="Latency" value="< 16ms" note="Ultra-Low" />
              <SpecIndicator label="Fidelity" value="4K" note="120 FPS" />
              <SpecIndicator
                label="AI Tech"
                value="DLSS 3.5"
                note="Ray Tracing"
              />
            </div>
          </div>

          {/* Preview card */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-lg border border-nv-outline-variant bg-nv-surface-container">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={games[0].image}
                  alt="Cloud Stream"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* HUD overlay */}
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-nv-surface-container-lowest via-transparent to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 rounded border border-nv-primary/40 bg-nv-surface-container-lowest/90 px-2.5 py-1 font-label-sm text-label-sm text-nv-primary backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-nv-primary" />
                      LIVE RIG CONNECTED
                    </span>
                    <span className="rounded bg-black/70 px-2 py-0.5 font-label-sm text-label-sm text-nv-on-surface-variant">
                      60.4 Mbps | 120 FPS
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm font-bold text-nv-primary">
                        RTX 4080 RIG ASSIGNED
                      </span>
                    </div>
                    <p className="truncate text-sm font-semibold text-nv-on-surface">
                      Server: US Central (Dallas-02)
                    </p>
                  </div>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="flex items-center justify-between bg-nv-surface-container-low p-3 font-label-sm text-label-sm text-nv-on-surface-variant">
                <span className="flex items-center gap-1">
                  <Gauge className="h-4 w-4 text-nv-primary" /> Reflex Boost:
                  ENABLED
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-nv-primary" /> AV1 HW Decode
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PC Libraries Sync */}
      <section className="rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-nv-primary" />
              <h2 className="font-headline-md text-headline-md font-bold text-nv-on-surface">
                Connect Your PC Libraries
              </h2>
            </div>
            <p className="font-body-md text-body-md text-nv-on-surface-variant">
              Stream games you own across digital storefronts. Instant access
              with no redownloading.
            </p>
          </div>
          {/* Storefront badges */}
          <div className="flex flex-wrap items-center gap-3">
            {["Steam", "Epic Games", "PC Game Pass", "Ubisoft Connect"].map(
              (store) => (
                <div
                  key={store}
                  className="flex items-center gap-2 rounded border border-nv-outline-variant bg-nv-surface-container px-3 py-2 transition-colors hover:border-nv-primary/40"
                >
                  <span className="font-label-md text-label-md font-semibold text-nv-on-surface">
                    {store}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-nv-primary" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-nv-outline-variant/40 pt-6 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded bg-nv-surface-container p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-nv-primary" />
            <div>
              <h4 className="font-label-md text-label-md font-bold text-nv-on-surface">
                Ready-to-Play Instant Titles
              </h4>
              <p className="text-xs text-nv-on-secondary-container">
                Jump into top multiplayer hits and single player favorites with
                pre-installed cloud patches.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded bg-nv-surface-container p-3">
            <HardDrive className="mt-0.5 h-5 w-5 text-nv-primary" />
            <div>
              <h4 className="font-label-md text-label-md font-bold text-nv-on-surface">
                2,200+ Install-to-Play Titles
              </h4>
              <p className="text-xs text-nv-on-secondary-container">
                Premium members unlock our vast install-on-demand vault powered
                by multi-gigabit server arrays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Games Catalog */}
      <section className="space-y-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-nv-on-surface">
            Cloud Games Catalog
          </h2>
          <p className="font-body-md text-body-md text-nv-on-surface-variant">
            Stream instantly across PC, Mac, SHIELD TV, iOS Safari, Android, and
            Chromebooks.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scroll">
          <button className="flex-shrink-0 rounded bg-nv-primary px-4 py-2 font-label-md text-label-md font-bold text-nv-on-primary whitespace-nowrap">
            All Cloud Titles
          </button>
          <button className="flex-shrink-0 rounded border border-nv-outline-variant bg-nv-surface-container px-4 py-2 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface whitespace-nowrap">
            Free-to-Play
          </button>
          <button className="flex flex-shrink-0 items-center gap-1.5 rounded border border-nv-outline-variant bg-nv-surface-container px-4 py-2 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-nv-primary" />
            RTX ON
          </button>
          <button className="flex-shrink-0 rounded border border-nv-outline-variant bg-nv-surface-container px-4 py-2 font-label-md text-label-md text-nv-on-surface-variant transition-colors hover:bg-nv-surface-variant hover:text-nv-on-surface whitespace-nowrap">
            Recently Added
          </button>
        </div>

        {/* Game cards */}
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {cloudGames.map((game) => (
            <GameCard key={game.id} game={game} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* RTX 4080 SuperPOD Spec Sheet */}
      <section className="rounded-lg border border-nv-outline-variant bg-nv-surface-container-low p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-nv-primary" />
              <h2 className="font-headline-lg text-headline-lg font-bold text-nv-on-surface">
                RTX 4080 SuperPOD Cloud Gaming Rig
              </h2>
            </div>
            <p className="mt-1 font-body-md text-body-md text-nv-on-surface-variant">
              Engineered with NVIDIA Ada Lovelace architecture to deliver true
              enthusiast PC desktop class power directly to your screen.
            </p>
          </div>
          <span className="flex-shrink-0 rounded border border-nv-outline-variant bg-nv-surface-container px-3 py-1 font-label-sm text-label-sm font-bold text-nv-primary">
            64 TFLOPS OF CLOUD POWER
          </span>
        </div>

        {/* Spec bento */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SpecCard
            icon={Gauge}
            label="Latency Pipeline"
            title="Sub-16ms Latency"
            desc="NVIDIA Reflex click-to-display acceleration rivals standard local console latency over fiber."
          />
          <SpecCard
            icon={Zap}
            label="Encoder Suite"
            title="Dual AV1 Encoders"
            desc="Next-generation AV1 video streaming cuts bandwidth demands by 40% while enhancing sharpness."
          />
          <SpecCard
            icon={Tv}
            label="Visual Fidelity"
            title="4K HDR @ 120 FPS"
            desc="Or push competitive FPS up to buttery smooth 240 FPS at 1080p with ultra-low motion blur."
          />
          <SpecCard
            icon={Sparkles}
            label="Neural Rendering"
            title="DLSS 3.5 Ray Reconstruction"
            desc="AI-powered full ray tracing creates cinematic lighting reflections and ambient shadows in the cloud."
          />
        </div>
      </section>
    </div>
  );
}

function SpecIndicator({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div>
      <p className="font-label-sm text-label-sm uppercase text-nv-on-secondary-container">
        {label}
      </p>
      <p className="font-headline-md text-headline-md font-bold text-nv-on-surface">
        {value}{" "}
        <span className="text-xs font-normal text-nv-primary">{note}</span>
      </p>
    </div>
  );
}

function SpecCard({
  icon: Icon,
  label,
  title,
  desc,
}: {
  icon: typeof Gauge;
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded border border-nv-outline-variant/60 bg-nv-surface-container p-4">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm uppercase text-nv-on-secondary-container">
          {label}
        </span>
        <Icon className="h-5 w-5 text-nv-primary" />
      </div>
      <div className="mt-4">
        <h4 className="font-headline-md text-headline-md font-bold text-nv-on-surface">
          {title}
        </h4>
        <p className="mt-1 text-xs text-nv-on-surface-variant">{desc}</p>
      </div>
    </div>
  );
}
