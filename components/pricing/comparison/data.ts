import { PlanFeature, Plan } from "./types";

export const plans: Plan[] = [
  { name: "Pro", price: 19.99 },
  { name: "Pro AI", price: 49.99, isComingSoon: true },
  { name: "Pro AI+", price: 69.99, isComingSoon: true }
];

export const features: PlanFeature[] = [
  { 
    name: "Profile & Business Setup",
    pro: "Automatic",
    proAI: "Automatic",
    proAIPlus: "Automatic"
  },
  { 
    name: "Website Builder",
    pro: "1 Click Setup",
    proAI: "1 Click Setup",
    proAIPlus: "1 Click Setup"
  },
  { 
    name: "Payment Options For Your Customers",
    pro: "Cash, Cards, ApplePay, Affirm financing",
    proAI: "Cash, Cards, ApplePay, Affirm financing",
    proAIPlus: "Cash, Cards, ApplePay, Affirm financing"
  },
  { 
    name: "SMS & Appointment Reminders",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Mobile & Studio Services Tools",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Provider Locator Tools",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Automated Scheduling",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Client Reviews",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Client Database",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Support",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Instagram DM AI FAQ Assistant",
    pro: false,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Instagram DM AI Lead Qualification",
    pro: false,
    proAI: false,
    proAIPlus: true
  },
  { 
    name: "Instagram DM AI Booking Assistant",
    pro: false,
    proAI: false,
    proAIPlus: true
  },
  { 
    name: "Instagram Automatic Post Uploads",
    pro: false,
    proAI: false,
    proAIPlus: "Pictures, Videos, Stories, Posts"
  },
  { 
    name: "Instagram Automatic Captions Generation",
    pro: false,
    proAI: false,
    proAIPlus: "Pictures, Videos, Stories, Posts"
  },
  { 
    name: "AI Content Generation",
    pro: false,
    proAI: false,
    proAIPlus: "30 Images/month"
  },
  { 
    name: "Instagram Own Image/Video Automation",
    pro: false,
    proAI: false,
    proAIPlus: "Unlimited"
  }
];