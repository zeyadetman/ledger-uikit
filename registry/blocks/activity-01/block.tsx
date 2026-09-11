type BlockState = "default" | "loading" | "empty" | "error";

const ROWS = [
  {
    at: "14:02:11",
    actor: "m.chen",
    action: "Wrote meter",
    target: "tokens.out v3",
  },
  {
    at: "13:48:02",
    actor: "j.vale",
    action: "Closed invoice",
    target: "INV-1044",
  },
  {
    at: "13:12:40",
    actor: "system",
    action: "Flagged drift",
    target: "gb.hours / Harbour",
  },
  {
    at: "12:04:18",
    actor: "r.okonkwo",
    action: "Invited operator",
    target: "finance@north.ledger",
  },
  {
    at: "11:51:09",
    actor: "m.chen",
    action: "Rotated key",
    target: "ingest.live",
  },
];

export function Activity01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-4 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Audit
        </p>
        <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
          Activity tape
        </h2>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Audit unread
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not load writes after 13:41. Treat the desk as unverified until
            reload.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Quiet desk
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            No operator writes in this window.
          </p>
        </div>
      ) : null}

      {state === "loading" || state === "default" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-ink">
                {["Time", "Actor", "Action", "Target"].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state === "loading"
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-b border-ledger-rule">
                      {Array.from({ length: 4 }).map((__, cell) => (
                        <td key={cell} className="px-4 py-3">
                          <div className="h-3 w-24 bg-ledger-rule" />
                        </td>
                      ))}
                    </tr>
                  ))
                : ROWS.map((row) => (
                    <tr key={row.at + row.target} className="border-b border-ledger-rule">
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {row.at}
                      </td>
                      <td className="px-4 py-3 font-mono text-[12px]">
                        {row.actor}
                      </td>
                      <td className="px-4 py-3 text-[14px]">{row.action}</td>
                      <td className="px-4 py-3 font-mono text-[12px]">
                        {row.target}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
