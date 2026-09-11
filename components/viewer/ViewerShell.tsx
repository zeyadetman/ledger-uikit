"use client";

import Link from "next/link";
import { useDesign } from "@/components/design/DesignProvider";
import { DesignMenu } from "@/components/design/DesignMenu";
import { useMemo, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TooltipProvider } from "@/components/ledger/tooltip";
import { CodePanel } from "@/components/viewer/CodePanel";
import { CopyButton } from "@/components/viewer/CopyButton";
import { DeviceFrame } from "@/components/viewer/DeviceFrame";
import { DeviceToggle } from "@/components/viewer/DeviceToggle";
import { StateToggle } from "@/components/viewer/StateToggle";
import { ThemeToggle } from "@/components/viewer/ThemeToggle";
import { ViewToggle } from "@/components/viewer/ViewToggle";
import type {
  BlockMeta,
  BlockState,
  DeviceWidth,
  ViewMode,
} from "@/lib/blocks";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 767px)";

function subscribeToViewport(onChange: () => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getDefaultDevice(): DeviceWidth {
  return window.matchMedia(MOBILE_QUERY).matches ? 375 : 1280;
}

// Render mobile first during SSR so phones never start with a desktop frame.
function getServerDevice(): DeviceWidth {
  return 375;
}

export function ViewerShell({
  block,
  source,
  prev,
  next,
}: {
  block: BlockMeta;
  source: string;
  prev: BlockMeta | null;
  next: BlockMeta | null;
}) {
  const [view, setView] = useState<ViewMode>("preview");
  const defaultDevice = useSyncExternalStore(
    subscribeToViewport,
    getDefaultDevice,
    getServerDevice,
  );
  const [selectedDevice, setDevice] = useState<DeviceWidth | null>(null);
  const device = selectedDevice ?? defaultDevice;
  const { design, mode: theme, setMode: setTheme } = useDesign();
  const [state, setState] = useState<BlockState>(block.states[0] ?? "default");

  const previewSrc = useMemo(() => {
    const params = new URLSearchParams({ theme, design });
    const path =
      state === "default"
        ? `/preview/${block.slug}`
        : `/preview/${block.slug}/${state}`;
    return `${path}?${params.toString()}`;
  }, [block.slug, theme, state, design]);

  const showPreview = view === "preview" || view === "split";
  const showCode = view === "code" || view === "split";

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-ledger-paper text-ledger-ink">
        <header className="sticky top-0 z-20 border-b border-ledger-ink bg-ledger-paper">
          <div className="flex items-center justify-between gap-4 border-b border-ledger-rule px-4 py-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest">
                <Link href="/" className="ledger-link">
                  Ledger
                </Link>
                <span className="text-ledger-muted">/</span>
                <Link href={`/type/${block.category}`} className="ledger-link">
                  {block.category}
                </Link>
              </div>
              <div className="mt-1 flex flex-wrap items-baseline gap-3">
                <h1 className="truncate font-sans text-xl font-bold tracking-tight uppercase">
                  {block.title}
                </h1>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ledger-muted">
                  {block.slug}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center border border-ledger-ink">
              {prev ? (
                <Link
                  href={`/blocks/${prev.slug}`}
                  className="inline-flex h-9 items-center gap-1 px-3 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-ledger-ink hover:text-ledger-paper"
                >
                  <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
                  Prev
                </Link>
              ) : (
                <span className="inline-flex h-9 items-center px-3 font-mono text-[10px] uppercase tracking-widest text-ledger-rule">
                  Prev
                </span>
              )}
              <div className="h-9 w-px bg-ledger-ink" />
              {next ? (
                <Link
                  href={`/blocks/${next.slug}`}
                  className="inline-flex h-9 items-center gap-1 px-3 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-ledger-ink hover:text-ledger-paper"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              ) : (
                <span className="inline-flex h-9 items-center px-3 font-mono text-[10px] uppercase tracking-widest text-ledger-rule">
                  Next
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 px-4 py-2">
            <Link href="/getting-started" className="ledger-link text-sm">
              Setup guide
            </Link>
            <ViewToggle value={view} onChange={setView} />
            <DeviceToggle value={device} onChange={setDevice} />
            <DesignMenu />
            <ThemeToggle value={theme} onChange={setTheme} />
            <div className="ml-auto">
              <CopyButton source={source} />
            </div>
          </div>
          <StateToggle
            states={block.states}
            value={state}
            onChange={(nextState) => {
              setState(nextState);
              if (view === "code") setView("split");
            }}
          />
        </header>

        <div
          className={cn(
            "grid",
            view === "split" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1",
          )}
        >
          {showPreview ? (
            <DeviceFrame width={device} src={previewSrc} title={block.title} />
          ) : null}
          {showCode ? <CodePanel source={source} deps={block.deps} /> : null}
        </div>
      </div>
    </TooltipProvider>
  );
}
