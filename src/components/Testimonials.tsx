import { Star } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    quote:
      "Momentum replaced three tools for us. Our team finally has one place to plan, track, and ship. The AI sprint planning alone saves us hours every week.",
    name: 'Sarah Chen',
    role: 'VP Engineering, Acme Corp',
    initials: 'SC',
    color: 'from-rose-500 to-pink-500',
    rating: 5,
  },
  {
    quote:
      "We switched from Jira and never looked back. Momentum is fast, beautiful, and actually makes our team want to use it. Onboarding took 10 minutes.",
    name: 'Marcus Rodriguez',
    role: 'CTO, Globex',
    initials: 'MR',
    color: 'from-primary-500 to-cyan-500',
    rating: 5,
  },
  {
    quote:
      "The real-time analytics are a game changer. I can see exactly where bottlenecks are and fix them before they delay a sprint. Our velocity is up 30%.",
    name: 'Amara Okafor',
    role: 'Product Lead, Initech',
    initials: 'AO',
    color: 'from-accent-500 to-warning-500',
    rating: 5,
  },
  {
    quote:
      "As a 50-person engineering org, we needed something that scaled. Momentum's permissions and audit logs gave our security team confidence immediately.",
    name: 'James Liu',
    role: 'Head of Eng, Hooli',
    initials: 'JL',
    color: 'from-success-500 to-emerald-500',
    rating: 5,
  },
  {
    quote:
      "The GitHub integration is seamless. Commits auto-link to tasks, PRs close issues — it just works. Less context switching means more deep work.",
    name: 'Priya Sharma',
    role: 'Senior Dev, Stark Inc',
    initials: 'PS',
    color: 'from-violet-500 to-purple-500',
    rating: 5,
  },
  {
    quote:
      "I've used every project management tool out there. Momentum is the first one that doesn't feel like a chore. It's genuinely a joy to use every day.",
    name: 'David Park',
    role: 'Founder, Umbrella',
    initials: 'DP',
    color: 'from-slate-600 to-slate-400',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl">
            Loved by teams of every size
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">4.9/5</span>
            <span className="text-sm text-slate-500">from 2,300+ reviews</span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  color,
  rating,
}: (typeof testimonials)[number]) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1">
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
        ))}
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-700">"{quote}"</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${color} text-sm font-bold text-white`}>
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
