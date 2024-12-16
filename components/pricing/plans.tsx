"use client";

import { useState } from "react";
import { BillingToggle } from "./billing-toggle";
import { PlanCard } from "./plan-card";
import { pricingPlans } from "./data";

export function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing-section" className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white">
            Pricing plan
          </h2>
          <p className="text-navy/70 dark:text-white/70">
            Choose the perfect plan for your beauty business needs
          </p>
          <BillingToggle 
            billing={billing} 
            onChange={setBilling} 
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              billing={billing}
            />
          ))}
        </div>
      </div>
    </section>
  );
}