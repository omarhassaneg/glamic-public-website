import { plans, features } from "./data";
import { PlanHeader } from "./plan-header";
import { FeatureRow } from "./feature-row";

export function PricingComparison() {
  return (
    <section className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gold mb-2">Compare Plans</p>
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Detailed Plan Comparison
          </h2>
          <p className="text-navy/70 dark:text-white/70">
            Find the perfect plan for your business needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] relative">
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4">
              <div className="pt-4"></div>
              {plans.map((plan) => (
                <PlanHeader key={plan.name} plan={plan} />
              ))}
            </div>

            {features.map((feature, index) => (
              <FeatureRow key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}