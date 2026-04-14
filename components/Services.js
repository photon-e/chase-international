const services = [
  {
    title: 'Construction',
    description: 'Residential & commercial projects executed with precision, safety, and high standards.'
  },
  {
    title: 'Supplies',
    description: 'Reliable sourcing and delivery of quality materials and equipment for every project phase.'
  },
  {
    title: 'General Trading',
    description: 'Efficient procurement, sourcing, and delivery solutions tailored to business requirements.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We provide end-to-end solutions that support infrastructure growth and operational success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="reveal rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
