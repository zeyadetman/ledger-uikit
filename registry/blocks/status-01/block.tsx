type BlockState = "default" | "loading" | "empty" | "error";

const COPY = {
  default: {
    code: "404",
    kicker: "Missing",
    title: "This page is not on the tape.",
    body: "The route does not exist, or it was archived. Check the URL or return to the desk.",
    cta: "Back to desk",
  },
  error: {
    code: "500",
    kicker: "Interrupted",
    title: "The desk failed to render.",
    body: "A rating process panicked. The tape is intact. Retry, then page ops if it persists.",
    cta: "Retry",
  },
  empty: {
    code: "MAINT",
    kicker: "Closed",
    title: "Scheduled maintenance.",
    body: "Ingest is paused until 04:00 UTC. Invoices already closed stay readable.",
    cta: "Status page",
  },
  loading: {
    code: "…",
    kicker: "Hold",
    title: "Loading the desk.",
    body: "Waiting on the collector.",
    cta: "Wait",
  },
};

export function Status01({
  state = "default",
}: {
  state?: BlockState;
}) {
  const copy = COPY[state] ?? COPY.default;

  return (
    <section className="flex min-h-[640px] w-full flex-col justify-between bg-ledger-paper p-6 text-ledger-ink md:p-12">
      <p className="font-mono text-sm font-bold tracking-widest uppercase">
        Fathom
      </p>
      <div className="max-w-lg">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          {copy.kicker}
        </p>
        <p className="mb-4 font-mono text-6xl font-bold tracking-tighter tabular-nums md:text-7xl">
          {copy.code}
        </p>
        <h1 className="mb-4 font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-4xl">
          {copy.title}
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          {copy.body}
        </p>
        <a
          href="#desk"
          className="inline-flex h-11 items-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
        >
          {copy.cta}
        </a>
      </div>
      <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
        Ref · {copy.code}-2026-08-27
      </p>
    </section>
  );
}
