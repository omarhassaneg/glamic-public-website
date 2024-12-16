import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Pro",
    monthlyPrice: 25,
    annualPrice: 20,
    features: [
      { name: "Instant Ready-Made Profile & Business Setup" },
      { name: "Launch Your Website Instantly" },
      { name: "Payment and Refund Management" },
      { name: "SMS Payments & Appointment Reminders" },
      { name: "Provider Locator Tool" },
      { name: "Automated Scheduling" },
      { name: "Build Trust with Reviews" },
    ],
  },
  {
    name: "Pro AI",
    monthlyPrice: 60,
    annualPrice: 50,
    comingSoon: true,
    features: [
      { name: "Everything in Pro, plus:" },
      { name: "Instagram DM AI FAQ Assistant" },
      { name: "Available 247" },
      { name: "Scalable AI Assitant" },
      { name: "Chats like you" },
      { name: "Take over conversation at anytime" },
      { name: "Escalates to you non-customer DMs" },
    ]
  },
  {
    name: "Pro AI+",
    monthlyPrice: 80,
    annualPrice: 70,
    comingSoon: true,
    features: [
      { name: "Everything in Pro AI, plus:" },
      { name: "Auto-Schedule Social Media Posts" },
      { name: "Own Image/vidoes AI-Generated Captions" },     
      { name: "30 AI-Generated Images/m & Captions" },
      { name: "Brand Aligned Content Generation" },
      { name: "Instagram DM AI Lead Qualification" },
      { name: "Instagram DM AI Booking Assistant" },
    ]
  },
];