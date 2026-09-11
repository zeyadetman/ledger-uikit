"use client";

import type { DeviceWidth } from "@/lib/blocks";
import { SegmentedControl } from "@/components/viewer/SegmentedControl";

export function DeviceToggle({
  value,
  onChange,
}: {
  value: DeviceWidth;
  onChange: (value: DeviceWidth) => void;
}) {
  return (
    <SegmentedControl
      ariaLabel="Device"
      value={String(value)}
      onChange={(next) => onChange(Number(next) as DeviceWidth)}
      options={[
        { value: "375", label: "Mobile 375" },
        { value: "768", label: "Tablet 768" },
        { value: "1280", label: "Desktop 1280" },
      ]}
    />
  );
}
