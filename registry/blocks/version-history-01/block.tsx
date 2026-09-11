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
          content / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Version history
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A revision viewer with comparison and confirmed restoration of a
          previous version.
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
              ? "Loading version history…"
              : phase === "empty"
                ? "No version history yet"
                : "Unable to load version history"}
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

const versions = [
  {
    id: 3,
    title: "Launch checklist",
    body: "Review mobile layouts. Validate form errors. Connect real data. Run release checks.",
    author: "Maya Chen",
    date: "Sep 10, 2026 · 14:20",
  },
  {
    id: 2,
    title: "Launch checklist",
    body: "Review mobile layouts. Connect real data. Run release checks.",
    author: "Omar Ali",
    date: "Sep 9, 2026 · 10:15",
  },
  {
    id: 1,
    title: "Release notes",
    body: "Review layouts. Prepare the release.",
    author: "Maya Chen",
    date: "Sep 8, 2026 · 09:00",
  },
];
export function VersionHistory01({
  state = "default",
}: {
  state?: BlockState;
}) {
  const [current, setCurrent] = useState(versions[0]);
  const [selected, setSelected] = useState(versions[1]);
  const [compare, setCompare] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [notice, setNotice] = useState("");
  return (
    <Frame state={state}>
      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <aside aria-label="Revisions" className="space-y-3">
          {versions.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelected(v);
                setConfirm(false);
              }}
              aria-pressed={selected.id === v.id}
              className={`w-full border p-4 text-left ${selected.id === v.id ? "border-ledger-ink bg-ledger-rule/30" : "border-ledger-rule"}`}
            >
              <span className="block font-semibold">
                Version {v.id}
                {current.id === v.id ? " · Current" : ""}
              </span>
              <span className="mt-2 block text-xs text-ledger-muted">
                {v.author}
                <br />
                {v.date}
              </span>
            </button>
          ))}
        </aside>
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold">Version {selected.id}</h3>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={compare}
                onChange={(e) => setCompare(e.target.checked)}
              />
              Compare with current
            </label>
          </div>
          <div className={`grid gap-4 ${compare ? "xl:grid-cols-2" : ""}`}>
            <article className="border border-ledger-rule p-5">
              <p className="font-mono text-xs text-ledger-muted">
                SELECTED / V{selected.id}
              </p>
              <h4 className="mt-3 text-lg font-bold">{selected.title}</h4>
              <p className="mt-4 leading-relaxed">{selected.body}</p>
            </article>
            {compare && (
              <article className="border border-ledger-rule p-5">
                <p className="font-mono text-xs text-ledger-muted">
                  CURRENT / V{current.id}
                </p>
                <h4 className="mt-3 text-lg font-bold">{current.title}</h4>
                <p className="mt-4 leading-relaxed">{current.body}</p>
              </article>
            )}
          </div>
          {compare && (
            <p className="mt-4 text-sm text-ledger-muted">
              {selected.id === current.id
                ? "This is the current version."
                : `${selected.title === current.title ? "Title unchanged" : "Title changed"}. Content differs between these versions.`}
            </p>
          )}
          {confirm ? (
            <section
              aria-label="Confirm restoration"
              className="mt-5 border border-ledger-ink p-5"
            >
              <h4 className="font-semibold">Restore version {selected.id}?</h4>
              <p className="mt-2 text-sm text-ledger-muted">
                This replaces the current content in the demo. All sample
                versions remain available.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  className={action}
                  onClick={() => {
                    setCurrent(selected);
                    setConfirm(false);
                    setNotice(`Version ${selected.id} restored locally.`);
                  }}
                >
                  Confirm restore
                </button>
                <button className={control} onClick={() => setConfirm(false)}>
                  Cancel
                </button>
              </div>
            </section>
          ) : (
            <button
              className={`${action} mt-5`}
              disabled={selected.id === current.id}
              onClick={() => setConfirm(true)}
            >
              Restore this version
            </button>
          )}
          <p role="status" className="mt-4 text-sm">
            {notice}
          </p>
        </div>
      </div>
    </Frame>
  );
}
