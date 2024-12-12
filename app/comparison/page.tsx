import { ComparisonHero } from "@/components/comparison/hero";
import { ComparisonTable } from "@/components/comparison/table";
import { ComparisonCTA } from "@/components/comparison/cta";

export default function ComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ComparisonHero />
      <ComparisonTable />
      <ComparisonCTA />
    </div>
  );
}