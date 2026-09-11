"use client";

import { useMemo, useState } from "react";
import { ArrowRight, FileText, Gauge, Radio, Search, Users } from "lucide-react";

const COMMANDS = [
  { id: "meters", label: "Open meters", hint: "G then M", icon: Gauge },
  { id: "events", label: "Jump to tape", hint: "G then T", icon: Radio },
  { id: "invoice", label: "Find invoice", hint: "INV", icon: FileText },
  { id: "invite", label: "Invite operator", hint: "N then O", icon: Users },
];

export function CommandPalette01() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="flex min-h-[520px] w-full items-start justify-center bg-ledger-paper p-4 text-ledger-ink sm:p-8">
      <div className="w-full max-w-lg border border-ledger-ink bg-ledger-paper">
        <label className="flex h-12 items-center gap-3 border-b border-ledger-ink px-4">
          <Search className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Jump to a desk command"
            className="h-full w-full bg-transparent text-[15px] focus-visible:outline-none"
            aria-label="Command palette"
          />
          <kbd className="hidden border border-ledger-rule px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase sm:inline">
            Esc
          </kbd>
        </label>
        <ul>
          {results.length === 0 ? (
            <li className="px-4 py-6 font-mono text-[11px] tracking-widest text-ledger-muted uppercase">
              No commands match
            </li>
          ) : (
            results.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left ${
                    index === 0 ? "bg-ledger-ink text-ledger-paper" : "hover:bg-ledger-rule/40"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  <span className="flex-1 text-[14px] font-bold tracking-tight uppercase">
                    {item.label}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase ${
                      index === 0 ? "opacity-70" : "text-ledger-muted"
                    }`}
                  >
                    {item.hint}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </button>
              </li>
            ))
          )}
        </ul>
        <p className="border-t border-ledger-rule px-4 py-2 font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
          ⌘K · enter to run
        </p>
      </div>
    </section>
  );
}
