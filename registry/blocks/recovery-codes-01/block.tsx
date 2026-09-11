"use client";

import { useState } from "react";

export function RecoveryCodes01() {
  const codes = [
    "DEMO-1042",
    "DEMO-2831",
    "DEMO-4920",
    "DEMO-5738",
    "DEMO-6104",
    "DEMO-8296",
  ];
  const [stored, setStored] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          auth / recovery-codes-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Recovery codes
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A printable backup-code sheet during two-factor enrollment.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="max-w-2xl">
          <p className="border-l-2 border-ledger-signal pl-4 text-[15px]">
            Demo codes only. Real recovery codes should be stored somewhere
            private and used once.
          </p>
          <ul className="font-mono tabular-nums mt-6 grid grid-cols-1 border-t border-l border-ledger-ink sm:grid-cols-2">
            {codes.map((code, index) => (
              <li
                key={code}
                className="flex justify-between gap-3 border-r border-b border-ledger-ink p-4"
              >
                <span className="text-ledger-muted">0{index + 1}</span>
                {code}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(codes.join("\n"));
                setMessage("Demo codes copied.");
              } catch {
                setMessage(
                  "Clipboard unavailable. Select and copy the codes above."
                );
              }
            }}
          >
            Copy codes
          </button>
          <label className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              checked={stored}
              onChange={(event) => setStored(event.target.checked)}
              className="mt-1 h-4 w-4 accent-ledger-ink"
            />
            I saved these codes in a safe place.
          </label>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-3"
          >
            {message ||
              (stored
                ? "Backup step complete in this demo."
                : "Save your codes before leaving this step.")}
          </p>
        </div>
      </div>
    </section>
  );
}
