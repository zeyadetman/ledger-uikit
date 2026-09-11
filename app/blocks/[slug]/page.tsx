import { readFile } from "fs/promises";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewerShell } from "@/components/viewer/ViewerShell";
import { blocks, getAdjacentBlocks, getBlock } from "@/lib/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((block) => ({ slug: block.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const block = getBlock(slug);
  if (!block) return { title: "Block" };
  return {
    title: `${block.title} / ${block.slug}`,
    description: block.use_when,
  };
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const block = getBlock(slug);
  if (!block) notFound();

  const source = await readFile(
    path.join(process.cwd(), block.filePath),
    "utf8",
  );
  const { prev, next } = getAdjacentBlocks(slug);

  return (
    <ViewerShell
      key={block.slug}
      block={block}
      source={source}
      prev={prev}
      next={next}
    />
  );
}
