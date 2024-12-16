"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/chat/window";
import { FeatureCard } from "@/components/instagram/feature-card";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { instagramFeatures, chatMessages } from "@/components/instagram/constants";
import { WaitlistDialog } from "@/components/common/waitlist/dialog";

export function AICommunicationSection() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="w-full py-24 bg-navy overflow-hidden relative">
      <ComingSoonBadge />
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 text-gold">
                <Instagram className="h-6 w-6" />
                <span className="text-sm font-medium">INSTAGRAM INTEGRATION</span>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Transform Your Instagram Into A{" "}
                <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
                  Booking Machine
                </span>
              </h2>
              <p className="text-lg text-white/80">
                Let our AI handle your Instagram DMs, qualify leads, and convert followers into paying clients - all while you focus on creating beautiful content and serving your clients.
              </p>
            </motion.div>

            <div className="space-y-4">
              {instagramFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>

            <Button 
              className="w-full bg-gold hover:bg-gold/90 text-white h-12 text-base"
              onClick={() => setShowWaitlist(true)}
            >
              Join Waitlist
            </Button>
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <ChatWindow messages={chatMessages} />
          </div>
        </div>
      </div>

      <WaitlistDialog
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        title="Join the Instagram AI Integration Waitlist"
      />
    </section>
  );
}