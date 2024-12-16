"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIContentPreview } from "./previews/content-preview";
import { AIChatPreview } from "./previews/chat-preview";
import { NavigationDots } from "./navigation-dots";
import { WaitlistDialog } from "@/components/common/waitlist/dialog";

const features = [
  {
    title: "AI Content Generation",
    description: "Transform your social media presence with AI-generated content that matches your brand's voice and style.",
    bullets: [
      "Generate on-brand visuals for posts",
      "Create engaging captions automatically",
      "Schedule content at optimal times",
      "Maintain consistent brand aesthetics"
    ],
    preview: AIContentPreview
  },
  {
    title: "AI Communication Assistant",
    description: "Let our AI handle your client communications, qualify leads, and convert followers into paying clients.",
    bullets: [
      "24/7 automated responses",
      "Smart lead qualification",
      "Seamless booking integration",
      "Personalized client interactions"
    ],
    preview: AIChatPreview
  }
];

export function AIFeaturesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWaitlist, setShowWaitlist] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenAIPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasSeenAIPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setIsVisible(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const CurrentPreview = features[currentIndex].preview;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "relative w-full max-w-2xl rounded-2xl p-6 shadow-xl",
                "bg-white dark:bg-navy"
              )}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-navy dark:text-white">
                    {features[currentIndex].title}
                  </h2>
                  <p className="mt-2 text-navy/70 dark:text-white/70">
                    {features[currentIndex].description}
                  </p>
                </div>

                {/* Preview */}
                <div className="relative aspect-[16/9] w-full">
                  <CurrentPreview />
                </div>

                {/* Feature Bullets */}
                <ul className="grid grid-cols-2 gap-3">
                  {features[currentIndex].bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-navy/70 dark:text-white/70"
                    >
                      <span className="mr-2 text-gold">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrev}
                    className="hidden md:flex items-center text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
                  >
                    <ArrowLeft className="h-5 w-5 mr-1" />
                    Previous
                  </button>

                  <div className="md:hidden">
                    <NavigationDots
                      count={features.length}
                      current={currentIndex}
                      onChange={setCurrentIndex}
                    />
                  </div>

                  <button
                    onClick={handleNext}
                    className="hidden md:flex items-center text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
                  >
                    Next
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </button>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="w-full bg-gold hover:bg-gold/90 text-white py-3 rounded-lg font-medium"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaitlistDialog
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        title="Join the AI Features Waitlist"
      />
    </>
  );
}