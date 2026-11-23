import { ArrowRight } from 'lucide-react';
import { heroContent } from '@/config/trips';

export default function HeroSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-neutral-500 uppercase">
              {heroContent.eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] font-medium tracking-tight text-neutral-950 sm:text-6xl lg:text-[64px]">
              {heroContent.headline}
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              {heroContent.subheadline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={heroContent.primaryCtaHref}
                className="inline-flex items-center gap-2 border border-neutral-950 bg-neutral-950 px-5 py-3 text-xs font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-white hover:text-neutral-950"
              >
                {heroContent.primaryCtaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={heroContent.secondaryCtaHref}
                className="inline-flex items-center border border-neutral-300 bg-white px-5 py-3 text-xs font-medium tracking-[0.12em] text-neutral-950 uppercase transition-colors hover:border-neutral-950"
              >
                {heroContent.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border border-neutral-200 bg-neutral-100">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 sm:aspect-[21/9]">
            <img
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              className="h-full w-full object-cover grayscale contrast-125"
            />
          </div>
          <div className="flex flex-col justify-between gap-2 border-t border-neutral-200 bg-white px-4 py-3 sm:flex-row sm:items-center">
            <span className="font-mono text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              {heroContent.imageCaption}
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-neutral-950 uppercase">
              PRIVATE ACCESS ONLY
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 divide-y divide-neutral-200 border border-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {heroContent.highlights.map((item) => (
            <div key={item.label} className="px-6 py-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase">
                {item.label}
              </p>
              <p className="mt-1 font-serif text-xl font-medium text-neutral-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}