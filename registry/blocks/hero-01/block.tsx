export function Hero01() {
  return (
    <section className="flex min-h-[640px] w-full flex-col bg-ledger-paper text-ledger-ink">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center border-b border-ledger-ink p-6 sm:p-8 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12 xl:p-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-ledger-ink px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-ledger-paper uppercase">
              Field note 04
            </span>
            <div className="h-px flex-1 bg-ledger-rule" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
              Metered billing
            </span>
          </div>

          <h1 className="mb-8 font-sans text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-6xl md:text-[72px]">
            See the
            <br />
            bottom of
            <br />
            <span className="text-ledger-signal">revenue.</span>
          </h1>

          <p className="mb-10 max-w-md font-sans text-[15px] leading-relaxed text-ledger-muted md:text-base">
            Usage events in. Auditable invoices out. Fathom is the operating
            ledger for metered SaaS — built for people who still read the tape.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#start"
              className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
            >
              Open a ledger
            </a>
            <a
              href="#product"
              className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-transparent px-6 font-mono text-sm font-bold tracking-widest text-ledger-ink uppercase hover:bg-ledger-ink hover:text-ledger-paper"
            >
              Read the spec
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 bg-grid-pattern p-6 sm:p-8 lg:col-span-5 lg:p-12">
          <div className="space-y-6 border border-ledger-ink bg-ledger-paper p-5">
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                Tape / live
              </span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-ink tabular-nums">
                04.881_02
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex h-12 border border-ledger-ink">
                <div className="w-1/2 bg-ledger-ink hover:bg-ledger-signal" />
                <div className="w-1/4 border-r border-ledger-ink" />
                <div className="w-1/4" />
              </div>
              <div className="flex justify-between font-mono text-[9px] font-bold tracking-widest text-ledger-ink uppercase">
                <span>Ingest</span>
                <span>Rated</span>
                <span>Billed</span>
              </div>
            </div>
            <div className="border-t border-ledger-rule pt-4">
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm font-bold tracking-tight uppercase">
                  Events today
                </span>
                <span className="font-mono text-xl font-bold tabular-nums">
                  2,441,019
                </span>
              </div>
              <div className="h-1 w-full bg-ledger-rule">
                <div className="bg-ledger-signal h-full w-2/3" />
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3 border border-ledger-ink bg-ledger-ink p-4">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 bg-ledger-paper" />
              <div className="h-2 w-2 bg-ledger-paper opacity-50" />
              <div className="h-2 w-2 bg-ledger-paper opacity-20" />
            </div>
            <p className="font-mono text-[10px] leading-relaxed tracking-widest text-ledger-paper uppercase opacity-70">
              [log] collector nominal. 14 meters rated. drift: 0.00%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
