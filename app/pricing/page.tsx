import { PricingHero } from "@/components/pricing/hero";
import { PricingPlans } from "@/components/pricing/plans";
import { PricingFeatures } from "@/components/pricing/features";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingCTA } from "@/components/pricing/cta";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PricingHero />
      <PricingPlans />
      <PricingFeatures />
      <PricingComparison />
      <PricingCTA />
    </div>
  );
}