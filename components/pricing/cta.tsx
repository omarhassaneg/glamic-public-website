"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="w-full py-20 bg-[#112840]">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#FBFBFB]">
            Choose Your Perfect Plan
          </h2>
          <p className="text-[#BDCAD9] max-w-2xl mx-auto">
            Start your free trial today and discover the benefits of Glamic for your beauty business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/auth/get-started">
            <Button className="w-full sm:w-auto bg-[#957F5A] hover:bg-[#957F5A]/90 text-[#FBFBFB]">
              Get Started
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
