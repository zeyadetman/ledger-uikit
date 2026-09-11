"use client";

import { useState, useEffect, useRef } from "react";

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
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Upload queue</h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A file queue with validation, simulated progress, cancellation, and
          retry.
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
              ? "Loading upload queue…"
              : phase === "empty"
                ? "No upload queue yet"
                : "Unable to load upload queue"}
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

type UploadItem = {
  id: number;
  name: string;
  size: number;
  progress: number;
  status: "queued" | "uploading" | "done" | "cancelled" | "error";
};
export function Upload01({ state = "default" }: { state?: BlockState }) {
  const [files, setFiles] = useState<UploadItem[]>([
    {
      id: 0,
      name: "sample-report.pdf",
      size: 245760,
      progress: 0,
      status: "queued",
    },
  ]);
  const [message, setMessage] = useState("");
  const nextId = useRef(1);
  useEffect(() => {
    const timer = setInterval(
      () =>
        setFiles((items) =>
          !items.some((f) => f.status === "uploading")
            ? items
            : items.map((f) =>
                f.status !== "uploading"
                  ? f
                  : {
                      ...f,
                      progress: Math.min(100, f.progress + 20),
                      status: f.progress >= 80 ? "done" : "uploading",
                    },
              ),
        ),
      400,
    );
    return () => clearInterval(timer);
  }, []);
  function addFiles(list: FileList | null) {
    if (!list) return;
    const accepted: UploadItem[] = [];
    const rejected: string[] = [];
    Array.from(list).forEach((f) => {
      if (
        f.size > 10 * 1024 * 1024 ||
        !/\.(pdf|csv|png|jpe?g)$/i.test(f.name)
      ) {
        rejected.push(f.name);
        return;
      }
      accepted.push({
        id: nextId.current++,
        name: f.name,
        size: f.size,
        progress: 0,
        status: "queued",
      });
    });
    setFiles((items) => [...items, ...accepted]);
    setMessage(
      rejected.length
        ? `${rejected.length} file(s) rejected. Use PDF, CSV, PNG, or JPG under 10 MB.`
        : `${accepted.length} file(s) added.`,
    );
  }
  function update(id: number, status: UploadItem["status"]) {
    setFiles((items) =>
      items.map((f) =>
        f.id === id
          ? { ...f, status, progress: status === "uploading" ? 0 : f.progress }
          : f,
      ),
    );
  }
  return (
    <Frame state={state}>
      <div
        className="border border-dashed border-ledger-ink p-6 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          addFiles(e.dataTransfer.files);
        }}
      >
        <h3 className="text-xl font-semibold">
          Choose files or drop them here
        </h3>
        <p className="my-3 text-sm text-ledger-muted">
          PDF, CSV, PNG, JPG · Up to 10 MB each
        </p>
        <input
          aria-label="Select files"
          type="file"
          multiple
          accept=".pdf,.csv,.png,.jpg,.jpeg"
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = "";
          }}
          className="max-w-full text-sm"
        />
      </div>
      <p role="status" className="my-4 text-sm">
        {message}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          disabled={!files.some((f) => f.status === "queued")}
          className={action}
          onClick={() =>
            setFiles((items) =>
              items.map((f) =>
                f.status === "queued" ? { ...f, status: "uploading" } : f,
              ),
            )
          }
        >
          Start sample upload
        </button>
        <button
          className={control}
          onClick={() =>
            setFiles((items) => items.filter((f) => f.status !== "done"))
          }
        >
          Clear completed
        </button>
      </div>
      <ul className="mt-5 divide-y divide-ledger-rule">
        {files.map((f) => (
          <li key={f.id} className="py-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="break-all font-semibold">{f.name}</p>
                <p className="font-mono text-xs tabular-nums text-ledger-muted">
                  {Math.max(1, Math.round(f.size / 1024))} KB · {f.status}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {f.status === "uploading" && (
                  <>
                    <button
                      className={control}
                      onClick={() => update(f.id, "cancelled")}
                    >
                      Cancel
                    </button>
                    <button
                      className={control}
                      onClick={() => update(f.id, "error")}
                    >
                      Simulate failure
                    </button>
                  </>
                )}
                {(f.status === "error" || f.status === "cancelled") && (
                  <button
                    className={control}
                    onClick={() => update(f.id, "uploading")}
                  >
                    Retry
                  </button>
                )}
                <button
                  aria-label={`Remove ${f.name}`}
                  className={control}
                  onClick={() =>
                    setFiles((items) => items.filter((x) => x.id !== f.id))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
            <progress
              aria-label={`${f.name} progress`}
              value={f.progress}
              max={100}
              className="mt-3 h-2 w-full accent-ledger-signal"
            />
          </li>
        ))}
      </ul>
      {!files.length && (
        <p className="mt-6 text-ledger-muted">Your upload queue is empty.</p>
      )}
      <p className="mt-5 text-sm text-ledger-muted">
        Progress is simulated. Selected files stay on your device and are not
        uploaded.
      </p>
    </Frame>
  );
}
