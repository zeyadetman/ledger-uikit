const ENTRIES = [
  {
    version: "14.2",
    date: "2026-08-12",
    tag: "Floor",
    items: [
      "Late-arrival window visible on the event tape.",
      "Invoice PDF now prints meter version beside each line.",
    ],
  },
  {
    version: "14.1",
    date: "2026-07-28",
    tag: "Rating",
    items: [
      "Commitments can stack on a single customer without a second meter.",
      "Drift watch pages the desk instead of auto-reconciling.",
    ],
  },
  {
    version: "14.0",
    date: "2026-06-30",
    tag: "Ingest",
    items: [
      "Idempotency keys accepted for 72 hours.",
      "Collector retry budget raised to 8 on Floor.",
    ],
  },
];

export function Changelog01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Paper trail
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          What shipped.
        </h2>
      </div>
      <ol>
        {ENTRIES.map((entry) => (
          <li
            key={entry.version}
            className="grid grid-cols-1 border-b border-ledger-rule last:border-b-0 md:grid-cols-12"
          >
            <div className="flex items-baseline justify-between gap-3 border-b border-ledger-rule px-4 py-5 md:col-span-3 md:block md:border-r md:border-b-0 md:px-8">
              <p className="font-mono text-xl font-bold tabular-nums">
                {entry.version}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
                {entry.date}
              </p>
            </div>
            <div className="px-4 py-5 md:col-span-9 md:px-8">
              <span className="mb-3 inline-flex border border-ledger-ink px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase">
                {entry.tag}
              </span>
              <ul className="mt-3 flex flex-col gap-2">
                {entry.items.map((item) => (
                  <li key={item} className="text-[15px] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
