"use client";

import { motion } from "framer-motion";
import { ToggleButton } from "./toggle-button";
import { SavingsMessage } from "./savings-message";

interface BillingToggleProps {
  billing: "monthly" | "annual";
  onChange: (billing: "monthly" | "annual") => void;
}

export function BillingToggle({ billing, onChange }: BillingToggleProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-white/50 dark:bg-navy/50 p-1 rounded-full inline-flex relative">
        <ToggleButton
          active={billing === "monthly"}
          onClick={() => onChange("monthly")}
        >
          Monthly
        </ToggleButton>
        <ToggleButton
          active={billing === "annual"}
          onClick={() => onChange("annual")}
        >
          Annual
        </ToggleButton>
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
      {/* Always show savings message */}
      <SavingsMessage />
    </div>
  );
}