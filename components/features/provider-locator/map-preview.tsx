"use client";

import { MapPin } from "lucide-react";
import { ServiceArea } from "./types"; 

export function MapPreview() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-navy dark:text-white">
        Service Area Map
      </h3>
      <div className="relative aspect-[21/9] bg-navy/5 dark:bg-white/5 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.935242,40.730610,13,0/600x450?access_token=pk.dummy')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gold/20 rounded-full animate-pulse" />
            <MapPin className="h-8 w-8 text-gold relative z-10" />
          </div>
        </div>
        <div className="absolute bottom-3 left-4 right-4 bg-white/90 dark:bg-navy/90 backdrop-blur-sm rounded-lg p-2">
          <p className="text-sm text-navy/70 dark:text-white/70">
            Service radius: 10 miles from primary location
          </p>
        </div>
      </div>
    </div>
  );
}