const QUOTES = [
  {
    initials: "MC",
    name: "Maya Chen",
    role: "Head of Revenue, Harbour",
    copy: "We closed July without a spreadsheet. Every line on the invoice traces to an event. Finance stopped asking engineering for a dump.",
  },
  {
    initials: "JV",
    name: "Jon Vale",
    role: "Operator, Kestrel",
    copy: "The tape is boring in the way a cockpit should be. When drift hits signal red, we actually know what to do.",
  },
  {
    initials: "RO",
    name: "R. Okonkwo",
    role: "Controller, Glassline",
    copy: "I audit at 2am. Fathom does not decorate the numbers. That is the product.",
  },
];

export function Testimonials01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-8 md:px-8">
        <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          From the floor
        </p>
        <h2 className="font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl">
          Operators,
          <br />
          on the record.
        </h2>
      </div>
      <div className="grid grid-cols-1 border-l border-ledger-rule lg:grid-cols-3">
        {QUOTES.map((quote) => (
          <blockquote
            key={quote.initials}
            className="flex flex-col border-r border-b border-ledger-rule p-6 lg:border-b-0"
          >
            <p className="mb-8 flex-1 text-[15px] leading-relaxed">
              “{quote.copy}”
            </p>
            <footer className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center border border-ledger-ink font-mono text-[10px] font-bold tracking-widest">
                {quote.initials}
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight uppercase">
                  {quote.name}
                </p>
                <p className="font-mono text-[10px] tracking-widest text-ledger-muted uppercase">
                  {quote.role}
                </p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
