import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockGrid } from "@/components/catalog/BlockGrid";
import { KitShell } from "@/components/site/KitShell";
import {
  categories,
  getBlocksByCategory,
  getCategory,
  isBlockCategory,
} from "@/lib/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Blocks" };
  return {
    title: category.title,
    description: category.blurb,
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  if (!isBlockCategory(slug)) notFound();
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getBlocksByCategory(slug);

  return (
    <KitShell kicker={`Blocks / ${category.kicker}`} title={category.title}>
      <BlockGrid category={category} blocks={items} />
    </KitShell>
  );
}
