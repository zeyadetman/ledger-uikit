type BlockState = "default" | "loading" | "empty" | "error";

const SERIES = [
  { label: "16", events: 118_400 },
  { label: "17", events: 142_200 },
  { label: "18", events: 129_800 },
  { label: "19", events: 201_600 },
  { label: "20", events: 188_100 },
  { label: "21", events: 256_400 },
  { label: "22", events: 241_900 },
  { label: "23", events: 301_200 },
  { label: "00", events: 288_400 },
  { label: "01", events: 364_800 },
  { label: "02", events: 342_100 },
  { label: "03", events: 401_900 },
];

const MAX = Math.max(...SERIES.map((point) => point.events));
const TOTAL = SERIES.reduce((sum, point) => sum + point.events, 0);

export function Chart01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-ink px-4 py-4 md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Events / last 12 hours
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Ingest
          </h2>
        </div>
        {state === "default" ? (
          <p className="font-mono text-2xl font-bold tabular-nums">
            {TOTAL.toLocaleString("en-US")}
          </p>
        ) : null}
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Series unread
          </p>
          <p className="mt-2 text-[15px]">
            Collector did not return buckets for this window.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-8 md:px-8">
          <p className="mb-6 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No data in window
          </p>
          <div className="flex h-44 items-end gap-1 border-b border-ledger-rule">
            {SERIES.map((point) => (
              <div
                key={point.label}
                className="h-1 flex-1 bg-ledger-rule"
                title={`${point.label}:00 — 0`}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-1">
            {SERIES.map((point) => (
              <span
                key={point.label}
                className="flex-1 text-center font-mono text-[9px] text-ledger-muted tabular-nums"
              >
                {point.label}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {state === "loading" ? (
        <div className="px-4 py-6 md:px-8">
          <div className="flex h-44 items-end gap-1 border-b border-ledger-rule">
            {SERIES.map((point, index) => (
              <div
                key={point.label}
                className="flex-1 bg-ledger-rule"
                style={{ height: `${18 + (index % 5) * 14}%` }}
              />
            ))}
          </div>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="px-4 py-6 md:px-8">
          <div className="flex h-44 items-end gap-1 border-b border-ledger-ink">
            {SERIES.map((point) => (
              <div
                key={point.label}
                className="flex-1 bg-ledger-ink hover:bg-ledger-signal"
                style={{ height: `${Math.max(8, (point.events / MAX) * 100)}%` }}
                title={`${point.label}:00 — ${point.events.toLocaleString("en-US")}`}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-1">
            {SERIES.map((point) => (
              <span
                key={point.label}
                className="flex-1 text-center font-mono text-[9px] text-ledger-muted tabular-nums"
              >
                {point.label}
              </span>
            ))}
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-ledger-ink">
                  {["Hour", "Events", "Share"].map((head) => (
                    <th
                      key={head}
                      className="py-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SERIES.map((point) => (
                  <tr key={point.label} className="border-b border-ledger-rule">
                    <td className="py-2 font-mono text-[12px] tabular-nums">
                      {point.label}:00
                    </td>
                    <td className="py-2 font-mono text-[12px] tabular-nums">
                      {point.events.toLocaleString("en-US")}
                    </td>
                    <td className="py-2 font-mono text-[12px] tabular-nums">
                      {Math.round((point.events / TOTAL) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </section>
  );
}
