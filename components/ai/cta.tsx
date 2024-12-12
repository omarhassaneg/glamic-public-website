import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AICTA() {
  return (
    <section className="w-full py-20 bg-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to Streamline Your Booking Process?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of beauty professionals who have transformed their booking management with our AI-powered solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-gold hover:bg-gold/90 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}