"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "signal";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none font-mono text-sm font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ledger-ink disabled:pointer-events-none disabled:opacity-50",
          {
            "border border-ledger-ink bg-ledger-ink text-ledger-paper hover:bg-transparent hover:text-ledger-ink":
              variant === "default",
            "border border-ledger-ink bg-transparent text-ledger-ink hover:bg-ledger-ink hover:text-ledger-paper":
              variant === "outline",
            "text-ledger-ink hover:bg-ledger-ink hover:text-ledger-paper":
              variant === "ghost",
            "border border-ledger-signal bg-ledger-signal text-white hover:bg-transparent hover:text-ledger-signal":
              variant === "signal",
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-6": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
