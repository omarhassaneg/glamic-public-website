"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import { footerLinks } from "../links";
import { SocialIcon } from "./social-icon";

const icons = {
  Instagram,
  Twitter,
  Linkedin,
};

export function SocialList() {
  return (
    <ul className="space-y-3">
      {footerLinks.follow.map((link) => {
        const Icon = icons[link.icon as keyof typeof icons];
        return (
          <li key={link.name}>
            <SocialIcon 
              href={link.href}
              icon={Icon}
              name={link.name}
            />
          </li>
        );
      })}
    </ul>
  );
}