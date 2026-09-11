"use client";

import { useState } from "react";

export function Webhooks01() {
  const [endpoint, setEndpoint] = useState("https://example.com/hooks/ledger");
  const [result, setResult] = useState("");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          app / webhooks-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Webhook endpoints
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          An endpoint inspector with an editable URL and a simulated delivery
          test.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="grid gap-8 md:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setResult(
              `Demo delivery accepted by ${endpoint}. HTTP 200 · 142 ms.`
            );
          }}
        >
          <div>
            <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted block">
              Endpoint URL
              <input
                type="url"
                required
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                value={endpoint}
                onChange={(event) => {
                  setEndpoint(event.target.value);
                  setResult("");
                }}
              />
            </label>
            <fieldset className="mt-6 space-y-3">
              <legend className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted mb-3">
                Subscribed events
              </legend>
              {["invoice.closed", "meter.updated", "payment.failed"].map(
                (name) => (
                  <label key={name} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 accent-ledger-ink"
                    />
                    <span className="font-mono tabular-nums text-sm">
                      {name}
                    </span>
                  </label>
                )
              )}
            </fieldset>
            <button
              className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6"
              type="submit"
            >
              Send test event
            </button>
          </div>
          <div className="text-[15px] leading-relaxed text-ledger-mutedANEL min-w-0">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              Example payload
            </p>
            <pre className="font-mono tabular-nums mt-4 overflow-x-auto text-xs leading-6">
              {JSON.stringify(
                {
                  type: "invoice.closed",
                  id: "evt_1042",
                  data: { invoice: "INV-028", currency: "USD", amount: 4800 },
                },
                null,
                2
              )}
            </pre>
          </div>
        </form>
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted mt-5 break-words"
        >
          {result || "Test deliveries are simulated locally."}
        </p>
      </div>
    </section>
  );
}
