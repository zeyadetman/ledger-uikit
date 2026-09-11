import type { Metadata } from "next";
import Link from "next/link";
import { KitShell } from "@/components/site/KitShell";
import { CodeSnippet } from "@/components/docs/CodeSnippet";
import { ThemeExport } from "@/components/design/ThemeExport";
export const metadata: Metadata = {
  title: "Quick start",
  description:
    "Add your first LEDGER block to a Next.js and Tailwind CSS project.",
};
export default function GettingStartedPage() {
  return (
    <KitShell kicker="Docs / Getting started" title="Quick start">
      <div className="mx-auto max-w-4xl px-5 py-10 md:px-10">
        <p className="mb-3 font-mono text-xs text-ledger-muted">
          FROM PREVIEW TO YOUR PROJECT
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Your first block.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ledger-muted">
          LEDGER is a collection of source files. Copy the blocks you need and
          edit them in your app. This guide uses Next.js App Router, TypeScript,
          and Tailwind CSS v4.
        </p>
        <section className="mt-10 border-t border-ledger-rule pt-6">
          <h2 className="text-2xl font-bold">1. Prepare your app</h2>
          <p className="mt-3 text-ledger-muted">
            Already using this stack? Skip the create command. For a new app,
            keep the default <code>@/*</code> import alias.
          </p>
          <CodeSnippet
            title="Terminal · new project"
            source={
              "npx create-next-app@latest my-app --ts --tailwind --app\ncd my-app"
            }
          />
          <p className="text-ledger-muted">
            Install the icon package and the two utilities used by blocks that
            import <code>cn</code>. Each block’s Code tab lists any other
            dependencies.
          </p>
          <CodeSnippet
            title="Terminal · dependencies"
            source="npm install lucide-react clsx tailwind-merge"
          />
          <CodeSnippet
            title="lib/utils.ts (or src/lib/utils.ts)"
            source={
              'import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}'
            }
          />
        </section>
        <section className="mt-10 border-t border-ledger-rule pt-6">
          <h2 className="text-2xl font-bold">2. Bring the design with you</h2>
          <p className="mt-3 mb-5 text-ledger-muted">
            Choose a preset in the header or the{" "}
            <Link className="ledger-link" href="/design-system">
              design system
            </Link>
            . Copy its stylesheet into your global CSS file. In an existing app,
            merge the theme definitions and styles with your own CSS, keeping
            only one Tailwind import.
          </p>
          <ThemeExport />
          <p className="mt-5 text-ledger-muted">
            For the original typography, load Geist in your root layout. The
            exported CSS also includes system-font fallbacks.
          </p>
          <CodeSnippet
            title="app/layout.tsx · fonts"
            source={
              'import { Geist, Geist_Mono } from "next/font/google";\nimport "./globals.css";\n\nconst sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });\nconst mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en" className={`${sans.variable} ${mono.variable}`}>\n      <body>{children}</body>\n    </html>\n  );\n}'
            }
          />
        </section>
        <section className="mt-10 border-t border-ledger-rule pt-6">
          <h2 className="text-2xl font-bold">3. Copy a block and use it</h2>
          <p className="mt-3 text-ledger-muted">
            Open{" "}
            <Link className="ledger-link" href="/blocks/login-01">
              Login
            </Link>
            , select Copy code, and save the source as{" "}
            <code>components/blocks/login.tsx</code>. Keep any{" "}
            <code>&quot;use client&quot;</code> directive in the source. Then
            import the named export:
          </p>
          <CodeSnippet
            title="app/page.tsx"
            source={
              'import { Login01 } from "@/components/blocks/login";\n\nexport default function Page() {\n  return <Login01 />;\n}'
            }
          />
          <p className="text-base leading-relaxed text-ledger-muted">
            Blocks demonstrate UI with sample data. Connect forms, links,
            authentication, and actions to your own application before shipping.
            The optional <code>state</code> prop lets you preview the states
            supported by each block.
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-5 border-t border-ledger-rule pt-6">
          <Link href="/blocks?view=all" className="ledger-link font-semibold">
            Find your next block
          </Link>
          <Link href="/demo/saas-app" className="ledger-link">
            See a composed app
          </Link>
        </div>
      </div>
    </KitShell>
  );
}
