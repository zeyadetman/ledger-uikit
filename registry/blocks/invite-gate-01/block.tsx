export function InviteGate01() {
  return (
    <section className="flex min-h-[560px] w-full items-center justify-center bg-ledger-paper p-4 text-ledger-ink">
      <div className="w-full max-w-lg border border-ledger-ink p-6 md:p-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Gate · finance
        </p>
        <h2 className="mb-3 font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase">
          Do not close
          <br />
          alone.
        </h2>
        <p className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          A workspace with one operator will stall at first invoice. Invite
          someone who can read the tape before you post production events.
        </p>
        <form className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="finance@firm.com"
            className="h-11 flex-1 border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-5 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Send invite
          </button>
        </form>
        <button
          type="button"
          className="ledger-link font-mono text-[11px] font-bold tracking-widest uppercase"
        >
          Continue without finance
        </button>
      </div>
    </section>
  );
}
