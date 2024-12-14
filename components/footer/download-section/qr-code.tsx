"use client";

import { QrCode } from "lucide-react";
import { motion } from "framer-motion";

export function QRCode() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center space-y-3"
    >
      <div className="bg-white/10 dark:bg-white/5 p-4 rounded-lg">
        <img 
          src="https://groomee-storage.s3.us-east-2.amazonaws.com/glamic-qr-code-website-download.png"
          alt="Download QR Code"
          className="w-32 h-32"
        />
      </div>
      <p className="text-navy/60 dark:text-white/60 text-sm flex items-center gap-2">
        <QrCode className="h-4 w-4" />
        Scan to download
      </p>
    </motion.div>
  );
}