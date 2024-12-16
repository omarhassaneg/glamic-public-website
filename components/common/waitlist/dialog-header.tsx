"use client";

import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogHeaderProps {
  title: string;
  description?: string;
  earlyAccess?: {
    discount: string;
    description: string;
  };
}

export function WaitlistDialogHeader({ title, description, earlyAccess }: DialogHeaderProps) {
  return (
    <DialogHeader className="space-y-3">
      <DialogTitle className="text-navy dark:text-white">
        {title}
      </DialogTitle>
      <div className="text-navy/70 dark:text-white/70 text-sm">
        {earlyAccess ? (
          <div className="space-y-2">
            <div className="text-gold font-medium">{earlyAccess.discount}</div>
            <div>{earlyAccess.description}</div>
          </div>
        ) : (
          <div>{description || "Be the first to know when this becomes available."}</div>
        )}
      </div>
    </DialogHeader>
  );
}