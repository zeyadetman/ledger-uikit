"use client";

import { useState } from "react";

export function Permissions01() {
  const roles = ["Reader", "Operator", "Admin"];
  const capabilities = [
    "Read events",
    "Export records",
    "Edit meters",
    "Manage billing",
    "Manage members",
  ];
  const [permissions, setPermissions] = useState([
    [true, true, true],
    [false, true, true],
    [false, true, true],
    [false, false, true],
    [false, false, true],
  ]);
  const [saved, setSaved] = useState(false);
  return (
    <section className="w-full border-b border-ledger-ink bg-ledger-paper font-sans text-ledger-ink">
      <header className="border-b border-ledger-rule p-5 sm:p-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted">
          app / permissions-01
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Role permissions
        </h2>
        <p className="text-[15px] leading-relaxed text-ledger-muted mt-3 max-w-2xl">
          An editable permission matrix for workspace roles.
        </p>
      </header>
      <div className="p-5 sm:p-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Workspace role permission matrix
            </caption>
            <thead>
              <tr className="border-b border-ledger-ink">
                <th scope="col" className="p-3">
                  Capability
                </th>
                {roles.map((role) => (
                  <th
                    scope="col"
                    key={role}
                    className="font-mono text-[11px] font-bold uppercase tracking-widest text-ledger-muted p-3 text-center"
                  >
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {capabilities.map((capability, row) => (
                <tr key={capability} className="border-b border-ledger-rule">
                  <th scope="row" className="p-3 font-normal">
                    {capability}
                  </th>
                  {roles.map((role, column) => (
                    <td key={role} className="p-3 text-center">
                      <input
                        type="checkbox"
                        aria-label={`${role}: ${capability}`}
                        disabled={column === 2}
                        checked={permissions[row][column]}
                        onChange={() => {
                          setPermissions(
                            permissions.map((values, index) =>
                              index === row
                                ? values.map((value, i) =>
                                    i === column ? !value : value
                                  )
                                : values
                            )
                          );
                          setSaved(false);
                        }}
                        className="h-4 w-4 accent-ledger-ink"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center border border-ledger-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-ledger-ink hover:text-ledger-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-signal disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setSaved(true)}
          >
            Save permissions
          </button>
          <p
            role="status"
            className="text-[15px] leading-relaxed text-ledger-muted"
          >
            {saved
              ? "Permissions saved for this demo."
              : "Administrator access is fixed."}
          </p>
        </div>
      </div>
    </section>
  );
}
