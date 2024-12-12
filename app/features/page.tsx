import { FeaturesHero } from "@/components/features/hero";
import { FeaturesList } from "@/components/features/features-list";
import { AIFeatures } from "@/components/features/ai-features";
import { CustomSolutions } from "@/components/features/custom-solutions";
import { AppointmentManagement } from "@/components/features/appointment-management";
import { FeaturesCTA } from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeaturesList />
      <AIFeatures />
      <CustomSolutions />
      <AppointmentManagement />
      <FeaturesCTA />
    </div>
  );
}