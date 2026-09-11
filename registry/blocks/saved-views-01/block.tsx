"use client";

import { useState } from "react";

export function SavedViews01() {
  const [views, setViews] = useState([
    "All posted events",
    "September close",
    "High-volume customers",
  ]);
  const [selected, setSelected] = useState("All posted events");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          data / saved-views-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Saved views</h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A saved query list with selection and creation of named views.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="flex flex-col items-start gap-3 sm:flex-row sm:items-end"
          onSubmit={(event) => {
            event.preventDefault();
            const title = name.trim();
            if (!title || views.includes(title)) {
              setMessage("Enter a unique view name.");
              return;
            }
            setViews([...views, title]);
            setSelected(title);
            setName("");
            setMessage(`${title} saved in this demo.`);
          }}
        >
          <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted w-full sm:max-w-sm">
            Name the current view
            <input
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
              required
              maxLength={60}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="High-volume customers"
            />
          </label>
          <button
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            type="submit"
          >
            Save view
          </button>
        </form>
        <p className="font-mono tabular-nums mt-4 text-xs text-ledger-muted">
          Current query: status = posted · period = September
        </p>
        <ul className="mt-6">
          {views.map((view) => (
            <li
              key={view}
              className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
            >
              <button
                type="button"
                aria-pressed={selected === view}
                onClick={() => {
                  setSelected(view);
                  setMessage(`${view} selected.`);
                }}
                className="ledger-link text-left font-bold"
              >
                {view}
              </button>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                {view === selected ? "Active" : "Saved"}
              </span>
            </li>
          ))}
        </ul>
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted mt-4"
        >
          {message}
        </p>
      </div>
    </section>
  );
}
