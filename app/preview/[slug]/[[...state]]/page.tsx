import { notFound } from "next/navigation";
import { blocks, getBlock, type BlockState } from "@/lib/blocks";
import { RenderBlock } from "@/registry/render-block";

const STATES: BlockState[] = ["default", "loading", "empty", "error"];

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.flatMap((block) =>
    block.states.map((state) => ({
      slug: block.slug,
      state: state === "default" ? [] : [state],
    })),
  );
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string; state?: string[] }>;
}) {
  const { slug, state: stateParts } = await params;
  const block = getBlock(slug);
  if (!block) notFound();

  const raw = stateParts?.[0] ?? "default";
  const state = STATES.includes(raw as BlockState)
    ? (raw as BlockState)
    : "default";
  if (!block.states.includes(state)) notFound();

  return (
    <div className="min-h-screen bg-ledger-paper text-ledger-ink">
      <RenderBlock slug={slug} state={state} />
    </div>
  );
}
