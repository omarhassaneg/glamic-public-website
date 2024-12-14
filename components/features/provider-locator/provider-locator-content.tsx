"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocatorFeatureList } from "./locator-feature-list";

const features = [
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description: "Help clients find your location effortlessly with integrated maps"
  },
  {
    icon: Navigation,
    title: "Mobile Service Areas",
    description: "Define and manage your service coverage areas with precision"
  },
  {
    icon: Calculator,
    title: "Distance-Based Pricing",
    description: "Automatically calculate travel fees based on client location"
  }
];

export function ProviderLocatorContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Location Services</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Provider Locator Tool
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Make it easy for clients to find you and book your services. Set your service areas and let our smart pricing handle travel fees automatically.
      </p>
      <LocatorFeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Set Up Your Location
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}