'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-guardian-void/90 backdrop-blur-md border-b border-guardian-iron/50 sticky top-0 z-50">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label="The Protectors - Home">
            {/* Knight shield logo */}
            <div className="w-10 h-10 bg-guardian-midnight rounded-lg flex items-center justify-center border border-guardian-gold/40 group-hover:border-guardian-gold transition-all group-hover:shadow-gold">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-guardian-gold" fill="currentColor">
                <path d="M50,10 L70,25 L70,55 Q70,75 50,85 Q30,75 30,55 L30,25Z" fill="none" stroke="currentColor" strokeWidth="6"/>
                <line x1="50" y1="20" x2="50" y2="75" stroke="currentColor" strokeWidth="5"/>
                <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="5"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg text-white font-display tracking-wide">
                The <span className="text-guardian-gold">Protectors</span>
              </span>
              <span className="block text-[10px] text-neutral-400 tracking-widest uppercase -mt-0.5">Guardians of Justice</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-guardian-gold font-medium transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/volunteer" className="btn-primary text-xs px-5 py-2.5">
              Stand With Us
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-guardian-iron/50 text-neutral-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-guardian-iron/50 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300 hover:text-guardian-gold font-medium px-2 py-1 text-sm tracking-wide uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/volunteer" className="btn-primary text-center text-sm" onClick={() => setIsOpen(false)}>
                Stand With Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
