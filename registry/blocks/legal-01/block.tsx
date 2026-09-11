const SECTIONS = [
  {
    id: "01",
    title: "The tape",
    body: "Fathom stores posted events, meter versions, and closed invoices. We do not mine payloads for advertising. Retention is 13 months on Floor unless you pin longer on Exchange.",
  },
  {
    id: "02",
    title: "Operators",
    body: "A write is attributed to a named operator or to system. You are responsible for who holds a desk seat. We will not invent an anonymous edit.",
  },
  {
    id: "03",
    title: "Close",
    body: "An invoice, once closed, is not silently rewritten. Corrections are new events. If that is unacceptable, do not use the product.",
  },
];

export function Legal01() {
  return (
    <article className="w-full bg-ledger-paper text-ledger-ink">
      <header className="border-b border-ledger-ink px-4 py-10 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Paper · effective 1 Jun 2026
        </p>
        <h1 className="font-sans text-4xl leading-[0.95] font-bold tracking-tighter uppercase md:text-6xl">
          Terms of
          <br />
          the desk.
        </h1>
      </header>
      <ol>
        {SECTIONS.map((section) => (
          <li
            key={section.id}
            className="grid grid-cols-1 border-b border-ledger-rule md:grid-cols-12"
          >
            <p className="px-4 pt-6 font-mono text-[10px] font-bold tracking-widest text-ledger-muted md:col-span-2 md:px-8">
              {section.id}
            </p>
            <div className="px-4 pb-6 md:col-span-10 md:px-8 md:pt-6">
              <h2 className="mb-3 font-sans text-xl font-bold tracking-tight uppercase">
                {section.title}
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ledger-muted">
                {section.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
