"use client";

import { useState } from "react";

type BlockState = "default" | "loading" | "empty" | "error";

export function Sessions01({ state = "default" }: { state?: BlockState }) {
  const [sessions, setSessions] = useState([
    { id: 1, device: "Safari / macOS", location: "Cairo, Egypt", time: "Now" },
    {
      id: 2,
      device: "Firefox / Linux",
      location: "London, United Kingdom",
      time: "2 hours ago",
    },
    {
      id: 3,
      device: "Safari / iOS",
      location: "Cairo, Egypt",
      time: "Yesterday",
    },
  ]);
  const [notice, setNotice] = useState("Revoke devices you no longer use.");
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          app / sessions-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Active sessions
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A review of signed-in devices with individual session revocation.
        </p>
      </header>
      {state === "loading" ? (
        <div role="status" className="space-y-4 p-5 sm:p-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
            Loading active sessions…
          </p>
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="h-12 border border-ledger-rule bg-ledger-rule/30"
            />
          ))}
        </div>
      ) : state === "empty" ? (
        <p
          role="status"
          className="text-[15px] leading-relaxed text-ledger-muted p-5 sm:p-8"
        >
          No records yet. New records will appear here.
        </p>
      ) : state === "error" ? (
        <p role="alert" className="border-l-2 border-ledger-signal p-5 sm:p-8">
          This view could not be loaded. Try again from the viewer.
        </p>
      ) : (
        <>
          <div className="p-5 sm:p-8">
            <div>
              {sessions.map((session) => (
                <article
                  key={session.id}
                  className="flex flex-wrap items-center justify-between gap-4 border-b border-ledger-rule py-4 last:border-b-0"
                >
                  <div>
                    <h3 className="font-bold">{session.device}</h3>
                    <p className="text-[15px] leading-relaxed text-ledger-muted">
                      {session.location}
                    </p>
                    <p className="font-mono tabular-nums mt-2 text-xs text-ledger-muted">
                      Last active: {session.time}
                    </p>
                  </div>
                  {session.id === 1 ? (
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                      This session
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
                      onClick={() => {
                        setSessions(
                          sessions.filter((item) => item.id !== session.id)
                        );
                        setNotice(`${session.device} revoked in this demo.`);
                      }}
                    >
                      Revoke<span className="sr-only"> {session.device}</span>
                    </button>
                  )}
                </article>
              ))}
            </div>
            <p
              role="status"
              className="text-[15px] leading-relaxed text-ledger-muted mt-5"
            >
              {notice}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
