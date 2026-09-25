import {
  KanbanSquare,
  Zap,
  BarChart3,
  Users,
  GitBranch,
  Lock,
} from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: KanbanSquare,
    title: 'Visual project boards',
    description:
      'Drag-and-drop boards that adapt to your workflow — Kanban, list, calendar, or timeline. Switch views instantly without losing context.',
    color: 'from-primary-500 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'AI sprint planning',
    description:
      'Our AI analyzes your team velocity and historical data to suggest realistic sprint plans and surface bottlenecks before they happen.',
    color: 'from-accent-500 to-warning-400',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    description:
      'Beautiful dashboards that show exactly where things stand. Velocity, burndown, and cycle time — all updated live, no refresh needed.',
    color: 'from-success-500 to-emerald-400',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description:
      'Comments, mentions, and shared docs right where the work happens. No more switching between five different tools to get things done.',
    color: 'from-rose-500 to-pink-400',
  },
  {
    icon: GitBranch,
    title: 'GitHub & GitLab sync',
    description:
      'Auto-link commits and PRs to tasks. Close issues from a merge message. See code status without leaving your project board.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: Lock,
    title: 'Enterprise-grade security',
    description:
      'SOC 2 Type II, SSO/SAML, granular permissions, and audit logs. Your data is encrypted at rest and in transit. Always.',
    color: 'from-slate-700 to-slate-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl">
            Everything your team needs,
            <br />
            nothing they don't
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-balance">
            Powerful enough for engineering teams, simple enough for everyone else. Momentum replaces
            the chaos of disconnected tools with one focused workspace.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: typeof KanbanSquare;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]`} />
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
