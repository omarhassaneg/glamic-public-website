"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WebsiteFeature } from "./types";
import { WebsitePreview } from "./preview";

const features: WebsiteFeature[] = [
  {
    icon: Globe,
    title: "Customizable Booking Website",
    description: "Showcase your brand with a professional, personalized booking page"
  },
  {
    icon: Palette,
    title: "Customizable Branding",
    description: "Personalize your booking page to reflect your unique style"
  },
  {
    icon: Image,
    title: "Portfolio Showcase",
    description: "Attract clients by displaying your best work directly on your booking page"
  }
];

export function WebsiteBuilder() {
  return (
    <section id="website-builder" className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <WebsitePreview />
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block text-gold text-sm font-medium mb-2">Website Builder</div>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Launch Your Website In Under A Minute
            </h2>
            <p className="text-navy/70 dark:text-white/70">
              Create a stunning, professional website that converts visitors into clients. No technical skills required - just customize and launch!
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
                  Create Your Website
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}