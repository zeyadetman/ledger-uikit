"use client";

import { useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";
const control =
  "min-h-11 border border-ledger-rule bg-ledger-paper px-3 py-2 text-sm text-ledger-ink disabled:opacity-40";
const action =
  "min-h-11 border border-ledger-ink bg-ledger-ink px-4 py-2 text-sm font-semibold text-ledger-paper disabled:opacity-40";
function Frame({
  state,
  children,
}: {
  state: BlockState;
  children: React.ReactNode;
}) {
  const [recovered, setRecovered] = useState(false);
  const phase = recovered ? "default" : state;
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink font-sans">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-ledger-muted">
          app / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Customer directory
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A searchable customer directory with owners, account status, and
          details.
        </p>
      </header>
      {phase === "default" ? (
        <div className="p-5 sm:p-8">{children}</div>
      ) : (
        <div
          className="p-5 sm:p-8"
          role={phase === "error" ? "alert" : "status"}
        >
          <h3 className="text-xl font-semibold">
            {phase === "loading"
              ? "Loading customer directory…"
              : phase === "empty"
                ? "No customer directory yet"
                : "Unable to load customer directory"}
          </h3>
          <p className="mt-3 text-ledger-muted">
            {phase === "error"
              ? "Your work is safe. Try the sample again."
              : phase === "empty"
                ? "Start with sample data to explore this workflow."
                : "Preparing your workspace. You can load the sample now."}
          </p>
          {phase === "loading" && (
            <div aria-hidden="true" className="my-6 space-y-3">
              <div className="h-6 w-2/3 bg-ledger-rule" />
              <div className="h-16 bg-ledger-rule" />
              <div className="h-6 w-1/2 bg-ledger-rule" />
            </div>
          )}
          <button
            className={`${action} mt-5`}
            onClick={() => setRecovered(true)}
          >
            {phase === "error" ? "Retry sample" : "Load sample"}
          </button>
        </div>
      )}
    </section>
  );
}

const customers = [
  {
    id: "CUS-104",
    name: "Northstar",
    contact: "Maya Chen",
    email: "maya@example.com",
    owner: "Alex",
    status: "Active",
    plan: "Growth",
    spend: 249,
  },
  {
    id: "CUS-105",
    name: "Fieldwork",
    contact: "Omar Ali",
    email: "omar@example.com",
    owner: "You",
    status: "Trial",
    plan: "Starter",
    spend: 0,
  },
  {
    id: "CUS-106",
    name: "Orbit Studio",
    contact: "Sam Rivera",
    email: "sam@example.com",
    owner: "Maya",
    status: "Active",
    plan: "Business",
    spend: 599,
  },
  {
    id: "CUS-107",
    name: "Forma",
    contact: "Jules Park",
    email: "jules@example.com",
    owner: "Alex",
    status: "Paused",
    plan: "Growth",
    spend: 0,
  },
];
export function Customers01({ state = "default" }: { state?: BlockState }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = customers.filter(
    (c) =>
      (status === "All" || c.status === status) &&
      `${c.name} ${c.contact} ${c.email}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const customer = customers.find((c) => c.id === selected);
  return (
    <Frame state={state}>
      <div className="mb-6 flex flex-wrap gap-3">
        <input
          type="search"
          aria-label="Search customers"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${control} min-w-0 flex-1`}
          placeholder="Search company, contact, or email"
        />
        <select
          aria-label="Customer status"
          className={control}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {["All", "Active", "Trial", "Paused"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <p role="status" className="mb-4 text-sm text-ledger-muted">
        {filtered.length} customers
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              aria-pressed={selected === c.id}
              className={`mb-3 flex w-full flex-wrap justify-between gap-3 border p-4 text-left ${selected === c.id ? "border-ledger-ink bg-ledger-rule/30" : "border-ledger-rule"}`}
            >
              <span>
                <strong className="block">{c.name}</strong>
                <span className="text-sm text-ledger-muted">
                  {c.contact} · Owner: {c.owner}
                </span>
              </span>
              <span className="font-mono text-xs">
                {c.status} / {c.plan}
              </span>
            </button>
          ))}
          {!filtered.length && (
            <div className="border border-ledger-rule p-6">
              <p>No customers match these filters.</p>
              <button
                className={`${control} mt-4`}
                onClick={() => {
                  setQuery("");
                  setStatus("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
        <aside
          className="border border-ledger-rule p-5"
          aria-label="Customer details"
        >
          {customer ? (
            <>
              <p className="font-mono text-xs text-ledger-muted">
                {customer.id}
              </p>
              <h3 className="mt-3 text-xl font-bold">{customer.name}</h3>
              <dl className="mt-5 space-y-4">
                {[
                  ["Contact", customer.contact],
                  ["Email", customer.email],
                  ["Owner", customer.owner],
                  ["Monthly spend", `$${customer.spend}`],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs text-ledger-muted">{label}</dt>
                    <dd className="mt-1 break-words">{value}</dd>
                  </div>
                ))}
              </dl>
              <button
                className={`${control} mt-5`}
                onClick={() => setSelected(null)}
              >
                Close details
              </button>
            </>
          ) : (
            <p className="text-ledger-muted">
              Choose a customer to see their account details.
            </p>
          )}
        </aside>
      </div>
    </Frame>
  );
}
