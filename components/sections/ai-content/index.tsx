"use client";

import { AIContentHero } from "./hero";
import { AIContentFeatures } from "./features";
import { AIContentVisualizer } from "./visualizer";
import { AIContentCTA } from "./cta";

export function AIContentSection() {
  return (
    <section className="w-full py-24 bg-navy overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container px-4 md:px-6">
        <AIContentHero />
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          <AIContentFeatures />
          <div className="lg:sticky lg:top-24">
            <AIContentVisualizer />
          </div>
        </div>
        <AIContentCTA />
      </div>
    </section>
  );
}