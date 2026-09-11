const SEATS = [
  { name: "Maya Chen", email: "maya@north.ledger", role: "Owner" },
  { name: "Jon Vale", email: "jon@north.ledger", role: "Operator" },
  { name: "R. Okonkwo", email: "r.okonkwo@north.ledger", role: "Finance" },
];

export function Seats01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-ledger-ink p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Floor · seats
          </p>
          <p className="mt-4 font-mono text-5xl font-bold tracking-tighter tabular-nums">
            3
            <span className="text-lg text-ledger-muted"> / 10</span>
          </p>
          <p className="mt-2 text-[15px] text-ledger-muted">
            $12 per extra seat after 10. Finance seats count.
          </p>
          <div className="mt-6 h-1 bg-ledger-rule">
            <div className="h-full w-[30%] bg-ledger-ink" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ledger-ink">
                  {["Operator", "Email", "Role"].map((head) => (
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
                {SEATS.map((seat) => (
                  <tr key={seat.email} className="border-b border-ledger-rule">
                    <td className="px-4 py-3 text-[14px] font-medium">{seat.name}</td>
                    <td className="px-4 py-3 font-mono text-[12px]">{seat.email}</td>
                    <td className="px-4 py-3 font-mono text-[11px] font-bold tracking-widest uppercase">
                      {seat.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
