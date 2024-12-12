"use client";

import { Button } from "@/components/ui/button";

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
            className="border-navy text-navy hover:bg-navy hover:text-white"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}