"use client";

import { motion } from "framer-motion";
import { Smartphone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppointmentFeatureList } from "./feature-list";
import { AppointmentFeature } from "./types";

const features: AppointmentFeature[] = [
  {
    icon: Smartphone,
    title: "Mobile Appointments",
    description: "Easily schedule and manage on-the-go appointments"
  },
  {
    icon: Calendar,
    title: "Studio Appointments",
    description: "Streamline your studio bookings hassle-free"
  }
];

export function AppointmentContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Flexibility</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Effortless Management of Your Appointments
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Glamic empowers beauty professionals to efficiently manage both mobile and studio bookings. Our platform ensures you never miss an appointment, no matter where you are.
      </p>
      <AppointmentFeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Get Started
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}