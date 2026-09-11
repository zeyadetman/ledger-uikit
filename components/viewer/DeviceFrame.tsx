"use client";

import type { DeviceWidth } from "@/lib/blocks";

export function DeviceFrame({
  width,
  src,
  title,
}: {
  width: DeviceWidth;
  src: string;
  title: string;
}) {
  return (
    <div className="flex min-h-[720px] w-full flex-col items-center overflow-x-auto bg-ledger-paper py-8">
      <iframe
        key={src}
        title={`${title} preview`}
        src={src}
        style={{ width, height: 640 }}
        className="min-h-[640px] border border-ledger-ink bg-ledger-paper"
      />
      <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-ledger-muted">
        {width} × 640
      </p>
    </div>
  );
}
