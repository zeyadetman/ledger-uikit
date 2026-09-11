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
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Kanban board</h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A project board with priorities, owners, and movable tasks.
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
              ? "Loading kanban board…"
              : phase === "empty"
                ? "No kanban board yet"
                : "Unable to load kanban board"}
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

const columns = ["Backlog", "In progress", "Done"];
const initialTasks = [
  {
    id: 1,
    title: "Review onboarding copy",
    owner: "Maya",
    priority: "High",
    stage: "Backlog",
  },
  {
    id: 2,
    title: "Build usage dashboard",
    owner: "Omar",
    priority: "Medium",
    stage: "In progress",
  },
  {
    id: 3,
    title: "Ship billing fixes",
    owner: "Alex",
    priority: "High",
    stage: "Done",
  },
];
export function Kanban01({ state = "default" }: { state?: BlockState }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");
  function move(id: number, stage: string) {
    if (!columns.includes(stage)) return;
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, stage } : x)));
    setNotice(`Task moved to ${stage}.`);
  }
  return (
    <Frame state={state}>
      <form
        className="mb-6 flex flex-wrap gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          setTasks((t) => [
            ...t,
            {
              id: Math.max(0, ...t.map((x) => x.id)) + 1,
              title: title.trim(),
              owner: "You",
              priority: "Medium",
              stage: "Backlog",
            },
          ]);
          setTitle("");
          setNotice("Task added to Backlog.");
        }}
      >
        <input
          aria-label="New task title"
          maxLength={100}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${control} min-w-0 flex-1`}
          placeholder="Add a task…"
        />
        <button className={action}>Add task</button>
      </form>
      <p className="mb-4 text-sm text-ledger-muted">
        Move tasks with the status menu, or drag them between columns on
        desktop.
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((col) => (
          <section
            key={col}
            className="min-w-0 border border-ledger-rule p-4"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              move(Number(e.dataTransfer.getData("text/plain")), col);
            }}
          >
            <h3 className="mb-4 flex justify-between font-semibold">
              {col}
              <span className="font-mono tabular-nums">
                {tasks.filter((t) => t.stage === col).length}
              </span>
            </h3>
            <div className="space-y-3">
              {tasks
                .filter((t) => t.stage === col)
                .map((t) => (
                  <article
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", String(t.id))
                    }
                    key={t.id}
                    className="border border-ledger-rule bg-ledger-paper p-4"
                  >
                    <p className="text-xs text-ledger-muted">
                      {t.priority} priority · {t.owner}
                    </p>
                    <h4 className="my-3 break-words font-semibold">
                      {t.title}
                    </h4>
                    <select
                      aria-label={`Status of ${t.title}`}
                      value={t.stage}
                      onChange={(e) => move(t.id, e.target.value)}
                      className={`${control} w-full`}
                    >
                      {columns.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </article>
                ))}
              {!tasks.some((t) => t.stage === col) && (
                <p className="py-6 text-sm text-ledger-muted">
                  No tasks in this column.
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
      <p role="status" className="mt-4 text-sm">
        {notice}
      </p>
    </Frame>
  );
}
