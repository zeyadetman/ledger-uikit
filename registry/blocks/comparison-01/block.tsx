import { Check, Minus } from "lucide-react";

const ROWS = [
  { feature: "Events / month", desk: "100k", floor: "25M", exchange: "Custom" },
  { feature: "Meters", desk: "2", floor: "Unlimited", exchange: "Unlimited" },
  { feature: "Rated invoices", desk: false, floor: true, exchange: true },
  { feature: "SSO + audit log", desk: false, floor: true, exchange: true },
  { feature: "Sub-hour close", desk: false, floor: false, exchange: true },
  { feature: "Named operator", desk: false, floor: false, exchange: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="h-4 w-4" strokeWidth={1.75} />;
  }
  if (value === false) {
    return <Minus className="h-4 w-4 text-ledger-rule" strokeWidth={1.75} />;
  }
  return <span className="font-mono text-[12px] tabular-nums">{value}</span>;
}

export function Comparison01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Rate card / matrix
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          What each
          <br />
          desk includes.
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-ledger-ink">
              <th className="px-4 py-4 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase md:px-8">
                Capability
              </th>
              {["Desk", "Floor", "Exchange"].map((plan) => (
                <th
                  key={plan}
                  className={`px-4 py-4 font-mono text-[10px] font-bold tracking-widest uppercase ${
                    plan === "Floor" ? "bg-ledger-ink text-ledger-paper" : ""
                  }`}
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.feature} className="border-b border-ledger-rule">
                <td className="px-4 py-3 text-[14px] md:px-8">{row.feature}</td>
                <td className="px-4 py-3">
                  <Cell value={row.desk} />
                </td>
                <td className="bg-ledger-rule/30 px-4 py-3">
                  <Cell value={row.floor} />
                </td>
                <td className="px-4 py-3">
                  <Cell value={row.exchange} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
