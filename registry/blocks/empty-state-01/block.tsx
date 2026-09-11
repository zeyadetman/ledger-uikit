import { Radio } from "lucide-react";

export function EmptyState01() {
  return (
    <section className="flex min-h-[480px] w-full items-center justify-center bg-ledger-paper px-4 py-16 text-ledger-ink">
      <div className="w-full max-w-lg border border-ledger-ink p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Meters / empty
          </span>
          <Radio className="h-4 w-4" strokeWidth={1.75} />
        </div>
        <h2 className="mb-3 font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase">
          No meters
          <br />
          on the tape.
        </h2>
        <p className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          A workspace without a meter cannot rate usage. Define the unit you
          bill — seats, tokens, GB-hours — then post the first event.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#create"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Create meter
          </a>
          <a
            href="#docs"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink px-6 font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Read ingest spec
          </a>
        </div>
      </div>
    </section>
  );
}
