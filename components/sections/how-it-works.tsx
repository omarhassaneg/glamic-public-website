"use client";

import { User, Calendar, Globe, Bot, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: User,
    title: "Set up your business",
    description: "Create your profile, add your services, set your booking policies and connect with your favorite platforms like Instagram!"
  },
  {
    icon: Calendar,
    title: "Set your schedule",
    description: "Choose when you work and let your clients know when you are available for bookings. Stay up to date with your daily schedule by syncing your calendar with Outlook, iPhone, Android, or Google Calendar."
  },
  {
    icon: Globe,
    title: "Activate your website",
    description: "Launch your personalized booking website that reflects your brand and services. Let clients book appointments directly through your professional online presence."
  },
  {
    icon: Bot,
    title: "Turn on your AI assistant",
    description: "Enable your AI assistant to handle client communications, answer inquiries, and manage bookings 24/7 across all your connected platforms."
  },
  {
    icon: MessageCircle,
    title: "Business streamlined",
    description: "Enjoy automated scheduling, seamless client communication, and increased bookings while you focus on delivering exceptional beauty services."
  }
];

export function HowItWorksSection() {
  return (
    <section className="w-full py-24 bg-offwhite">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Get started with Glamic in five simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gold/20 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Content */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
                    index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1"
                  }`}>
                    <div className={`pl-24 md:pl-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-24" : "md:pl-24"
                    }`}>
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-navy/70">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}