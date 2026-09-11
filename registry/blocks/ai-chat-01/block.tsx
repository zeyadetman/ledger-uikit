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
          communication / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          AI conversation
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          An assistant conversation with suggested prompts, generation, and
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
              ? "Loading ai conversation…"
              : phase === "empty"
                ? "No ai conversation yet"
                : "Unable to load ai conversation"}
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

export function AiChat01({ state = "default" }: { state?: BlockState }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi. I can help draft a launch checklist or summarize your workspace.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  function respond(text: string) {
    setBusy(true);
    setFailed(false);
    timer.current = setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: text.toLowerCase().includes("launch")
            ? "Launch checklist: review your mobile layouts, verify form validation, connect real data, and run your release checks."
            : "Workspace summary: three projects are active, two reviews need attention, and the release checklist is ready to review.",
        },
      ]);
      setBusy(false);
    }, 900);
  }
  function send(text: string) {
    if (!text.trim() || busy) return;
    setMessages((m) => [...m, { role: "you", text: text.trim() }]);
    setInput("");
    respond(text);
  }
  return (
    <Frame state={state}>
      <p className="mb-5 text-sm text-ledger-muted">
        Demo assistant · responses are scripted locally.
      </p>
      <div
        role="log"
        aria-label="Conversation"
        aria-live="polite"
        className="max-h-80 space-y-4 overflow-y-auto"
      >
        {messages.map((m, i) => (
          <article key={i} className="border border-ledger-rule p-4">
            <p className="font-mono text-xs uppercase text-ledger-muted">
              {m.role}
            </p>
            <p className="mt-2 break-words">{m.text}</p>
          </article>
        ))}
        {busy && <p role="status">Generating a response…</p>}
      </div>
      {failed && (
        <div role="alert" className="mt-4 border border-ledger-rule p-4">
          Response interrupted.{" "}
          <button
            className={control}
            onClick={() => respond(messages[messages.length - 1].text)}
          >
            Retry response
          </button>
        </div>
      )}
      <div className="my-4 flex flex-wrap gap-2">
        {["Draft a launch checklist", "Summarize my workspace"].map((p) => (
          <button
            key={p}
            disabled={busy}
            className={control}
            onClick={() => send(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex flex-wrap gap-3"
      >
        <label className="min-w-0 flex-1 basis-52">
          <span className="sr-only">Message</span>
          <input
            maxLength={2000}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your workspace…"
            className={`${control} w-full`}
          />
        </label>
        <button disabled={busy || !input.trim()} className={action}>
          Send
        </button>
        {busy && (
          <button
            type="button"
            className={control}
            onClick={() => {
              if (timer.current) clearTimeout(timer.current);
              setBusy(false);
              setFailed(true);
            }}
          >
            Stop
          </button>
        )}
      </form>
    </Frame>
  );
}
