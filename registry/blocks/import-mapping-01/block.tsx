"use client";

import { useState } from "react";

export function ImportMapping01() {
  const [mapping, setMapping] = useState(["event_id", "customer_id", "units"]);
  const [message, setMessage] = useState("");
  const samples: Record<string, string> = {
    event_id: "evt_1042",
    customer_id: "cus_northstar",
    units: "240",
  };
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          onboarding / import-mapping-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Import column mapping
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A CSV column-mapping step before importing historical usage.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(
              new Set(mapping).size === mapping.length
                ? "Mapping validated. Three sample rows are ready for import."
                : "Each source column can only be assigned once."
            );
          }}
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted mb-5">
            usage-september.csv / Sample columns
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {["Event identifier", "Customer identifier", "Quantity"].map(
              (field, index) => (
                <label
                  key={field}
                  className="text-[15px] leading-relaxed text-ledger-mutedANEL block font-bold"
                >
                  {field}
                  <select
                    className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                    value={mapping[index]}
                    onChange={(event) => {
                      setMapping(
                        mapping.map((value, i) =>
                          i === index ? event.target.value : value
                        )
                      );
                      setMessage("");
                    }}
                  >
                    {["event_id", "customer_id", "units"].map((column) => (
                      <option key={column}>{column}</option>
                    ))}
                  </select>
                  <span className="font-mono tabular-nums mt-4 block text-xs text-ledger-muted">
                    Sample: {samples[mapping[index]]}
                  </span>
                </label>
              )
            )}
          </div>
          <button
            type="submit"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6"
          >
            Validate mapping
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-4"
          >
            {message || "Preview only. No file is uploaded by this block."}
          </p>
        </form>
      </div>
    </section>
  );
}
