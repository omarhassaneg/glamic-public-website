import { FeaturesHero } from "@/components/features/hero";
import { FeaturesPageSection } from "@/components/features/page-section";
import {
  InstantSetup,
  WebsiteBuilder,
  PaymentManagement,
  NotificationsSection,
  SocialMediaSection,
  ProviderLocator,
  AutomatedScheduling,
  AIFeatures,
  AppointmentManagement
} from "@/components/features";
import { FeaturesCTA } from "@/components/features/cta";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeaturesPageSection />
      <InstantSetup />
      <WebsiteBuilder />
      <PaymentManagement />
      <NotificationsSection />
      <SocialMediaSection />
      <ProviderLocator />
      <AutomatedScheduling />
      <AIFeatures />
      <AppointmentManagement />
      <FeaturesCTA />
    </div>
  );
}