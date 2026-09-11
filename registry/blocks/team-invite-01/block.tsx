type BlockState = "default" | "loading" | "empty" | "error";

const MEMBERS = [
  { name: "Maya Chen", email: "maya@north.ledger", role: "Owner" },
  { name: "Jon Vale", email: "jon@north.ledger", role: "Operator" },
  { name: "R. Okonkwo", email: "r.okonkwo@north.ledger", role: "Finance" },
];

export function TeamInvite01({
  state = "default",
}: {
  state?: BlockState;
}) {
  return (
    <section className="w-full bg-ledger-paper text-ledger-ink">
      <div className="border-b border-ledger-ink px-4 py-6 md:px-8">
        <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
          Access
        </p>
        <h2 className="font-sans text-2xl font-bold tracking-tight uppercase">
          Operators
        </h2>
      </div>

      {state === "error" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-signal uppercase">
            Directory unreachable
          </p>
          <p className="mt-2 max-w-md text-[15px]">
            Could not list workspace members. Invites are paused until the desk
            is back.
          </p>
        </div>
      ) : null}

      {state !== "error" ? (
        <form className="flex flex-col gap-3 border-b border-ledger-ink p-4 sm:flex-row md:p-8">
          <input
            type="email"
            placeholder="operator@firm.com"
            className="h-10 flex-1 border border-ledger-rule bg-transparent px-3 text-[15px] placeholder:text-ledger-muted focus-visible:ring-1 focus-visible:ring-ledger-ink focus-visible:outline-none"
          />
          <select className="h-10 border border-ledger-rule bg-ledger-paper px-3 font-mono text-[11px] font-bold tracking-widest uppercase">
            <option>Operator</option>
            <option>Finance</option>
            <option>Read-only</option>
          </select>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center border border-ledger-ink bg-ledger-ink px-4 font-mono text-[11px] font-bold tracking-widest text-ledger-paper uppercase hover:bg-transparent hover:text-ledger-ink"
          >
            Send invite
          </button>
        </form>
      ) : null}

      {state === "loading" ? (
        <div className="p-4 md:p-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="mb-3 h-12 bg-ledger-rule" />
          ))}
        </div>
      ) : null}

      {state === "empty" ? (
        <div className="px-4 py-12 md:px-8">
          <p className="font-mono text-[10px] font-bold tracking-widest text-ledger-muted uppercase">
            Desk of one
          </p>
          <p className="mt-2 max-w-md text-[15px] text-ledger-muted">
            You are the only operator. Invite finance before the next close.
          </p>
        </div>
      ) : null}

      {state === "default" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ledger-ink">
                {["Name", "Email", "Role"].map((head) => (
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
              {MEMBERS.map((member) => (
                <tr key={member.email} className="border-b border-ledger-rule">
                  <td className="px-4 py-3 text-[14px] font-medium">
                    {member.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px]">
                    {member.email}
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] font-bold tracking-widest uppercase">
                    {member.role}
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
