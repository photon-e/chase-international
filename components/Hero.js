const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Client Satisfaction', value: '98%' }
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="section-container relative py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">General Contracts • Supplies • Construction • Trading</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building Reliable Infrastructure for a Fast-Growing Future
            </h1>
            <p className="section-copy mt-6 text-lg sm:text-xl">
              CHASE N. INTERNATIONAL CO. LTD delivers end-to-end solutions with quality execution, trusted supply
              networks, and dependable project management.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
          </div>

          <div className="reveal surface-card p-6 sm:p-7">
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Operational excellence, from plan to delivery.</h2>
            <p className="section-copy mt-3">
              We combine field expertise, transparent communication, and strong quality controls to ensure consistent
              outcomes.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200">
                  <p className="text-2xl font-extrabold text-slate-900">{item.value}</p>
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
