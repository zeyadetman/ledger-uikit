"use client";

// requires: import { cn } from "@/lib/utils"
import { useState, type ReactNode } from "react";
import {
  Activity,
  FileText,
  Gauge,
  LayoutGrid,
  Menu,
  Radio,
  Settings,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type BlockState = "default" | "loading" | "empty" | "error";

const NAV = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Meters", icon: Gauge },
  { label: "Events", icon: Radio },
  { label: "Invoices", icon: FileText },
  { label: "Drift", icon: Activity },
  { label: "Operators", icon: Users },
  { label: "Settings", icon: Settings },
];

export function Shell01({
  children,
  className,
}: {
  children?: ReactNode;
  state?: BlockState;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex h-[640px] w-full overflow-hidden bg-ledger-paper text-ledger-ink",
        className,
      )}
    >
      <aside className="hidden w-56 shrink-0 border-r border-ledger-ink md:flex md:flex-col">
        <div className="border-b border-ledger-ink px-4 py-4">
          <p className="font-mono text-xs font-bold tracking-widest uppercase">
            Fathom
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
            Workspace / North
          </p>
        </div>
        <nav className="flex flex-1 flex-col">
          {NAV.map((item, index) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className={`flex items-center gap-2 border-b border-ledger-rule px-4 py-3 font-mono text-[11px] font-bold tracking-widest uppercase ${
                index === 0
                  ? "bg-ledger-ink text-ledger-paper"
                  : "hover:bg-ledger-rule"
              }`}
            >
              <item.icon className="h-4 w-4" strokeWidth={1.75} />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-ledger-ink px-4 py-3 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
          op / m.chen
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <header className="flex items-center justify-between gap-3 border-b border-ledger-ink px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center border border-ledger-ink md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                Main / Overview
              </p>
              <p className="font-sans text-sm font-bold tracking-tight uppercase">
                North workspace
              </p>
            </div>
          </div>
          <span className="font-mono text-[10px] font-bold tracking-widest tabular-nums">
            14:02:11
          </span>
        </header>

        {open ? (
          <nav className="border-b border-ledger-ink md:hidden">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="flex items-center gap-2 border-b border-ledger-rule px-4 py-3 font-mono text-[11px] font-bold tracking-widest uppercase"
              >
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}

        <main className="min-h-0 flex-1">
          {children ?? (
            <div className="p-6">
              <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                Canvas
              </p>
              <h1 className="mb-4 font-sans text-2xl font-bold tracking-tight uppercase">
                Select a meter
              </h1>
              <p className="max-w-md text-[15px] text-ledger-muted">
                The shell is the instrument frame. Drop stats, tables, and
                settings into this canvas.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
