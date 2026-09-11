import Link from "next/link";
import { blocks, categories, getBlocksByCategory } from "@/lib/blocks";

export function TypeIndex() {
  return (
    <div>
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-xs font-bold tracking-widest text-ledger-muted uppercase">
          Registry · {blocks.length} blocks
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          Browse by category.
        </h2>
        <p className="mt-3 max-w-lg text-[15px] text-ledger-muted">
          Choose a type. Preview a block. Make it yours.
        </p>
      </div>

      <div className="grid grid-cols-1 border-l border-ledger-ink md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const items = getBlocksByCategory(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/type/${category.slug}`}
              className="flex flex-col border-r border-b border-ledger-ink bg-ledger-paper p-6 hover:bg-ledger-rule/40 md:p-8"
            >
              <div className="mb-8 flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs font-bold tracking-widest text-ledger-muted uppercase">
                  {String(index + 1).padStart(2, "0")} / {category.kicker}
                </span>
                <span className="font-mono text-xs font-bold tracking-widest tabular-nums">
                  {items.length}
                </span>
              </div>
              <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight uppercase">
                {category.title}
              </h2>
              <p className="mb-8 text-[15px] text-ledger-muted">
                {category.blurb}
              </p>
              <ul className="mb-10 flex-1 font-mono text-xs tracking-widest text-ledger-muted uppercase">
                {items.slice(0, 4).map((block) => (
                  <li
                    key={block.title}
                    className="border-t border-ledger-rule py-2"
                  >
                    {block.title}
                  </li>
                ))}
                {items.length > 4 ? (
                  <li className="border-t border-ledger-rule py-2">
                    +{items.length - 4} more
                  </li>
                ) : null}
              </ul>
              <span className="ledger-link font-mono text-xs font-bold tracking-widest uppercase">
                Open {category.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
