"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { DialogTitle } from "@/components/ui/dialog";
import { SuccessStepProps } from "../types";

export function SuccessStep({ onClose }: SuccessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-6 text-center space-y-6"
    >
      <div className="mx-auto w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
        <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>
      
      <div className="space-y-2">
        <DialogTitle className="text-lg font-semibold text-navy dark:text-white">
          Thank you for joining!
        </DialogTitle>
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
    </motion.div>
  );
}