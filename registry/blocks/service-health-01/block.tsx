type BlockState = "default" | "loading" | "empty" | "error";

export function ServiceHealth01({ state = "default" }: { state?: BlockState }) {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          system / service-health-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Service health
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A service status summary with availability and incident details.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading service health…
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
          No services are being monitored. Add services to publish their health.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ledger-ink pb-6">
              <h3 className="text-3xl font-bold">All systems operational</h3>
              <p className="font-mono tabular-nums text-sm">
                Snapshot / 11 Sep 2026 · 09:00 UTC
              </p>
            </div>
            {[
              ["Ingest API", "99.99%", "84 ms"],
              ["Rating engine", "99.98%", "126 ms"],
              ["Export workers", "100.00%", "310 ms"],
            ].map(([name, uptime, latency]) => (
              <div
                key={name}
                className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
              >
                <h4 className="font-bold">{name}</h4>
                <dl className="font-mono tabular-nums flex gap-6 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                      30d uptime
                    </dt>
                    <dd className="mt-1">{uptime}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                      P95 latency
                    </dt>
                    <dd className="mt-1">{latency}</dd>
                  </div>
                </dl>
              </div>
            ))}
            <details className="mt-6 border border-ledger-rule p-4">
              <summary className="cursor-pointer font-bold">
                Previous incident / Export delay
              </summary>
              <p className="text-[15px] leading-relaxed text-ledger-muted mt-3">
                Resolved 09 Sep at 14:20 UTC. A queue backlog delayed exports by
                eight minutes. No event data was lost.
              </p>
            </details>
          </div>
        </>
      )}
    </section>
  );
}
