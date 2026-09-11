"use client";

import type { BlockState } from "@/lib/blocks";
import { blockStateDetails } from "@/lib/block-states";
import { SegmentedControl } from "@/components/viewer/SegmentedControl";

export function StateToggle({
  states,
  value,
  onChange,
}: {
  states: BlockState[];
  value: BlockState;
  onChange: (value: BlockState) => void;
}) {
  return (
    <div className="border-t border-ledger-rule bg-ledger-rule/20 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold">Preview states</span>
        <SegmentedControl
          ariaLabel="Preview state"
          value={value}
          onChange={onChange}
          options={states.map((state) => ({
            value: state,
            label: blockStateDetails[state].label,
          }))}
        />
        <span className="font-mono text-xs tabular-nums text-ledger-muted">
          {states.length} {states.length === 1 ? "state" : "states"} available
        </span>
      </div>
      <p aria-live="polite" className="mt-2 text-sm text-ledger-muted">
        {states.length === 1
          ? "This block includes the default state only."
          : blockStateDetails[value].description}
      </p>
    </div>
  );
}
