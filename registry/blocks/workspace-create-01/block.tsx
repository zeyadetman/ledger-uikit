"use client";

import { useState } from "react";

export function WorkspaceCreate01() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("EU / Frankfurt");
  const [timezone, setTimezone] = useState("UTC");
  const [message, setMessage] = useState("");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          onboarding / workspace-create-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Create workspace
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A first-run form for the workspace name, region, and reporting
          timezone.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="max-w-xl space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(
              `${name} is ready in this demo. Region: ${region}. Reporting timezone: ${timezone}.`
            );
          }}
        >
          <label className="block font-bold">
            Workspace name
            <input
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
              required
              maxLength={80}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Northstar Finance"
            />
          </label>
          <label className="block font-bold">
            Data region
            <select
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            >
              <option>EU / Frankfurt</option>
              <option>US / Virginia</option>
              <option>AP / Singapore</option>
            </select>
          </label>
          <label className="block font-bold">
            Reporting timezone
            <select
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
              value={timezone}
              onChange={(event) => setTimezone(event.target.value)}
            >
              <option>UTC</option>
              <option>Africa/Cairo</option>
              <option>Europe/London</option>
              <option>America/New_York</option>
            </select>
          </label>
          <p className="text-[15px] leading-relaxed text-ledger-muted">
            The reporting timezone defines daily close boundaries. Choose the
            one your finance team uses.
          </p>
          <button
            type="submit"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
          >
            Create workspace
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
