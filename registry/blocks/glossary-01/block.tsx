"use client";

import { useState } from "react";

export function Glossary01() {
  const [query, setQuery] = useState("");
  const matches = [
    [
      "Close",
      "The point when a period of usage is reconciled and prepared for invoicing.",
    ],
    [
      "Event",
      "An immutable record of a measured action, with an identifier, timestamp, and quantity.",
    ],
    [
      "Idempotency",
      "A guarantee that receiving the same event identifier again does not count its usage twice.",
    ],
    [
      "Meter",
      "A rule that identifies which events to count and which unit to measure.",
    ],
    [
      "Rate card",
      "The versioned prices used to convert measured usage into billable amounts.",
    ],
    [
      "Reconciliation",
      "Comparing recorded usage with its source to find gaps or mismatches.",
    ],
    [
      "Settlement",
      "Applying a finalized charge or credit to an account balance.",
    ],
  ].filter((entry) =>
    entry.join(" ").toLowerCase().includes(query.toLowerCase())
  );
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          content / glossary-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Product glossary
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A searchable glossary of domain terms for product documentation.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted block max-w-md">
          Find a term
          <input
            className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try meter or close"
          />
        </label>
        <dl className="mt-8">
          {matches.map(([term, definition]) => (
            <div
              key={term}
              className="grid gap-3 border-t border-ledger-rule py-6 md:grid-cols-[200px_1fr]"
            >
              <dt className="text-xl font-bold">{term}</dt>
              <dd className="text-[15px] leading-relaxed text-ledger-muted max-w-2xl">
                {definition}
              </dd>
            </div>
          ))}
        </dl>
        <p
          role="status"
          className="font-mono tabular-nums mt-4 text-xs text-ledger-muted"
        >
          {matches.length} terms found
        </p>
      </div>
    </section>
  );
}
