"use client";

import { motion } from "framer-motion";
import { Clock, RefreshCcw, Calendar, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SchedulingFeatureList } from "./scheduling-feature-list";

const features = [
  {
    icon: Clock,
    title: "Online Bookings 24/7",
    description: "Allow clients to book anytime, eliminating back-and-forth scheduling"
  },
  {
    icon: RefreshCcw,
    title: "Real-Time Availability",
    description: "Automatically update your calendar to avoid double bookings"
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Integrate your bookings with Google Calendar and other platforms"
  },
  {
    icon: LinkIcon,
    title: "Custom Booking Link",
    description: "Share a unique booking link to simplify the client experience"
  }
];

export function SchedulingContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Scheduling</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Automated Scheduling Made Simple
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Let your clients book appointments 24/7 with our intelligent scheduling system. Sync across all your calendars and eliminate scheduling conflicts.
      </p>
      <SchedulingFeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Start Automated Booking
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}