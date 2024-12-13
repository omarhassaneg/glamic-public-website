"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BillingToggleProps {
  billing: "monthly" | "annual";
  onChange: (billing: "monthly" | "annual") => void;
}

export function BillingToggle({ billing, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-white/50 dark:bg-navy/50 p-1 rounded-full inline-flex relative">
        <button
          onClick={() => onChange("monthly")}
          className={cn(
            "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
            billing === "monthly" 
              ? "text-white" 
              : "text-navy dark:text-white hover:text-navy/70 dark:hover:text-white/70"
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => onChange("annual")}
          className={cn(
            "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
            billing === "annual" 
              ? "text-white" 
              : "text-navy dark:text-white hover:text-navy/70 dark:hover:text-white/70"
          )}
        >
          Annual
        </button>
        <motion.div
          className="absolute inset-0 h-full rounded-full bg-gold"
          initial={false}
          animate={{
            x: billing === "monthly" ? 0 : "100%",
            width: "50%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ transform: billing === "monthly" ? "translateX(0%)" : "translateX(0%)" }}
        />
      </div>
      {billing === "annual" && (
        <div className="text-sm text-gold font-medium">
          Save up to 25% with annual billing
        </div>
      )}
    </div>
  );
}