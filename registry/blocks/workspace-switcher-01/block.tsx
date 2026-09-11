"use client";

import { useState } from "react";

export function WorkspaceSwitcher01() {
  const [selected, setSelected] = useState("Northstar / Production");
  const [query, setQuery] = useState("");
  const matches = [
    "Northstar / Production",
    "Northstar / Sandbox",
    "Acme / Finance",
  ].filter((name) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          app / workspace-switcher-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Workspace switcher
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A compact workspace picker with filtering and an explicit current
          selection.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="max-w-xl border border-ledger-ink">
          <div className="border-b border-ledger-rule p-5">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              Current workspace
            </p>
            <p role="status" className="mt-2 text-2xl font-bold">
              {selected}
            </p>
            <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted mt-6 block">
              Search workspaces
              <input
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
          <div className="p-2">
            {matches.map((name) => (
              <button
                type="button"
                key={name}
                aria-pressed={selected === name}
                onClick={() => setSelected(name)}
                className="flex w-full items-center justify-between gap-3 p-3 text-left hover:bg-ledger-rule focus-visible:outline-2 focus-visible:outline-ledger-signal"
              >
                <span>{name}</span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                  {selected === name ? "Selected" : "Switch"}
                </span>
              </button>
            ))}
            {matches.length === 0 && (
              <p className="text-[15px] leading-relaxed text-ledger-muted p-3">
                No workspace matches your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
