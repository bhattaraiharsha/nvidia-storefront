import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-cyan-700 px-6 py-16 text-center shadow-2xl shadow-primary-500/30 sm:px-16 sm:py-20">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-dots opacity-10" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
                Ready to move at your team's speed?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100 text-balance">
                Join 12,000+ teams shipping faster with Momentum. Get started in two minutes — no
                credit card, no commitment.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-slate-900 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Start free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  Book a demo
                </a>
              </div>
              <p className="mt-6 text-sm text-primary-200">
                Free forever for up to 10 teammates
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
