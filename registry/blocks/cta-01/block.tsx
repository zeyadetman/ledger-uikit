export function Cta01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-ink text-ledger-paper">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-8 lg:p-16">
          <p className="mb-4 font-mono text-[10px] font-bold tracking-widest uppercase opacity-70">
            Close the loop
          </p>
          <h2 className="mb-6 font-sans text-4xl leading-[0.9] font-bold tracking-tighter uppercase md:text-6xl">
            Open a ledger
            <br />
            before the
            <br />
            next invoice.
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-ledger-paper/70">
            Sandbox in ten minutes. Floor when the first customer is metered.
            No chrome. No candy.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 border-t border-ledger-paper/20 p-6 sm:p-10 lg:col-span-4 lg:border-t-0 lg:border-l lg:p-16">
          <a
            href="#start"
            className="inline-flex h-11 items-center justify-center border border-ledger-paper bg-ledger-paper px-6 font-mono text-sm font-bold tracking-widest text-ledger-ink uppercase hover:bg-transparent hover:text-ledger-paper"
          >
            Start Floor
          </a>
          <a
            href="#spec"
            className="inline-flex h-11 items-center justify-center border border-ledger-paper px-6 font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-paper hover:text-ledger-ink"
          >
            Read the spec
          </a>
        </div>
      </div>
    </section>
  );
}
