import { CreditCard, Globe, Bell, Instagram, MapPin, Calendar, Star, ShieldCheck, MessageSquare } from "lucide-react";
import { LucideIcon } from "lucide-react";

export const FEATURE_TITLES = {
  SETUP: "Instant Ready-Made Profile & Business Setup",
  WEBSITE: "Launch Your Website In Under A Minute",
  PAYMENT: "Payment and Refund Management",
  NOTIFICATIONS: "SMS Payments & Appointment Reminders",
  SOCIAL: "Social Media Integration",
  LOCATOR: "Provider Locator Tool",
  AI: "24/7 AI DM Assistant",
  SCHEDULING: "Automated Scheduling",
} as const;

export type FeatureTitle = typeof FEATURE_TITLES[keyof typeof FEATURE_TITLES];

export interface Feature {
  title: FeatureTitle;
  icon: LucideIcon;
  details: string[];
  comingSoon?: boolean;
}

export const features: Feature[] = [
  {
    title: FEATURE_TITLES.SETUP,
    icon: ShieldCheck,
    details: [
      "Preloaded Services: Start with services, prices, and durations tailored to industry standards",
      "Policies & Waivers: Protect your business with ready-to-use policies and client agreements",
      "Service Management: Easily organize and update your service offerings",
    ],
  },
  {
    title: FEATURE_TITLES.WEBSITE,
    icon: Globe,
    details: [
      "Customizable Booking Website: Showcase your brand with a professional, personalized booking page",
      "Customizable Branding: Personalize your booking page to reflect your unique style",
      "Portfolio Showcase: Attract clients by displaying your best work directly on your booking page",
    ],
  },
  {
    title: FEATURE_TITLES.PAYMENT,
    icon: CreditCard,
    details: [
      "Secure Payment Processing: Accept cash, cards, Apple Pay, and financing options with Affirm",
      "Deposit Control: Secure bookings with upfront deposits",
      "Travel Fee Options: Accurately charge for travel expenses",
      "Dynamic Surge Hour Pricing: Boost earnings during peak demand",
    ],
  },
  {
    title: FEATURE_TITLES.NOTIFICATIONS,
    icon: Bell,
    details: [
      "Client Notifications: Send automated SMS or email reminders",
      "Reduce No-Shows: Keep clients informed about upcoming appointments",
      "Customizable Messages: Personalize your communication",
    ],
  },
  {
    title: FEATURE_TITLES.SOCIAL,
    icon: Instagram,
    comingSoon: true,
    details: [
      "Custom or AI-Generated Pictures: Choose to use your own images or let AI create stunning visuals",
      "Custom or AI-Generated Captions: Write your own captions or let AI craft them for you",
      "Content Posting: Automatic scheduling for seamless social media management",
    ],    
  },
  {
    title: FEATURE_TITLES.LOCATOR,
    icon: MapPin,
    details: [
      "Google Maps Integration: Help clients find your location effortlessly",
      "Mobile Service Areas: Define and manage your service coverage",
      "Distance-Based Pricing: Automatically calculate travel fees",
    ],
  },
  {
    title: FEATURE_TITLES.AI,
    icon: MessageSquare,
    comingSoon: true,
    details: [
      "Answers all your incoming DM FAQs, 24/7-365 days of the year even while you sleep",
      "Intelligent Response System: Provides accurate service information and pricing",
      "Lead Qualification: Pre-screens potential clients before booking",
      "Conversion Optimization: Persuade leads to make bookings",
      "Seamless Handoff: Transfers complex inquiries to you when needed",
    ],
  },
  {
    title: FEATURE_TITLES.SCHEDULING,
    icon: Calendar,
    details: [
      "Online Bookings 24/7: Allow clients to book anytime, eliminating back-and-forth scheduling.",
      "Real-Time Availability: Automatically update your calendar to avoid double bookings.",
      "Calendar Sync: Integrate your bookings with Google Calendar and other platforms.",
      "Custom Booking Link: Share a unique booking link to simplify the client experience."
    ],
  },
];