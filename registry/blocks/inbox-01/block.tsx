"use client";

import { useMemo, useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";

const THREADS = [
  {
    id: "1",
    title: "Drift on gb.hours / Harbour",
    preview: "Rated 318.4 against posted 301.1. Line held.",
    body: "Rated 318.4 against posted 301.1. The invoice line is held until an operator writes a correction on the meter. Do not auto-rate. If Harbour backfills after 16:00 UTC, open a prior-period write so it lands on the audit tape.",
    at: "13:12",
    unread: true,
    kicker: "Drift",
  },
  {
    id: "2",
    title: "Collector retry exhausted",
    preview: "api.calls / Ordinate failed after 8 attempts.",
    body: "api.calls / Ordinate failed after 8 attempts. The collector will not retry again this hour. Events already on the tape stay rated. New posts from Ordinate will queue until the key is rotated.",
    at: "12:51",
    unread: true,
    kicker: "Collector",
  },
  {
    id: "3",
    title: "INV-1044 closed",
    preview: "Floor subscription posted. Wire expected 5 Sep.",
    body: "Floor subscription posted. Wire expected 5 Sep. Card on file ending 4412. No operator action unless the wire misses the window.",
    at: "11:02",
    unread: false,
    kicker: "Invoice",
  },
];

export function Inbox01({
  state = "default",
}: {
  state?: BlockState;
}) {
  const [selectedId, setSelectedId] = useState(THREADS[0].id);
  const [readIds, setReadIds] = useState<string[]>(
    THREADS.filter((thread) => !thread.unread).map((thread) => thread.id)
  );

  const selected = useMemo(
    () => THREADS.find((thread) => thread.id === selectedId) ?? THREADS[0],
    [selectedId]
  );

  const unreadCount = THREADS.filter((thread) => !readIds.includes(thread.id))
    .length;

  function select(id: string) {
    setSelectedId(id);
    setReadIds((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  return (
    <section className="min-h-[480px] w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-ink px-4 py-4 md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Inbox
          </h2>
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest tabular-nums">
          {state === "default" ? `${unreadCount} unread` : "—"}
        </span>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Channel down
          </p>
          <p className="mt-2 text-[15px]">Could not load the desk inbox.</p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Clear
          </p>
          <p className="mt-2 text-[15px] text-ledger-muted">
            No threads on this desk.
          </p>
        </div>
      ) : null}

      {state === "loading" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="space-y-3 border-b border-ledger-ink p-4 lg:col-span-4 lg:border-r lg:border-b-0">
            <div className="h-12 bg-ledger-rule" />
            <div className="h-12 bg-ledger-rule" />
            <div className="h-12 bg-ledger-rule" />
          </div>
          <div className="p-6 lg:col-span-8">
            <div className="h-4 w-1/2 bg-ledger-rule" />
          </div>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <ul
            className="border-b border-ledger-ink lg:col-span-4 lg:border-r lg:border-b-0"
            role="listbox"
            aria-label="Notifications"
          >
            {THREADS.map((thread) => {
              const active = thread.id === selectedId;
              const unread = !readIds.includes(thread.id);
              return (
                <li key={thread.id} className="border-b border-ledger-rule">
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => select(thread.id)}
                    className={`flex w-full gap-3 px-4 py-3 text-left ${
                      active
                        ? "bg-ledger-ink text-ledger-paper"
                        : "hover:bg-ledger-rule/40"
                    }`}
                  >
                    <span
                      className={`mt-1 h-8 w-1 shrink-0 ${
                        unread ? "bg-ledger-signal" : "bg-ledger-rule"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline justify-between gap-2">
                        <span className="truncate text-[14px] font-bold tracking-tight">
                          {thread.title}
                        </span>
                        <span className="font-mono text-[10px] tabular-nums opacity-70">
                          {thread.at}
                        </span>
                      </span>
                      <span
                        className={`mt-1 block truncate text-[13px] ${
                          active ? "opacity-70" : "text-ledger-muted"
                        }`}
                      >
                        {thread.preview}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <article className="p-6 lg:col-span-8 md:p-8">
            <p
              className={`mb-2 font-mono text-[10px] font-bold tracking-widest uppercase ${
                !readIds.includes(selected.id)
                  ? "text-ledger-signal"
                  : "text-ledger-muted"
              }`}
            >
              {selected.kicker}
              {!readIds.includes(selected.id) ? " · unread" : ""}
            </p>
            <h3 className="mb-4 font-sans text-2xl font-bold tracking-tight uppercase">
              {selected.title}
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-ledger-muted">
              {selected.body}
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
              Received {selected.at} UTC
            </p>
          </article>
        </div>
      ) : null}
    </section>
  );
}
