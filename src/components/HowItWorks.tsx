import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Create your workspace',
    description:
      'Sign up in seconds. Import from Jira, Trello, or Asana with one click. Your team is ready to go before the coffee is cold.',
  },
  {
    number: '02',
    title: 'Plan your first sprint',
    description:
      "Drag tasks onto the board, set priorities, and let AI suggest a realistic timeline based on your team's capacity.",
  },
  {
    number: '03',
    title: 'Track and ship',
    description:
      'Watch progress update in real time. Get insights on velocity and bottlenecks. Ship faster with everything in one place.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-primary-600">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl md:text-5xl">
            From zero to shipping in three steps
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-primary-300 to-transparent md:block" />
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 font-display text-2xl font-bold text-primary-700">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
