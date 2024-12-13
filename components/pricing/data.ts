import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Pro",
    monthlyPrice: 39,
    annualPrice: 29,
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
    monthlyPrice: 59,
    annualPrice: 49,
    comingSoon: true,
    features: [
      { name: "Everything in Pro, plus:" },
      { name: "AI Booking Assistant" },
      { name: "AI Content Generation" },
      { name: "Lead Qualification" },
      { name: "Automated Instagram DM Responses" },
      { name: "24/7 AI Agent for FAQs & Pricing" },
      { name: "365 Days AI Support & Assistance" },
    ],
    earlyAccess: {
      discount: "50% off first year",
      description: "Limited time early bird offer"
    }
  },
  {
    name: "Pro AI+",
    monthlyPrice: 79,
    annualPrice: 69,
    comingSoon: true,
    features: [
      { name: "Everything in Pro AI, plus:" },
      { name: "30 Ultra-Realistic AI Image Generations/mo" },
      { name: "Auto-Schedule Social Media Posts" },
      { name: "AI-Generated Content & Captions" },
      { name: "Brand-Aligned Content Creation" },
      { name: "Advanced Analytics & Insights" },
      { name: "Priority Support & Consultation" },
    ],
    earlyAccess: {
      discount: "50% off first year",
      description: "Limited time early bird offer"
    }
  },
];