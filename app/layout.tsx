import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DesignProvider } from "@/components/design/DesignProvider";
import { designCSS, designBootstrap } from "@/lib/design-system";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LEDGER Blocks UI Kit",
    template: "%s — LEDGER",
  },
  description:
    "Copy-ready SaaS UI blocks for Next.js and Tailwind CSS. Explore live previews, choose from 11 design presets, and make the code your own.",
  applicationName: "LEDGER Blocks UI Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: designCSS }} />
        <script dangerouslySetInnerHTML={{ __html: designBootstrap }} />
      </head>
      <body className="min-h-screen bg-ledger-paper font-sans text-ledger-ink antialiased">
        <DesignProvider>{children}</DesignProvider>
      </body>
    </html>
  );
}
