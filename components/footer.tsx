"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  resources: [
    { name: "Blog Posts", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Support Center", href: "/support" },
    { name: "Feedback", href: "/feedback" },
  ],
  follow: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "X", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t bg-white dark:bg-navy">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Newsletter */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Logo isDark={false} />
            </Link>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-navy dark:text-white">Subscribe to updates</h3>
              <p className="text-navy/70 dark:text-white/70">Stay informed about our latest features and offers!</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email Here"
                  className="bg-navy/10 dark:bg-white/10 border-navy/20 dark:border-white/20 text-navy dark:text-white placeholder:text-navy/50 dark:placeholder:text-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="bg-gold hover:bg-gold/90 text-white">
                  Join
                </Button>
              </div>
              <p className="text-xs text-navy/60 dark:text-white/60">
                By subscribing, you accept our Privacy Policy
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Follow Us</h3>
            <ul className="space-y-3">
              {footerLinks.follow.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-navy/70 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors"
                  >
                    <link.icon className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy/60 dark:text-white/60 text-sm">
              © {new Date().getFullYear()} Glamic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white text-sm">
                Terms of Use
              </Link>
              <button className="text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white text-sm">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
