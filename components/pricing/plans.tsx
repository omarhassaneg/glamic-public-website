"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Package } from "lucide-react";

const plans = [
  {
    name: "Pro",
    monthlyPrice: "39",
    annualPrice: "29",
    features: [
      "AI booking assistant",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Multi-location support",
    ],
  },
  {
    name: "Pro+",
    monthlyPrice: "59",
    annualPrice: "49",
    features: [
      "Advanced scheduling",
      "SMS notifications",
      "Custom booking page",
      "Payment processing",
    ],
  },
];

export function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-navy">Pricing plan</h2>
          <p className="text-navy/70">Choose the perfect plan for your beauty business needs.</p>
          <div className="flex justify-center gap-4">
            <Button
              variant={billing === "monthly" ? "default" : "outline"}
              onClick={() => setBilling("monthly")}
              className={billing === "monthly" ? "bg-navy text-white" : ""}
            >
              Monthly
            </Button>
            <Button
              variant={billing === "yearly" ? "default" : "outline"}
              onClick={() => setBilling("yearly")}
              className={billing === "yearly" ? "bg-navy text-white" : ""}
            >
              Yearly
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-8 flex-wrap md:flex-nowrap">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6 w-full md:w-[40%]"> 
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <Package className="h-10 w-10 text-gold mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-navy">${billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}</span>
                    <span className="text-navy/70 ml-1">{billing === "monthly" ? "/mo" : "/yr"}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-navy/70 mb-4">Includes:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-navy">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-navy hover:bg-navy/90 text-white mt-auto">
                  Get started
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}