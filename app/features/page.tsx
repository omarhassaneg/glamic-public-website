import { FeaturesHero } from "@/components/features/hero";
import { FeaturesList } from "@/components/features/accordion/features-list";
import { AIFeatures } from "@/components/features/ai-features";
import { CustomSolutions } from "@/components/features/custom-solutions";
import { AppointmentManagement } from "@/components/features/appointment-management";
import { FeaturesCTA } from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <section className="w-full py-20 bg-background dark:bg-navy">
        <div className="container px-4 md:px-6">
          <FeaturesList />
        </div>
      </section>
      <AIFeatures />
      <CustomSolutions />
      <AppointmentManagement />
      <FeaturesCTA />
    </div>
  );
}