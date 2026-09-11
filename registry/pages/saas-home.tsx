import { Banner01 } from "@/registry/blocks/banner-01/block";
import { Cta01 } from "@/registry/blocks/cta-01/block";
import { Faq01 } from "@/registry/blocks/faq-01/block";
import { Features01 } from "@/registry/blocks/features-01/block";
import { Footer01 } from "@/registry/blocks/footer-01/block";
import { Hero01 } from "@/registry/blocks/hero-01/block";
import { LogoCloud01 } from "@/registry/blocks/logo-cloud-01/block";
import { Navbar01 } from "@/registry/blocks/navbar-01/block";
import { Pricing01 } from "@/registry/blocks/pricing-01/block";
import { Process01 } from "@/registry/blocks/process-01/block";
import { Testimonials01 } from "@/registry/blocks/testimonials-01/block";

export function SaaSHome() {
  return (
    <div className="min-h-screen bg-ledger-paper text-ledger-ink">
      <Banner01 />
      <Navbar01 />
      <Hero01 />
      <LogoCloud01 />
      <Features01 />
      <Process01 />
      <div className="border-b border-ledger-ink">
        <Testimonials01 />
      </div>
      <Pricing01 />
      <Faq01 />
      <Cta01 />
      <Footer01 />
    </div>
  );
}
