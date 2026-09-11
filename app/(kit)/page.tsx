import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  SlidersHorizontal,
  Copy,
} from "lucide-react";
import { KitShell } from "@/components/site/KitShell";
import { StarOnGitHub } from "@/components/site/StarOnGitHub";
import { BlockGrid } from "@/components/catalog/BlockGrid";
import { blocks, categories } from "@/lib/blocks";
import { getRepositoryStars } from "@/lib/site";
import { Stats01 } from "@/registry/blocks/stats-01/block";

export const dynamic = "force-static";

export default async function HomePage() {
  const stars = await getRepositoryStars();
  const featured = [
    "login-01",
    "pricing-01",
    "data-table-01",
    "billing-01",
    "onboard-01",
    "hero-01",
  ].flatMap((slug) => blocks.filter((b) => b.slug === slug));
  return (
    <KitShell kicker="LEDGER / Blocks UI Kit" title="Overview">
      <section className="grid border-b border-ledger-ink xl:grid-cols-2">
        <div className="px-5 py-12 md:px-10 md:py-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <span className="h-2 w-2 bg-ledger-signal" /> Built for Next.js +
              Tailwind CSS
            </p>
            <StarOnGitHub count={stars} variant="compact" />
          </div>
          <h1 className="max-w-2xl text-5xl leading-[0.95] font-bold tracking-tighter md:text-7xl">
            Your next app.
            <br />
            <span className="text-ledger-muted">A head start.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ledger-muted">
            Thoughtfully designed blocks for the parts every SaaS needs. Find
            your starting point, choose a style, and copy the code into your
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blocks?view=all"
              className="inline-flex min-h-12 items-center gap-3 border border-ledger-ink bg-ledger-ink px-5 text-sm font-semibold text-ledger-paper hover:bg-ledger-signal"
            >
              Explore {blocks.length} blocks{" "}
              <ArrowRight size={17} strokeWidth={1.75} />
            </Link>
            <StarOnGitHub count={stars} />
            <Link
              href="/getting-started"
              className="inline-flex min-h-12 items-center gap-3 border border-ledger-rule px-5 text-sm font-semibold hover:border-ledger-ink"
            >
              Quick start <Code2 size={17} strokeWidth={1.75} />
            </Link>
          </div>
          <p className="mt-5 text-sm text-ledger-muted">
            No account needed. Preview, copy, and make it yours.
          </p>
        </div>
        <div className="flex min-w-0 flex-col justify-center overflow-hidden border-t border-ledger-rule bg-ledger-rule/20 p-5 md:p-10 xl:border-t-0 xl:border-l">
          <div className="mb-3 flex items-center justify-between font-mono text-xs text-ledger-muted">
            <span>INSIDE THE KIT</span>
            <span>stats-01.tsx</span>
          </div>
          <div className="overflow-hidden border border-ledger-ink bg-ledger-paper [&_section>.grid]:grid-cols-2 [&_article]:p-3 [&_article_.text-3xl]:text-xl sm:[&_article]:p-4 sm:[&_article_.text-3xl]:text-2xl">
            <div className="flex items-center justify-between border-b border-ledger-ink px-4 py-3 text-sm">
              <span className="font-semibold">Workspace overview</span>
              <span className="font-mono text-xs text-ledger-muted">
                Live preview
              </span>
            </div>
            <Stats01 />
          </div>
          <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm">
            <Link className="ledger-link" href="/blocks/stats-01">
              Open this block
            </Link>
            <Link className="ledger-link" href="/design-system">
              Try a different design
            </Link>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 border-b border-ledger-ink lg:grid-cols-4">
        {[
          [String(blocks.length), "Ready-to-copy blocks"],
          [String(categories.length), "Categories"],
          ["11", "Design directions"],
          ["TSX", "Source you can edit"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-r border-ledger-rule px-5 py-6 md:px-10"
          >
            <p className="font-mono text-3xl font-semibold tabular-nums">
              {value}
            </p>
            <p className="mt-2 text-sm text-ledger-muted">{label}</p>
          </div>
        ))}
      </div>
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 py-8 md:px-10">
          <div>
            <p className="mb-2 font-mono text-xs text-ledger-muted">
              A FEW PLACES TO START
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Skip the blank canvas.
            </h2>
          </div>
          <Link href="/blocks?view=all" className="ledger-link text-sm">
            Browse all blocks <ArrowUpRight className="inline" size={16} />
          </Link>
        </div>
        <BlockGrid blocks={featured} hideHeading />
      </section>
      <section className="grid border-b border-ledger-ink md:grid-cols-3">
        {[
          {
            icon: Code2,
            title: "Fits your stack",
            text: "React, TypeScript, Next.js, and Tailwind CSS v4. See each block’s dependencies before you copy.",
            href: "/getting-started",
            label: "Set up your project",
          },
          {
            icon: SlidersHorizontal,
            title: "Make it feel like you",
            text: "Start with LEDGER’s paper-and-ink aesthetic or choose from ten alternative design presets.",
            href: "/design-system",
            label: "Explore the presets",
          },
          {
            icon: Copy,
            title: "See the whole picture",
            text: "Check desktop and mobile layouts, light and dark themes, and available loading and error states.",
            href: "/blocks/login-01",
            label: "Try the block viewer",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border-r border-ledger-rule p-6 md:p-10"
          >
            <item.icon size={20} strokeWidth={1.75} />
            <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-ledger-muted">
              {item.text}
            </p>
            <Link href={item.href} className="ledger-link mt-6 text-sm">
              {item.label}
            </Link>
          </div>
        ))}
      </section>
      <section className="flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Useful to you? Help it grow.
          </h2>
          <p className="mt-2 max-w-xl text-base text-ledger-muted">
            Star the repository to bookmark the kit, report a rough edge, or
            contribute a block you wish existed.
          </p>
        </div>
        <StarOnGitHub count={stars} />
      </section>
    </KitShell>
  );
}
