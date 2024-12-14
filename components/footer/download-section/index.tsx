"use client";

import { useEffect, useState } from "react";
import { QRCode } from "./qr-code";
import { DownloadButton } from "./download-button";

export function DownloadSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-lg font-semibold text-gold mb-4">Download App</h3>
      <p className="text-navy/70 dark:text-white/70 mb-4 text-sm">
        Currently available as a mobile experience
      </p>
      {isMobile ? <DownloadButton /> : <QRCode />}
    </div>
  );
}