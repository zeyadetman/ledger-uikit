"use client";

import { useState } from "react";

export function NotificationPreferences01() {
  const topics = [
    "Invoice ready",
    "Usage threshold",
    "Weekly digest",
    "Product updates",
  ];
  const [values, setValues] = useState([
    [true, true],
    [true, true],
    [true, false],
    [false, false],
  ]);
  const [saved, setSaved] = useState(false);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          communication / notification-preferences-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Notification preferences
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          Per-topic email and in-app notification controls.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="max-w-2xl">
          <div className="grid grid-cols-[1fr_60px_60px] gap-3 border-b border-ledger-ink pb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              Topic
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted text-center">
              Email
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted text-center">
              In app
            </span>
          </div>
          {topics.map((topic, row) => (
            <div
              key={topic}
              className="grid grid-cols-[1fr_60px_60px] items-center gap-3 border-b border-ledger-rule py-5"
            >
              <h3 className="text-sm font-bold">{topic}</h3>
              {["Email", "In app"].map((channel, column) => (
                <label key={channel} className="text-center">
                  <span className="sr-only">
                    {topic}: {channel}
                  </span>
                  <input
                    type="checkbox"
                    checked={values[row][column]}
                    onChange={() => {
                      setValues(
                        values.map((channels, i) =>
                          i === row
                            ? channels.map((value, j) =>
                                j === column ? !value : value
                              )
                            : channels
                        )
                      );
                      setSaved(false);
                    }}
                    className="h-4 w-4 accent-ledger-ink"
                  />
                </label>
              ))}
            </div>
          ))}
          <p className="text-[15px] leading-relaxed text-ledger-muted mt-5">
            Security alerts are always delivered to the account owner.
          </p>
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-5"
            onClick={() => setSaved(true)}
          >
            Save preferences
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-3"
          >
            {saved
              ? "Preferences saved in this demo."
              : "Choose where routine updates reach you."}
          </p>
        </div>
      </div>
    </section>
  );
}
