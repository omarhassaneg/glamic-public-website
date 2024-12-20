"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import { features } from "./data";

const sectionIds = {
  "Instant Ready-Made Profile & Business Setup": "instant-setup",
  "Launch Your Website In Under A Minute": "website-builder",
  "Payment and Refund Management": "payment-management",
  "SMS Payments & Appointment Reminders": "notifications",
  "Social Media Integration": "social-media",
  "Provider Locator Tool": "provider-locator",
  "24/7 AI DM Assistant": "ai-features",
  "Automated Scheduling": "automated-scheduling"
};

export function FeaturesGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.div 
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(index === expandedIndex ? null : index)}
          sectionId={sectionIds[feature.title]}
        />
      ))}
    </motion.div>
  );
}