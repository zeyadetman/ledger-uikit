"use client";

import { useState } from "react";

export function Integrations01() {
  const [query, setQuery] = useState("");
  const matches = [
    ["PostgreSQL", "Database", "Read usage from your existing event tables."],
    ["Snowflake", "Warehouse", "Bring rated usage into your finance models."],
    ["Stripe", "Billing", "Send reconciled totals to your invoice workflow."],
    ["Segment", "Events", "Route product events into a durable ledger."],
    ["S3", "Storage", "Archive daily exports in your own bucket."],
    ["Webhooks", "API", "Deliver signed updates to any endpoint."],
  ].filter((row) => row.join(" ").toLowerCase().includes(query.toLowerCase()));
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          marketing / integrations-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Integration directory
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A searchable directory of the systems that connect to your product.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted block max-w-md">
          Find an integration
          <input
            className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by system or category"
          />
        </label>
        <p
          role="status"
          className="font-mono tabular-nums my-5 text-xs text-ledger-muted"
        >
          {matches.length} integrations
        </p>
        <div className="grid border-t border-l border-ledger-rule sm:grid-cols-2 lg:grid-cols-3">
          {matches.map(([name, category, copy]) => (
            <article
              key={name}
              className="border-r border-b border-ledger-rule p-5"
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                {category}
              </p>
              <h3 className="mt-5 text-2xl font-bold">{name}</h3>
              <p className="text-[15px] leading-relaxed text-ledger-muted mt-3">
                {copy}
              </p>
            </article>
          ))}
        </div>
        {matches.length === 0 && (
          <p className="text-[15px] leading-relaxed text-ledger-muted">
            No matching systems. Try a category such as warehouse.
          </p>
        )}
      </div>
    </section>
  );
}
