type BlockState = "default" | "loading" | "empty" | "error";

export function Funnel01({ state = "default" }: { state?: BlockState }) {
  const stages: [string, number][] = [
    ["Visited pricing", 12400],
    ["Created workspace", 3100],
    ["Connected a source", 1860],
    ["Completed first close", 1240],
  ];
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          data / funnel-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Conversion funnel
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A stage-by-stage conversion report with counts and drop-off rates.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading conversion funnel…
          </p>
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="h-12 border border-ledger-rule bg-ledger-rule/30"
            />
          ))}
        </div>
      ) : state === "empty" ? (
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted p-5 sm:p-8"
        >
          No conversions recorded for this period. Choose a period with account
          activity.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <ol className="space-y-6">
              {stages.map(([label, count], index) => (
                <li key={label}>
                  <div className="mb-2 flex flex-wrap justify-between gap-3">
                    <h3 className="font-bold">
                      <span className="font-mono tabular-nums mr-3 text-ledger-muted">
                        0{index + 1}
                      </span>
                      {label}
                    </h3>
                    <p className="font-mono tabular-nums text-sm">
                      {count.toLocaleString("en-US")}{" "}
                      <span className="text-ledger-muted">
                        / {((count / stages[0][1]) * 100).toFixed(1)}%
                      </span>
                    </p>
                  </div>
                  <div className="h-8 border border-ledger-rule">
                    <div
                      className={
                        index === stages.length - 1
                          ? "h-full bg-ledger-signal"
                          : "h-full bg-ledger-ink"
                      }
                      style={{ width: `${(count / stages[0][1]) * 100}%` }}
                    />
                  </div>
                  {index > 0 && (
                    <p className="font-mono tabular-nums mt-2 text-xs text-ledger-muted">
                      {((1 - count / stages[index - 1][1]) * 100).toFixed(1)}%
                      drop from previous stage
                    </p>
                  )}
                </li>
              ))}
            </ol>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-6">
              Window: September 01–10. Each account is counted once per stage.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
