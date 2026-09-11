type BlockState = "default" | "loading" | "empty" | "error";

export function ForgotPassword01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="flex min-h-[640px] w-full items-center justify-center bg-ledger-paper px-4 text-ledger-ink">
      <div className="w-full max-w-md border border-ledger-ink p-6 sm:p-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Fathom
        </p>
        <h1 className="mb-3 font-sans text-3xl font-bold tracking-tight uppercase">
          Reset passphrase
        </h1>
        <p className="mb-8 text-[15px] text-ledger-muted">
          We send a one-hour link to the operator email on file. The old
          passphrase stays valid until it is used.
        </p>
        {state === "error" ? (
          <div className="mb-6 border border-ledger-signal p-4">
            <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
              Unknown operator
            </p>
            <p className="mt-1 text-[14px]">
              That email is not on any desk roster.
            </p>
          </div>
        ) : null}
        <form className="flex flex-col gap-5">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Email
            </span>
            <input
              type="email"
              placeholder="maya@north.ledger"
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
            />
          </label>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Send reset
          </button>
          <a
            href="#login"
            className="ledger-link self-start font-mono text-[11px] font-bold tracking-widest uppercase"
          >
            Back to sign in
          </a>
        </form>
      </div>
    </section>
  );
}
