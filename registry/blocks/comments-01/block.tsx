const COMMENTS = [
  {
    initials: "JV",
    name: "Jon Vale",
    at: "13:14",
    body: "Held because posted GB-hours lagged the warehouse by 17.3. Waiting on Harbour's collector.",
  },
  {
    initials: "MC",
    name: "Maya Chen",
    at: "13:21",
    body: "Do not auto-rate. If they backfill after 16:00, open a prior-period write. I want it on the audit tape.",
  },
];

export function Comments01() {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-4 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Record · INV-1044 / line 3
        </p>
        <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
          Thread
        </h2>
      </div>
      <ol>
        {COMMENTS.map((comment) => (
          <li
            key={comment.at}
            className="flex gap-3 border-b border-ledger-rule px-4 py-4 md:px-8"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-ledger-ink font-mono text-[10px] font-bold">
              {comment.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <p className="text-[14px] font-bold tracking-tight uppercase">
                  {comment.name}
                </p>
                <span className="font-mono text-[10px] tabular-nums text-ledger-muted">
                  {comment.at}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed">{comment.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <form className="flex flex-col gap-3 p-4 md:flex-row md:p-8">
        <input
          placeholder="Write on this line…"
          className="h-11 flex-1 border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
        />
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center border border-ledger-ink bg-ledger-ink px-5 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
        >
          Post
        </button>
      </form>
    </section>
  );
}
