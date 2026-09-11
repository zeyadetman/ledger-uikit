export function Process01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          marketing / process-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">How it works</h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A numbered walkthrough of the path from raw events to a reliable
          close.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <ol className="grid border-t border-l border-ledger-ink md:grid-cols-3">
          {[
            [
              "Connect the source",
              "Send usage from your API, warehouse, or a daily file. Keep the original event identifier.",
            ],
            [
              "Set the rules",
              "Define units, rates, and effective dates. Inspect a sample before a rule touches production.",
            ],
            [
              "Close with evidence",
              "Trace every invoice line back to its events. Export a complete record for finance.",
            ],
          ].map(([title, copy], index) => (
            <li key={title} className="border-r border-b border-ledger-ink p-6">
              <p className="font-mono tabular-nums text-5xl text-ledger-muted">
                0{index + 1}
              </p>
              <h3 className="mt-10 text-2xl font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ledger-muted mt-4">
                {copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
