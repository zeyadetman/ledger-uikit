type BlockState = "default" | "loading" | "empty" | "error";

export function CreditBalance01({ state = "default" }: { state?: BlockState }) {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          billing / credit-balance-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Credit balance
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A prepaid credit summary with a transaction ledger.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading credit balance…
          </p>
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="h-12 border border-ledger-rule bg-ledger-rule/30"
            />
          ))}
        </div>
      ) : state === "empty" ? (
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted p-5 sm:p-8"
        >
          No credit transactions yet. Purchased or adjusted credits will appear
          here.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div className="text-[15px] leading-relaxed text-ledger-mutedANEL">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                  Available credit / USD
                </p>
                <p className="font-mono tabular-nums mt-6 text-5xl font-bold tracking-tight">
                  $1,240
                </p>
                <p className="text-[15px] leading-relaxed text-ledger-muted mt-4">
                  Applied automatically to eligible usage charges on your next
                  invoice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Credit ledger</h3>
                <ol className="mt-3">
                  {[
                    ["01 Sep 2026", "Opening balance", "+$2,000"],
                    ["03 Sep 2026", "Usage settlement", "−$480"],
                    ["07 Sep 2026", "Service adjustment", "+$120"],
                    ["10 Sep 2026", "Usage settlement", "−$400"],
                  ].map(([date, title, amount]) => (
                    <li
                      key={date}
                      className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
                    >
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="font-mono tabular-nums mt-1 text-xs text-ledger-muted">
                          {date}
                        </p>
                      </div>
                      <span className="font-mono tabular-nums">{amount}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
