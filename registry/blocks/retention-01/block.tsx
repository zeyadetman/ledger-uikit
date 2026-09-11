type BlockState = "default" | "loading" | "empty" | "error";

export function Retention01({ state = "default" }: { state?: BlockState }) {
  const cohorts = [
    { week: "03 Aug", accounts: 124, values: [100, 82, 74, 68, 65] },
    { week: "10 Aug", accounts: 138, values: [100, 86, 78, 71, null] },
    { week: "17 Aug", accounts: 116, values: [100, 80, 73, null, null] },
    { week: "24 Aug", accounts: 152, values: [100, 88, null, null, null] },
  ];
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          data / retention-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Cohort retention
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A cohort matrix showing the share of accounts returning each week.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading cohort retention…
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
          Retention appears after your first cohort has an activity record.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div className="overflow-x-auto">
              <table className="font-mono tabular-nums w-full min-w-[600px] border-collapse text-right text-sm">
                <caption className="mb-5 text-left font-sans text-[15px] text-ledger-muted">
                  Weekly active accounts by signup cohort. Darker cells indicate
                  higher retention.
                </caption>
                <thead>
                  <tr className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                    <th className="p-3 text-left" scope="col">
                      Cohort
                    </th>
                    <th className="p-3" scope="col">
                      Accounts
                    </th>
                    {[0, 1, 2, 3, 4].map((week) => (
                      <th scope="col" key={week} className="p-3">
                        W{week}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cohorts.map((cohort) => (
                    <tr key={cohort.week}>
                      <th
                        scope="row"
                        className="border border-ledger-rule p-3 text-left font-normal"
                      >
                        {cohort.week}
                      </th>
                      <td className="border border-ledger-rule p-3">
                        {cohort.accounts}
                      </td>
                      {cohort.values.map((value, index) => (
                        <td
                          key={index}
                          className="border border-ledger-paper p-3"
                          style={
                            value === null
                              ? {}
                              : {
                                  backgroundColor: `color-mix(in srgb, var(--ledger-ink) ${value}%, var(--ledger-paper))`,
                                  color:
                                    value >= 55
                                      ? "var(--ledger-paper)"
                                      : "var(--ledger-ink)",
                                }
                          }
                        >
                          {value === null ? (
                            <span aria-label="Not yet available">—</span>
                          ) : (
                            `${value}%`
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-5">
              Later weeks remain blank until the cohort reaches that age.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
