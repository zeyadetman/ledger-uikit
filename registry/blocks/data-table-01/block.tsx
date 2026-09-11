// requires: import { cn } from "@/lib/utils"
import { cn } from "@/lib/utils";

type BlockState = "default" | "loading" | "empty" | "error";

const ROWS = [
  {
    id: "evt_9f2a",
    meter: "tokens.out",
    customer: "Harbour",
    qty: "1,204,880",
    status: "Rated",
    at: "14:01:08",
  },
  {
    id: "evt_9f19",
    meter: "seats.active",
    customer: "Kestrel",
    qty: "42",
    status: "Rated",
    at: "14:00:44",
  },
  {
    id: "evt_9eec",
    meter: "gb.hours",
    customer: "Glassline",
    qty: "318.4",
    status: "Held",
    at: "13:58:12",
  },
  {
    id: "evt_9ed1",
    meter: "tokens.out",
    customer: "Ninefold",
    qty: "88,102",
    status: "Rated",
    at: "13:57:03",
  },
  {
    id: "evt_9eaa",
    meter: "api.calls",
    customer: "Ordinate",
    qty: "12,440",
    status: "Failed",
    at: "13:51:29",
  },
];

export function DataTable01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex flex-col gap-1 border-b border-ledger-ink px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Tape
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Usage events
          </h2>
        </div>
        <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
          Window 13:00–14:02 UTC
        </p>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Tape unread
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Collector returned 503. Events after 13:41 are not on this desk.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex h-10 items-center border border-ledger-signal px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-signal uppercase hover:bg-ledger-signal hover:text-white"
          >
            Reload tape
          </button>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No rows
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            This window is quiet. Post an event or widen the range.
          </p>
        </div>
      ) : null}

      {state === "loading" || state === "default" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-ink">
                {["Event", "Meter", "Customer", "Qty", "Status", "Time"].map(
                  (head) => (
                    <th
                      key={head}
                      className="px-4 py-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase"
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {state === "loading"
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-b border-ledger-rule">
                      {Array.from({ length: 6 }).map((__, cell) => (
                        <td key={cell} className="px-4 py-3">
                          <div className="h-3 w-20 bg-ledger-rule" />
                        </td>
                      ))}
                    </tr>
                  ))
                : ROWS.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-ledger-rule hover:bg-ledger-rule/40"
                    >
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.id}
                      </td>
                      <td className="px-4 py-3 font-mono text-[12px]">
                        {row.meter}
                      </td>
                      <td className="px-4 py-3 text-[14px]">{row.customer}</td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.qty}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "inline-flex px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase",
                            row.status === "Failed"
                              ? "bg-ledger-signal text-white"
                              : row.status === "Held"
                                ? "border border-ledger-ink"
                                : "bg-ledger-ink text-ledger-paper"
                          )}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.at}
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
