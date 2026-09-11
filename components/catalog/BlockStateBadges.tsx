import { CircleCheck, LoaderCircle, Inbox, CircleAlert } from "lucide-react";
import type { BlockState } from "@/lib/blocks";
import { blockStateDetails } from "@/lib/block-states";

const icons = {
  default: CircleCheck,
  loading: LoaderCircle,
  empty: Inbox,
  error: CircleAlert,
};

export function BlockStateBadges({ states }: { states: BlockState[] }) {
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs text-ledger-muted">Available states</p>
      <ul
        aria-label="Available block states"
        className="flex flex-wrap gap-1.5"
      >
        {states.map((state) => {
          const Icon = icons[state];
          return (
            <li
              key={state}
              className="inline-flex items-center gap-1.5 border border-ledger-rule px-2 py-1 text-xs"
            >
              <Icon size={14} strokeWidth={1.75} aria-hidden="true" />
              {blockStateDetails[state].label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
