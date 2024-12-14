"use client";

import { motion } from "framer-motion";
import { CreditCard, Wallet, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaymentFeatureList } from "./payment-feature-list";

const features = [
  {
    icon: CreditCard,
    title: "Secure Payment Processing",
    description: "Accept cash, cards, Apple Pay, and financing options with Affirm"
  },
  {
    icon: Wallet,
    title: "Deposit Control",
    description: "Secure bookings with upfront deposits"
  },
  {
    icon: MapPin,
    title: "Travel Fee Options",
    description: "Accurately charge for travel expenses"
  },
  {
    icon: TrendingUp,
    title: "Dynamic Surge Hour Pricing",
    description: "Boost earnings during peak demand"
  }
];

export function PaymentContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="inline-block text-gold text-sm font-medium mb-2">Payments</div>
      <h2 className="text-3xl font-bold text-navy dark:text-white">
        Payment and Refund Management
      </h2>
      <p className="text-navy/70 dark:text-white/70">
        Handle payments, deposits, and refunds with ease. Our secure payment system supports multiple payment methods and flexible pricing options.
      </p>
      <PaymentFeatureList features={features} />
      <div className="pt-4">
        <Link href="/download">
          <Button className="w-full bg-gold hover:bg-gold/90 text-white">
            Start Accepting Payments
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}