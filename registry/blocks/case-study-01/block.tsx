export function CaseStudy01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          marketing / case-study-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Case study</h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A customer story connecting an operational problem to measurable
          results.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              Field report / Northstar
            </p>
            <h3 className="mt-5 max-w-2xl text-[56px] leading-[0.9] font-bold tracking-tighter sm:text-[72px]">
              A close that no longer takes a week.
            </h3>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-6 max-w-xl">
              Northstar replaced three spreadsheets with one event ledger.
              Finance and engineering now reconcile against the same record.
            </p>
            <blockquote className="mt-8 border-l-2 border-ledger-ink pl-5 text-xl leading-snug">
              “We stopped asking whose number was right. We could finally
              inspect the same number.”
              <footer className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted mt-4">
                Mara Chen / Finance lead
              </footer>
            </blockquote>
          </article>
          <dl className="border border-ledger-ink">
            {[
              ["Time to close", "4 hours", "Previously 5 days"],
              ["Manual adjustments", "−82%", "Across the first quarter"],
              ["Events reconciled", "12M", "Every month"],
            ].map(([label, value, note]) => (
              <div
                key={label}
                className="border-b border-ledger-rule p-6 last:border-b-0"
              >
                <dt className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                  {label}
                </dt>
                <dd className="font-mono tabular-nums mt-4 text-4xl font-bold">
                  {value}
                </dd>
                <dd className="text-[15px] leading-relaxed text-ledger-muted mt-2">
                  {note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
