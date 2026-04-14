export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28">
      <div className="section-container py-20 sm:py-28">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            General Contracts • Supplies • Construction • Trading
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building the Future with Excellence
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">CHASE N. INTERNATIONAL CO. LTD</p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
