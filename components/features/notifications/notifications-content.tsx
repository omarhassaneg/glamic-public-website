"use client";

import { motion } from "framer-motion";
import { Bell, Ban, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NotificationFeatureList } from "./notification-feature-list";

const features = [
  {
    icon: Bell,
    title: "Client Notifications",
    description: "Send automated SMS, push notifications, or email reminders"
  },
  {
    icon: Ban,
    title: "Reduce No-Shows",
    description: "Keep clients informed about upcoming appointments"
  },
  {
    icon: MessageSquare,
    title: "Customizable Messages",
    description: "Personalize your communication with custom templates"
  }
];

export function NotificationsContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Notifications</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        SMS Payments & Appointment Reminders
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Keep your clients informed and reduce no-shows with automated notifications. Send payment reminders, appointment confirmations, and updates through multiple channels.
      </p>
      <NotificationFeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Start Sending Notifications
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}