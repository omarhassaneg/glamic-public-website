"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButton() {
  return (
    <a 
      href="http://download.glamic.com/web" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full max-w-xs"
    >
      <Button 
        size="lg"
        className="w-full bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg rounded-2xl"
      >
        <Download className="mr-2 h-6 w-6" />
        Tap to Download
      </Button>
    </a>
  );
}