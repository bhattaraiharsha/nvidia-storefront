import { CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

export default function ProductPreview() {
  return (
    <section id="product" className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-dots opacity-10" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-cyan-400">
            Product tour
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
            See Momentum in action
          </h2>
          <p className="mt-4 text-lg text-slate-300 text-balance">
            From sprint planning to shipping, every part of the workflow lives in one
            beautifully designed space.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left: Task board mockup */}
          <Reveal>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-sm font-bold text-white">Sprint Board</h3>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-warning-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-success-400" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: 'To Do', cards: [{ t: 'API docs', p: 'low' }, { t: 'Email templates', p: 'med' }] },
                  { title: 'In Progress', cards: [{ t: 'Auth flow', p: 'high' }, { t: 'DB migration', p: 'high' }] },
                  { title: 'Done', cards: [{ t: 'Landing page', p: 'med' }, { t: 'DNS setup', p: 'low' }] },
                ].map((col) => (
                  <div key={col.title} className="space-y-2">
                    <p className="text-xs font-semibold text-slate-400">{col.title}</p>
                    {col.cards.map((card) => (
                      <div key={card.t} className="rounded-lg border border-slate-700 bg-slate-900 p-2.5">
                        <p className="text-xs font-medium text-white">{card.t}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            card.p === 'high' ? 'bg-rose-400' : card.p === 'med' ? 'bg-warning-400' : 'bg-slate-500'
                          }`} />
                          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-primary-400 to-cyan-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Feature highlights */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-500/20">
                    <TrendingUp className="h-5 w-5 text-success-400" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">Velocity tracking</p>
                    <p className="text-xs text-slate-400">Up 24% this sprint</p>
                  </div>
                </div>
                <div className="mt-4 flex items-end gap-2">
                  {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary-600 to-cyan-400"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <StatCard icon={CheckCircle2} label="Completed" value="127" color="text-success-400 bg-success-500/20" />
                <StatCard icon={Clock} label="In progress" value="18" color="text-primary-400 bg-primary-500/20" />
                <StatCard icon={AlertCircle} label="Blocked" value="2" color="text-error-400 bg-error-500/20" />
                <StatCard icon={TrendingUp} label="On-time" value="94%" color="text-accent-400 bg-accent-500/20" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: typeof CheckCircle2;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-3 font-display text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
