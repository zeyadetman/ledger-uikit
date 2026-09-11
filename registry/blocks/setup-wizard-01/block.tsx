"use client";

import { useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Workspace",
    copy: "Legal name as it should print on invoices.",
  },
  {
    n: "02",
    title: "Meter",
    copy: "The unit you bill. Version it; do not rename history.",
  },
  {
    n: "03",
    title: "Event",
    copy: "Post one test payload with an idempotency key.",
  },
];

export function SetupWizard01() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-3 border-b border-ledger-ink">
        {STEPS.map((item, index) => (
          <button
            key={item.n}
            type="button"
            onClick={() => setStep(index)}
            className={`border-r border-ledger-ink px-3 py-3 text-left last:border-r-0 ${
              index === step ? "bg-ledger-ink text-ledger-paper" : "hover:bg-ledger-rule/40"
            }`}
          >
            <span className="block font-mono text-[10px] font-bold tracking-widest uppercase">
              {item.n}
            </span>
            <span className="hidden font-sans text-sm font-bold tracking-tight uppercase sm:block">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <div className="p-6 md:p-10">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Step {current.n} / 03
        </p>
        <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight uppercase">
          {current.title}
        </h2>
        <p className="mb-8 max-w-md text-[15px] text-ledger-muted">{current.copy}</p>
        <label className="mb-8 block max-w-md">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            {step === 0 ? "Legal entity" : step === 1 ? "Meter id" : "Event id"}
          </span>
          <input
            defaultValue={
              step === 0 ? "North Ledger Co." : step === 1 ? "tokens.out" : "evt_test_001"
            }
            className="h-11 w-full border border-ledger-rule bg-transparent px-3 font-mono text-[13px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((value) => Math.max(0, value - 1))}
            className="inline-flex h-11 items-center justify-center border border-ledger-ink px-6 font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((value) => Math.min(STEPS.length - 1, value + 1))}
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            {step === STEPS.length - 1 ? "Finish" : "Continue"}
          </button>
        </div>
      </div>
    </section>
  );
}
