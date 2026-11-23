'use client';

import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/trips';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-serif text-2xl font-semibold tracking-[0.2em] text-neutral-950"
        >
          {siteConfig.brandName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.14em] text-neutral-600 uppercase transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#inquire"
            className="inline-flex items-center gap-1.5 border border-neutral-950 bg-neutral-950 px-4 py-2 text-xs font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-white hover:text-neutral-950"
          >
            Inquire Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center border border-neutral-200 p-2 text-neutral-950 transition-colors hover:border-neutral-950 md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 pb-2 text-xs font-medium tracking-[0.14em] text-neutral-700 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 border border-neutral-950 bg-neutral-950 px-4 py-3 text-xs font-medium tracking-[0.12em] text-white uppercase"
            >
              Inquire Now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}