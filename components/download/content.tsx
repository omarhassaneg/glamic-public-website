"use client";

import { motion } from "framer-motion";
import { QRCodeDisplay } from "./qr-code-display";
import { DownloadButton } from "./download-button";
import { DownloadFooter } from "./footer";

export function DownloadContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-2xl mx-auto text-center space-y-8 mt-8"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="md:hidden">
          <DownloadButton />
        </div>
        <div className="hidden md:block">
          <QRCodeDisplay />
        </div>
      </div>
      <DownloadFooter />
    </motion.div>
  );
}