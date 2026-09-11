const ROWS = [
  {
    id: "evt_9f2a",
    meter: "tokens.out",
    customer: "Harbour",
    qty: "1,204,880",
    status: "Rated",
  },
  {
    id: "evt_9f19",
    meter: "seats.active",
    customer: "Kestrel",
    qty: "42",
    status: "Rated",
  },
  {
    id: "evt_9eec",
    meter: "gb.hours",
    customer: "Glassline",
    qty: "318.4",
    status: "Held",
  },
  {
    id: "evt_9ed1",
    meter: "tokens.out",
    customer: "Ninefold",
    qty: "88,102",
    status: "Rated",
  },
  {
    id: "evt_9eaa",
    meter: "api.calls",
    customer: "Ordinate",
    qty: "12,440",
    status: "Failed",
  },
  {
    id: "evt_9e91",
    meter: "gb.hours",
    customer: "Harbour",
    qty: "22.1",
    status: "Held",
  },
];

export function ExportBar01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex flex-col gap-3 border-b border-ledger-ink px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-[11px] font-bold tracking-widest uppercase">
          Export
          <span className="ml-2 font-normal text-ledger-muted">
            {ROWS.length} rows · current view
          </span>
        </p>
        <form className="flex flex-col gap-2 sm:flex-row">
          <select className="h-9 border border-ledger-rule bg-ledger-paper px-3 font-mono text-[11px] font-bold tracking-widest uppercase">
            <option>CSV</option>
            <option>JSON</option>
            <option>Parquet</option>
          </select>
          <select className="h-9 border border-ledger-rule bg-ledger-paper px-3 font-mono text-[11px] font-bold tracking-widest uppercase">
            <option>This view</option>
            <option>Full window</option>
          </select>
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center border border-ledger-ink bg-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Write file
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-ledger-ink">
              {["Event", "Meter", "Customer", "Qty", "Status"].map((head) => (
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
            {ROWS.map((row) => (
              <tr key={row.id} className="border-b border-ledger-rule">
                <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                  {row.id}
                </td>
                <td className="px-4 py-3 font-mono text-[12px]">{row.meter}</td>
                <td className="px-4 py-3 text-[14px]">{row.customer}</td>
                <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                  {row.qty}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase ${
                      row.status === "Failed"
                        ? "bg-ledger-signal text-white"
                        : row.status === "Held"
                          ? "border border-ledger-ink"
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
    </section>
  );
}
