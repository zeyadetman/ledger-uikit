"use client";

import { useState, useRef, useEffect } from "react";

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
          Custom domain setup
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A custom-domain workflow with DNS records and simulated verification.
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
              ? "Loading custom domain setup…"
              : phase === "empty"
                ? "No custom domain setup yet"
                : "Unable to load custom domain setup"}
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

export function Domain01({ state = "default" }: { state?: BlockState }) {
  const [input, setInput] = useState("");
  const [domain, setDomain] = useState("app.example.com");
  const [stage, setStage] = useState<"pending" | "checking" | "verified">(
    "pending",
  );
  const [notice, setNotice] = useState("");
  const [recordsReady, setRecordsReady] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  function check() {
    setStage("checking");
    setNotice("");
    timer.current = setTimeout(() => {
      setStage(recordsReady ? "verified" : "pending");
      setNotice(
        recordsReady
          ? "Sample DNS records verified. This did not perform a live DNS lookup."
          : "Sample verification failed: mark the records as configured, then retry.",
      );
    }, 800);
  }
  return (
    <Frame state={state}>
      <form
        className="mb-6 flex flex-wrap gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const value = input.trim().toLowerCase();
          if (
            value.length > 253 ||
            !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(
              value,
            )
          ) {
            setNotice(
              "Enter a hostname such as app.example.com, without https:// or a path.",
            );
            return;
          }
          setDomain(value);
          setStage("pending");
          setRecordsReady(false);
          setNotice("Domain added to this local demo.");
          setInput("");
        }}
      >
        <input
          required
          aria-label="Custom domain"
          value={input}
          disabled={stage === "checking"}
          onChange={(e) => setInput(e.target.value)}
          className={`${control} min-w-0 flex-1`}
          placeholder="app.yourcompany.com"
        />
        <button className={action} disabled={stage === "checking"}>
          Add domain
        </button>
      </form>
      <div className="border border-ledger-rule p-5">
        <div className="flex flex-wrap justify-between gap-3">
          <h3 className="break-all text-xl font-bold">{domain}</h3>
          <span className="font-mono text-xs">{stage}</span>
        </div>
        <p className="my-4 text-sm text-ledger-muted">
          Example DNS configuration. Replace the target and verification value
          with records from your hosting provider.
        </p>
        {[
          ["CNAME", domain, "edge.example.net"],
          ["TXT", `_verify.${domain}`, "ledger-demo-verification"],
        ].map(([type, host, value]) => (
          <div key={type} className="border-t border-ledger-rule py-4">
            <p className="font-mono text-xs">{type}</p>
            <p className="my-2 break-all text-sm">Host: {host}</p>
            <div className="flex flex-wrap items-center gap-3">
              <code className="break-all text-sm">{value}</code>
              <button
                className={control}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(value);
                    setNotice(`${type} value copied.`);
                  } catch {
                    setNotice(
                      "Clipboard unavailable. Select the record value and copy it manually.",
                    );
                  }
                }}
              >
                Copy value
              </button>
            </div>
          </div>
        ))}
        <label className="mt-4 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={recordsReady}
            disabled={stage === "checking"}
            onChange={(e) => {
              setRecordsReady(e.target.checked);
              setStage("pending");
            }}
          />
          Simulate correctly configured DNS
        </label>
        <button
          className={`${action} mt-4`}
          disabled={stage === "checking" || stage === "verified"}
          onClick={check}
        >
          {stage === "checking"
            ? "Checking sample…"
            : stage === "verified"
              ? "Sample verified"
              : "Verify sample records"}
        </button>
      </div>
      <p role="status" className="mt-4 text-sm text-ledger-muted">
        {notice}
      </p>
    </Frame>
  );
}
