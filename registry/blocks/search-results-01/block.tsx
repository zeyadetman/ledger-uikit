import { Search } from "lucide-react";

type BlockState = "default" | "loading" | "empty" | "error";

const HITS = [
  { kind: "Meter", title: "tokens.out", detail: "v3 · rated · 2.4M events today" },
  { kind: "Event", title: "evt_9f2a", detail: "Harbour · 1,204,880 · 14:01:08" },
  { kind: "Invoice", title: "INV-1044", detail: "Jul 2026 · $249.00 · Paid" },
  { kind: "Customer", title: "Harbour", detail: "Floor · 3 meters attached" },
];

export function SearchResults01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink p-4 md:p-6">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Find
        </p>
        <label className="flex h-11 items-center gap-3 border border-ledger-ink px-3">
          <Search className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          <input
            defaultValue="tokens"
            className="h-full w-full bg-transparent text-[15px] focus-visible:outline-none"
            aria-label="Search workspace"
          />
        </label>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Index down
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Search cannot read meters or invoices. Try the tape tables directly.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No hits
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            Nothing matches that query on this workspace.
          </p>
        </div>
      ) : null}

      {state === "loading"
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border-b border-ledger-rule px-4 py-4">
              <div className="mb-2 h-3 w-16 bg-ledger-rule" />
              <div className="h-3 w-48 bg-ledger-rule" />
            </div>
          ))
        : null}

      {state === "default" ? (
        <div>
          <p className="border-b border-ledger-rule px-4 py-2 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
            4 hits in North
          </p>
          {HITS.map((hit) => (
            <article
              key={hit.title}
              className="border-b border-ledger-rule px-4 py-4 hover:bg-ledger-rule/30"
            >
              <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                {hit.kind}
              </p>
              <h3 className="mt-1 font-mono text-[14px] font-bold">{hit.title}</h3>
              <p className="mt-1 text-[14px] text-ledger-muted">{hit.detail}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
