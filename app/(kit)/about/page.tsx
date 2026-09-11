import type { Metadata } from "next";
import { KitShell } from "@/components/site/KitShell";

export const metadata: Metadata = {
  title: "About",
  description: "The design principles behind LEDGER’s original paper-and-ink preset.",
};

const LOCK = [
  ["Radius", "0 everywhere"],
  ["Shadow", "None. Elevation is a border."],
  ["Type", "Geist Sans. Geist Mono for numbers."],
  ["Motion", "120ms ease-out on color and border."],
  ["Signal", "#C43E1C — one CTA, one badge, one chart line."],
  ["Paper / ink", "#F4F1EA / #171717. Dark: #12110F / #EDE8DE."],
];

export default function AboutPage() {
  return (
    <KitShell kicker="Kit / Manifesto" title="About">
      <div className="border-b border-ledger-ink px-4 py-10 md:px-8">
        <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Visual lock
        </p>
        <h1 className="max-w-xl font-sans text-5xl leading-[0.9] font-bold tracking-tighter uppercase md:text-6xl">
          Instrument
          <br />
          panel +
          <br />
          newspaper.
        </h1>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ledger-muted">
          The original LEDGER preset combines editorial typography with the
          clarity of an instrument panel: crisp rules, quiet surfaces, and a
          single signal color. These are the foundations of the default design.
          Choose one of ten alternative presets in Design system to make the kit your own.
        </p>
      </div>
      <dl>
        {LOCK.map(([term, value]) => (
          <div
            key={term}
            className="grid grid-cols-1 border-b border-ledger-rule md:grid-cols-12"
          >
            <dt className="px-4 pt-4 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase md:col-span-3 md:px-8 md:py-4">
              {term}
            </dt>
            <dd className="px-4 pb-4 text-[15px] md:col-span-9 md:px-8 md:py-4">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </KitShell>
  );
}
