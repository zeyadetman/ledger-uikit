import type { Metadata } from "next";
import { KitShell } from "@/components/site/KitShell";
import { DesignStudio } from "@/components/design/DesignStudio";
export const metadata: Metadata = { title: "Design system" };
export default function DesignSystemPage() { return <KitShell kicker="Kit / Appearance" title="Design system"><DesignStudio /></KitShell>; }
