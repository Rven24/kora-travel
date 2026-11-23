'use client';

import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { tripPackages } from '@/config/trips';
import { TripCategory } from '@/types';

export default function ItineraryPreview() {
  const [activeCategory, setActiveCategory] =
    useState<TripCategory>('private-expedition');

  const selectedPackage =
    tripPackages.find((pkg) => pkg.id === activeCategory) ?? tripPackages[0];

  return (
    <section id="itineraries" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-neutral-500 uppercase">
              01 — CURATED ARCHIVE
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Signature Expedition Tracks
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Trip categories"
            className="grid grid-cols-1 border border-neutral-950 sm:inline-grid sm:grid-cols-3"
          >
            {tripPackages.map((pkg) => {
              const isActive = pkg.id === activeCategory;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(pkg.id)}
                  className={`px-4 py-3 text-left text-xs font-medium tracking-[0.12em] uppercase transition-colors sm:text-center ${
                    isActive
                      ? 'bg-neutral-950 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950'
                  }`}
                >
                  {pkg.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between border border-neutral-200 p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase">
                  FROM ${selectedPackage.baseDailyRate} / DAY
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-neutral-950 uppercase">
                  {selectedPackage.minDays}–{selectedPackage.maxDays} DAYS
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl font-medium text-neutral-950">
                {selectedPackage.name}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-neutral-700">
                {selectedPackage.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {selectedPackage.summary}
              </p>

              <div className="mt-8 border-t border-neutral-200 pt-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
                  INCLUDED PROVISIONS
                </p>
                <ul className="mt-4 space-y-3">
                  {selectedPackage.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-800"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-neutral-950" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#estimator"
                className="inline-flex w-full items-center justify-center gap-2 border border-neutral-950 bg-neutral-950 px-5 py-3.5 text-xs font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-white hover:text-neutral-950"
              >
                Calculate This Track
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border border-neutral-200 lg:col-span-7">
            <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-3.5">
              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-600 uppercase">
                SAMPLE 4-DAY DISPATCH — {selectedPackage.name}
              </p>
            </div>

            <div className="divide-y divide-neutral-200">
              {selectedPackage.itinerary.map((stop) => (
                <article
                  key={stop.day}
                  className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-12 sm:p-7"
                >
                  <div className="sm:col-span-3">
                    <p className="font-mono text-xs font-medium tracking-[0.16em] text-neutral-950 uppercase">
                      DAY 0{stop.day}
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-1 font-mono text-[11px] text-neutral-500">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{stop.location}</span>
                    </p>
                  </div>

                  <div className="sm:col-span-9">
                    <h4 className="font-serif text-xl font-medium text-neutral-950">
                      {stop.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {stop.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}