"use client";

import { useState } from "react";

export function KeyboardShortcuts01() {
  const [query, setQuery] = useState("");
  const matches = [
    ["Open command menu", "⌘ K"],
    ["Search records", "/"],
    ["Go to dashboard", "G D"],
    ["Create a meter", "C M"],
    ["Close panel", "Esc"],
    ["Save changes", "⌘ S"],
  ].filter(([command]) => command.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          system / keyboard-shortcuts-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Keyboard shortcuts
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A searchable reference of keyboard commands used in the workspace.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted block max-w-md">
          Find a command
          <input
            type="search"
            className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search shortcuts"
          />
        </label>
        <dl className="mt-6 max-w-2xl">
          {matches.map(([command, keys]) => (
            <div
              key={command}
              className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
            >
              <dt>{command}</dt>
              <dd className="flex gap-2">
                {keys.split(" ").map((key) => (
                  <kbd
                    key={key}
                    className="font-mono tabular-nums min-w-8 border border-ledger-ink px-2 py-1 text-center text-xs"
                  >
                    {key}
                  </kbd>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted mt-4"
        >
          {matches.length
            ? "Reference only. Bind these commands in your application."
            : "No commands found."}
        </p>
      </div>
    </section>
  );
}
