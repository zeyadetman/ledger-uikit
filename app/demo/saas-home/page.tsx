import type { Metadata } from "next";
import { SaaSHome } from "@/registry/pages/saas-home";

export const metadata: Metadata = {
  title: "Demo — SaaS home",
  description:
    "Composed LEDGER marketing page: banner, navbar, hero, logos, features, process, testimonials, pricing, FAQ, CTA, footer.",
};

export default function SaaSHomePage() {
  return <SaaSHome />;
}
