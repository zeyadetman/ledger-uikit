export function LedgerMark({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" className="fill-ledger-paper" />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        className="stroke-ledger-ink"
        strokeWidth="2"
      />
      <rect x="7" y="8" width="18" height="2" className="fill-ledger-ink" />
      <rect x="7" y="14" width="18" height="2" className="fill-ledger-ink" />
      <rect x="7" y="20" width="12" height="2" className="fill-ledger-ink" />
      <rect x="7" y="24" width="18" height="2" className="fill-ledger-signal" />
    </svg>
  );
}

export function LedgerLogo({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LedgerMark size={compact ? 24 : 28} />
      <span className="min-w-0">
        <span className="block font-mono text-xs font-bold tracking-widest uppercase">
          Ledger
        </span>
        <span className="mt-0.5 block font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
          Blocks UI Kit
        </span>
      </span>
    </span>
  );
}
