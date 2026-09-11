import type { BlockState } from "@/lib/blocks";

export const blockStateDetails: Record<
  BlockState,
  { label: string; description: string }
> = {
  default: {
    label: "Default",
    description: "The standard block with sample content.",
  },
  loading: {
    label: "Loading",
    description: "What people see while content is being loaded.",
  },
  empty: {
    label: "Empty",
    description: "What people see when there is no content yet.",
  },
  error: {
    label: "Error",
    description: "What people see when something goes wrong.",
  },
};
