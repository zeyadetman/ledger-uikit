"use client";

import { useState } from "react";

export function SupportTicket01() {
  const [sent, setSent] = useState(false);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          communication / support-ticket-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Support ticket
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A support request form with topic, priority, and a local submission
          receipt.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="grid gap-8 md:grid-cols-[2fr_1fr]"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          onChange={() => setSent(false)}
        >
          <div className="space-y-5">
            <label className="block font-bold">
              Subject
              <input
                required
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                placeholder="What needs attention?"
                maxLength={120}
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block font-bold">
                Topic
                <select className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal">
                  <option>Event ingestion</option>
                  <option>Billing & invoices</option>
                  <option>Workspace access</option>
                </select>
              </label>
              <label className="block font-bold">
                Priority
                <select className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal">
                  <option>Normal / Question</option>
                  <option>High / Work blocked</option>
                  <option>Urgent / Production down</option>
                </select>
              </label>
            </div>
            <label className="block font-bold">
              Details
              <textarea
                required
                rows={5}
                className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
                placeholder="Include the affected resource, expected result, and what happened."
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
            >
              Submit request
            </button>
            <p
              role="status"
              className="text-[15px] leading-relaxed text-ledger-muted"
            >
              {sent
                ? "Demo ticket SUP-1042 created. No request was sent."
                : "Do not include API keys or passwords."}
            </p>
          </div>
          <aside className="border-l border-ledger-rule pl-5">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              The support desk
            </p>
            <h3 className="mt-4 text-2xl font-bold">Give us the evidence.</h3>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-3">
              An event ID and timestamp help us trace the problem. Describe the
              impact so the desk can prioritize the right work.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}
