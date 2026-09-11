export function Banner01() {
  return (
    <aside className="flex w-full flex-col gap-2 border-b border-ledger-ink bg-ledger-ink px-4 py-2 text-ledger-paper sm:flex-row sm:items-center sm:justify-between md:px-8">
      <p className="font-mono text-[11px] font-bold tracking-widest uppercase">
        <span className="text-ledger-signal">Notice 14.2</span>
        <span className="mx-2 opacity-40">/</span>
        Late-arrival window now prints on the event tape.
      </p>
      <a
        href="#changelog"
        className="font-mono text-[11px] font-bold tracking-widest uppercase underline decoration-ledger-signal decoration-2 underline-offset-4 hover:text-ledger-signal"
      >
        Read the close note
      </a>
    </aside>
  );
}
