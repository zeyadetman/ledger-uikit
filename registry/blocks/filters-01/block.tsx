"use client";

import { useMemo, useState } from "react";

type Status = "Rated" | "Held" | "Failed";

const ROWS = [
  {
    id: "evt_9f2a",
    meter: "tokens.out",
    customer: "Harbour",
    qty: "1,204,880",
    status: "Rated" as Status,
    at: "14:01:08",
  },
  {
    id: "evt_9f19",
    meter: "seats.active",
    customer: "Kestrel",
    qty: "42",
    status: "Rated" as Status,
    at: "14:00:44",
  },
  {
    id: "evt_9eec",
    meter: "gb.hours",
    customer: "Glassline",
    qty: "318.4",
    status: "Held" as Status,
    at: "13:58:12",
  },
  {
    id: "evt_9ed1",
    meter: "tokens.out",
    customer: "Ninefold",
    qty: "88,102",
    status: "Rated" as Status,
    at: "13:57:03",
  },
  {
    id: "evt_9eaa",
    meter: "api.calls",
    customer: "Ordinate",
    qty: "12,440",
    status: "Failed" as Status,
    at: "13:51:29",
  },
  {
    id: "evt_9e91",
    meter: "gb.hours",
    customer: "Harbour",
    qty: "22.1",
    status: "Held" as Status,
    at: "13:44:10",
  },
];

const SAVED = [
  { id: "q3", label: "Q3 close" },
  { id: "fail", label: "Failed meters" },
  { id: "harbour", label: "Harbour only" },
];

const CHIPS: Status[] = ["Rated", "Held", "Failed"];

export function Filters01() {
  const [view, setView] = useState("q3");
  const [active, setActive] = useState<Status[]>(["Rated", "Held", "Failed"]);

  function toggle(chip: Status) {
    setActive((current) =>
      current.includes(chip)
        ? current.filter((item) => item !== chip)
        : [...current, chip]
    );
  }

  const rows = useMemo(() => {
    return ROWS.filter((row) => {
      if (view === "fail" && row.status !== "Failed") return false;
      if (view === "harbour" && row.customer !== "Harbour") return false;
      if (active.length > 0 && !active.includes(row.status)) return false;
      return true;
    });
  }, [view, active]);

  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex flex-col gap-4 border-b border-ledger-ink px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Tape / filters
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Saved views
          </h2>
        </div>
        <div className="flex flex-wrap border border-ledger-ink">
          {SAVED.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`h-8 px-3 font-mono text-[10px] font-bold tracking-widest uppercase ${
                view === item.id
                  ? "bg-ledger-ink text-ledger-paper"
                  : "hover:bg-ledger-rule"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 border-b border-ledger-rule px-4 py-4 md:px-8">
        <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Status
        </span>
        {CHIPS.map((chip) => {
          const on = active.includes(chip);
          return (
            <button
              key={chip}
              type="button"
              onClick={() => toggle(chip)}
              className={`h-8 border px-3 font-mono text-[10px] font-bold tracking-widest uppercase ${
                on
                  ? "border-ledger-ink bg-ledger-ink text-ledger-paper"
                  : "border-ledger-rule hover:border-ledger-ink"
              }`}
            >
              {chip}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[10px] tabular-nums text-ledger-muted">
          {rows.length} rows · view {view}
        </span>
      </div>

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
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 font-mono text-[11px] tracking-widest text-ledger-muted uppercase"
                >
                  No rows in this view
                </td>
              </tr>
            ) : (
              rows.map((row) => (
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
                  <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                    {row.at}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
