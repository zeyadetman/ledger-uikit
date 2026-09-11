"use client";

import { useId, useState } from "react";

export function TwoFactor01() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const hintId = useId();
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          auth / two-factor-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Two-factor challenge
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A six-digit authenticator challenge after password verification.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <form
          className="mx-auto max-w-md border border-ledger-ink p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(
              code === "123456"
                ? "Demo verification complete."
                : "That code did not match. Try the demo code 123456."
            );
          }}
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Step 02 / Verify
          </p>
          <label className="mt-6 block font-bold">
            Authentication code
            <input
              className="mt-2 w-full min-w-0 border border-ledger-ink bg-ledger-paper px-3 py-2 text-base text-ledger-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal font-mono tabular-nums tracking-[0.3em]"
              autoComplete="one-time-code"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, ""))
              }
              aria-describedby={hintId}
            />
          </label>
          <p
            id={hintId}
            className="text-[15px] leading-relaxed text-ledger-muted mt-3"
          >
            Enter the six-digit code from your authenticator. Demo code:{" "}
            <span className="font-mono tabular-nums">123456</span>.
          </p>
          <button
            type="submit"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50 mt-6 w-full"
          >
            Verify code
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted mt-4"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
