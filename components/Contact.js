export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-100 to-blue-50 py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mx-auto max-w-4xl rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl shadow-slate-300/30 backdrop-blur sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Let&apos;s connect</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-slate-600">Reach out to discuss your next project or supply requirements.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Address</p>
              <p className="mt-2 font-medium text-slate-900">No. 4, Damboa Road, Borno State</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">Phone</p>
              <p className="mt-2 font-medium text-slate-900">
                <a className="transition hover:text-blue-700" href="tel:08016341046">
                  08016341046
                </a>{' '}
                ·{' '}
                <a className="transition hover:text-blue-700" href="tel:08191701041">
                  08191701041
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Email</p>
            <a className="mt-2 inline-block font-medium text-slate-900 transition hover:text-blue-700" href="mailto:chaseninternational78@gmail.com">
              chaseninternational78@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
