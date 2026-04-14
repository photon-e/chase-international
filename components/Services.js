const services = [
  {
    title: 'Construction',
    description: 'Residential and commercial project execution with strict quality assurance and safety standards.'
  },
  {
    title: 'Supplies',
    description: 'Reliable sourcing and delivery of durable materials and equipment across every project phase.'
  },
  {
    title: 'General Trading',
    description: 'Efficient procurement and logistics solutions tailored to operational and budget requirements.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core capabilities</p>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">Services that move projects forward</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We provide end-to-end solutions that support infrastructure growth and long-term operational success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-primary/20 transition group-hover:w-20 group-hover:bg-primary" />
              <h3 className="text-xl font-semibold text-secondary">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
