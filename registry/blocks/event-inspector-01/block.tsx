"use client";

import { useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";

export function EventInspector01({
  state = "default",
}: {
  state?: BlockState;
}) {
  const [tab, setTab] = useState("Overview");
  const record = {
    event_id: "evt_1042",
    customer_id: "cus_northstar",
    meter: "api_requests",
    quantity: 240,
    received_at: "2026-09-11T09:41:00Z",
    status: "Posted",
    source: "Production API",
    idempotency_key: "req_9b72a",
  };
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          data / event-inspector-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Event inspector
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          An individual event record with structured metadata and a raw JSON
          view.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading event inspector…
          </p>
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="h-12 border border-ledger-rule bg-ledger-rule/30"
            />
          ))}
        </div>
      ) : state === "empty" ? (
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted p-5 sm:p-8"
        >
          Select an event from the tape to inspect its fields.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Event view"
            >
              {["Overview", "Raw JSON"].map((view) => (
                <button
                  key={view}
                  type="button"
                  className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
                  aria-pressed={tab === view}
                  onClick={() => setTab(view)}
                >
                  {view}
                </button>
              ))}
            </div>
            <div className="mt-5 border border-ledger-ink p-5">
              {tab === "Overview" ? (
                <dl className="grid gap-5 sm:grid-cols-2">
                  {Object.entries(record).map(([key, value]) => (
                    <div key={key} className="min-w-0">
                      <dt className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                        {key.replaceAll("_", " ")}
                      </dt>
                      <dd className="font-mono tabular-nums mt-2 break-words text-sm">
                        {String(value)}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <pre className="font-mono tabular-nums overflow-x-auto text-xs leading-6">
                  {JSON.stringify(record, null, 2)}
                </pre>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
