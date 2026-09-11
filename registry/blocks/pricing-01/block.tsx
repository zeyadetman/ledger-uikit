import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Desk",
    price: "0",
    period: "sandbox",
    note: "For instrumentation before the first invoice.",
    features: ["1 workspace", "100k events / mo", "2 meters", "7-day tape"],
    cta: "Open sandbox",
    featured: false,
  },
  {
    name: "Floor",
    price: "249",
    period: "/ mo",
    note: "The operating plan. Most ledgers live here.",
    features: [
      "Unlimited meters",
      "25M events / mo",
      "Rated invoices",
      "SSO + audit log",
    ],
    cta: "Start Floor",
    featured: true,
  },
  {
    name: "Exchange",
    price: "Custom",
    period: "",
    note: "Dedicated rating, VPC, and a named operator.",
    features: [
      "Custom volume",
      "Sub-hour close",
      "Contracted entitlements",
      "On-call rating desk",
    ],
    cta: "Talk to desk",
    featured: false,
  },
];

export function Pricing01() {
  return (
    <section
      id="pricing"
      className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink"
    >
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Rate card
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          Pay for the
          <br />
          close, not the chrome.
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col border-b border-ledger-ink p-6 lg:border-r lg:border-b-0 lg:last:border-r-0 ${
              plan.featured ? "bg-ledger-ink text-ledger-paper" : ""
            }`}
          >
            <div className="mb-8 flex items-baseline justify-between">
              <h3 className="font-mono text-xs font-bold tracking-widest uppercase">
                {plan.name}
              </h3>
              {plan.featured ? (
                <span className="bg-ledger-signal px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-white uppercase">
                  In use
                </span>
              ) : null}
            </div>
            <p className="mb-1 font-mono text-5xl font-bold tracking-tighter tabular-nums">
              {plan.price === "Custom" ? (
                "Custom"
              ) : (
                <>
                  <span className="text-2xl">$</span>
                  {plan.price}
                </>
              )}
            </p>
            <p
              className={`mb-6 font-mono text-[11px] tracking-widest uppercase ${
                plan.featured ? "text-ledger-paper/70" : "text-ledger-muted"
              }`}
            >
              {plan.period || "on request"}
            </p>
            <p
              className={`mb-8 text-[15px] ${
                plan.featured ? "text-ledger-paper/80" : "text-ledger-muted"
              }`}
            >
              {plan.note}
            </p>
            <ul className="mb-10 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 font-mono text-[12px] tracking-wide uppercase"
                >
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#start"
              className={`inline-flex h-11 items-center justify-center border px-6 font-mono text-sm font-bold tracking-widest uppercase ${
                plan.featured
                  ? "border-ledger-paper bg-ledger-paper text-ledger-ink hover:bg-transparent hover:text-ledger-paper"
                  : "border-ledger-ink bg-ledger-ink text-ledger-paper hover:bg-transparent hover:text-ledger-ink"
              }`}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
