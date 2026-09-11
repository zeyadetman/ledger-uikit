"use client";
import { designPresets } from "@/lib/design-system";
import { useDesign } from "./DesignProvider";
export function DesignMenu() {
  const { design, setDesign } = useDesign();
  return (
    <label className="flex min-w-0 items-center gap-2 text-sm">
      <span className="sr-only">Design preset</span>
      <select
        aria-label="Design preset"
        className="max-w-full border border-ledger-rule bg-ledger-paper px-3 py-2 text-ledger-ink"
        value={design}
        onChange={(e) =>
          setDesign(designPresets.find((p) => p.id === e.target.value)!.id)
        }
      >
        {designPresets.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
            {p.id === "ledger" ? " · Original" : ""}
          </option>
        ))}
      </select>
    </label>
  );
}
