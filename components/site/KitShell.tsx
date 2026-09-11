"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  BookOpen,
  Columns,
  FileText,
  Home,
  Info,
  LayoutGrid,
  Menu,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { repositoryUrl } from "@/lib/site";
import { DesignMenu } from "@/components/design/DesignMenu";
import { LedgerLogo, LedgerMark } from "@/components/site/LedgerLogo";
import { StarOnGitHub } from "@/components/site/StarOnGitHub";

const NAV = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/getting-started", label: "Quick start", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
  { href: "/blocks", label: "Blocks", icon: LayoutGrid },
  { href: "/design-system", label: "Design system", icon: SlidersHorizontal },
  { href: "/llms", label: "LLM file", icon: FileText },
  { href: "/demo/saas-home", label: "SaaS home", icon: Home },
  { href: "/demo/saas-app", label: "SaaS app", icon: Columns },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/blocks") {
    return pathname === "/blocks" || pathname.startsWith("/type/");
  }
  return pathname === href;
}

export function KitShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-ledger-paper text-ledger-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:bg-ledger-paper focus:p-3"
      >
        Skip to content
      </a>
      <aside className="hidden w-56 shrink-0 border-r border-ledger-ink md:flex md:flex-col">
        <Link href="/" className="border-b border-ledger-ink px-4 py-4">
          <LedgerLogo />
        </Link>
        <nav className="flex flex-1 flex-col">
          {NAV.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 border-b border-ledger-rule px-4 py-3 font-mono text-xs font-bold tracking-widest uppercase ${
                  active
                    ? "bg-ledger-ink text-ledger-paper"
                    : "hover:bg-ledger-rule"
                }`}
              >
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-ledger-ink p-4">
          <StarOnGitHub variant="text" />
          <p className="mt-3 text-xs text-ledger-muted">
            Open source · Apache 2.0
          </p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <header className="flex items-center justify-between gap-3 border-b border-ledger-ink px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center border border-ledger-ink md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
            <Link
              href="/"
              className="md:hidden"
              aria-label="LEDGER Blocks UI Kit home"
            >
              <LedgerMark size={28} />
            </Link>
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
                {kicker}
              </p>
              <p className="font-sans text-sm font-bold tracking-tight uppercase">
                {title}
              </p>
            </div>
          </div>
          <DesignMenu />
        </header>

        {open ? (
          <nav className="border-b border-ledger-ink md:hidden">
            {NAV.map((item) => {
              const active = isActive(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 border-b border-ledger-rule px-4 py-3 font-mono text-xs font-bold tracking-widest uppercase ${
                    active ? "bg-ledger-ink text-ledger-paper" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}

        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-ledger-rule px-5 py-5 text-xs text-ledger-muted">
          <span>LEDGER Blocks UI Kit · Apache 2.0</span>
          <div className="flex gap-4">
            <a
              className="hover:text-ledger-ink"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="hover:text-ledger-ink"
              href={`${repositoryUrl}/issues`}
              target="_blank"
              rel="noreferrer"
            >
              Feedback ↗
            </a>
            <a
              className="hover:text-ledger-ink"
              href={`${repositoryUrl}/blob/HEAD/LICENSE`}
              target="_blank"
              rel="noreferrer"
            >
              Apache 2.0 ↗
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
