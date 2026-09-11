import Link from "next/link";
import { BlockStateBadges } from "./BlockStateBadges";
import type { BlockMeta, CategoryMeta } from "@/lib/blocks";
import { categories } from "@/lib/blocks";
import { cn } from "@/lib/utils";
import { RenderBlock } from "@/registry/render-block";

export function BlockGrid({
  category,
  blocks,
  hideHeading = false,
}: {
  category?: CategoryMeta;
  hideHeading?: boolean;
  blocks: BlockMeta[];
}) {
  return (
    <div>
      {!hideHeading &&
        (category ? (
          <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
            <Link
              href="/blocks"
              className="ledger-link mb-4 inline-block font-mono text-[10px] font-bold tracking-widest uppercase"
            >
              All types
            </Link>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                  {category.kicker} / {String(blocks.length).padStart(2, "0")}
                </p>
                <h1 className="font-sans text-4xl leading-[0.9] font-bold tracking-tighter uppercase md:text-6xl">
                  {category.title}
                </h1>
                <p className="mt-4 max-w-md text-[15px] text-ledger-muted">
                  {category.blurb}
                </p>
              </div>
              <nav
                aria-label="Types"
                className="flex flex-wrap border border-ledger-ink"
              >
                {categories.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/type/${item.slug}`}
                    aria-current={
                      item.slug === category.slug ? "page" : undefined
                    }
                    className={cn(
                      "inline-flex h-8 items-center px-3 font-mono text-[10px] font-bold tracking-widest uppercase",
                      item.slug === category.slug
                        ? "bg-ledger-ink text-ledger-paper"
                        : "hover:bg-ledger-rule",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ) : (
          <div className="border-b border-ledger-rule px-4 py-8 md:px-8">
            <h1 className="text-4xl font-bold tracking-tight">All blocks</h1>
            <p className="mt-3 text-ledger-muted">
              Browse the full registry. Open any block to preview and copy.
            </p>
          </div>
        ))}

      <div className="grid grid-cols-1 border-l border-ledger-rule sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <article
            key={block.slug}
            className="group relative border-r border-b border-ledger-rule bg-ledger-paper hover:bg-ledger-rule/30"
          >
            <div className="relative h-44 overflow-hidden border-b border-ledger-ink bg-ledger-paper">
              <div
                inert
                aria-hidden="true"
                className="pointer-events-none origin-top-left"
                style={{ width: 1280, transform: "scale(0.28)" }}
              >
                <RenderBlock slug={block.slug} />
              </div>
            </div>
            <Link
              href={`/blocks/${block.slug}`}
              className="block px-5 py-4 after:absolute after:inset-0 focus-visible:outline-offset-[-3px]"
            >
              <p className="font-sans text-sm font-bold tracking-tight uppercase">
                {block.title}
              </p>
              <p className="font-mono text-xs tracking-wide text-ledger-muted uppercase">
                {block.category} · {block.slug}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ledger-muted line-clamp-2">
                {block.use_when.replace(/^Use /, "")}
              </p>
              <BlockStateBadges states={block.states} />
              <p className="mt-4 text-sm font-semibold">
                Preview & copy <span aria-hidden="true">↗</span>
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
