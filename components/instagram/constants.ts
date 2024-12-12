import { Users, Clock, TrendingUp, ShieldCheck, UserCog } from "lucide-react";

export const instagramFeatures = [
  {
    icon: Users,
    title: "Lead Qualification",
    description: "AI automatically qualifies Instagram leads by understanding their needs and budget"
  },
  {
    icon: Clock,
    title: "24/7 Instagram DM Response",
    description: "Never miss a potential client - AI responds to DMs instantly, any time of day"
  },
  {
    icon: TrendingUp,
    title: "Increased Conversion",
    description: "Convert Instagram followers into paying clients with smart conversation flows"
  },
  {
    icon: ShieldCheck,
    title: "Pre-Screening",
    description: "Filter serious clients from casual inquiries before they reach your calendar"
  },
  {
    icon: UserCog,
    title: "Flexible Control",
    description: "Choose when to take over the conversation or let AI handle the entire booking process"
  }
];

export const chatMessages = [
  {
    type: "client" as const,
    message: "Hi! I saw your latest hair transformation post 😍 Do you have any availability this weekend?"
  },
  {
    type: "ai" as const,
    message: "Hello! Thank you for your interest! I'd be happy to help you book an appointment. To ensure I recommend the right service, could you tell me:\n\n1. What type of hair service are you looking for?\n2. Have you had any chemical treatments in the last 6 months?\n\nThis helps us allocate the right amount of time for your appointment! 💫"
  },
  {
    type: "client" as const,
    message: "I'm looking for balayage and a haircut. No chemical treatments in the past year!"
  },
  {
    type: "ai" as const,
    message: "Perfect! For balayage and haircut, we'll need about 3 hours. I have the following slots available this weekend:\n\nSaturday: 10:00 AM - 1:00 PM\nSunday: 2:00 PM - 5:00 PM\n\nWhich time works better for you? The service will be $275, and we require a $50 deposit to secure your booking. 💕"
  }
];