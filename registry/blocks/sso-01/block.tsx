"use client";

import { useState } from "react";

export function Sso01() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          auth / sso-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">SSO sign in</h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          An organization email entry point for enterprise single sign-on.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="mx-auto max-w-md border border-ledger-ink p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(
              `SSO discovery preview for ${email.split("@")[1]}. Connect your identity provider to continue in production.`
            );
          }}
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Organization access
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight">
            One identity.
            <br />
            Every desk.
          </h3>
          <label className="mt-6 block font-bold">
            Work email
            <input
              required
              type="email"
              autoComplete="email"
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal"
              placeholder="operator@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6 w-full"
          >
            Continue with SSO
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-5 break-words"
          >
            {message ||
              "Your organization manages access through its identity provider."}
          </p>
        </form>
      </div>
    </section>
  );
}
