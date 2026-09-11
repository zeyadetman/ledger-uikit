import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import { KitShell } from "@/components/site/KitShell";
import { CopyButton } from "@/components/viewer/CopyButton";
import { TooltipProvider } from "@/components/ledger/tooltip";

export const metadata: Metadata = {
  title: "LLM file",
  description: "llms.txt — instructions for coding agents using LEDGER.",
};

export default async function LlmsPage() {
  const source = await readFile(path.join(process.cwd(), "llms.txt"), "utf8");

  return (
    <KitShell kicker="Kit / Agents" title="LLM file">
      <TooltipProvider>
        <div className="flex items-center justify-between gap-3 border-b border-ledger-ink px-4 py-3 md:px-8">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
              llms.txt
            </p>
            <p className="text-[14px] text-ledger-muted">
              Feed this to an agent before it invents rounded indigo cards.
            </p>
          </div>
          <CopyButton source={source} size="sm" />
        </div>
        <pre className="overflow-x-auto bg-ledger-ink p-4 text-ledger-paper md:p-8">
          <code className="block font-mono text-[12px] leading-relaxed whitespace-pre">
            {source}
          </code>
        </pre>
      </TooltipProvider>
    </KitShell>
  );
}
