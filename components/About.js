export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">Built on trust, driven by quality.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              CHASE N. INTERNATIONAL CO. LTD is a trusted partner in construction, supplies, and general trading. We
              deliver projects and services with a commitment to reliability, quality workmanship, and years of
              industry experience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-secondary">What clients can expect</h3>
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
