export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-slate-600">Reach out to discuss your next project or supply requirements.</p>

          <address className="mt-8 not-italic text-slate-700">
            <p className="mb-3">
              <span className="font-semibold text-secondary">Address:</span> No. 4, Damboa Road, Borno State
            </p>
            <p className="mb-3">
              <span className="font-semibold text-secondary">Phone:</span>{' '}
              <a className="hover:text-primary" href="tel:08016341046">
                08016341046
              </a>
              ,{' '}
              <a className="hover:text-primary" href="tel:08191701041">
                08191701041
              </a>
            </p>
            <p>
              <span className="font-semibold text-secondary">Email:</span>{' '}
              <a className="hover:text-primary" href="mailto:chaseninternational78@gmail.com">
                chaseninternational78@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
