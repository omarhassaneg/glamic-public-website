"use client";

import { ProviderLocatorContent } from "./provider-locator-content";
import { ProviderLocatorDemo } from "./provider-locator-demo";

export function ProviderLocator() {
  return (
    <section id="provider-locator" className="w-full py-20 bg-white dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ProviderLocatorDemo />
          <ProviderLocatorContent />
        </div>
      </div>
    </section>
  );
}
