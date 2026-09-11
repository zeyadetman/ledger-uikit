const NAV = ["Ingest", "Meters", "Rating", "Invoices", "Entitlements"];
const TOC = ["Post an event", "Idempotency", "Late arrivals"];

export function Docs01() {
  return (
    <section className="min-h-[560px] w-full bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <aside className="border-b border-ledger-ink p-4 lg:col-span-3 lg:border-r lg:border-b-0 md:p-6">
          <p className="mb-4 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Spec
          </p>
          <nav className="flex flex-col">
            {NAV.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`border-b border-ledger-rule py-2 font-mono text-[12px] font-bold tracking-widest uppercase ${
                  index === 0 ? "text-ledger-ink" : "text-ledger-muted hover:text-ledger-ink"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <article className="border-b border-ledger-ink p-6 lg:col-span-6 lg:border-r lg:border-b-0 md:p-8">
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Ingest
          </p>
          <h1 className="mb-6 font-sans text-3xl font-bold tracking-tight uppercase">
            Post an event
          </h1>
          <p className="mb-4 text-[15px] leading-relaxed">
            POST /v1/events with a meter id, quantity, timestamp, and
            idempotency key. Keys live 72 hours. Replays do not double-rate.
          </p>
          <pre className="overflow-x-auto border border-ledger-ink bg-ledger-ink p-4 font-mono text-[12px] text-ledger-paper">
            {`{ "meter": "tokens.out", "qty": 1204 }`}
          </pre>
        </article>
        <aside className="p-4 lg:col-span-3 md:p-6">
          <p className="mb-4 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            On this page
          </p>
          <nav className="flex flex-col gap-2">
            {TOC.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="ledger-link text-[13px]"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  );
}
