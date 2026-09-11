import { Activity01 } from "@/registry/blocks/activity-01/block";
import { Chart01 } from "@/registry/blocks/chart-01/block";
import { DataTable01 } from "@/registry/blocks/data-table-01/block";
import { Shell01 } from "@/registry/blocks/shell-01/block";
import { Stats01 } from "@/registry/blocks/stats-01/block";

export function SaaSApp() {
  return (
    <Shell01 className="h-dvh">
      <Stats01 />
      <div className="grid border-b border-ledger-ink lg:grid-cols-2">
        <div className="border-b border-ledger-rule lg:border-r lg:border-b-0 lg:border-ledger-ink">
          <Chart01 />
        </div>
        <Activity01 />
      </div>
      <DataTable01 />
    </Shell01>
  );
}
