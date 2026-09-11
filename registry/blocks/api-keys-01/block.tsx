type BlockState = "default" | "loading" | "empty" | "error";

const KEYS = [
  {
    name: "ingest.live",
    prefix: "fth_live_9f2a••••",
    created: "12 Jan 2026",
    last: "14:01:08",
  },
  {
    name: "ingest.sandbox",
    prefix: "fth_test_41cc••••",
    created: "12 Jan 2026",
    last: "09:12:44",
  },
  {
    name: "exports.reader",
    prefix: "fth_read_e01b••••",
    created: "03 Mar 2026",
    last: "Never",
  },
];

export function ApiKeys01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="flex flex-col gap-3 border-b border-ledger-ink px-4 py-4 sm:flex-row sm:items-end sm:justify-between md:px-8">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Credentials
          </p>
          <h2 className="font-sans text-lg font-bold tracking-tight uppercase">
            API keys
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-fit items-center border border-ledger-ink bg-ledger-ink px-3 font-mono text-[10px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
        >
          Mint key
        </button>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Vault unreachable
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not list keys. Ingest using keys you already hold; do not mint
            until the vault returns.
          </p>
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            No keys
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            Mint an ingest key before posting the first event.
          </p>
        </div>
      ) : null}

      {state === "loading" || state === "default" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-ink">
                {["Name", "Prefix", "Created", "Last used"].map((head) => (
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
                ? Array.from({ length: 3 }).map((_, index) => (
                    <tr key={index} className="border-b border-ledger-rule">
                      {Array.from({ length: 4 }).map((__, cell) => (
                        <td key={cell} className="px-4 py-3">
                          <div className="h-3 w-24 bg-ledger-rule" />
                        </td>
                      ))}
                    </tr>
                  ))
                : KEYS.map((key) => (
                    <tr key={key.name} className="border-b border-ledger-rule">
                      <td className="px-4 py-3 font-mono text-[12px]">{key.name}</td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {key.prefix}
                      </td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {key.created}
                      </td>
                      <td className="px-4 py-3 font-mono text-[12px] tabular-nums">
                        {key.last}
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
