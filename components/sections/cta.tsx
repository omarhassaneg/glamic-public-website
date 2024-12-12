import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#FBFBFB] to-[#BDCAD9]/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#112840]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[#112840]/70 text-lg max-w-2xl">
            Join thousands of independent beauty service providers that have already revolutionized their operations with our platform.
          </p>
          <div className="w-full">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-[#957F5A] hover:bg-[#957F5A]/90 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}