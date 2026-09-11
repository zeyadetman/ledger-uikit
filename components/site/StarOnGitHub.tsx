import { ArrowUpRight, Star } from "lucide-react";
import { repositoryUrl } from "@/lib/site";

export function StarOnGitHub({
  count,
  variant = "button",
}: {
  count?: number | null;
  variant?: "button" | "compact" | "text";
}) {
  const label =
    count == null ? "Star on GitHub" : `Star on GitHub · ${count}`;

  if (variant === "text") {
    return (
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-2 text-sm font-semibold hover:text-ledger-signal"
      >
        <Star size={16} strokeWidth={1.75} /> Star on GitHub{" "}
        <ArrowUpRight size={16} />
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="inline-flex items-center gap-2 border border-ledger-ink px-3 py-1.5 font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-ledger-ink hover:text-ledger-paper"
      >
        <Star size={14} strokeWidth={1.75} />
        Star
        {count != null ? (
          <span className="tabular-nums">{count}</span>
        ) : null}
      </a>
    );
  }

  return (
    <a
      href={repositoryUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex min-h-12 items-stretch"
    >
      <span className="inline-flex items-center gap-2 border border-ledger-ink px-5 text-sm font-semibold group-hover:bg-ledger-ink group-hover:text-ledger-paper">
        <Star size={17} strokeWidth={1.75} />
        Star on GitHub
      </span>
      {count != null ? (
        <span className="inline-flex items-center border border-l-0 border-ledger-ink px-3 font-mono text-sm font-semibold tabular-nums group-hover:bg-ledger-ink group-hover:text-ledger-paper">
          {count}
        </span>
      ) : null}
    </a>
  );
}
