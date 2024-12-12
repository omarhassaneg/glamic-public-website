"use client";

import { Card } from "@/components/ui/card";
import { Brain, Shield, Sliders, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Intelligent Client Qualification",
    description: "AI understands client needs and matches them to your services based on location, preferences, and policies.",
    icon: Brain,
  },
  {
    title: "Automated Deposit Collection",
    description: "Securely collect deposits from qualified clients to ensure serious bookings and reduce no-shows.",
    icon: Shield,
  },
  {
    title: "Flexible Control System",
    description: "Choose when to step in - from early qualification to post-deposit confirmation.",
    icon: Sliders,
  },
  {
    title: "Smart Scheduling",
    description: "Automatically manage appointments, send confirmations, and handle reminders.",
    icon: Calendar,
  },
];

export function AIFeatures() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How AI-Powered Smart Booking Works
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Our AI solution transforms your booking process with intelligent automation and seamless customer interactions.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-navy/5">
                <feature.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
              <p className="text-navy/70 max-w-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}