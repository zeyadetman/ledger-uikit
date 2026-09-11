import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "signal";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest",
        {
          "bg-ledger-ink text-ledger-paper": variant === "default",
          "border border-ledger-ink text-ledger-ink": variant === "outline",
          "bg-ledger-signal text-white": variant === "signal",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
