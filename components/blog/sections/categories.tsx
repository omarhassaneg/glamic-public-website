"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "View all",
  "Business Tips",
  "Client Stories",
  "Industry News",
  "Product Updates"
];

export function BlogCategories() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={cn(
              "border-2",
              "border-navy/20 text-navy hover:bg-navy hover:text-white",
              "dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy"
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}