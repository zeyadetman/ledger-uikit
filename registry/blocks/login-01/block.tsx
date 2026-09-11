type BlockState = "default" | "loading" | "empty" | "error";

export function Login01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="flex min-h-[640px] w-full bg-ledger-paper text-ledger-ink">
      <div className="hidden w-1/2 flex-col justify-between border-r border-ledger-ink bg-grid-pattern p-8 lg:flex">
        <p className="font-mono text-sm font-bold tracking-widest uppercase">
          Fathom
        </p>
        <div>
          <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk access
          </p>
          <h1 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter uppercase">
            Operators
            <br />
            only.
          </h1>
        </div>
        <p className="max-w-xs font-mono text-[11px] tracking-widest text-ledger-muted uppercase">
          Session 12h. Audit on every write.
        </p>
      </div>

      <div className="flex w-full flex-col justify-center p-6 sm:p-10 lg:w-1/2">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase lg:hidden">
          Fathom
        </p>
        <h2 className="mb-8 font-sans text-3xl font-bold tracking-tight uppercase">
          Sign in
        </h2>

        {state === "error" ? (
          <div className="mb-6 border border-ledger-signal p-4">
            <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
              Credentials rejected
            </p>
            <p className="mt-1 text-[14px]">
              No operator matches that email and passphrase. Check the desk
              roster.
            </p>
          </div>
        ) : null}

        <form className="flex max-w-sm flex-col gap-5">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Email
            </span>
            <input
              type="email"
              autoComplete="username"
              placeholder="maya@north.ledger"
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Passphrase
            </span>
            <input
              type="password"
              autoComplete="current-password"
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
          </label>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Enter desk
          </button>
          <a
            href="#reset"
            className="ledger-link self-start font-mono text-[11px] font-bold tracking-widest uppercase"
          >
            Reset passphrase
          </a>
        </form>
      </div>
    </section>
  );
}
