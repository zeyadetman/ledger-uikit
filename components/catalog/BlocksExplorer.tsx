"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { TypeIndex } from "@/components/catalog/TypeIndex";
import { BlockGrid } from "@/components/catalog/BlockGrid";
import { blocks, categories } from "@/lib/blocks";

export function BlocksExplorer() {
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim();
  const categoryParam = params.get("category") ?? "";
  const category = categories.some((c) => c.slug === categoryParam)
    ? categoryParam
    : "";
  const all = params.get("view") === "all" || !!q || !!category;
  const results = blocks.filter(
    (b) =>
      (!category || b.category === category) &&
      q
        .toLowerCase()
        .split(/\s+/)
        .every((term) =>
          `${b.title} ${b.slug} ${b.category} ${b.use_when}`
            .toLowerCase()
            .includes(term),
        ),
  );

  return (
    <>
      <div className="border-b border-ledger-rule px-5 py-6 md:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Find your next block.
          </h1>
          <nav
            aria-label="Block view"
            className="flex border border-ledger-ink"
          >
            {[
              { label: "By type", href: "/blocks", active: !all },
              { label: "All blocks", href: "/blocks?view=all", active: all },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={`px-4 py-2 text-sm ${item.active ? "bg-ledger-ink text-ledger-paper" : "hover:bg-ledger-rule"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <form action="/blocks" className="flex flex-wrap gap-3" role="search">
          <input type="hidden" name="view" value="all" />
          <label className="flex min-w-0 flex-1 basis-64 items-center gap-3 border border-ledger-rule px-3">
            <Search
              className="shrink-0 text-ledger-muted"
              size={18}
              strokeWidth={1.75}
            />
            <span className="sr-only">Search blocks</span>
            <input
              key={q}
              name="q"
              defaultValue={q}
              type="search"
              placeholder="Search blocks, e.g. login, invoice, pricing…"
              className="min-h-11 w-full min-w-0 bg-transparent text-base outline-none"
            />
          </label>
          <select
            key={category}
            aria-label="Category"
            name="category"
            defaultValue={category}
            className="min-h-11 border border-ledger-rule bg-ledger-paper px-3 text-sm"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="min-h-11 border border-ledger-ink bg-ledger-ink px-5 text-sm font-semibold text-ledger-paper"
          >
            Search
          </button>
        </form>
        {all && (
          <div className="mt-4 flex items-center justify-between gap-3 text-sm text-ledger-muted">
            <p aria-live="polite">
              <span className="font-mono tabular-nums">{results.length}</span>{" "}
              {results.length === 1 ? "block" : "blocks"}
              {q ? ` matching “${q}”` : " to explore"}
            </p>
            {(q || category) && (
              <Link href="/blocks?view=all" className="ledger-link shrink-0">
                Clear filters
              </Link>
            )}
          </div>
        )}
      </div>
      {all ? (
        results.length ? (
          <BlockGrid blocks={results} hideHeading />
        ) : (
          <div className="px-5 py-16 text-center">
            <h2 className="text-2xl font-bold">No blocks found.</h2>
            <p className="mt-3 text-ledger-muted">
              Try a broader term, like “billing”, or search all categories.
            </p>
            <Link href="/blocks?view=all" className="ledger-link mt-6">
              See all {blocks.length} blocks
            </Link>
          </div>
        )
      ) : (
        <TypeIndex />
      )}
    </>
  );
}

export function BlocksExplorerFallback() {
  return (
    <>
      <div className="border-b border-ledger-rule px-5 py-6 md:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Find your next block.
          </h1>
          <nav
            aria-label="Block view"
            className="flex border border-ledger-ink"
          >
            <span className="bg-ledger-ink px-4 py-2 text-sm text-ledger-paper">
              By type
            </span>
            <span className="px-4 py-2 text-sm text-ledger-muted">
              All blocks
            </span>
          </nav>
        </div>
      </div>
      <TypeIndex />
    </>
  );
}
