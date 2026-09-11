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
          Booking scheduler
        </h2>
        <p className="mt-3 max-w-2xl text-base text-ledger-muted">
          An appointment flow with time zones, available slots, and
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
              ? "Loading booking scheduler…"
              : phase === "empty"
                ? "No booking scheduler yet"
                : "Unable to load booking scheduler"}
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

export function Booking01({ state = "default" }: { state?: BlockState }) {
  const [day, setDay] = useState("2026-09-15");
  const [slot, setSlot] = useState("");
  const [zone, setZone] = useState("UTC");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const times = [9, 11, 14, 16];
  const format = (hour: number) =>
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: zone,
    }).format(new Date(`${day}T${String(hour).padStart(2, "0")}:00:00Z`));
  return (
    <Frame state={state}>
      {confirmed ? (
        <div role="status" className="border border-ledger-rule p-6">
          <p className="font-mono text-xs">DEMO BOOKING CONFIRMED</p>
          <h3 className="mt-3 text-2xl font-bold">
            You’re on the sample calendar, {name}.
          </h3>
          <p className="mt-4">
            {day} · {format(Number(slot))} · {zone}
          </p>
          <p className="mt-2 text-sm text-ledger-muted">
            No invitation was sent to {email}. Connect your booking service to
            send real invitations.
          </p>
          <button
            className={`${action} mt-6`}
            onClick={() => {
              setConfirmed(false);
              setSlot("");
            }}
          >
            Choose another time
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (slot) setConfirmed(true);
          }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <section>
              <h3 className="text-xl font-semibold">Product walkthrough</h3>
              <p className="my-3 text-ledger-muted">
                30 minutes · Video call · Sample availability
              </p>
              <label className="block text-sm">
                Date
                <select
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                    setSlot("");
                  }}
                  className={`${control} mt-2 w-full`}
                >
                  {[15, 16, 17, 18].map((d) => (
                    <option value={`2026-09-${d}`} key={d}>
                      September {d}, 2026
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm">
                Time zone
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className={`${control} mt-2 w-full`}
                >
                  {[
                    "UTC",
                    "America/New_York",
                    "Europe/London",
                    "Asia/Dubai",
                  ].map((z) => (
                    <option key={z}>{z}</option>
                  ))}
                </select>
              </label>
              <fieldset className="mt-5">
                <legend className="mb-3 text-sm">Available times</legend>
                <div className="grid grid-cols-2 gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      disabled={t === 11}
                      aria-pressed={slot === String(t)}
                      onClick={() => setSlot(String(t))}
                      className={slot === String(t) ? action : control}
                    >
                      {format(t)}
                      {t === 11 ? " · Full" : ""}
                    </button>
                  ))}
                </div>
              </fieldset>
            </section>
            <div className="space-y-4">
              <label className="block text-sm">
                Your name
                <input
                  required
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className={`${control} mt-2 w-full`}
                />
              </label>
              <label className="block text-sm">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className={`${control} mt-2 w-full`}
                />
              </label>
              <button disabled={!slot} className={`${action} w-full`}>
                Confirm sample booking
              </button>
              <p className="text-sm text-ledger-muted">
                Select a time to continue. This demo does not reserve a real
                appointment.
              </p>
            </div>
          </div>
        </form>
      )}
    </Frame>
  );
}
