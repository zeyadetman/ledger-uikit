import { Check } from "lucide-react";

const STEPS = [
  { n: "01", title: "Name the workspace", done: true, note: "North" },
  { n: "02", title: "Create a meter", done: true, note: "tokens.out" },
  { n: "03", title: "Post a test event", done: false, note: "Awaiting ingest" },
  { n: "04", title: "Invite finance", done: false, note: "Not sent" },
];

export function Onboard01() {
  const complete = STEPS.filter((step) => step.done).length;

  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          First close
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Open the desk
        </h2>
        <p className="mt-2 font-mono text-[11px] tracking-widest text-ledger-muted uppercase">
          {complete} / {STEPS.length} complete
        </p>
        <div className="mt-4 h-1 w-full max-w-sm bg-ledger-rule">
          <div
            className="h-full bg-ledger-ink"
            style={{ width: `${(complete / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
      <ol>
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="flex items-center gap-4 border-b border-ledger-rule px-4 py-4 md:px-8"
          >
            <span
              className={`inline-flex h-8 w-8 items-center justify-center font-mono text-[10px] font-bold tracking-widest ${
                step.done
                  ? "bg-ledger-ink text-ledger-paper"
                  : "border border-ledger-ink"
              }`}
            >
              {step.done ? (
                <Check className="h-3.5 w-3.5" strokeWidth={1.75} />
              ) : (
                step.n
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold tracking-tight uppercase">
                {step.title}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
                {step.note}
              </p>
            </div>
            {step.done ? null : (
              <button
                type="button"
                className="inline-flex h-9 items-center border border-ledger-ink px-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
              >
                Continue
              </button>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
