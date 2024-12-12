"use client";

import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AIChannels() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-gold" />
            <h2 className="text-3xl font-bold text-navy">Instagram Integration</h2>
          </div>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Transform your Instagram presence into a powerful booking engine with our AI-powered solution
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-navy/5 to-gold/5">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold text-navy">Coming Soon</h3>
              <p className="text-navy/70">
                Our Instagram integration will revolutionize how you handle DMs and convert followers into clients. Join the waitlist to be the first to know when it launches.
              </p>
              <button className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Join Waitlist
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}