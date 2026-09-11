"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar01() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-widest uppercase"
        >
          Fathom
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Product", "Pricing", "Docs", "Changelog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="ledger-link font-mono text-[11px] font-bold tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#login"
            className="ledger-link font-mono text-[11px] font-bold tracking-widest uppercase"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="inline-flex h-9 items-center border border-ledger-ink bg-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Start trial
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-ledger-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-4 w-4" strokeWidth={1.75} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={1.75} />
          )}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ledger-ink md:hidden">
          {["Product", "Pricing", "Docs", "Changelog", "Sign in"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block border-b border-ledger-rule px-4 py-3 font-mono text-[11px] font-bold tracking-widest uppercase"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#start"
            className="block bg-ledger-ink px-4 py-3 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase"
          >
            Start trial
          </a>
        </nav>
      ) : null}
    </header>
  );
}
