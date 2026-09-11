"use client";

import { useState } from "react";

const REASONS = [
  { id: "volume", label: "Volume too low to justify Floor" },
  { id: "rating", label: "Rating did not match our contracts" },
  { id: "migrate", label: "Moving ingest in-house" },
  { id: "other", label: "Other — I will write it" },
];

export function CancelReason01() {
  const [reason, setReason] = useState("volume");

  return (
    <section className="flex min-h-[560px] w-full items-center justify-center bg-ledger-paper p-4 text-ledger-ink">
      <form className="w-full max-w-lg border border-ledger-ink p-6 md:p-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
          Cancel Floor
        </p>
        <h2 className="mb-3 font-sans text-2xl font-bold tracking-tight uppercase">
          Why are you leaving
          <br />
          the desk?
        </h2>
        <p className="mb-8 text-[15px] text-ledger-muted">
          Access continues through 1 Sep 2026. Invoices already closed stay on
          the tape.
        </p>
        <fieldset className="mb-8 space-y-0">
          <legend className="sr-only">Cancellation reason</legend>
          {REASONS.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-start gap-3 border-b border-ledger-rule py-3"
            >
              <input
                type="radio"
                name="reason"
                value={item.id}
                checked={reason === item.id}
                onChange={() => setReason(item.id)}
                className="mt-1 accent-ledger-ink"
              />
              <span className="text-[15px]">{item.label}</span>
            </label>
          ))}
        </fieldset>
        {reason === "other" ? (
          <textarea
            rows={3}
            placeholder="Write the reason as you would to finance."
            className="mb-6 w-full border border-ledger-rule bg-transparent px-3 py-2 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex h-11 flex-1 items-center justify-center border border-ledger-signal bg-ledger-signal font-mono text-sm font-bold tracking-widest text-white uppercase hover:bg-transparent hover:text-ledger-signal"
          >
            Confirm cancel
          </button>
          <button
            type="button"
            className="inline-flex h-11 flex-1 items-center justify-center border border-ledger-ink font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Keep Floor
          </button>
        </div>
      </form>
    </section>
  );
}
