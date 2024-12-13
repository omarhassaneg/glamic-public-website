"use client";

import { Button } from "@/components/ui/button";
import { ImageMasonry } from "@/components/ui/image-masonry";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full pt-40 pb-16 bg-background dark:bg-navy overflow-hidden">
      <div className="container px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-navy via-gold to-navy dark:from-white dark:via-gold dark:to-white bg-clip-text text-transparent">
                Transform Your Beauty Business with Glamic
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-navy/80 dark:text-white/80 md:text-xl">
              The ultimate all-in-one technology solution for all independent beauty service providers, from mobile beauty professionals to those operating their own studios.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 px-4 sm:px-0">
            <Link href="/auth/get-started">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white dark:bg-gold dark:hover:bg-gold/90"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ImageMasonry />
    </section>
  );
}