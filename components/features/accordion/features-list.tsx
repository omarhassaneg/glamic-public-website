"use client";

import { Accordion } from "@/components/ui/accordion";
import { features } from "../constants";
import { FeatureItem } from "./feature-item";
import { motion } from "framer-motion";

export function FeaturesList() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">
          Everything you need to run your business
        </h2>
        <p className="text-navy/70 dark:text-white/70 max-w-xl mx-auto text-sm">
          All the essential features you need to streamline your beauty business, available at one low price
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion 
          type="single" 
          collapsible 
          className="w-full bg-gradient-to-b from-white/50 to-white/10 dark:from-navy/50 dark:to-navy/10 backdrop-blur-xl rounded-2xl p-4"
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}