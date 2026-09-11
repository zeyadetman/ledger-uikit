type BlockState = "default" | "loading" | "empty" | "error";

export function Profile01({
  state = "default",
}: {
  state?: BlockState;
}) {
  if (state === "loading") {
    return (
      <section className="w-full bg-ledger-paper p-4 text-ledger-ink md:p-8">
        <div className="mb-8 h-3 w-24 bg-ledger-rule" />
        <div className="space-y-4">
          <div className="h-10 bg-ledger-rule" />
          <div className="h-10 bg-ledger-rule" />
          <div className="h-10 w-1/2 bg-ledger-rule" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-center gap-4 border-b border-ledger-ink px-4 py-6 md:px-8">
        <span className="inline-flex h-12 w-12 items-center justify-center border border-ledger-ink font-mono text-sm font-bold tracking-widest">
          MC
        </span>
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Operator
          </p>
          <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
            Maya Chen
          </h2>
        </div>
      </div>
      <form className="grid max-w-xl grid-cols-1 gap-5 p-4 md:p-8">
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            Display name
          </span>
          <input
            defaultValue="Maya Chen"
            className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            Email
          </span>
          <input
            type="email"
            defaultValue="maya@north.ledger"
            className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
            Desk role
          </span>
          <input
            defaultValue="Owner"
            disabled
            className="h-10 w-full border border-ledger-rule bg-ledger-rule/40 px-3 font-mono text-[12px] tracking-widest uppercase"
          />
        </label>
        <button
          type="button"
          className="inline-flex h-11 w-fit items-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
        >
          Write profile
        </button>
      </form>
    </section>
  );
}
