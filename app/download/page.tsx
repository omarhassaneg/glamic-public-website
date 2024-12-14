"use client";

import { DownloadHero } from "@/components/download/hero";
import { DownloadContent } from "@/components/download/content";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-navy flex items-center justify-center">
      <div className="container px-4 md:px-6 py-12">
        <DownloadHero />
        <DownloadContent />
      </div>
    </div>
  );
}