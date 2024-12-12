"use client";

import { Mail, Phone, MapPin, Scissors, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const footerLinks = {
  resources: [
    { name: "Blog Posts", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQs", href: "/faqs" },
    { name: "Support Center", href: "/support" },
  ],
  connect: [
    { name: "Newsletter", href: "#" },
    { name: "Events", href: "/events" },
    { name: "Webinars", href: "/webinars" },
    { name: "Community", href: "/community" },
    { name: "Feedback", href: "/feedback" },
  ],
  follow: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t bg-navy">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Scissors className="h-6 w-6 text-gold" />
              <span className="font-bold text-white">Glamic</span>
            </Link>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Subscribe to updates</h3>
              <p className="text-white/70">Stay informed about our latest features and offers!</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email Here"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="bg-gold hover:bg-gold/90 text-white">
                  Join
                </Button>
              </div>
              <p className="text-xs text-white/60">
                By subscribing, you accept our Privacy Policy
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
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
                    className="flex items-center text-white/70 hover:text-white transition-colors"
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
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Glamic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm">
                Terms of Use
              </Link>
              <button className="text-white/60 hover:text-white text-sm">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}