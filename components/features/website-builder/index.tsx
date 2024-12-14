"use client";

import { WebsiteBuilderContent } from "./website-builder-content";
import { WebsitePreview } from "./website-preview";

export function WebsiteBuilder() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <WebsiteBuilderContent />
          <WebsitePreview />
        </div>
      </div>
    </section>
  );
}