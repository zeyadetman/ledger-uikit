type BlockState = "default" | "loading" | "empty" | "error";

export function VerifyEmail01({
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
          Confirm
          <br />
          the desk.
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-ledger-muted">
          We sent a one-hour link to{" "}
          <span className="font-mono text-ledger-ink">maya@north.ledger</span>.
          The workspace stays locked until it is opened.
        </p>
        {state === "error" ? (
          <div className="mb-6 border border-ledger-signal p-4">
            <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
              Link expired
            </p>
            <p className="mt-1 text-[14px]">
              That token is dead. Request another from this desk.
            </p>
          </div>
        ) : null}
        <button
          type="button"
          className="inline-flex h-11 w-full items-center justify-center border border-ledger-ink bg-ledger-ink font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
        >
          Resend link
        </button>
        <a
          href="#login"
          className="ledger-link mt-5 inline-block font-mono text-[11px] font-bold tracking-widest uppercase"
        >
          Back to sign in
        </a>
      </div>
    </section>
  );
}
