'use client';

import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="section-container nav-inner" aria-label="Main navigation">
        <a href="#home" className="brand">CHASE N. INTERNATIONAL CO. LTD</a>

        <button type="button" className="hamburger" aria-label="Toggle navigation menu" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}><a className="nav-link" href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="mobile-menu">
          <ul className="section-container">
            {links.map((link) => (
              <li key={link.href}><a href={link.href} onClick={() => setOpen(false)}>{link.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
