"use client";

import { Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ComingSoonTag } from "./coming-soon-tag";
import { Plan } from "./types";

interface PlanHeaderProps {
  plan: Plan;
}

export function PlanHeader({ plan }: PlanHeaderProps) {
  return (
    <div className="relative mt-4">
      {plan.isComingSoon && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-full">
          <ComingSoonTag />
        </div>
      )}
      <Card className="relative p-6 text-center bg-white dark:bg-navy/50">
        <Package className="h-8 w-8 mx-auto mb-2 text-gold" />
        <h3 className="text-xl font-semibold text-navy dark:text-white">{plan.name}</h3>
        <p className="text-navy/70 dark:text-white/70 text-sm">${plan.price}/mo</p>
      </Card>
    </div>
  );
}