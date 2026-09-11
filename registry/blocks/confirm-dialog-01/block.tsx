export function ConfirmDialog01() {
  return (
    <section className="flex min-h-[480px] w-full items-center justify-center bg-ledger-paper p-4 text-ledger-ink">
      <div
        role="alertdialog"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-copy"
        className="w-full max-w-md border border-ledger-ink bg-ledger-paper p-6"
      >
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
          Irreversible
        </p>
        <h2 id="confirm-title" className="mb-3 font-sans text-2xl font-bold tracking-tight uppercase">
          Archive North?
        </h2>
        <p id="confirm-copy" className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          Ingest stops. Open invoices stay on the tape. This cannot be undone
          from the console.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex h-11 flex-1 items-center justify-center border border-ledger-signal bg-ledger-signal font-mono text-sm font-bold tracking-widest text-white uppercase hover:bg-transparent hover:text-ledger-signal"
          >
            Archive workspace
          </button>
          <button
            type="button"
            className="inline-flex h-11 flex-1 items-center justify-center border border-ledger-ink font-mono text-sm font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
          >
            Keep live
          </button>
        </div>
      </div>
    </section>
  );
}
