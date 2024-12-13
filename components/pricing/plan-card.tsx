"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PricingPlan } from "./types";
import { cn } from "@/lib/utils";
import { WaitlistDialog } from "@/components/common/waitlist-dialog";

interface PlanCardProps {
  plan: PricingPlan;
  billing: "monthly" | "annual";
}

export function PlanCard({ plan, billing }: PlanCardProps) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const price = billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className={cn(
        "relative p-6 bg-white dark:bg-navy/50 border-2",
        "border-navy/10 dark:border-white/10"
      )}>
        {plan.comingSoon && (
          <div className="absolute -top-3 right-4 flex items-center gap-2">
            <span className="bg-navy dark:bg-gold text-white text-sm font-medium px-3 py-1 rounded-full">
              Coming Soon
            </span>
            {plan.earlyAccess && (
              <span className="bg-gold text-white text-sm font-medium px-3 py-1 rounded-full">
                50% off if you join waitlist
              </span>
            )}
          </div>
        )}

        <div className="text-center mb-6 mt-4">
          <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
            {plan.name}
          </h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-navy dark:text-white">
              ${price}
            </span>
            <span className="text-navy/70 dark:text-white/70">
              /{billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          {billing === "annual" && (
            <div className="text-sm text-gold mt-1">
              Billed annually (${price * 12}/year)
            </div>
          )}
        </div>

        <div className="space-y-4 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span className="text-navy/70 dark:text-white/70 text-sm">
                {feature.name}
              </span>
            </div>
          ))}
        </div>

        {plan.comingSoon ? (
          <Button 
            variant="outline"
            onClick={() => setShowWaitlist(true)}
            className={cn(
              "w-full border-2",
              "border-navy text-navy hover:bg-navy hover:text-white",
              "dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-white",
              "transition-colors duration-200"
            )}
          >
            Join Waitlist
          </Button>
        ) : (
          <Button 
            className="w-full bg-navy hover:bg-navy/90 dark:bg-gold dark:hover:bg-gold/90 text-white"
          >
            Get Started
          </Button>
        )}
      </Card>

      <WaitlistDialog
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        title={`Join the Waitlist for ${plan.name}`}
        earlyAccess={plan.earlyAccess}
      />
    </motion.div>
  );
}