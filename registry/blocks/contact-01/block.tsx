export function Contact01() {
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper text-ledger-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="border-b border-ledger-ink p-6 lg:col-span-5 lg:border-r lg:border-b-0 md:p-10">
          <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk
          </p>
          <h2 className="mb-6 font-sans text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-4xl">
            Write the
            <br />
            rating desk.
          </h2>
          <p className="mb-8 max-w-sm text-[15px] text-ledger-muted">
            Exchange volume, VPC, or a named operator. We answer on the tape —
            not a chatbot.
          </p>
          <dl className="space-y-4 font-mono text-[12px] tracking-wide uppercase">
            <div>
              <dt className="text-[10px] text-ledger-muted">Address</dt>
              <dd className="mt-1">
                14 Tape Street, Floor 6
                <br />
                New York, NY 10013
              </dd>
            </div>
            <div>
              <dt className="text-[10px] text-ledger-muted">Wire</dt>
              <dd className="mt-1">desk@fathom.ledger</dd>
            </div>
          </dl>
        </div>
        <form className="flex flex-col gap-5 p-6 lg:col-span-7 md:p-10">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Firm
            </span>
            <input
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
              placeholder="Harbour"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Email
            </span>
            <input
              type="email"
              className="h-10 w-full border border-ledger-rule bg-transparent px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
              placeholder="maya@harbour.co"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] font-bold tracking-widest uppercase">
              Note
            </span>
            <textarea
              rows={5}
              className="w-full border border-ledger-rule bg-transparent px-3 py-2 text-[15px] focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
              placeholder="Volume, region, close cadence."
            />
          </label>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-6 font-mono text-sm font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Send to desk
          </button>
        </form>
      </div>
    </section>
  );
}
