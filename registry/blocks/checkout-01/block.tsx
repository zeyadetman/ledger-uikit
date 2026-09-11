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
          billing / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Checkout summary
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A plan checkout with billing frequency, coupon validation, and an
          order summary.
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
              ? "Loading checkout summary…"
              : phase === "empty"
                ? "No checkout summary yet"
                : "Unable to load checkout summary"}
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

export function Checkout01({ state = "default" }: { state?: BlockState }) {
  const [plan, setPlan] = useState("Growth");
  const [annual, setAnnual] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(false);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const monthly = plan === "Starter" ? 29 : 79;
  const subtotal = monthly * (annual ? 10 : 1);
  const saving = discount ? subtotal * 0.2 : 0;
  const total = subtotal - saving;
  const money = (n: number) => `$${n.toFixed(2)}`;
  return (
    <Frame state={state}>
      {done ? (
        <div role="status" className="border border-ledger-rule p-6">
          <h3 className="text-2xl font-bold">Sample order created</h3>
          <p className="mt-3">
            {plan} · {annual ? "Annual" : "Monthly"} · {money(total)}
          </p>
          <p className="mt-3 text-ledger-muted">
            No payment was collected and no email was sent. Connect your payment
            provider to complete real purchases.
          </p>
          <button className={`${control} mt-5`} onClick={() => setDone(false)}>
            Edit order
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <fieldset>
              <legend className="mb-3 font-semibold">Choose a plan</legend>
              {["Starter", "Growth"].map((p) => (
                <label
                  key={p}
                  className="mb-3 flex min-h-14 items-center justify-between gap-3 border border-ledger-rule p-4"
                >
                  <span>
                    <input
                      type="radio"
                      name="checkout-plan"
                      checked={plan === p}
                      onChange={() => setPlan(p)}
                      className="mr-2"
                    />
                    {p}
                  </span>
                  <span className="font-mono tabular-nums">
                    ${p === "Starter" ? 29 : 79}/mo
                  </span>
                </label>
              ))}
            </fieldset>
            <label className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={annual}
                onChange={(e) => setAnnual(e.target.checked)}
              />
              Annual billing · pay for 10 months
            </label>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                const valid = coupon.trim().toUpperCase() === "LAUNCH20";
                setDiscount(valid);
                setNotice(
                  valid
                    ? "20% discount applied."
                    : "Code not recognized. Try LAUNCH20.",
                );
              }}
            >
              <label className="block text-sm">
                Coupon code
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className={`${control} mt-2 w-full`}
                  placeholder="Try LAUNCH20"
                />
              </label>
              <button className={`${control} mt-3`}>Apply coupon</button>
              <p role="status" className="mt-3 text-sm">
                {notice}
              </p>
            </form>
          </div>
          <form
            className="border border-ledger-rule p-5"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h3 className="text-xl font-bold">Order summary</h3>
            <dl className="my-5 space-y-3">
              {[
                [`${plan} / ${annual ? "year" : "month"}`, money(subtotal)],
                ["Discount", `−${money(saving)}`],
                ["Demo tax", money(0)],
                ["Total", money(total)],
              ].map(([label, value]) => (
                <div
                  className="flex justify-between gap-3 border-b border-ledger-rule pb-3"
                  key={label}
                >
                  <dt>{label}</dt>
                  <dd className="font-mono tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
            <label className="block text-sm">
              Receipt email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${control} mt-2 w-full`}
              />
            </label>
            <button className={`${action} mt-5 w-full`}>
              Create sample order
            </button>
            <p className="mt-3 text-sm text-ledger-muted">
              Demo only. No payment details are requested. Taxes and recurring
              billing must be calculated by your payment service.
            </p>
          </form>
        </div>
      )}
    </Frame>
  );
}
