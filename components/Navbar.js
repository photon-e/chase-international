'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
            CI
          </span>
          <div>
            <span className="text-sm font-extrabold tracking-wide text-slate-900 sm:text-base">CHASE INTERNATIONAL</span>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">2026 UI Refresh</p>
          </div>
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
            Get a Quote
          </a>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <ul className="section-container space-y-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-primary mt-2 text-sm" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
