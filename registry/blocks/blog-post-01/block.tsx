export function BlogPost01() {
  return (
    <article className="w-full bg-ledger-paper text-ledger-ink">
      <header className="border-b border-ledger-ink px-4 py-10 md:px-8">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Field note 08 · 12 Aug 2026
        </p>
        <h1 className="max-w-3xl font-sans text-4xl leading-[0.95] font-bold tracking-tighter uppercase md:text-6xl">
          Late arrivals belong on the tape.
        </h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="border-b border-ledger-ink p-6 lg:col-span-3 lg:border-r lg:border-b-0">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Author
          </p>
          <p className="mt-2 text-sm font-bold tracking-tight uppercase">
            Maya Chen
          </p>
          <p className="mt-6 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
            6 min · rating desk
          </p>
        </aside>
        <div className="space-y-5 p-6 text-[16px] leading-relaxed lg:col-span-9 md:p-10">
          <p>
            We used to drop usage that showed up after close into a
            “adjustments” bucket nobody could audit. Finance asked for a dump.
            Engineering sent a CSV. The invoice still lied.
          </p>
          <p>
            14.2 prints the late-arrival window on the event tape. The line is
            held, not repaired. If you open a prior period, that write is an
            operator event with a name on it.
          </p>
          <p className="border-l-2 border-ledger-signal pl-4 text-ledger-muted">
            If a number cannot be traced, it does not ship.
          </p>
          <p>
            That is the whole product. The rest is typesetting.
          </p>
        </div>
      </div>
    </article>
  );
}
