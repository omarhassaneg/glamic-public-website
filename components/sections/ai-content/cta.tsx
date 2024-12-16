"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WaitlistDialog } from "@/components/common/waitlist/dialog";

export function AIContentCTA() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 text-center"
    >
      <Button 
        size="lg"
        className="bg-gold hover:bg-gold/90 text-white"
        onClick={() => setShowWaitlist(true)}
      >
        Join Waitlist
      </Button>
      <p className="mt-4 text-white/60 text-sm">
        Be the first to know when AI content generation launches
      </p>

      <WaitlistDialog
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        title="Join the AI Content Generation Waitlist"
      />
    </motion.div>
  );
}