"use client";

import { AIContentContent } from "./content";
import { AIContentPreview } from "./preview";

export function AIContentSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AIContentContent />
          <AIContentPreview />
        </div>
      </div>
    </section>
  );
}