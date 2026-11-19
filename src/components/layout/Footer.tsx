"use client";

import { useState, useEffect } from "react";
import { Trees, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  explore: [
    { label: "Our Experience", href: "#experience" },
    { label: "Adventure", href: "#adventure" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
  ],
  info: [
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Booking & Refund Policy", href: "/booking-refund-policy" },
  ],
};

export function Footer() {
  const [year, setYear] = useState(2024);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="bg-forest-deep border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trees className="h-6 w-6 text-green-500" />
              <span className="text-lg font-bold text-soft-white">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-sm text-beige/60 mb-6">
              {siteConfig.brand.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm text-beige/60">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-soft-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-soft-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-soft-white mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige/60 hover:text-soft-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-soft-white mb-4 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige/60 hover:text-soft-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-soft-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige/60 hover:text-soft-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-beige/40">
            &copy; {year} {siteConfig.brand.name}. All
            rights reserved. Himachal Pradesh, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
