"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const conversation = [
  {
    step: 1,
    title: "Initial Contact",
    messages: [
      { type: "customer", text: "Do you have availability for gel nails this weekend?" },
      { type: "ai", text: "Hi! We'd love to help! Let me check our schedule for gel nails this weekend." }
    ]
  },
  {
    step: 2,
    title: "Understanding Needs",
    messages: [
      { type: "ai", text: "What day and time works best for you?" },
      { type: "ai", text: "We have Saturday at 2 PM or 4 PM available. Would either work for you?" }
    ]
  },
  {
    step: 3,
    title: "Booking Confirmation",
    messages: [
      { type: "customer", text: "Saturday at 2 PM." },
      { type: "ai", text: "Great! A gel nails appointment for one person at 2 PM is $50. Let me secure your spot." }
    ]
  },
  {
    step: 4,
    title: "Payment Processing",
    messages: [
      { type: "ai", text: "Please use this booking link to pay a $10 deposit to confirm your appointment: [link]" }
    ]
  },
  {
    step: 5,
    title: "Upsell Opportunity",
    messages: [
      { type: "ai", text: "Would you like to bring a friend? Book for two people and get $5 off each—just $45 per person!" },
      { type: "customer", text: "Sure, I'll add a friend." }
    ]
  }
];

export function AIWorkflow() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="text-gold text-sm font-medium mb-2">HOW IT WORKS</div>
          <h2 className="text-3xl font-bold text-white mb-4">Seamless Booking Experience</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how our AI Agents handle customer interactions and bookings efficiently
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/20" />

            <div className="space-y-16">
              {conversation.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stepIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-gold" />
                  
                  {/* Step label */}
                  <div className="absolute left-1/2 -translate-x-1/2 -mt-10 text-gold text-sm font-medium">
                    Step {step.step}
                  </div>

                  <div className="space-y-4">
                    {step.messages.map((message, messageIndex) => (
                      <div
                        key={messageIndex}
                        className={`flex ${message.type === 'customer' ? 'justify-start' : 'justify-end'}`}
                      >
                        <div className={`max-w-[80%] ${message.type === 'customer' ? 'pr-8' : 'pl-8'}`}>
                          <div className="flex items-start gap-3">
                            {message.type === 'customer' && (
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm text-white">C</span>
                              </div>
                            )}
                            <div className={`rounded-lg p-4 ${
                              message.type === 'customer' 
                                ? 'bg-navy/30 text-white' 
                                : 'bg-gold/10 text-white'
                            }`}>
                              <p className="text-sm">{message.text}</p>
                            </div>
                            {message.type === 'ai' && (
                              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                                <Bot className="h-4 w-4 text-gold" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}