import { ArrowRight, Gauge } from "lucide-react";

export function EmptyTour01() {
  return (
    <section className="flex min-h-[520px] w-full items-center justify-center bg-ledger-paper p-4 text-ledger-ink">
      <div className="w-full max-w-lg border border-ledger-ink p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Tour 02 / 04
          </span>
          <Gauge className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <h2 className="mb-3 font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase">
          A meter is
          <br />
          a named unit.
        </h2>
        <p className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          Seats, tokens, GB-hours. The catalog is the only thing the rating
          engine reads. This canvas stays blank until you define one.
        </p>
        <div className="mb-8 h-1 w-full bg-ledger-rule">
          <div className="h-full w-1/2 bg-ledger-ink" />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#create"
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 border border-ledger-ink bg-ledger-ink font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Create meter
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Skip tour
          </button>
        </div>
      </div>
    </section>
  );
}
