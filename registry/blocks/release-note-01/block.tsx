export function ReleaseNote01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          content / release-note-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Release note</h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A detailed product release with highlights, migration notes, and an
          upgrade checklist.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <article className="grid gap-8 md:grid-cols-[180px_1fr]">
          <aside>
            <p className="font-mono tabular-nums text-4xl font-bold">v2.4</p>
            <p className="font-mono tabular-nums mt-3 text-xs text-ledger-muted">
              11 September 2026
            </p>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted mt-5 inline-block border border-ledger-ink px-3 py-1">
              Stable release
            </span>
          </aside>
          <div className="max-w-2xl">
            <h3 className="text-4xl leading-none font-bold tracking-tight">
              Every adjustment leaves a trail.
            </h3>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-5">
              This release makes invoice adjustments easier to inspect and adds
              explicit roles for the people who approve them.
            </p>
            <h4 className="mt-8 text-xl font-bold">What changed</h4>
            <ul className="mt-4 space-y-4">
              {[
                "Adjustment records now include a reason, actor, and original invoice reference.",
                "Readers can inspect audit history without gaining permission to edit rates.",
                "CSV exports preserve event identifiers across every invoice line.",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[15px] leading-relaxed text-ledger-muted border-l border-ledger-rule pl-4"
                >
                  {item}
                </li>
              ))}
            </ul>
            <details className="mt-8 border border-ledger-ink p-5">
              <summary className="cursor-pointer font-bold">
                Migration notes
              </summary>
              <p className="text-[15px] leading-relaxed text-ledger-muted mt-4">
                If you parse invoice exports, allow the new adjustment_reason
                column. Existing API fields remain available in this sample
                release.
              </p>
            </details>
            <h4 className="mt-8 text-xl font-bold">Before you upgrade</h4>
            <ol className="text-[15px] leading-relaxed text-ledger-muted mt-4 list-decimal space-y-2 pl-5">
              <li>Export a sample invoice from your test workspace.</li>
              <li>Check your CSV parser against the new column.</li>
              <li>Review role assignments with the workspace owner.</li>
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
}
