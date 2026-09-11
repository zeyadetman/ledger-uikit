export function FailedPayment01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-signal px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
          Payment failed
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Floor is past due
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-ledger-ink p-6 lg:col-span-7 lg:border-r lg:border-b-0 md:p-8">
          <dl className="space-y-4">
            {[
              ["Invoice", "INV-1045"],
              ["Amount", "$249.00"],
              ["Attempted", "27 Aug 2026 · 04:12 UTC"],
              ["Processor", "Card ···4412 declined"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-ledger-rule pb-3">
                <dt className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                  {label}
                </dt>
                <dd className="font-mono text-[13px] tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[15px] text-ledger-muted">
            Ingest stays up for 7 days. After that, rating pauses. Update the
            card or the tape stops.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 p-6 md:p-8 lg:col-span-5">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-signal bg-ledger-signal font-mono text-sm font-bold tracking-widest text-white uppercase hover:bg-transparent hover:text-ledger-signal"
          >
            Update card
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Retry charge
          </button>
        </div>
      </div>
    </section>
  );
}
