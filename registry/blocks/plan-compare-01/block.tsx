const PLANS = [
  {
    name: "Desk",
    price: "$0",
    note: "Sandbox only",
    current: false,
    points: ["100k events", "2 meters", "7-day tape"],
  },
  {
    name: "Floor",
    price: "$249",
    note: "Current plan",
    current: true,
    points: ["25M events", "Unlimited meters", "SSO + audit"],
  },
  {
    name: "Exchange",
    price: "Custom",
    note: "On request",
    current: false,
    points: ["Custom volume", "Sub-hour close", "Named operator"],
  },
];

export function PlanCompare01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Subscription
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Change plan
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col border-b border-ledger-ink p-6 lg:border-r lg:border-b-0 lg:last:border-r-0 ${
              plan.current ? "bg-ledger-ink text-ledger-paper" : ""
            }`}
          >
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-mono text-xs font-bold tracking-widest uppercase">
                {plan.name}
              </h3>
              {plan.current ? (
                <span className="bg-ledger-signal px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-white uppercase">
                  In use
                </span>
              ) : null}
            </div>
            <p className="font-mono text-4xl font-bold tracking-tighter tabular-nums">
              {plan.price}
            </p>
            <p
              className={`mt-1 mb-6 font-mono text-[11px] tracking-widest uppercase ${
                plan.current ? "text-ledger-paper/70" : "text-ledger-muted"
              }`}
            >
              {plan.note}
            </p>
            <ul className="mb-8 flex-1 space-y-2 font-mono text-[12px] tracking-wide uppercase">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <button
              type="button"
              disabled={plan.current}
              className={`inline-flex h-11 items-center justify-center border px-4 font-mono text-[11px] font-bold tracking-widest uppercase ${
                plan.current
                  ? "border-ledger-paper/40 text-ledger-paper/50"
                  : "border-ledger-ink hover:bg-ledger-ink hover:text-ledger-paper"
              }`}
            >
              {plan.current ? "Current" : `Move to ${plan.name}`}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
