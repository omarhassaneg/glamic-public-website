"use client";

import { QrCode } from "lucide-react";

export function QRCodeDisplay() {
  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-navy/50 p-6 rounded-2xl shadow-lg inline-block">
        <img 
          src="https://groomee-storage.s3.us-east-2.amazonaws.com/glamic-qr-code-website-download.png"
          alt="Download QR Code"
          className="w-48 h-48"
        />
      </div>
      <p className="text-navy/70 dark:text-white/70 flex items-center justify-center gap-2">
        <QrCode className="h-5 w-5" />
        Scan QR code with your mobile device
      </p>
    </div>
  );
}