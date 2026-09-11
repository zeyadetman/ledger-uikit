"use client";

import type { ViewMode } from "@/lib/blocks";
import { SegmentedControl } from "@/components/viewer/SegmentedControl";

export function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}) {
  return (
    <SegmentedControl
      ariaLabel="View"
      value={value}
      onChange={onChange}
      options={[
        { value: "preview", label: "Preview" },
        { value: "code", label: "Code" },
        { value: "split", label: "Split" },
      ]}
    />
  );
}
