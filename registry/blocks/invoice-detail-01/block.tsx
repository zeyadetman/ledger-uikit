export function InvoiceDetail01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          billing / invoice-detail-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Invoice detail
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          An itemized invoice with totals, billing parties, and payment terms.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <article className="mx-auto max-w-3xl border border-ledger-ink">
          <header className="flex flex-wrap justify-between gap-6 border-b border-ledger-ink p-6">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                Invoice
              </p>
              <h3 className="font-mono tabular-nums mt-3 text-3xl font-bold">
                INV-2026-028
              </h3>
            </div>
            <div className="font-mono tabular-nums text-sm leading-6">
              <p>Issued / 01 Sep 2026</p>
              <p>Due / 15 Sep 2026</p>
              <p>Currency / USD</p>
            </div>
          </header>
          <div className="grid gap-6 border-b border-ledger-rule p-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                From
              </p>
              <p className="mt-2 font-bold">Ledger Systems</p>
              <p className="text-[15px] leading-relaxed text-ledger-muted">
                billing@example.com
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
                Bill to
              </p>
              <p className="mt-2 font-bold">Northstar Finance</p>
              <p className="text-[15px] leading-relaxed text-ledger-muted">
                accounts@example.com
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <caption className="sr-only">
                Invoice line items in US dollars
              </caption>
              <thead className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted border-b border-ledger-rule">
                <tr>
                  <th scope="col" className="p-4">
                    Description
                  </th>
                  <th scope="col" className="p-4 text-right">
                    Qty
                  </th>
                  <th scope="col" className="p-4 text-right">
                    Rate
                  </th>
                  <th scope="col" className="p-4 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Floor subscription", "1", "$240.00", "$240.00"],
                  ["Additional operators", "3", "$20.00", "$60.00"],
                  ["Event overage / 1k", "80", "$0.50", "$40.00"],
                ].map(([name, qty, rate, amount]) => (
                  <tr key={name} className="border-b border-ledger-rule">
                    <th scope="row" className="p-4 font-normal">
                      {name}
                    </th>
                    {[qty, rate, amount].map((value, i) => (
                      <td
                        key={i}
                        className="font-mono tabular-nums p-4 text-right"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className="ml-auto max-w-sm space-y-3 p-6">
            {[
              ["Subtotal", "$340.00"],
              ["Tax / 0%", "$0.00"],
              ["Amount due", "$340.00"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-6 last:border-t last:border-ledger-ink last:pt-4 last:font-bold"
              >
                <dt>{label}</dt>
                <dd className="font-mono tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
          <footer className="text-[15px] leading-relaxed text-ledger-muted border-t border-ledger-rule p-6">
            Payment terms: net 14 days. Include the invoice number in your
            payment reference.
          </footer>
        </article>
      </div>
    </section>
  );
}
