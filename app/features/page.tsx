import { FeaturesHero } from "@/components/features/hero";
import { FeaturesSection } from "@/components/sections/features";
import { AIFeatures } from "@/components/features/ai-features";
import { CustomSolutions } from "@/components/features/custom-solutions";
import { AppointmentManagement } from "@/components/features/appointment-management";
import { FeaturesCTA } from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeaturesSection />
      <AIFeatures />
      <CustomSolutions />
      <AppointmentManagement />
      <FeaturesCTA />
    </div>
  );
}