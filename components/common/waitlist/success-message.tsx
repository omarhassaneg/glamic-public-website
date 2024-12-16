"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SuccessMessageProps } from "./types";

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="py-6 text-center space-y-4">
      <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
        <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-navy dark:text-white">
          Thank you for joining!
        </h3>
        <p className="text-navy/70 dark:text-white/70 text-sm">
          We'll reach out to you as soon as we're ready to launch. Stay tuned!
        </p>
      </div>
      <Button 
        onClick={onClose}
        className="bg-navy hover:bg-navy/90 dark:bg-gold dark:hover:bg-gold/90 text-white"
      >
        Close
      </Button>
    </div>
  );
}