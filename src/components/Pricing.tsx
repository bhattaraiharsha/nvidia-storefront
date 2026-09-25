import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { useState } from 'react';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'For small teams just getting started',
    features: [
      'Up to 10 members',
      '3 projects',
      'Kanban & list views',
      'Basic integrations',
      'Community support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 12, yearly: 9 },
    description: 'For growing teams that need more power',
    features: [
      'Unlimited members',
      'Unlimited projects',
      'All views (Kanban, timeline, calendar)',
      'AI sprint planning',
      'GitHub & GitLab sync',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'SSO / SAML',
      'Audit logs',
      'Custom permissions',
      'Dedicated manager',
      '99.9% uptime SLA',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-balance">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                !yearly ? 'bg-slate-900 text-white' : 'text-slate-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                yearly ? 'bg-slate-900 text-white' : 'text-slate-600'
              }`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-success-100 px-2 py-0.5 text-[10px] font-bold text-success-700">
                Save 25%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <PlanCard plan={plan} yearly={yearly} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  yearly,
}: {
  plan: (typeof plans)[number];
  yearly: boolean;
}) {
  const price = yearly ? plan.price.yearly : plan.price.monthly;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all ${
        plan.highlighted
          ? 'border-primary-500 bg-white shadow-2xl shadow-primary-500/10 lg:-translate-y-4 lg:scale-[1.02]'
          : 'border-slate-200 bg-white shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-600 to-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
          Most popular
        </div>
      )}

      <h3 className="font-display text-lg font-bold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{plan.description}</p>

      <div className="mt-5">
        {price === null ? (
          <p className="font-display text-4xl font-bold text-slate-900">Custom</p>
        ) : (
          <div className="flex items-end gap-1">
            <span className="font-display text-4xl font-bold text-slate-900">${price}</span>
            <span className="mb-1 text-sm text-slate-500">/user/mo</span>
          </div>
        )}
        {yearly && price !== null && price > 0 && (
          <p className="mt-1 text-xs font-medium text-success-600">Billed annually</p>
        )}
      </div>

      <a
        href="#"
        className={`group mt-6 inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
          plan.highlighted
            ? 'bg-slate-900 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
            : 'border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
        }`}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>

      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-primary-600' : 'text-success-500'}`} />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
