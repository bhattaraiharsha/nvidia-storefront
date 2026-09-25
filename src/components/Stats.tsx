import Reveal from './Reveal';

const stats = [
  { value: '12K+', label: 'Teams onboarded' },
  { value: '4.9M', label: 'Tasks completed' },
  { value: '99.9%', label: 'Uptime guaranteed' },
  { value: '4.9/5', label: 'Average rating' },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 sm:p-14">
            <div className="absolute" />
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <div className="text-center">
                    <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
