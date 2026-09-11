"use client";

import { useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";
const control =
  "min-h-11 border border-ledger-rule bg-ledger-paper px-3 py-2 text-sm text-ledger-ink disabled:opacity-40";
const action =
  "min-h-11 border border-ledger-ink bg-ledger-ink px-4 py-2 text-sm font-semibold text-ledger-paper disabled:opacity-40";
function Frame({
  state,
  children,
}: {
  state: BlockState;
  children: React.ReactNode;
}) {
  const [recovered, setRecovered] = useState(false);
  const phase = recovered ? "default" : state;
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink font-sans">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-ledger-muted">
          data / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Report dashboard
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A report with selectable periods, comparison metrics, and accessible
          charts.
        </p>
      </header>
      {phase === "default" ? (
        <div className="p-5 sm:p-8">{children}</div>
      ) : (
        <div
          className="p-5 sm:p-8"
          role={phase === "error" ? "alert" : "status"}
        >
          <h3 className="text-xl font-semibold">
            {phase === "loading"
              ? "Loading report dashboard…"
              : phase === "empty"
                ? "No report dashboard yet"
                : "Unable to load report dashboard"}
          </h3>
          <p className="mt-3 text-ledger-muted">
            {phase === "error"
              ? "Your work is safe. Try the sample again."
              : phase === "empty"
                ? "Start with sample data to explore this workflow."
                : "Preparing your workspace. You can load the sample now."}
          </p>
          {phase === "loading" && (
            <div aria-hidden="true" className="my-6 space-y-3">
              <div className="h-6 w-2/3 bg-ledger-rule" />
              <div className="h-16 bg-ledger-rule" />
              <div className="h-6 w-1/2 bg-ledger-rule" />
            </div>
          )}
          <button
            className={`${action} mt-5`}
            onClick={() => setRecovered(true)}
          >
            {phase === "error" ? "Retry sample" : "Load sample"}
          </button>
        </div>
      )}
    </section>
  );
}

const reports = {
  "7 days": {
    revenue: 12480,
    previous: 11000,
    accounts: 86,
    conversion: 4.8,
    bars: [32, 48, 38, 68, 51, 80, 74],
  },
  "30 days": {
    revenue: 48201,
    previous: 42700,
    accounts: 342,
    conversion: 5.2,
    bars: [42, 66, 57, 90],
  },
  "90 days": {
    revenue: 138640,
    previous: 126000,
    accounts: 968,
    conversion: 4.9,
    bars: [61, 74, 92],
  },
};
export function Analytics01({ state = "default" }: { state?: BlockState }) {
  const [period, setPeriod] = useState<keyof typeof reports>("30 days");
  const [compare, setCompare] = useState(true);
  const [metric, setMetric] = useState("Revenue");
  const report = reports[period];
  const money = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);
  const total = metric === "Revenue" ? report.revenue : report.accounts;
  const weight = report.bars.reduce((a, b) => a + b, 0);
  function distribute(amount: number) {
    const values = report.bars.map((v) => Math.floor((amount * v) / weight));
    values[values.length - 1] += amount - values.reduce((a, b) => a + b, 0);
    return values;
  }
  const previousTotal =
    metric === "Revenue" ? report.previous : Math.round(report.accounts * 0.85);
  const values = distribute(total);
  const previousValues = distribute(previousTotal);
  return (
    <Frame state={state}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Report period"
        >
          {(Object.keys(reports) as (keyof typeof reports)[]).map((p) => (
            <button
              key={p}
              aria-pressed={p === period}
              className={p === period ? action : control}
              onClick={() => setPeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={compare}
            onChange={(e) => setCompare(e.target.checked)}
          />
          Compare previous period
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Revenue", money(report.revenue)],
          ["New accounts", String(report.accounts)],
          ["Conversion", `${report.conversion}%`],
        ].map(([title, value]) => (
          <div key={title} className="border border-ledger-rule p-5">
            <p className="text-sm text-ledger-muted">{title}</p>
            <p className="mt-3 font-mono text-3xl tabular-nums">{value}</p>
            {compare && title === "Revenue" && (
              <p className="mt-3 text-sm">
                +{((report.revenue / report.previous - 1) * 100).toFixed(1)}% vs
                previous
              </p>
            )}
          </div>
        ))}
      </div>
      <section className="mt-6 border border-ledger-rule p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-semibold">{metric} by interval</h3>
          <select
            aria-label="Chart metric"
            className={control}
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          >
            <option>Revenue</option>
            <option>New accounts</option>
          </select>
        </div>
        <div
          className="mt-6 flex h-48 items-end gap-3 border-b border-ledger-ink"
          aria-hidden="true"
        >
          {report.bars.map((v, i) => (
            <div
              key={i}
              className="flex flex-1 items-end justify-center gap-1 h-full"
            >
              {compare && (
                <div
                  className="w-1/3 bg-ledger-rule"
                  style={{ height: `${(v * previousTotal) / total}%` }}
                />
              )}
              <div
                className="w-1/2 bg-ledger-signal"
                style={{ height: `${v}%` }}
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ledger-muted">
          Signal: current · {compare ? "Rule: previous · " : ""}Sample data
        </p>
        <table className="mt-5 w-full text-left text-sm">
          <caption className="sr-only">
            {metric} values for {period}
          </caption>
          <thead>
            <tr>
              <th className="py-2">Interval</th>
              <th className="text-right">Current</th>
              {compare && <th className="text-right">Previous</th>}
            </tr>
          </thead>
          <tbody>
            {values.map((v, i) => (
              <tr key={i} className="border-t border-ledger-rule">
                <td className="py-2">
                  {period === "7 days"
                    ? "Day"
                    : period === "30 days"
                      ? "Week"
                      : "Month"}{" "}
                  {i + 1}
                </td>
                <td className="text-right font-mono tabular-nums">
                  {metric === "Revenue" ? money(v) : v}
                </td>
                {compare && (
                  <td className="text-right font-mono tabular-nums">
                    {metric === "Revenue"
                      ? money(previousValues[i])
                      : previousValues[i]}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Frame>
  );
}
