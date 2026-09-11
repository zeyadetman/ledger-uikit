// requires: import { cn } from "@/lib/utils"
import { cn } from "@/lib/utils";

type BlockState = "default" | "loading" | "empty" | "error";

const INVOICES = [
  { id: "INV-1044", period: "Jul 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1031", period: "Jun 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1018", period: "May 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1002", period: "Apr 2026", amount: "$180.00", status: "Paid" },
];

export function Billing01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Accounts
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Billing
        </h2>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Processor silent
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not load the Floor subscription or invoice tape. Try again in
            a minute.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No plan
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            This workspace is still on Desk. Attach a Floor subscription to
            close invoices.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex h-11 items-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Attach Floor
          </button>
        </div>
      ) : null}

      {state === "loading" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-ledger-ink p-6 lg:col-span-4 lg:border-r lg:border-b-0">
            <div className="mb-4 h-2 w-16 bg-ledger-rule" />
            <div className="h-10 w-24 bg-ledger-rule" />
          </div>
          <div className="p-6 lg:col-span-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="mb-3 h-10 bg-ledger-rule"
              />
            ))}
          </div>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-ledger-ink p-6 lg:col-span-4 lg:border-r lg:border-b-0 md:p-8">
            <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
              Current plan
            </p>
            <p className="font-sans text-3xl font-bold tracking-tight uppercase">
              Floor
            </p>
            <p className="mt-1 font-mono text-2xl font-bold tabular-nums">
              $249
              <span className="text-sm tracking-widest text-ledger-muted uppercase">
                {" "}
                / mo
              </span>
            </p>
            <p className="mt-4 text-[15px] text-ledger-muted">
              Renews 1 Sep 2026. Card on file ending 4412.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex h-10 items-center border border-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
            >
              Change plan
            </button>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left">
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
                  {INVOICES.map((invoice) => (
                    <tr
                      key={invoice.id}
                      className="border-b border-ledger-rule"
                    >
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {invoice.id}
                      </td>
                      <td className="px-4 py-3 text-[14px]">{invoice.period}</td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {invoice.amount}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "bg-ledger-ink px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-ledger-paper uppercase"
                          )}
                        >
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
