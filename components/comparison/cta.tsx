import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ComparisonCTA() {
  return (
    <section className="w-full py-20 bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Experience the Glamic Difference?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of beauty professionals who have already made the switch to Glamic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white dark:bg-gold dark:hover:bg-gold/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}