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
          Record detail panel
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          An editable record with local saving, activity, and change
          cancellation.
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
              ? "Loading record detail panel…"
              : phase === "empty"
                ? "No record detail panel yet"
                : "Unable to load record detail panel"}
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

const initialRecord = {
  name: "Northstar renewal",
  owner: "Maya Chen",
  status: "In review",
  notes: "Confirm the seat count before sending the renewal proposal.",
};
export function RecordDetail01({ state = "default" }: { state?: BlockState }) {
  const [saved, setSaved] = useState(initialRecord);
  const [draft, setDraft] = useState(initialRecord);
  const [tab, setTab] = useState("Details");
  const [activity, setActivity] = useState([
    "Record created by Maya Chen",
    "Status changed to In review",
  ]);
  const [notice, setNotice] = useState("");
  const dirty = JSON.stringify(saved) !== JSON.stringify(draft);
  return (
    <Frame state={state}>
      <div className="mx-auto max-w-2xl border border-ledger-rule">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ledger-rule p-5">
          <span className="font-mono text-xs">DEAL-2048</span>
          <span className="text-sm">
            {dirty ? "Unsaved changes" : "All changes saved locally"}
          </span>
        </div>
        <div
          role="group"
          aria-label="Record view"
          className="flex border-b border-ledger-rule"
        >
          {["Details", "Activity"].map((t) => (
            <button
              key={t}
              aria-pressed={tab === t}
              className={`${tab === t ? action : control} flex-1 border-0`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "Details" ? (
          <form
            className="space-y-5 p-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draft.name.trim()) return;
              setSaved({ ...draft, name: draft.name.trim() });
              setDraft((d) => ({ ...d, name: d.name.trim() }));
              setActivity((a) => [
                ...a,
                `You saved ${draft.name.trim()} (${draft.status})`,
              ]);
              setNotice("Record saved in this demo.");
            }}
          >
            <label className="block text-sm">
              Record name
              <input
                required
                maxLength={100}
                value={draft.name}
                className={`${control} mt-2 w-full`}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Owner
                <select
                  className={`${control} mt-2 w-full`}
                  value={draft.owner}
                  onChange={(e) =>
                    setDraft({ ...draft, owner: e.target.value })
                  }
                >
                  {["Maya Chen", "Omar Ali", "You"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm">
                Status
                <select
                  className={`${control} mt-2 w-full`}
                  value={draft.status}
                  onChange={(e) =>
                    setDraft({ ...draft, status: e.target.value })
                  }
                >
                  {["Open", "In review", "Approved", "Closed"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block text-sm">
              Notes
              <textarea
                rows={4}
                maxLength={1000}
                className={`${control} mt-2 w-full`}
                value={draft.notes}
                onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                disabled={!dirty || !draft.name.trim()}
                className={action}
              >
                Save changes
              </button>
              <button
                type="button"
                disabled={!dirty}
                className={control}
                onClick={() => {
                  setDraft(saved);
                  setNotice("Unsaved changes discarded.");
                }}
              >
                Cancel changes
              </button>
            </div>
          </form>
        ) : (
          <ol className="space-y-4 p-5">
            {activity.map((a, i) => (
              <li key={i} className="border-b border-ledger-rule pb-3">
                <span className="mr-3 font-mono text-xs text-ledger-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {a}
              </li>
            ))}
          </ol>
        )}
        <p role="status" className="px-5 pb-5 text-sm text-ledger-muted">
          {notice}
        </p>
      </div>
    </Frame>
  );
}
