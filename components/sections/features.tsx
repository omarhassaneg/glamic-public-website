"use client";

import { FeaturesGrid } from "../features/features-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
            Everything you need to run your business - at one low price!
          </h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Comprehensive tools and features designed specifically for beauty professionals
          </p>
        </div>
        <FeaturesGrid />
        <div className="mt-12 text-center">
          <Link href="/features">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white dark:bg-gold dark:hover:bg-gold/90"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}