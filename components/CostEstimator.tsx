'use client';

import { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { serviceTierConfig, tripPackages } from '@/config/trips';
import {
  CostEstimateSelection,
  ServiceTier,
  TripCategory,
} from '@/types';

interface CostEstimatorProps {
  onApplyEstimate?: (estimate: CostEstimateSelection) => void;
}

export default function CostEstimator({ onApplyEstimate }: CostEstimatorProps) {
  const [category, setCategory] = useState<TripCategory>('private-expedition');
  const [travelers, setTravelers] = useState<number>(2);
  const [days, setDays] = useState<number>(5);
  const [serviceTier, setServiceTier] = useState<ServiceTier>('standard');

  const selectedPackage =
    tripPackages.find((pkg) => pkg.id === category) ?? tripPackages[0];

  const handleCategoryChange = (nextCategory: TripCategory) => {
    setCategory(nextCategory);
    const nextPkg =
      tripPackages.find((pkg) => pkg.id === nextCategory) ?? tripPackages[0];
    setDays((prevDays) =>
      Math.min(Math.max(prevDays, nextPkg.minDays), nextPkg.maxDays)
    );
  };

  const tierInfo = serviceTierConfig[serviceTier];
  const dailyRateWithTier = Math.round(
    selectedPackage.baseDailyRate * tierInfo.multiplier
  );
  const estimatedTotal = dailyRateWithTier * days * travelers;

  const handleLockEstimate = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        category,
        packageName: selectedPackage.name,
        travelers,
        days,
        serviceTier,
        estimatedTotal,
      });
    }
  };

  return (
    <section id="estimator" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="border-b border-neutral-200 pb-8">
          <p className="font-mono text-xs tracking-[0.18em] text-neutral-500 uppercase">
            02 — TRANSPARENT VALUATION
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
            Expedition Cost Estimator
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-8 border border-neutral-200 p-6 sm:p-8 lg:col-span-7">
            <div>
              <label className="block font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase">
                01. SELECT TRACK
              </label>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {tripPackages.map((pkg) => {
                  const isSelected = pkg.id === category;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handleCategoryChange(pkg.id)}
                      className={`border px-3.5 py-3 text-left transition-colors ${
                        isSelected
                          ? 'border-neutral-950 bg-neutral-950 text-white'
                          : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-950'
                      }`}
                    >
                      <p className="text-xs font-medium tracking-[0.08em] uppercase">
                        {pkg.name}
                      </p>
                      <p
                        className={`mt-1 font-mono text-[11px] tabular-nums ${
                          isSelected ? 'text-neutral-300' : 'text-neutral-500'
                        }`}
                      >
                        ${pkg.baseDailyRate}/day base
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-neutral-200 pt-6 sm:grid-cols-2">
              <div>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="travelers-slider"
                    className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase"
                  >
                    02. TRAVELERS
                  </label>
                  <span className="font-mono text-lg font-medium text-neutral-950 tabular-nums">
                    {travelers} {travelers === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                <input
                  id="travelers-slider"
                  type="range"
                  min={1}
                  max={6}
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="mt-4 h-1.5 w-full cursor-pointer appearance-none bg-neutral-200 accent-neutral-950"
                />
                <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400 tabular-nums">
                  <span>1 GUEST</span>
                  <span>6 GUESTS MAX</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor="days-slider"
                    className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase"
                  >
                    03. DURATION
                  </label>
                  <span className="font-mono text-lg font-medium text-neutral-950 tabular-nums">
                    {days} Days
                  </span>
                </div>
                <input
                  id="days-slider"
                  type="range"
                  min={selectedPackage.minDays}
                  max={selectedPackage.maxDays}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="mt-4 h-1.5 w-full cursor-pointer appearance-none bg-neutral-200 accent-neutral-950"
                />
                <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400 tabular-nums">
                  <span>{selectedPackage.minDays} DAYS MIN</span>
                  <span>{selectedPackage.maxDays} DAYS MAX</span>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <label className="block font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase">
                04. SERVICE TIER
              </label>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(['standard', 'private-luxury'] as ServiceTier[]).map(
                  (tierKey) => {
                    const tier = serviceTierConfig[tierKey];
                    const isSelected = serviceTier === tierKey;
                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => setServiceTier(tierKey)}
                        className={`border p-4 text-left transition-colors ${
                          isSelected
                            ? 'border-neutral-950 bg-neutral-950 text-white'
                            : 'border-neutral-200 bg-white text-neutral-950 hover:border-neutral-950'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium tracking-[0.1em] uppercase">
                            {tier.label}
                          </span>
                          <span
                            className={`font-mono text-[11px] tabular-nums ${
                              isSelected ? 'text-neutral-300' : 'text-neutral-500'
                            }`}
                          >
                            {tier.multiplier}x
                          </span>
                        </div>
                        <p
                          className={`mt-2 text-xs leading-relaxed ${
                            isSelected ? 'text-neutral-300' : 'text-neutral-600'
                          }`}
                        >
                          {tier.description}
                        </p>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-neutral-950 bg-neutral-950 p-6 text-white sm:p-8 lg:col-span-5">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase">
                ESTIMATED INVESTMENT
              </p>

              <div className="mt-6 border-b border-neutral-800 pb-6">
                <p className="font-mono text-4xl font-medium tracking-tight text-white tabular-nums sm:text-5xl">
                  ${estimatedTotal.toLocaleString('en-US')}
                </p>
                <p className="mt-2 font-mono text-xs text-neutral-400 tabular-nums">
                  ${dailyRateWithTier.toLocaleString('en-US')} / guest / day
                </p>
              </div>

              <dl className="mt-6 space-y-3.5 text-xs">
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <dt className="font-mono text-neutral-400 uppercase">TRACK</dt>
                  <dd className="font-medium text-white">
                    {selectedPackage.name}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <dt className="font-mono text-neutral-400 uppercase">TIER</dt>
                  <dd className="font-medium text-white">{tierInfo.label}</dd>
                </div>
                <div className="flex justify-between border-b border-neutral-800/80 pb-2.5">
                  <dt className="font-mono text-neutral-400 uppercase">PARTY</dt>
                  <dd className="font-mono text-white tabular-nums">
                    {travelers} {travelers === 1 ? 'Guest' : 'Guests'} × {days}{' '}
                    Days
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#inquire"
                onClick={handleLockEstimate}
                className="inline-flex w-full items-center justify-center gap-2 border border-white bg-white px-5 py-3.5 text-xs font-medium tracking-[0.12em] text-neutral-950 uppercase transition-colors hover:bg-neutral-950 hover:text-white"
              >
                Use Estimate in Inquiry
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center font-mono text-[10px] tracking-[0.08em] text-neutral-400 uppercase">
                FINAL QUOTE CONFIRMED WITHIN 24 HOURS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}