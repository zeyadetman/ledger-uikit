export function Roadmap01() {
  const columns = [
    {
      stage: "Exploring",
      items: [
        [
          "Cost allocation",
          "Attribute shared infrastructure spend to the accounts using it.",
        ],
        [
          "Regional close",
          "Support separate close boundaries across operating regions.",
        ],
      ],
    },
    {
      stage: "Building",
      items: [
        [
          "Dry-run pricing",
          "Replay historical usage against a proposed rate card.",
        ],
        [
          "Scheduled exports",
          "Deliver a reconciled tape at the end of each day.",
        ],
      ],
    },
    {
      stage: "Shipped",
      items: [
        [
          "Event inspector",
          "Trace one event from receipt to its invoice line.",
        ],
        ["Workspace roles", "Separate read access from operational writes."],
      ],
    },
  ];
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          content / roadmap-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Product roadmap
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A public roadmap grouped by delivery stage.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="grid border-t border-l border-ledger-ink lg:grid-cols-3">
          {columns.map((column) => (
            <section
              key={column.stage}
              className="border-r border-b border-ledger-ink p-5"
            >
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted border-b border-ledger-rule pb-4">
                {column.stage} /{" "}
                <span className="font-mono tabular-nums">
                  {column.items.length}
                </span>
              </h3>
              {column.items.map(([title, copy]) => (
                <article
                  key={title}
                  className="border-b border-ledger-rule py-6 last:border-b-0"
                >
                  <h4 className="text-xl font-bold tracking-tight">{title}</h4>
                  <p className="text-[15px] leading-relaxed text-ledger-muted mt-3">
                    {copy}
                  </p>
                </article>
              ))}
            </section>
          ))}
        </div>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-5">
          Direction, not a delivery commitment. Priorities may change as the
          desk learns.
        </p>
      </div>
    </section>
  );
}
