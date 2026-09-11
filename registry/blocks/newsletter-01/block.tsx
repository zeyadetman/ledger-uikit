export function Newsletter01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="border-b border-ledger-ink p-6 md:col-span-6 md:border-r md:border-b-0 md:p-10">
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Field notes
          </p>
          <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-4xl">
            Subscribe
            <br />
            to the tape.
          </h2>
        </div>
        <form className="flex flex-col justify-center gap-3 p-6 md:col-span-6 md:p-10">
          <p className="text-[15px] text-ledger-muted">
            Close notes, rating changes, and nothing else. Monthly. No growth
            sequences.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@firm.com"
              className="h-11 flex-1 border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
