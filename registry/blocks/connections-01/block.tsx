"use client";

import { useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";

export function Connections01({ state = "default" }: { state?: BlockState }) {
  const [sources, setSources] = useState([
    {
      name: "Production API",
      detail: "HTTPS / Signed event stream",
      active: true,
    },
    {
      name: "Warehouse import",
      detail: "PostgreSQL / Hourly sync",
      active: true,
    },
    {
      name: "Sandbox collector",
      detail: "HTTPS / Test events only",
      active: false,
    },
  ]);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          app / connections-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Connected sources
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A source connection list with local pause and resume controls.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading connected sources…
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
          No sources connected. Connect an event source to start collecting
          usage.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div>
              {sources.map((source) => (
                <article
                  key={source.name}
                  className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
                >
                  <div>
                    <h3 className="font-bold">{source.name}</h3>
                    <p className="text-[15px] leading-relaxed text-ledger-muted mt-1">
                      {source.detail}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                      {source.active ? "Receiving" : "Paused"}
                    </span>
                    <button
                      type="button"
                      className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() =>
                        setSources(
                          sources.map((item) =>
                            item.name === source.name
                              ? { ...item, active: !item.active }
                              : item
                          )
                        )
                      }
                    >
                      {source.active ? "Pause" : "Resume"}
                      <span className="sr-only"> {source.name}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p
              role="status"
              className="text-[15px] leading-relaxed text-ledger-muted mt-5"
            >
              {sources.filter((source) => source.active).length} sources
              receiving events in this demo.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
