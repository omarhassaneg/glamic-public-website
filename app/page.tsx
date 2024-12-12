import { HeroSection } from "@/components/sections/hero";
import { AccordionList } from "@/components/ui/accordion-list";
import { AICommunicationSection } from "@/components/sections/ai-communication";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <section className="w-full py-20 bg-background dark:bg-navy">
        <div className="container px-4 md:px-6">
          <AccordionList />
        </div>
      </section>
      <AICommunicationSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}