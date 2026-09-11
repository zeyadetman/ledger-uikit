"use client";

import { useEffect, useState } from "react";

export function JobProgress01() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Ready");
  useEffect(() => {
    if (status !== "Running") return;
    if (progress >= 100) {
      setStatus("Complete");
      return;
    }
    const timer = setTimeout(
      () => setProgress((value) => Math.min(100, value + 20)),
      600
    );
    return () => clearTimeout(timer);
  }, [progress, status]);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          system / job-progress-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Background job
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A long-running job summary with progress, cancellation, and restart
          controls.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="max-w-2xl border border-ledger-ink p-6">
          <div className="flex flex-wrap justify-between gap-3">
            <h3 className="font-bold">September event export</h3>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              {status}
            </span>
          </div>
          <p className="font-mono tabular-nums mt-6 text-4xl font-bold">
            {progress}%
          </p>
          <progress
            aria-label="Export progress"
            className="mt-4 h-3 w-full accent-ledger-ink"
            max={100}
            value={progress}
          />
          <p
            className="text-[15px] leading-relaxed text-ledger-muted mt-4"
            role="status"
          >
            {status === "Complete"
              ? "Export prepared in this demo."
              : status === "Cancelled"
                ? "Job cancelled. Restart to run another export."
                : "Preparing a local demonstration of an export job."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => {
                setProgress(0);
                setStatus("Running");
              }}
            >
              {status === "Running" ? "Restart" : "Start export"}
            </button>
            <button
              type="button"
              disabled={status !== "Running"}
              className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setStatus("Cancelled")}
            >
              Cancel job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
