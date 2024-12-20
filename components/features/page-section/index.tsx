"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import { features } from "../data";

const sectionIds: Record<string, string> = {
  "Instant Ready-Made Profile & Business Setup": "instant-setup",
  "Launch Your Website In Under A Minute": "website-builder",
  "Payment and Refund Management": "payment-management",
  "SMS Payments & Appointment Reminders": "notifications",
  "Social Media Integration": "social-media",
  "Provider Locator Tool": "provider-locator",
  "24/7 AI DM Assistant": "ai-features",
  "Automated Scheduling": "automated-scheduling"
};

export function FeaturesPageSection() {
  return (
    <section id="features-section" className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Everything you need to run your business - at one low price!
          </h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Comprehensive tools and features designed specifically for beauty professionals
          </p>
        </div>
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
              sectionId={sectionIds[feature.title]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}