import { FileSpreadsheet, FileText } from "lucide-react";

type BlockState = "default" | "loading" | "empty" | "error";

const FILES = [
  {
    name: "tape-2026-08-27.csv",
    kind: "Export",
    size: "2.4 MB",
    at: "14:02",
    icon: FileSpreadsheet,
  },
  {
    name: "INV-1044.pdf",
    kind: "Invoice",
    size: "84 KB",
    at: "13:48",
    icon: FileText,
  },
  {
    name: "meters-v3.json",
    kind: "Catalog",
    size: "12 KB",
    at: "09:11",
    icon: FileText,
  },
];

export function Files01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex items-end justify-between border-b border-ledger-ink px-4 py-4 md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Exports
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            Files
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex h-9 items-center border border-ledger-ink px-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
        >
          New export
        </button>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Store unreachable
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not list exports. CSVs already downloaded on disk are still
            valid.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No exports
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            Run a tape export to put a CSV on this desk.
          </p>
        </div>
      ) : null}

      {state === "loading"
        ? Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex gap-3 border-b border-ledger-rule px-4 py-4 md:px-8"
            >
              <div className="h-8 w-8 bg-ledger-rule" />
              <div className="flex-1">
                <div className="mb-2 h-3 w-40 bg-ledger-rule" />
                <div className="h-3 w-24 bg-ledger-rule" />
              </div>
            </div>
          ))
        : null}

      {state === "default"
        ? FILES.map((file) => (
            <article
              key={file.name}
              className="flex items-center gap-3 border-b border-ledger-rule px-4 py-4 md:px-8"
            >
              <file.icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-mono text-[13px]">{file.name}</p>
                <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
                  {file.kind}
                </p>
              </div>
              <span className="hidden font-mono text-[11px] tabular-nums text-ledger-muted sm:inline">
                {file.size}
              </span>
              <span className="font-mono text-[11px] tabular-nums">{file.at}</span>
            </article>
          ))
        : null}
    </section>
  );
}
