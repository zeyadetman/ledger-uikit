import { Activity, FileText, Gauge, Lock, Radio, Scale } from "lucide-react";

const FEATURES = [
  {
    index: "01",
    icon: Radio,
    title: "Event ingest",
    copy: "Post usage as it happens. Idempotent keys, late arrivals, and replay without rewriting history.",
  },
  {
    index: "02",
    icon: Gauge,
    title: "Meter catalog",
    copy: "Name the units that matter: seats, tokens, GB-hours. Version a meter without breaking old invoices.",
  },
  {
    index: "03",
    icon: Scale,
    title: "Rating engine",
    copy: "Tiers, commitments, and overage on a single tape. No hidden multipliers in a spreadsheet.",
  },
  {
    index: "04",
    icon: FileText,
    title: "Invoice ledger",
    copy: "Every line traces back to events. Finance can audit at 2am without asking engineering.",
  },
  {
    index: "05",
    icon: Lock,
    title: "Entitlements",
    copy: "Hard caps and soft warnings from the same source of truth that prints the bill.",
  },
  {
    index: "06",
    icon: Activity,
    title: "Drift watch",
    copy: "When rated usage diverges from posted events, the console flags it in signal red.",
  },
];

export function Features01() {
  return (
    <section
      id="product"
      className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink"
    >
      <div className="flex flex-col gap-2 border-b border-ledger-ink px-4 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Instrument set
          </p>
          <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
            The tape,
            <br />
            not the vibe.
          </h2>
        </div>
        <p className="max-w-sm text-[15px] text-ledger-muted">
          Six surfaces. No illustrations. If a number cannot be traced, it does
          not ship.
        </p>
      </div>
      <div className="grid grid-cols-1 border-l border-ledger-rule md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.index}
            className="border-r border-b border-ledger-rule p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted tabular-nums">
                {feature.index}
              </span>
              <feature.icon
                className="h-4 w-4 text-ledger-ink"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="mb-3 font-sans text-lg font-bold tracking-tight uppercase">
              {feature.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-ledger-muted">
              {feature.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
