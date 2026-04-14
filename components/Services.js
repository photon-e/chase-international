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
          <p className="eyebrow">Core capabilities</p>
          <h2 className="section-title mt-3">Services that move projects forward</h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl">
            We provide end-to-end solutions that support infrastructure growth and long-term operational success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal surface-card group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-blue-200 transition group-hover:w-20 group-hover:bg-blue-700" />
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
