import { Button } from "@/components/ui/button";
import { MessageSquare, Clock } from "lucide-react";

export function AIFeatures() {
  return (
    <section className="w-full py-20 bg-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-gold text-sm font-medium mb-2">Effortless</div>
            <h2 className="text-3xl font-bold">Streamline Your Communication with AI Agents</h2>
            <p className="text-white/70">
              Our AI-powered agents are designed to handle all your client communications seamlessly. Whether it&apos;s Instagram, WhatsApp, text, or email, let our technology manage your conversations so you can focus on what you do best.
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gold hover:bg-gold/90">Learn More</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-gold/20 to-navy rounded-lg" />
        </div>
      </div>
    </section>
  );
}