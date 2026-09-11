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
          app / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Calendar and agenda
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A monthly calendar with event details and a mobile agenda.
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
              ? "Loading calendar and agenda…"
              : phase === "empty"
                ? "No calendar and agenda yet"
                : "Unable to load calendar and agenda"}
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

const events = [
  { day: 8, title: "Product review", time: "10:00", duration: "45 min" },
  { day: 15, title: "Customer workshop", time: "14:00", duration: "60 min" },
  { day: 22, title: "Release planning", time: "09:30", duration: "30 min" },
];
export function Calendar01({ state = "default" }: { state?: BlockState }) {
  const [month, setMonth] = useState(8);
  const [year, setYear] = useState(2026);
  const [selected, setSelected] = useState<number | null>(null);
  const label = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const count = new Date(year, month + 1, 0).getDate();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const visible = month === 8 && year === 2026 ? events : [];
  function navigate(delta: number) {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    setSelected(null);
  }
  return (
    <Frame state={state}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold">{label}</h3>
        <div className="flex gap-2">
          <button
            className={control}
            aria-label="Previous month"
            onClick={() => navigate(-1)}
          >
            ←
          </button>
          <button
            className={control}
            onClick={() => {
              setYear(2026);
              setMonth(8);
              setSelected(null);
            }}
          >
            Sample month
          </button>
          <button
            className={control}
            aria-label="Next month"
            onClick={() => navigate(1)}
          >
            →
          </button>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-7 border-t border-l border-ledger-rule">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            className="border-r border-b border-ledger-rule p-2 text-center text-xs"
            key={d}
          >
            {d}
          </div>
        ))}
        {Array.from({ length: offset }, (_, i) => (
          <div
            key={`blank${i}`}
            className="border-b border-r border-ledger-rule"
          />
        ))}
        {Array.from({ length: count }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            aria-pressed={selected === day}
            onClick={() => setSelected(day)}
            className={`min-h-20 border-b border-r border-ledger-rule p-2 text-left ${selected === day ? "bg-ledger-ink text-ledger-paper" : "hover:bg-ledger-rule/40"}`}
          >
            <span className="font-mono tabular-nums">{day}</span>
            {visible
              .filter((e) => e.day === day)
              .map((e) => (
                <span className="mt-2 block text-xs" key={e.title}>
                  {e.time} · {e.title}
                </span>
              ))}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <div className="mb-4 flex justify-between gap-3">
          <h3 className="font-semibold">
            {selected ? `Agenda · ${selected} ${label}` : "Month agenda"}
          </h3>
          {selected && (
            <button
              className="text-sm underline"
              onClick={() => setSelected(null)}
            >
              Show all
            </button>
          )}
        </div>
        {visible
          .filter((e) => !selected || e.day === selected)
          .map((e) => (
            <article
              key={e.title}
              className="flex flex-wrap gap-4 border-t border-ledger-rule py-4"
            >
              <span className="font-mono tabular-nums">
                {e.day} SEP · {e.time}
              </span>
              <div>
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-ledger-muted">{e.duration} · UTC</p>
              </div>
            </article>
          ))}
        {!visible.some((e) => !selected || e.day === selected) && (
          <p className="text-ledger-muted">
            No events scheduled. Try the sample month.
          </p>
        )}
      </div>
    </Frame>
  );
}
