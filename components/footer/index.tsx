"use client";

import { Newsletter } from "./newsletter";
import { QuickLinks } from "./quick-links";
import { SocialLinks } from "./social-links";
import { DownloadSection } from "./download-section";
import { BottomBar } from "./bottom-bar";

export function Footer() {
  return (
    <footer className="border-t bg-background dark:bg-navy">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <Newsletter />
          <QuickLinks />
          <SocialLinks />
          <DownloadSection />
        </div>
        <BottomBar />
      </div>
    </footer>
  );
}