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
          communication / Interactive demo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Feedback collector
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          A feedback form with ratings, categories, validation, and submission
          confirmation.
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
              ? "Loading feedback collector…"
              : phase === "empty"
                ? "No feedback collector yet"
                : "Unable to load feedback collector"}
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

export function Feedback01({ state = "default" }: { state?: BlockState }) {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("Suggestion");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  return (
    <Frame state={state}>
      <div className="mx-auto max-w-xl">
        {submitted ? (
          <div role="status" className="border border-ledger-rule p-6">
            <h3 className="text-2xl font-bold">
              Thanks for helping us improve.
            </h3>
            <p className="mt-3">
              {category} · {rating}/5
            </p>
            <p className="mt-3 break-words text-ledger-muted">{message}</p>
            <p className="mt-5 text-sm text-ledger-muted">
              Your feedback was saved in this demo session only. Connect a
              submission endpoint to deliver real feedback.
            </p>
            <button
              className={`${control} mt-5`}
              onClick={() => {
                setSubmitted(false);
                setMessage("");
                setRating(0);
                setEmail("");
              }}
            >
              Leave more feedback
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!rating) {
                setError("Choose a rating before submitting.");
                return;
              }
              if (message.trim().length < 10) {
                setError("Please write at least 10 characters.");
                return;
              }
              setError("");
              setSubmitted(true);
            }}
          >
            <fieldset>
              <legend className="font-semibold">
                How was your experience?
              </legend>
              <div className="my-4 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <label
                    key={n}
                    className={`${rating === n ? action : control} flex items-center gap-2`}
                  >
                    <input
                      type="radio"
                      name="feedback-rating"
                      value={n}
                      checked={rating === n}
                      onChange={() => setRating(n)}
                    />
                    <span className="font-mono tabular-nums">{n}</span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-ledger-muted">
                1 = frustrating · 5 = excellent
              </p>
            </fieldset>
            <label className="mt-5 block text-sm">
              Feedback type
              <select
                className={`${control} mt-2 w-full`}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {["Suggestion", "Bug report", "Compliment"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label className="mt-5 block text-sm">
              What should we know?
              <textarea
                required
                minLength={10}
                maxLength={1000}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${control} mt-2 w-full`}
                placeholder="Tell us what worked, or what got in your way."
              />
            </label>
            <p className="mt-1 text-right font-mono text-xs tabular-nums text-ledger-muted">
              {message.length}/1000
            </p>
            <label className="mt-5 block text-sm">
              Email for follow-up (optional)
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${control} mt-2 w-full`}
              />
            </label>
            {error && (
              <p role="alert" className="mt-4 text-sm">
                {error}
              </p>
            )}
            <button className={`${action} mt-5 w-full`}>
              Submit sample feedback
            </button>
          </form>
        )}
      </div>
    </Frame>
  );
}
