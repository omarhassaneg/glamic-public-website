"use client";

import { steps } from "./steps";
import { StepItem } from "./step-item";

export function HowItWorksSection() {
  return (
    <section className="w-full py-24 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Get started with Glamic in five simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gold/20 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-16">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  {...step}
                  index={index}
                  isReversed={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}