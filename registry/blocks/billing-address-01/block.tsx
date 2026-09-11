"use client";

import { useState } from "react";

export function BillingAddress01() {
  const [saved, setSaved] = useState(false);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          billing / billing-address-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Billing address
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A billing identity form for invoice delivery and tax details.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="max-w-2xl"
          onSubmit={(event) => {
            event.preventDefault();
            setSaved(true);
          }}
          onChange={() => setSaved(false)}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                "Legal company name",
                "organization",
                "Northstar Finance",
                "text",
              ],
              ["Billing email", "email", "accounts@example.com", "email"],
              ["Street address", "street-address", "42 Market Street", "text"],
              ["City", "address-level2", "London", "text"],
              ["Postal code", "postal-code", "EC2A 1AA", "text"],
            ].map(([label, autocomplete, value, type]) => (
              <label key={label} className="block font-bold">
                {label}
                <input
                  className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                  type={type}
                  autoComplete={autocomplete}
                  defaultValue={value}
                  required
                />
              </label>
            ))}
            <label className="block font-bold">
              Country
              <select
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                autoComplete="country-name"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Egypt</option>
                <option>Germany</option>
              </select>
            </label>
            <label className="block font-bold sm:col-span-2">
              Tax ID{" "}
              <span className="font-normal text-ledger-muted">(optional)</span>
              <input
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal font-mono tabular-nums"
                placeholder="Tax registration number"
              />
            </label>
          </div>
          <button
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6"
            type="submit"
          >
            Save billing details
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-4"
          >
            {saved
              ? "Billing details saved in this demo."
              : "Changes apply to future invoices."}
          </p>
        </form>
      </div>
    </section>
  );
}
