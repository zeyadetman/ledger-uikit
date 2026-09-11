type BlockState = "default" | "loading" | "empty" | "error";

export function UsageMeter01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Floor · August 2026
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Usage
        </h2>
      </div>

      {state === "loading" ? (
        <div className="space-y-4 p-6 md:p-8">
          <div className="h-3 w-40 bg-ledger-rule" />
          <div className="h-3 w-full bg-ledger-rule" />
          <div className="h-3 w-2/3 bg-ledger-rule" />
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No usage
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            This period has no rated events yet.
          </p>
        </div>
      ) : null}

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Meter unread
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not load the period totals. Do not assume you are under cap.
          </p>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            { label: "Events", used: "18.4M", cap: "25M", pct: 74 },
            { label: "Meters", used: "14", cap: "Unlimited", pct: 22 },
          ].map((row) => (
            <article
              key={row.label}
              className="border-b border-ledger-rule p-6 md:border-r md:last:border-r-0"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase">
                  {row.label}
                </h3>
                <p className="font-mono text-xl font-bold tabular-nums">
                  {row.used}
                  <span className="text-sm text-ledger-muted"> / {row.cap}</span>
                </p>
              </div>
              <div className="h-2 w-full bg-ledger-rule">
                <div
                  className={`h-full ${row.pct > 90 ? "bg-ledger-signal" : "bg-ledger-ink"}`}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
              <p className="mt-2 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
                {row.pct}% of cap
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
