"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AIHero() {
  return (
    <section className="w-full pt-40 pb-16 bg-background dark:bg-navy overflow-hidden relative z-0">
      <div className="container px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-navy via-gold to-navy dark:from-white dark:via-gold dark:to-white bg-clip-text text-transparent">
                Transform Your Business with
              </span>{" "}
              <span className="bg-gradient-to-r from-navy via-gold to-navy dark:from-white dark:via-gold dark:to-white bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-navy/80 dark:text-white/80 md:text-xl">
              Let AI handle the first line of interaction by understanding potential clients' needs and matching them to your services. Automate scheduling while maintaining control over the process.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white dark:bg-gold dark:hover:bg-gold/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
