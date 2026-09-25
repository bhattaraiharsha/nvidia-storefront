import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute top-0 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-400/30 blur-3xl animate-blob" />
        <div className="absolute top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all hover:border-primary-300 hover:shadow-md"
            >
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span>AI-powered planning is here</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Project management
              <br />
              that moves at <span className="gradient-text">your speed</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 text-balance sm:text-xl">
              Plan sprints, track progress, and ship faster — all in one beautifully simple
              workspace your team will actually enjoy using.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-slate-900/20 transition-all hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5"
              >
                Start free — no card needed
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#product"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:shadow-md"
              >
                <Play className="h-4 w-4 fill-current text-primary-600" />
                Watch demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-6 text-sm text-slate-500">
              Free for up to 10 teammates · No credit card required · 2-min setup
            </p>
          </Reveal>
        </div>

        {/* Hero dashboard mockup */}
        <Reveal delay={500}>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
              <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <DashboardMockup />
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -left-4 top-1/3 hidden animate-float lg:block">
              <FloatingCard
                icon="✅"
                label="Sprint completed"
                value="12/14 tasks"
                color="bg-success-50 border-success-200"
              />
            </div>
            <div className="absolute -right-4 top-1/2 hidden animate-float [animation-delay:3s] lg:block">
              <FloatingCard
                icon="🚀"
                label="Velocity"
                value="+24% this week"
                color="bg-primary-50 border-primary-200"
              />
            </div>
          </div>
        </Reveal>

        {/* Logo cloud */}
        <Reveal delay={600}>
          <div className="mt-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Trusted by 12,000+ teams worldwide
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
              {['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark Inc'].map((name) => (
                <span key={name} className="font-display text-lg font-bold text-slate-500">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border ${color} bg-white px-4 py-3 shadow-xl`}>
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <p className="text-sm font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const tasks = [
    { name: 'Redesign onboarding flow', status: 'Done', priority: 'High', assignee: 'AK', progress: 100 },
    { name: 'API rate limiting', status: 'In Progress', priority: 'High', assignee: 'MR', progress: 65 },
    { name: 'Dark mode for dashboard', status: 'In Progress', priority: 'Medium', assignee: 'JL', progress: 40 },
    { name: 'Update billing page', status: 'Todo', priority: 'Low', assignee: 'SD', progress: 0 },
    { name: 'Fix mobile nav overlap', status: 'Done', priority: 'Medium', assignee: 'AK', progress: 100 },
  ];

  const statusColors: Record<string, string> = {
    Done: 'bg-success-100 text-success-700',
    'In Progress': 'bg-primary-100 text-primary-700',
    Todo: 'bg-slate-100 text-slate-600',
  };
  const priorityColors: Record<string, string> = {
    High: 'text-error-600',
    Medium: 'text-warning-600',
    Low: 'text-slate-400',
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden w-48 shrink-0 border-r border-slate-200 bg-white p-4 sm:block">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary-600 to-cyan-500" />
          <span className="font-display text-sm font-bold text-slate-900">Momentum</span>
        </div>
        <div className="space-y-1">
          {[
            { label: 'Dashboard', active: true },
            { label: 'My Tasks' },
            { label: 'Projects' },
            { label: 'Calendar' },
            { label: 'Reports' },
            { label: 'Team' },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                item.active ? 'bg-primary-50 text-primary-700' : 'text-slate-500'
              }`}
            >
              <div className={`h-2 w-2 rounded-full ${item.active ? 'bg-primary-500' : 'bg-slate-300'}`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-4 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="font-display text-base font-bold text-slate-900">Sprint 24 — Q3 Launch</h3>
            <p className="text-xs text-slate-400">5 days remaining · 14 tasks</p>
          </div>
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-full bg-primary-500 text-center text-[10px] font-bold leading-7 text-white">AK</div>
            <div className="h-7 w-7 rounded-full bg-accent-500 text-center text-[10px] font-bold leading-7 text-white -ml-2 border-2 border-white">MR</div>
            <div className="h-7 w-7 rounded-full bg-success-500 text-center text-[10px] font-bold leading-7 text-white -ml-2 border-2 border-white">JL</div>
            <div className="h-7 w-7 rounded-full bg-slate-400 text-center text-[10px] font-bold leading-7 text-white -ml-2 border-2 border-white">+3</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="font-medium text-slate-500">Sprint progress</span>
            <span className="font-bold text-slate-700">68%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400" style={{ width: '68%' }} />
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.name}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
            >
              <div className={`h-4 w-4 shrink-0 rounded ${task.status === 'Done' ? 'bg-success-500' : 'border-2 border-slate-300'}`} />
              <span className="flex-1 truncate text-sm font-medium text-slate-700">{task.name}</span>
              <span className={`hidden rounded-full px-2.5 py-0.5 text-[10px] font-semibold sm:inline ${statusColors[task.status]}`}>
                {task.status}
              </span>
              <span className={`text-xs font-bold ${priorityColors[task.priority]}`}>●</span>
              <div className="h-6 w-6 shrink-0 rounded-full bg-slate-200 text-center text-[9px] font-bold leading-6 text-slate-600">
                {task.assignee}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
