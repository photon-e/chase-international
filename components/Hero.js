const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Client Satisfaction', value: '98%' }
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-100 pt-32">
      <div className="pointer-events-none absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-7rem] h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />

      <div className="section-container relative py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              General Contracts • Supplies • Construction • Trading
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-secondary sm:text-5xl lg:text-6xl">
              Building Reliable Infrastructure for a Fast-Growing Future
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              CHASE N. INTERNATIONAL CO. LTD delivers end-to-end solutions with quality execution, trusted supply
              networks, and dependable project management.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                className="inline-flex rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="reveal rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-300/40 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why choose us</p>
            <h2 className="mt-2 text-2xl font-bold text-secondary">Operational excellence, from plan to delivery.</h2>
            <p className="mt-3 text-slate-600">
              We combine field expertise, transparent communication, and strong quality controls to ensure consistent
              outcomes.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <p className="text-2xl font-extrabold text-secondary">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
