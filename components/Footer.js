const deploymentId =
  process.env.COMMIT_REF ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_ID ||
  'local';

const footerLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="section-container space-y-6">
        <div className="grid gap-6 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          <div>
            <p className="text-sm font-extrabold tracking-wide text-secondary">CHASE N. INTERNATIONAL CO. LTD</p>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Reliable partner for general contracts, supplies, construction, and international trading.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Quick Links</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-3 sm:justify-start">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-secondary/30 hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <p className="mt-2 text-sm text-slate-600">Email: contact@chaseinternational.com</p>
            <p className="text-sm text-slate-600">Phone: +1 (555) 010-2458</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} CHASE N. INTERNATIONAL CO. LTD. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">Deploy: {deploymentId.slice(0, 8)}</p>
        </div>
      </div>
    </footer>
  );
}
