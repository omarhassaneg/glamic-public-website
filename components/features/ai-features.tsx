import { Button } from "@/components/ui/button";
import { MessageSquare, Clock } from "lucide-react";
import { ChatWindow } from "@/components/chat/window";
import Link from "next/link";

const demoMessages = [
  {
    type: "client" as const,
    message: "Hi! Do you have any availability for a haircut this weekend?"
  },
  {
    type: "ai" as const,
    message: "Hello! I'd be happy to help you book a haircut. To ensure we allocate enough time, could you please let me know:\n\n1. What type of haircut you're looking for?\n2. If you'd like any additional services?\n\nThis helps us provide you with accurate timing and pricing! 💇‍♀️"
  },
  {
    type: "client" as const,
    message: "I'd like a women's haircut and blow dry"
  },
  {
    type: "ai" as const,
    message: "Perfect! For a women's haircut and blow dry, we have the following slots available this weekend:\n\nSaturday:\n- 10:00 AM\n- 2:30 PM\n\nSunday:\n- 11:30 AM\n- 3:00 PM\n\nThe service will be $65, and we require a $20 deposit to secure your booking. Which time works best for you? ✨"
  }
];

export function AIFeatures() {
  return (
    <section className="w-full py-20 bg-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-gold text-sm font-medium mb-2">Effortless</div>
            <h2 className="text-3xl font-bold">Streamline Your Communication with AI Agents</h2>
            <p className="text-white/70">
              Our AI-powered agents are designed to handle all your client communications seamlessly. Whether it's Instagram, WhatsApp, text, or email, let our technology manage your conversations so you can focus on what you do best.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold">Instant Responses</h3>
                  <p className="text-sm text-white/70">Engage clients effortlessly with real-time replies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold">24/7 Availability</h3>
                  <p className="text-sm text-white/70">Never miss a booking opportunity</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
            <Link href="/download">
              <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                Get Started
              </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ChatWindow messages={demoMessages} />
          </div>
        </div>
      </div>
    </section>
  );
}