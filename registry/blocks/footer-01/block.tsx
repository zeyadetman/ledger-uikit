const COLUMNS = [
  {
    title: "Product",
    links: ["Meters", "Rating", "Invoices", "Entitlements"],
  },
  {
    title: "Operators",
    links: ["Docs", "Status", "Changelog", "API"],
  },
  {
    title: "Firm",
    links: ["About", "Careers", "Security", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "DPA", "Subprocessors"],
  },
];

export function Footer01() {
  return (
    <footer className="w-full border-t border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-2 md:grid-cols-6">
        <div className="col-span-2 border-b border-ledger-ink p-6 md:border-r md:border-b-0 md:p-8">
          <p className="mb-4 font-mono text-sm font-bold tracking-widest uppercase">
            Fathom
          </p>
          <p className="max-w-xs text-[15px] text-ledger-muted">
            The operating ledger for metered SaaS. Events posted. Invoices
            closed. Drift at zero.
          </p>
        </div>
        {COLUMNS.map((column) => (
          <div
            key={column.title}
            className="border-b border-ledger-rule p-6 md:border-l md:border-b-0"
          >
            <p className="mb-4 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
              {column.title}
            </p>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="ledger-link text-[14px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 px-6 py-4 font-mono text-[10px] tracking-widest text-ledger-muted uppercase md:flex-row md:items-center md:justify-between md:px-8">
        <span>© 2026 Fathom Ledger Co.</span>
        <span className="tabular-nums">v14.2 — paper / ink</span>
      </div>
    </footer>
  );
}
