"use client";

import { useState, useRef } from "react";

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
          Automation rules
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A workflow editor with triggers, conditions, actions, and a local test
          run.
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
              ? "Loading automation rules…"
              : phase === "empty"
                ? "No automation rules yet"
                : "Unable to load automation rules"}
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

export function Automation01({ state = "default" }: { state?: BlockState }) {
  const [trigger, setTrigger] = useState("Invoice overdue");
  const [conditions, setConditions] = useState([
    { id: 1, field: "Amount", value: "100" },
  ]);
  const [target, setTarget] = useState("Notify account owner");
  const [enabled, setEnabled] = useState(true);
  const [notice, setNotice] = useState("");
  const [saved, setSaved] = useState("");
  const sequence = useRef(2);
  const snapshot = JSON.stringify({ trigger, conditions, target, enabled });
  const dirty = saved !== snapshot;
  return (
    <Frame state={state}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaved(snapshot);
          setNotice(
            "Rule saved locally. No automation is running on a server.",
          );
        }}
        className="mx-auto max-w-3xl"
      >
        <label className="mb-6 flex items-center gap-3">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          Rule enabled
        </label>
        <section className="border border-ledger-rule p-5">
          <h3 className="mb-3 font-mono text-xs">01 / WHEN</h3>
          <label className="text-sm">
            Trigger
            <select
              className={`${control} mt-2 w-full`}
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
            >
              {["Invoice overdue", "New customer", "Usage limit reached"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
          </label>
        </section>
        <section className="mt-4 border border-ledger-rule p-5">
          <h3 className="mb-3 font-mono text-xs">
            02 / IF ALL CONDITIONS MATCH
          </h3>
          {conditions.map((c, i) => (
            <div
              key={c.id}
              className="mb-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]"
            >
              <select
                aria-label={`Condition ${i + 1} field`}
                className={control}
                value={c.field}
                onChange={(e) =>
                  setConditions((items) =>
                    items.map((x) =>
                      x.id === c.id ? { ...x, field: e.target.value } : x,
                    ),
                  )
                }
              >
                {["Amount", "Plan", "Region"].map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
              <input
                aria-label={`Condition ${i + 1} equals`}
                required
                maxLength={80}
                className={control}
                value={c.value}
                placeholder="Equals…"
                onChange={(e) =>
                  setConditions((items) =>
                    items.map((x) =>
                      x.id === c.id ? { ...x, value: e.target.value } : x,
                    ),
                  )
                }
              />
              <button
                type="button"
                className={control}
                onClick={() =>
                  setConditions((items) => items.filter((x) => x.id !== c.id))
                }
              >
                Remove
              </button>
            </div>
          ))}
          {!conditions.length && (
            <p className="mb-4 text-sm text-ledger-muted">
              No conditions: every matching trigger will qualify.
            </p>
          )}
          <button
            type="button"
            disabled={conditions.length >= 5}
            className={control}
            onClick={() =>
              setConditions((items) => [
                ...items,
                { id: sequence.current++, field: "Plan", value: "Growth" },
              ])
            }
          >
            Add condition
          </button>
        </section>
        <section className="mt-4 border border-ledger-rule p-5">
          <h3 className="mb-3 font-mono text-xs">03 / THEN</h3>
          <label className="text-sm">
            Action
            <select
              className={`${control} mt-2 w-full`}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              {[
                "Notify account owner",
                "Create follow-up task",
                "Send internal alert",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </section>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className={action} disabled={!dirty}>
            Save rule
          </button>
          <button
            type="button"
            className={control}
            disabled={!saved || dirty || !enabled}
            onClick={() =>
              setNotice(
                `Sample event matched ${conditions.length} condition(s). Planned action: ${target}. No external action was sent.`,
              )
            }
          >
            Test matching sample
          </button>
        </div>
        <p role="status" className="mt-4 text-sm text-ledger-muted">
          {dirty ? "Save your changes before testing. " : ""}
          {notice}
        </p>
      </form>
    </Frame>
  );
}
