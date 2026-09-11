"use client";

import { ScrollArea } from "@/components/ledger/scroll-area";
import { CopyButton } from "@/components/viewer/CopyButton";

export function CodePanel({
  source,
  deps,
}: {
  source: string;
  deps: string[];
}) {
  return (
    <div className="flex h-full min-h-[640px] flex-col border-t border-ledger-ink lg:border-t-0 lg:border-l">
      <div className="flex items-center justify-between gap-3 border-b border-ledger-ink px-4 py-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
          block.tsx
        </span>
        <CopyButton source={source} size="sm" />
      </div>
      {deps.length > 0 ? (
        <p className="border-b border-ledger-rule px-4 py-2 font-mono text-[11px] text-ledger-muted">
          Install deps: {deps.join(" ")}
        </p>
      ) : (
        <p className="border-b border-ledger-rule px-4 py-2 font-mono text-[11px] text-ledger-muted">
          Install deps: none beyond Next.js + Tailwind
        </p>
      )}
      <ScrollArea className="h-[640px]">
        <pre className="overflow-x-auto bg-ledger-ink p-4 text-ledger-paper">
          <code className="block font-mono text-[12px] leading-relaxed whitespace-pre">
            {source}
          </code>
        </pre>
      </ScrollArea>
    </div>
  );
}
