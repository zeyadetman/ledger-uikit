import type { Metadata } from "next";
import { SaaSApp } from "@/registry/pages/saas-app";

export const metadata: Metadata = {
  title: "Demo — SaaS app",
  description:
    "Composed LEDGER app page: shell, stats, ingest chart, activity tape, and usage table.",
};

export default function SaaSAppPage() {
  return <SaaSApp />;
}
