"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function BlogPostShare({ url, title }: ShareButtonProps) {
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const shareButtons = [
    { icon: Twitter, label: "Share on X", onClick: shareOnTwitter },
    { icon: Facebook, label: "Share on Facebook", onClick: shareOnFacebook },
    { icon: Linkedin, label: "Share on LinkedIn", onClick: shareOnLinkedIn },
  ];

  return (
    <div className="flex items-center gap-2">
      {shareButtons.map((button) => (
        <Button
          key={button.label}
          variant="ghost"
          size="icon"
          onClick={button.onClick}
          className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white"
          aria-label={button.label}
        >
          <button.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}