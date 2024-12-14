"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButton() {
  return (
    <a 
      href="http://download.glamic.com/web" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full max-w-[200px]"
    >
      <Button 
        className="w-full bg-gold hover:bg-gold/90 text-white"
      >
        <Download className="mr-2 h-4 w-4" />
        Download App
      </Button>
    </a>
  );
}