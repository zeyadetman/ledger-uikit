const LOGOS = [
  "HARBOUR",
  "NINEFOLD",
  "GLASSLINE",
  "KESTREL",
  "ORDINATE",
  "REDWOOD LABS",
];

export function LogoCloud01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="flex flex-col gap-2 border-b border-ledger-rule px-4 py-4 md:flex-row md:items-baseline md:justify-between md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          In production at
        </p>
        <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
          Usage posted. Invoices closed.
        </p>
      </div>
      <div className="grid grid-cols-2 border-l border-ledger-rule md:grid-cols-3 lg:grid-cols-6">
        {LOGOS.map((name) => (
          <div
            key={name}
            className="flex h-20 items-center justify-center border-r border-b border-ledger-rule px-3"
          >
            <span className="text-center font-mono text-[11px] font-bold tracking-[0.22em] uppercase">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
