"use client";

import { useState } from "react";

export function LaunchChecklist01() {
  const tasks = [
    ["Connect production", "Verify that live events reach the ledger."],
    ["Review the rate card", "Confirm units, currency, and effective dates."],
    ["Invite a second operator", "Make sure the desk has a backup owner."],
    ["Run a sample close", "Compare a draft invoice against source usage."],
  ];
  const [checked, setChecked] = useState<number[]>([0]);
  const [launched, setLaunched] = useState(false);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          onboarding / launch-checklist-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Launch checklist
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A production readiness checklist with an explicit completion gate.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="max-w-2xl">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-bold">Before the first close</h3>
            <span className="font-mono tabular-nums">
              {checked.length} / {tasks.length}
            </span>
          </div>
          <progress
            className="mt-4 h-2 w-full accent-ledger-ink"
            aria-label="Launch readiness"
            max={tasks.length}
            value={checked.length}
          />
          <ul className="mt-5">
            {tasks.map(([title, copy], index) => (
              <li key={title} className="border-b border-ledger-rule py-5">
                <label className="flex items-start gap-4">
                  <input
                    className="mt-1 h-4 w-4 shrink-0 accent-ledger-ink"
                    type="checkbox"
                    checked={checked.includes(index)}
                    onChange={(event) => {
                      setChecked(
                        event.target.checked
                          ? [...checked, index]
                          : checked.filter((value) => value !== index)
                      );
                      setLaunched(false);
                    }}
                  />
                  <span>
                    <span className="block font-bold">{title}</span>
                    <span className="text-[15px] leading-relaxed text-ledger-muted mt-1 block">
                      {copy}
                    </span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6"
            disabled={checked.length !== tasks.length}
            onClick={() => setLaunched(true)}
          >
            Launch workspace
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-4"
          >
            {launched
              ? "Workspace launched in this demo."
              : "Complete every check to enable launch."}
          </p>
        </div>
      </div>
    </section>
  );
}
