"use client";

import { Button } from "@/components/ui/button";
import { Instagram, MessageSquare, Phone, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    description: "Engage with clients through Instagram DMs"
  },
  {
    name: "WhatsApp",
    icon: MessageSquare,
    description: "Quick responses via WhatsApp"
  },
  {
    name: "SMS",
    icon: Phone,
    description: "Direct communication through SMS"
  }
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a booking opportunity"
  },
  {
    icon: MessageCircle,
    title: "Instant Responses",
    description: "Automated replies across all platforms"
  }
];

export function AICommunicationSection() {
  return (
    <section className="w-full py-24 bg-navy overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">
                Power your business with{" "}
                <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
                  AI
                </span>
              </h2>
              <p className="text-lg text-white/80">
                Let our AI-powered agents handle your client communications across multiple platforms while you focus on what you do best.
              </p>
            </motion.div>

            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  <div className="bg-gold/10 p-2 rounded-lg">
                    <platform.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{platform.name}</h3>
                    <p className="text-sm text-white/70">{platform.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center space-x-4">
                      <feature.icon className="h-6 w-6 text-gold" />
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-white/70">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}