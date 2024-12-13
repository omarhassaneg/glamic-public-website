import { CreditCard, Globe, Bell, Instagram, MapPin, Calendar, Star, ShieldCheck, MessageSquare } from "lucide-react";
import { Feature } from "./types";

export const features: Feature[] = [
  {
    title: "Instant Ready-Made Profile Setup",
    icon: ShieldCheck,
    details: [
      "Preloaded Services: Start with services, prices, and durations tailored to industry standards",
      "Policies & Waivers: Protect your business with ready-to-use policies and client agreements",
      "Service Management: Easily organize and update your service offerings",
    ],
  },
  {
    title: "Launch Your Website Instantly",
    icon: Globe,
    details: [
      "Customizable Booking Website: Showcase your brand with a professional, personalized booking page",
      "Customizable Branding: Personalize your booking page to reflect your unique style",
      "Portfolio Showcase: Attract clients by displaying your best work directly on your booking page",
    ],
  },
  {
    title: "Payment and Refund Management",
    icon: CreditCard,
    details: [
      "Secure Payment Processing: Accept cash, cards, Apple Pay, and financing options with Affirm",
      "Deposit Control: Secure bookings with upfront deposits",
      "Travel Fee Options: Accurately charge for travel expenses",
      "Dynamic Surge Hour Pricing: Boost earnings during peak demand",
    ],
  },
  {
    title: "SMS Appointment Reminders",
    icon: Bell,
    details: [
      "Client Notifications: Send automated SMS or email reminders",
      "Reduce No-Shows: Keep clients informed about upcoming appointments",
      "Customizable Messages: Personalize your communication",
    ],
  },
  {
    title: "Social Media Integration",
    icon: Instagram,
    comingSoon: true,
    details: [
      "AI Content Posting: Automatic social media content scheduling",
      "Lead Qualification: AI agent handles initial client interactions",
      "Conversion Optimization: Persuade leads to make bookings",
    ],
  },
  {
    title: "Provider Locator Tool",
    icon: MapPin,
    details: [
      "Google Maps Integration: Help clients find your location effortlessly",
      "Mobile Service Areas: Define and manage your service coverage",
      "Distance-Based Pricing: Automatically calculate travel fees",
    ],
  },
  {
    title: "24/7 AI DM Assistant",
    icon: MessageSquare,
    comingSoon: true,
    details: [
      "Answers all your incoming DM FAQs, 24/7-365 days of the year even while you sleep",
      "Intelligent Response System: Provides accurate service information and pricing",
      "Lead Qualification: Pre-screens potential clients before booking",
      "Seamless Handoff: Transfers complex inquiries to you when needed",
    ],
  },
  {
    title: "Build Trust with Reviews",
    icon: Star,
    details: [
      "Customer Reviews: Built-in review system to build credibility",
      "Direct Contact Options: Easy client communication via phone, text, or email",
      "Review Management: Monitor and respond to client feedback",
    ],
  },
];