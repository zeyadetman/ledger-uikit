type BlockState = "default" | "loading" | "empty" | "error";

export function Settings01({
  state = "default",
}: {
  state?: BlockState;
}) {
  if (state === "loading") {
    return (
      <section className="w-full bg-ledger-paper p-4 text-ledger-ink md:p-8">
        <div className="mb-8 h-3 w-32 bg-ledger-rule" />
        <div className="space-y-4 border border-ledger-rule p-6">
          <div className="h-10 bg-ledger-rule" />
          <div className="h-10 bg-ledger-rule" />
          <div className="h-10 w-1/2 bg-ledger-rule" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Workspace
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Settings
        </h2>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-12">
        <div className="space-y-6 border-b border-ledger-ink p-4 lg:col-span-8 lg:border-r lg:border-b-0 md:p-8">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Workspace name
            </span>
            <input
              defaultValue="North"
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] text-ledger-ink focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Legal entity
            </span>
            <input
              defaultValue="North Ledger Co."
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] text-ledger-ink focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Close timezone
            </span>
            <select className="h-10 w-full border border-ledger-rule bg-ledger-paper px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none">
              <option>America/New_York</option>
              <option>UTC</option>
              <option>Europe/London</option>
            </select>
          </label>
          <button
            type="button"
            className="inline-flex h-11 items-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Write changes
          </button>
        </div>

        <div className="p-4 lg:col-span-4 md:p-8">
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Danger
          </p>
          <h3 className="mb-3 font-sans text-lg font-bold tracking-tight uppercase">
            Archive workspace
          </h3>
          <p className="mb-6 text-[15px] text-ledger-muted">
            Freezes ingest and rating. Invoices already closed stay on the tape.
            This cannot be undone from the console.
          </p>
          <button
            type="button"
            className="inline-flex h-10 items-center border border-ledger-signal px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-signal uppercase hover:bg-ledger-signal hover:text-white"
          >
            Archive North
          </button>
        </div>
      </form>
    </section>
  );
}
