"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SetupFeature } from "./types";

const features: SetupFeature[] = [
  {
    icon: FileText,
    title: "Preloaded Services",
    description: "Start with industry-standard services, prices, and durations tailored to your business type"
  },
  {
    icon: Shield,
    title: "Policies & Waivers",
    description: "Protect your business with comprehensive, ready-to-use policies and client agreements"
  },
  {
    icon: Settings,
    title: "Service Management",
    description: "Easily organize, customize, and update your service offerings to match your expertise"
  }
];

export function InstantSetup() {
  return (
    <section id="instant-setup" className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block text-gold text-sm font-medium mb-2">Quick Start</div>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Instant Ready-Made Profile & Business Setup
            </h2>
            <p className="text-navy/70 dark:text-white/70">
              Get your beauty business up and running in minutes with our comprehensive setup tools. Start with industry-tested templates and customize them to match your unique offerings.
            </p>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-gold/10 p-2 rounded-lg">
                    <feature.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-navy/70 dark:text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/download">
                <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="p-6 bg-gradient-to-br from-navy/5 to-gold/5 dark:from-white/5 dark:to-gold/5">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-navy dark:text-white">Sample Service Menu</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Classic Manicure", duration: "45 min", price: "$35" },
                      { name: "Gel Pedicure", duration: "60 min", price: "$65" },
                      { name: "Full Set Acrylic", duration: "90 min", price: "$85" }
                    ].map((service, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-navy dark:text-white">{service.name}</p>
                          <p className="text-sm text-navy/60 dark:text-white/60">{service.duration}</p>
                        </div>
                        <p className="text-gold font-semibold">{service.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-navy/10 dark:border-white/10 pt-4">
                  <p className="text-sm text-navy/70 dark:text-white/70">
                    * Sample menu shown. Customize services, prices, and durations to match your business needs.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}