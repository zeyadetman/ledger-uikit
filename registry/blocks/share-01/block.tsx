"use client";

import { useState } from "react";

export function Share01() {
  const [copied, setCopied] = useState(false);
  const link = "https://desk.fathom.ledger/inv/1044?view=finance";

  async function copy() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="flex min-h-[420px] w-full items-center justify-center bg-ledger-paper p-4 text-ledger-ink">
      <div className="w-full max-w-lg border border-ledger-ink p-6 md:p-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Share · INV-1044
        </p>
        <h2 className="mb-6 font-sans text-2xl font-bold tracking-tight uppercase">
          Link + permission
        </h2>
        <label className="mb-5 block">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            URL
          </span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              readOnly
              value={link}
              className="h-11 flex-1 border border-ledger-rule bg-transparent px-3 font-mono text-[12px] focus-visible:outline-none"
            />
            <button
              type="button"
              onClick={copy}
              className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            Permission
          </span>
          <select className="h-11 w-full border border-ledger-rule bg-ledger-paper px-3 font-mono text-[12px] font-bold tracking-widest uppercase">
            <option>Finance · read invoices</option>
            <option>Operator · read + comment</option>
            <option>Owner · write</option>
          </select>
        </label>
        <p className="mt-4 font-mono text-[11px] text-ledger-muted">
          Link dies in 7 days. No public index.
        </p>
      </div>
    </section>
  );
}
