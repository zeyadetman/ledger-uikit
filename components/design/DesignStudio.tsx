"use client";
import { ThemeExport } from "./ThemeExport";
import { designPresets } from "@/lib/design-system";
import { useDesign } from "./DesignProvider";
import { DesignMenu } from "./DesignMenu";
import { ThemeToggle } from "@/components/viewer/ThemeToggle";
import { RenderBlock } from "@/registry/render-block";

export function DesignStudio() {
  const { design, mode, setDesign, setMode } = useDesign();
  const preset = designPresets.find((p) => p.id === design)!;
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 font-mono text-xs text-ledger-muted">
            10 PRESETS + THE ORIGINAL
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Design system
          </h1>
          <p className="mt-4 max-w-xl text-ledger-muted">
            Choose a direction for the entire kit. Your selection applies to the
            website, blocks, and previews, and is saved on this browser.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <DesignMenu />
          <ThemeToggle value={mode} onChange={setMode} />
          <button
            className="border border-ledger-rule px-3 py-2 text-sm hover:bg-ledger-rule"
            onClick={() => {
              setDesign("ledger");
              setMode("light");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {designPresets.map((p) => (
          <button
            key={p.id}
            aria-pressed={design === p.id}
            onClick={() => setDesign(p.id)}
            className="border p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: p[mode][0],
              color: p[mode][1],
              borderColor: design === p.id ? p[mode][4] : p[mode][3],
              borderWidth: design === p.id ? 2 : 1,
              borderRadius: p.radius,
              fontFamily: p.font,
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-2xl font-bold">{p.name}</span>
              <span className="text-xs">
                {design === p.id
                  ? "Selected"
                  : p.id === "ledger"
                    ? "Original"
                    : "Preset"}
              </span>
            </div>
            <p className="mt-2 text-sm" style={{ color: p[mode][2] }}>
              {p.description}
            </p>
            <div className="mt-5 flex gap-2" aria-hidden="true">
              {p[mode].map((color) => (
                <span
                  key={color}
                  className="h-6 w-6 border"
                  style={{
                    background: color,
                    borderColor: p[mode][3],
                    borderRadius: p.radius / 2,
                  }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
      <section
        className="mt-10 border border-ledger-rule p-5"
        aria-label="Active design tokens"
      >
        <h2 className="text-xl font-bold">
          {preset.name} / {mode}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {["Paper", "Ink", "Muted", "Rule", "Signal"].map((name, i) => (
            <div key={name}>
              <div
                className="mb-2 h-10 border border-ledger-rule"
                style={{ background: preset[mode][i] }}
              />
              <p className="text-sm">{name}</p>
              <p className="font-mono text-xs text-ledger-muted">
                {preset[mode][i]}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ledger-muted">
          Corners: {preset.radius}px · Spacing:{" "}
          {Math.round(preset.spacing * 100)}% · Typography:{" "}
          {preset.font
            .split(",")[0]
            .replace("var(--font-geist-", "Geist ")
            .replace(")", "")}
        </p>
      </section>
      <section className="mt-10 border border-ledger-rule p-5">
        <h2 className="mb-3 text-xl font-bold">Use this design in your app</h2>
        <ThemeExport />
      </section>
      <section className="mt-10" aria-label="Live block preview">
        <h2 className="mb-4 text-xl font-bold">Live block preview</h2>
        <div className="overflow-hidden border border-ledger-rule">
          <RenderBlock slug="login-01" />
        </div>
      </section>
    </div>
  );
}
