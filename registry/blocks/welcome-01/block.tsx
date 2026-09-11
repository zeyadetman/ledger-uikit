export function Welcome01() {
  return (
    <section className="flex min-h-[640px] w-full flex-col justify-between bg-ledger-paper p-6 text-ledger-ink md:p-12">
      <p className="font-mono text-sm font-bold tracking-widest uppercase">
        Fathom
      </p>
      <div className="max-w-xl">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Workspace / North
        </p>
        <h1 className="mb-6 font-sans text-4xl leading-[0.9] font-bold tracking-tighter uppercase md:text-6xl">
          The desk
          <br />
          is empty.
          <br />
          That is correct.
        </h1>
        <p className="mb-10 max-w-md text-[15px] leading-relaxed text-ledger-muted">
          Four steps to a rated invoice: name the workspace, define a meter,
          post an event, invite finance. Skip nothing.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#wizard"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Start setup
          </a>
          <a
            href="#spec"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink px-6 font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Read ingest spec
          </a>
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
        Operator · m.chen
      </p>
    </section>
  );
}
