export function CookieBanner01() {
  return (
    <section className="relative min-h-[280px] w-full bg-ledger-paper text-ledger-ink">
      <div className="absolute right-0 bottom-0 left-0 border-t border-ledger-ink bg-ledger-paper">
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="max-w-xl">
            <p className="mb-1 font-mono text-[10px] font-bold tracking-widest uppercase">
              Consent
            </p>
            <p className="text-[14px] leading-relaxed text-ledger-muted">
              We store a session cookie and a close-timezone preference. No
              ad networks. No growth pixels.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center border border-ledger-ink bg-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
            >
              Accept necessary
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center border border-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
