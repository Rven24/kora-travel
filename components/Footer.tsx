import { siteConfig } from '@/config/trips';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-[0.2em] text-neutral-950">
              {siteConfig.brandName}
            </p>
            <p className="mt-2 max-w-sm text-sm text-neutral-600">
              {siteConfig.tagline}. Designed for travelers seeking stillness,
              architectural heritage, and unhurried exploration.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.12em] text-neutral-500 uppercase">
              {siteConfig.location}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
                NAVIGATION
              </p>
              <ul className="mt-3 space-y-2">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs tracking-[0.1em] text-neutral-700 uppercase transition-colors hover:text-neutral-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
                DIRECT DESK
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-3 block text-sm text-neutral-950 underline underline-offset-4"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© 2026 {siteConfig.brandName} Travel &amp; Tour. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase">
            CURATED PRIVATE EXPEDITIONS
          </p>
        </div>
      </div>
    </footer>
  );
}