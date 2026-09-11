"use client";
import { CopyButton } from "@/components/viewer/CopyButton";
import { TooltipProvider } from "@/components/ledger/tooltip";
export function CodeSnippet({
  title,
  source,
}: {
  title: string;
  source: string;
}) {
  return (
    <div className="my-5 min-w-0 overflow-hidden border border-ledger-rule">
      <div className="flex items-center justify-between gap-3 border-b border-ledger-rule px-4 py-2">
        <span className="font-mono text-xs">{title}</span>
        <TooltipProvider>
          <CopyButton source={source} size="sm" />
        </TooltipProvider>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{source}</code>
      </pre>
    </div>
  );
}
