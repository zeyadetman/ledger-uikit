const TOASTS = [
  {
    tone: "ink" as const,
    kicker: "Posted",
    body: "evt_9f2a rated. Harbour / tokens.out.",
  },
  {
    tone: "signal" as const,
    kicker: "Held",
    body: "INV-1044 line frozen — drift on gb.hours.",
  },
  {
    tone: "rule" as const,
    kicker: "Exported",
    body: "tape-2026-08-27.csv written to the desk.",
  },
];

export function Toast01() {
  return (
    <section className="relative min-h-[420px] w-full bg-ledger-paper p-4 text-ledger-ink sm:p-8">
      <p className="mb-6 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
        Toasts sit bottom-right. One at a time is enough.
      </p>
      <div className="ml-auto flex w-full max-w-sm flex-col gap-2">
        {TOASTS.map((toast) => (
          <div
            key={toast.kicker}
            className={`border border-ledger-ink p-4 ${
              toast.tone === "ink"
                ? "bg-ledger-ink text-ledger-paper"
                : "bg-ledger-paper"
            }`}
          >
            <div className="mb-1 flex items-center justify-between gap-3">
              <span
                className={`font-mono text-[10px] font-bold tracking-widest uppercase ${
                  toast.tone === "signal" ? "text-ledger-signal" : ""
                }`}
              >
                {toast.kicker}
              </span>
              <button
                type="button"
                className="font-mono text-[10px] tracking-widest uppercase opacity-70 hover:opacity-100"
                aria-label={`Dismiss ${toast.kicker}`}
              >
                Close
              </button>
            </div>
            <p className="text-[14px] leading-relaxed">{toast.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
