"use client";

import type { PreviewTheme } from "@/lib/blocks";
import { SegmentedControl } from "@/components/viewer/SegmentedControl";

export function ThemeToggle({
  value,
  onChange,
}: {
  value: PreviewTheme;
  onChange: (value: PreviewTheme) => void;
}) {
  return (
    <SegmentedControl
      ariaLabel="Theme"
      value={value}
      onChange={onChange}
      options={[
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ]}
    />
  );
}
