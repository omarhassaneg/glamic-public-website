import { Package } from "lucide-react";

export function PricingFeatures() {
  return (
    <section className="w-full py-20 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Package className="h-12 w-12 text-gold" />
            <h2 className="text-3xl font-bold text-navy">
              Experience Effortless Scheduling and Boost Your Beauty Business with Glamic
            </h2>
            <p className="text-navy/70">
              Glamic simplifies your booking process, allowing you to focus on what you do best—providing exceptional beauty services. Our AI-powered agents save you time by managing client conversations across multiple platforms, ensuring you never miss an opportunity.
            </p>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}