"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ITEMS = [
  {
    id: "01",
    q: "What counts as an event?",
    a: "Anything you post to ingest with an idempotency key: a token, a seat-day, a GB-hour. If it can be rated, it is an event.",
  },
  {
    id: "02",
    q: "Can we change a meter after invoices closed?",
    a: "You version the meter. Old invoices stay on the tape under the version they were rated on. New events use the new catalog.",
  },
  {
    id: "03",
    q: "How late can usage arrive?",
    a: "Late arrivals are accepted and marked. They land on the next close unless you open a prior period — that write is audited.",
  },
  {
    id: "04",
    q: "Do you store raw payloads forever?",
    a: "The tape retains 13 months on Floor. Exchange can pin longer. Exports are yours; we do not mine them.",
  },
  {
    id: "05",
    q: "What happens when rating drifts?",
    a: "Drift watch flags the window in signal red, freezes the invoice line, and waits for an operator. No silent repair.",
  },
];

export function Faq01() {
  const [open, setOpen] = useState("01");

  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-ledger-ink p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-8">
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk notes
          </p>
          <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-4xl">
            Questions
            <br />
            from close.
          </h2>
        </div>
        <div className="lg:col-span-8">
          {ITEMS.map((item) => {
            const expanded = open === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-ledger-rule last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? "" : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left md:px-6"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted tabular-nums">
                      {item.id}
                    </span>
                    <span className="font-sans text-[15px] font-bold tracking-tight uppercase">
                      {item.q}
                    </span>
                  </span>
                  {expanded ? (
                    <Minus className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  )}
                </button>
                {expanded ? (
                  <p className="px-4 pb-5 text-[15px] leading-relaxed text-ledger-muted md:pl-[3.25rem] md:pr-6">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
