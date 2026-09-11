// requires: import { cn } from "@/lib/utils"
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BlockState = "default" | "loading" | "empty" | "error";

const METRICS = [
  {
    label: "MRR",
    value: "$48,201",
    delta: "+4.2%",
    up: true,
    note: "rated this close",
  },
  {
    label: "Events",
    value: "2,441,019",
    delta: "+12.8%",
    up: true,
    note: "posted today",
  },
  {
    label: "Open invoices",
    value: "12",
    delta: "−2",
    up: true,
    note: "awaiting wire",
  },
  {
    label: "Failed meters",
    value: "3",
    delta: "+3",
    up: false,
    note: "collector retry",
  },
];

export function Stats01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-rule px-4 py-4">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Close / 2026-08-27
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Floor metrics
          </h2>
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest tabular-nums">
          UTC−04
        </span>
      </div>

      {state === "loading" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-ledger-rule p-5 lg:border-r lg:last:border-r-0"
            >
              <div className="mb-6 h-2 w-16 bg-ledger-rule" />
              <div className="mb-3 h-8 w-28 bg-ledger-rule" />
              <div className="h-2 w-24 bg-ledger-rule" />
            </div>
          ))}
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No close yet
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            Post the first usage event to populate the floor. Metrics stay blank
            until the tape has a row.
          </p>
        </div>
      ) : null}

      {state === "error" ? (
        <div className="border-t border-ledger-signal px-4 py-12">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Feed interrupted
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Rating desk unreachable. Floor numbers are stale as of 13:41 UTC.
          </p>
          <button
            type="button"
            className="mt-6 inline-flex h-10 items-center border border-ledger-signal px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-signal uppercase hover:bg-ledger-signal hover:text-white"
          >
            Retry feed
          </button>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <article
              key={metric.label}
              className={cn(
                "border-b border-ledger-rule p-5 lg:border-r",
                index === METRICS.length - 1 && "lg:border-r-0"
              )}
            >
              <p className="mb-6 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                {metric.label}
              </p>
              <p className="font-mono text-3xl font-bold tracking-tight tabular-nums">
                {metric.value}
              </p>
              <p
                className={cn(
                  "mt-3 flex items-center gap-1 font-mono text-[11px] font-bold tracking-widest uppercase",
                  metric.up ? "text-ledger-ink" : "text-ledger-signal"
                )}
              >
                {metric.up ? (
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                ) : (
                  <ArrowDownRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                )}
                <span className="tabular-nums">{metric.delta}</span>
                <span className="font-normal text-ledger-muted">
                  {metric.note}
                </span>
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
