import { PlanFeature, Plan } from "./types";

export const plans: Plan[] = [
  { name: "Pro", price: 39 },
  { name: "Pro AI", price: 59, isComingSoon: true },
  { name: "Pro AI+", price: 79, isComingSoon: true }
];

export const features: PlanFeature[] = [
  { 
    name: "Profile & Business Setup",
    pro: "Basic Setup",
    proAI: "AI-Enhanced Setup",
    proAIPlus: "Advanced AI Setup"
  },
  { 
    name: "Website Builder",
    pro: "Standard Template",
    proAI: "AI-Optimized Template",
    proAIPlus: "Custom AI-Generated Design"
  },
  { 
    name: "Payment Processing",
    pro: "Standard",
    proAI: "Advanced",
    proAIPlus: "Premium"
  },
  { 
    name: "SMS & Appointment Reminders",
    pro: true,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "Provider Locator Tool",
    pro: "Basic",
    proAI: "Enhanced",
    proAIPlus: "Premium"
  },
  { 
    name: "Automated Scheduling",
    pro: "Basic",
    proAI: "AI-Enhanced",
    proAIPlus: "Advanced AI"
  },
  { 
    name: "Client Reviews Management",
    pro: "Basic",
    proAI: "Advanced",
    proAIPlus: "Premium"
  },
  { 
    name: "Client Database",
    pro: "Up to 500 clients",
    proAI: "Up to 2000 clients",
    proAIPlus: "Unlimited"
  },
  { 
    name: "AI Booking Assistant",
    pro: false,
    proAI: "Basic AI Assistant",
    proAIPlus: "Advanced AI Assistant"
  },
  { 
    name: "AI Content Generation",
    pro: false,
    proAI: "Basic Templates",
    proAIPlus: "Custom Content"
  },
  { 
    name: "Lead Qualification",
    pro: false,
    proAI: "Standard",
    proAIPlus: "Advanced"
  },
  { 
    name: "Instagram DM Automation",
    pro: false,
    proAI: "Basic Responses",
    proAIPlus: "Advanced Conversations"
  },
  { 
    name: "Social Media Integration",
    pro: "Basic",
    proAI: "Advanced",
    proAIPlus: "Full Suite"
  },
  { 
    name: "Marketing Tools",
    pro: "Basic",
    proAI: "Advanced",
    proAIPlus: "Premium"
  },
  { 
    name: "24/7 AI Support",
    pro: false,
    proAI: true,
    proAIPlus: true
  },
  { 
    name: "AI Image Generation",
    pro: false,
    proAI: "10 Images/month",
    proAIPlus: "30 Images/month"
  },
  { 
    name: "Social Media Management",
    pro: false,
    proAI: "Basic Suite",
    proAIPlus: "Full Suite"
  },
  { 
    name: "Analytics & Insights",
    pro: "Basic Reports",
    proAI: "Advanced Analytics",
    proAIPlus: "Premium Insights"
  },
  { 
    name: "Business Intelligence",
    pro: "Basic",
    proAI: "Advanced",
    proAIPlus: "Premium + Custom"
  },
  { 
    name: "Priority Support",
    pro: false,
    proAI: "Standard",
    proAIPlus: "Premium"
  }
];