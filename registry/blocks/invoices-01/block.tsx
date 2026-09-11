type BlockState = "default" | "loading" | "empty" | "error";

const ROWS = [
  { id: "INV-1045", period: "Aug 2026", amount: "$249.00", status: "Failed" },
  { id: "INV-1044", period: "Jul 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1031", period: "Jun 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1018", period: "May 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1002", period: "Apr 2026", amount: "$180.00", status: "Paid" },
];

export function Invoices01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-ink px-4 py-4 md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Accounts
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Invoices
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex h-9 items-center border border-ledger-ink px-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
        >
          Export CSV
        </button>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Ledger unread
          </p>
          <p className="mt-2 text-[15px]">Could not list invoices for this workspace.</p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No invoices
          </p>
          <p className="mt-2 text-[15px] text-ledger-muted">
            Floor has not closed a period yet.
          </p>
        </div>
      ) : null}

      {state === "loading" || state === "default" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-ink">
                {["Invoice", "Period", "Amount", "Status"].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state === "loading"
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-b border-ledger-rule">
                      {Array.from({ length: 4 }).map((__, cell) => (
                        <td key={cell} className="px-4 py-3">
                          <div className="h-3 w-20 bg-ledger-rule" />
                        </td>
                      ))}
                    </tr>
                  ))
                : ROWS.map((row) => (
                    <tr key={row.id} className="border-b border-ledger-rule">
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.id}
                      </td>
                      <td className="px-4 py-3 text-[14px]">{row.period}</td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.amount}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase ${
                            row.status === "Failed"
                              ? "bg-ledger-signal text-white"
                              : "bg-ledger-ink text-ledger-paper"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
