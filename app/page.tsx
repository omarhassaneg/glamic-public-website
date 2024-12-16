import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { AICommunicationSection } from "@/components/sections/ai-communication";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";
import { AIFeaturesPopup } from "@/components/popups/ai-features";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <AICommunicationSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
      <AIFeaturesPopup />
    </div>
  );
}