'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqItems } from '@/config/trips';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-[0.18em] text-neutral-500 uppercase">
              04 — FIELD PROTOCOL
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Essential operational details covering cancellations, restricted
              permits, and expedition provisions.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200 lg:col-span-8">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-serif text-xl font-medium text-neutral-950 sm:text-2xl">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-200 text-neutral-950">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 pr-10 text-sm leading-relaxed text-neutral-600">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}