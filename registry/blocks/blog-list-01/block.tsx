const NOTES = [
  {
    index: "08",
    date: "12 Aug 2026",
    title: "Late arrivals belong on the tape",
    dek: "Why we stopped burying usage that shows up after close, and how 14.2 prints the window.",
  },
  {
    index: "07",
    date: "28 Jul 2026",
    title: "Drift is a desk event, not a job",
    dek: "Auto-reconcile looks kind until finance cannot explain a line. We page the operator instead.",
  },
  {
    index: "06",
    date: "02 Jul 2026",
    title: "Version a meter without rewriting history",
    dek: "Invoices stay pinned to the catalog they were rated on. New events pick up v3.",
  },
  {
    index: "05",
    date: "11 Jun 2026",
    title: "The invoice as an instrument",
    dek: "Every amount traces to events. If it cannot, it does not ship.",
  },
];

export function BlogList01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Field notes
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          From the
          <br />
          rating desk.
        </h2>
      </div>
      <ol>
        {NOTES.map((note) => (
          <li key={note.index} className="border-b border-ledger-rule last:border-b-0">
            <a
              href={`#note-${note.index}`}
              className="grid grid-cols-1 gap-2 px-4 py-5 hover:bg-ledger-rule/30 md:grid-cols-12 md:items-baseline md:px-8"
            >
              <span className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted tabular-nums md:col-span-1">
                {note.index}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase md:col-span-2">
                {note.date}
              </span>
              <span className="md:col-span-9">
                <span className="block font-sans text-lg font-bold tracking-tight uppercase">
                  {note.title}
                </span>
                <span className="mt-1 block text-[15px] text-ledger-muted">
                  {note.dek}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
