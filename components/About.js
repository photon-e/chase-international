export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="section-title mt-3">Built on trust, driven by quality.</h2>
            <p className="section-copy mt-6 text-lg">
              CHASE N. INTERNATIONAL CO. LTD is a trusted partner in construction, supplies, and general trading. We
              deliver projects and services with a commitment to reliability, quality workmanship, and years of
              industry experience.
            </p>
          </div>

          <div className="surface-card p-8">
            <h3 className="text-xl font-bold text-slate-900">What clients can expect</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• On-time execution and clear communication</li>
              <li>• Strong quality and safety culture across projects</li>
              <li>• Flexible procurement and sourcing support</li>
              <li>• Scalable solutions for both private and public sectors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
