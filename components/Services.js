const services = [
  { title: 'Construction', description: 'Residential & commercial projects executed with precision and quality.' },
  { title: 'Supplies', description: 'Reliable sourcing and delivery of materials and equipment for every phase.' },
  { title: 'General Trading', description: 'Efficient sourcing, procurement, and delivery tailored to your needs.' }
];

export default function Services() {
  return (
    <section id="services" className="section soft">
      <div className="section-container">
        <div className="center reveal">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">We provide end-to-end solutions that support infrastructure and growth.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="card reveal">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
