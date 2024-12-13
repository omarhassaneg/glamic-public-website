import { PricingHero } from "@/components/pricing/hero";
import { PricingPlans } from "@/components/pricing/plans";
import { PricingComparison } from "@/components/pricing/comparison/index";
import { PricingCTA } from "@/components/pricing/cta";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingCTA />
    </div>
  );
}