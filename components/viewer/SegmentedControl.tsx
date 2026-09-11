"use client";

import { cn } from "@/lib/utils";

export function SegmentedControl<T extends string>({
  ariaLabel,
  value,
  onChange,
  options,
}: {
  ariaLabel: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex min-w-0 flex-wrap border border-ledger-ink"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "h-8 shrink-0 px-3 font-mono text-[10px] font-bold uppercase tracking-widest",
              active
                ? "bg-ledger-ink text-ledger-paper"
                : "bg-ledger-paper text-ledger-ink hover:bg-ledger-rule"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
