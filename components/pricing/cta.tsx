import { Button } from "@/components/ui/button";

export function PricingCTA() {
  return (
    <section className="w-full py-20 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-navy">
            Choose Your Perfect Plan
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Start your free trial today and discover the benefits of Glamic for your beauty business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-navy hover:bg-navy/90 text-white">
              Sign Up
            </Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}