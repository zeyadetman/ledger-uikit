import { AlertTriangle, FileText, Radio } from "lucide-react";

type BlockState = "default" | "loading" | "empty" | "error";

const ITEMS = [
  {
    icon: AlertTriangle,
    title: "Drift on gb.hours / Harbour",
    detail: "Rated 318.4 against posted 301.1. Invoice line held.",
    at: "13:12",
    unread: true,
  },
  {
    icon: Radio,
    title: "Collector retry exhausted",
    detail: "api.calls / Ordinate failed after 8 attempts.",
    at: "12:51",
    unread: true,
  },
  {
    icon: FileText,
    title: "INV-1044 closed",
    detail: "Floor subscription posted. Wire expected 5 Sep.",
    at: "11:02",
    unread: false,
  },
];

export function Notifications01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-ink px-4 py-4 md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Notifications
          </h2>
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest tabular-nums">
          {state === "default" ? "2 unread" : "—"}
        </span>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Alert feed down
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            The desk cannot see drift or collector failures until this channel
            returns.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Clear
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            No alerts on this desk. Drift watch is quiet.
          </p>
        </div>
      ) : null}

      {state === "loading" ? (
        <div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-ledger-rule px-4 py-4 md:px-8"
            >
              <div className="mb-2 h-3 w-48 bg-ledger-rule" />
              <div className="h-3 w-72 bg-ledger-rule" />
            </div>
          ))}
        </div>
      ) : null}

      {state === "default"
        ? ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 border-b border-ledger-rule px-4 py-4 md:px-8"
            >
              <div
                className={`mt-1 h-8 w-1 shrink-0 ${
                  item.unread ? "bg-ledger-signal" : "bg-ledger-rule"
                }`}
              />
              <item.icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[15px] font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] tabular-nums text-ledger-muted">
                    {item.at}
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-ledger-muted">{item.detail}</p>
              </div>
            </article>
          ))
        : null}
    </section>
  );
}
