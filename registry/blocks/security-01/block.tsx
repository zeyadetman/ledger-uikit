export function Security01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          marketing / security-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Security overview
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          A public overview of product security controls and shared
          responsibilities.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
              Trust / By design
            </p>
            <h3 className="mt-4 text-4xl leading-none font-bold tracking-tight">
              Your records.
              <br />
              Your boundary.
            </h3>
            <p className="text-[15px] leading-relaxed text-ledger-muted mt-5">
              A practical view of how the desk protects operational data. Review
              deployment-specific controls with your security team.
            </p>
          </div>
          <dl>
            {[
              [
                "01",
                "Access control",
                "Workspace roles keep readers, operators, and administrators within explicit permissions.",
              ],
              [
                "02",
                "Transport & storage",
                "Encrypted connections protect data in transit. Storage encryption is managed at the infrastructure layer.",
              ],
              [
                "03",
                "Audit trail",
                "Changes record the actor, time, and affected resource so every write can be reviewed.",
              ],
              [
                "04",
                "Data ownership",
                "Export your event history and define a retention policy that fits your operation.",
              ],
            ].map(([n, title, copy]) => (
              <div key={n} className="border-t border-ledger-rule py-5">
                <dt className="flex gap-4 font-bold">
                  <span className="font-mono tabular-nums text-ledger-muted">
                    {n}
                  </span>
                  {title}
                </dt>
                <dd className="text-[15px] leading-relaxed text-ledger-muted mt-2 md:pl-8">
                  {copy}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
