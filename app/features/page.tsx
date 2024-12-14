import { FeaturesHero } from "@/components/features/hero";
import { FeaturesSection } from "@/components/sections/features";
import { InstantSetup } from "@/components/features/instant-setup";
import { WebsiteBuilder } from "@/components/features/website-builder";
import { PaymentManagement } from "@/components/features/payment";
import { NotificationsSection } from "@/components/features/notifications";
import { AIContentSection } from "@/components/features/ai-content";
import { ProviderLocator } from "@/components/features/provider-locator";
import { AutomatedScheduling } from "@/components/features/scheduling";
import { AIFeatures } from "@/components/features/ai-features";
import { AppointmentManagement } from "@/components/features/appointment-management/index";
import { FeaturesCTA } from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeaturesSection />
      <InstantSetup />
      <WebsiteBuilder />
      <PaymentManagement />
      <NotificationsSection />
      <AIContentSection />
      <ProviderLocator />
      <AutomatedScheduling />
      <AIFeatures />
      <AppointmentManagement />
      <FeaturesCTA />
    </div>
  );
}