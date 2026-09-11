"use client";
import { useDesign } from "./DesignProvider";
import { designPresets, exportThemeCSS } from "@/lib/design-system";
import { CodeSnippet } from "@/components/docs/CodeSnippet";
export function ThemeExport() {
  const { design } = useDesign();
  return (
    <div>
      <p className="text-sm text-ledger-muted">
        Current preset: {designPresets.find((p) => p.id === design)!.name}. Both
        light and dark colors are included. Add the <code>dark</code> class to
        your root element to enable dark mode.
      </p>
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-semibold">
          View and copy theme CSS
        </summary>
        <CodeSnippet title="app/globals.css" source={exportThemeCSS(design)} />
      </details>
    </div>
  );
}
