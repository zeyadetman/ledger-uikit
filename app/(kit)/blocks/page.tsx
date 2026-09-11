import type { Metadata } from "next";
import { Suspense } from "react";
import {
  BlocksExplorer,
  BlocksExplorerFallback,
} from "@/components/catalog/BlocksExplorer";
import { KitShell } from "@/components/site/KitShell";

export const metadata: Metadata = {
  title: "Blocks",
  description: "Browse and search every LEDGER block, together or by type.",
};

export default function BlocksPage() {
  return (
    <KitShell kicker="Kit / Registry" title="Blocks">
      <Suspense fallback={<BlocksExplorerFallback />}>
        <BlocksExplorer />
      </Suspense>
    </KitShell>
  );
}
