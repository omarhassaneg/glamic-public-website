import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AIHero() {
  return (
    <section className="w-full py-24 bg-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Booking Management with{" "}
            <span className="bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-[700px]">
            Let AI handle the first line of interaction by understanding potential clients' needs and matching them to your services. Automate scheduling while maintaining control over the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-white">
              Get Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}