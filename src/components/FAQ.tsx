import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'How is Momentum different from Jira or Asana?',
    a: 'Momentum is built for speed and simplicity. While Jira is powerful but complex, and Asana is flexible but generic, Momentum focuses on the specific needs of software teams — with AI sprint planning, native GitHub/GitLab sync, and real-time analytics that actually help you ship faster.',
  },
  {
    q: 'Can I import my existing projects?',
    a: 'Yes. We support one-click imports from Jira, Trello, Asana, and Linear. Your boards, tasks, labels, and assignees all carry over. Most teams complete the import in under 5 minutes.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We are SOC 2 Type II certified. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We offer SSO/SAML on Enterprise plans, plus granular permissions and full audit logs.',
  },
  {
    q: 'What happens when I hit the free plan limits?',
    a: "You'll get a friendly notification when you approach the limits (10 members or 3 projects). You can upgrade to Pro at any time, and everything continues seamlessly — no data migration needed.",
  },
  {
    q: 'Do you offer discounts for startups or nonprofits?',
    a: "Yes! We offer 50% off Pro for eligible startups under 2 years old and registered nonprofits. Reach out to our sales team and we'll get you set up.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Of course. There are no contracts or cancellation fees. You can downgrade or cancel from your billing settings at any time, and you'll keep access until the end of your billing period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl">
            Questions? We've got answers
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div
                className={`overflow-hidden rounded-xl border transition-all ${
                  openIndex === i
                    ? 'border-primary-200 bg-primary-50/50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-slate-900">{faq.q}</span>
                  {openIndex === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-primary-600" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out-expo ${
                    openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
