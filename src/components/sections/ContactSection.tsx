"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl lg:text-5xl">
            Ready to Leave the City Behind?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-beige/60">
            Your next adventure doesn&apos;t need a luxury hotel. Sometimes all
            you need is a forest, a tent, and a few days away from everything.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-green-500"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-semibold text-beige transition-colors hover:bg-white/5"
            >
              <Mail className="h-5 w-5" />
              Send Email
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-earth-brown/40 px-8 py-4 text-sm font-semibold text-earth-brown transition-colors hover:bg-earth-brown/10"
            >
              <ArrowDown className="h-5 w-5" />
              Book Your Stay
            </a>
          </div>

          <div className="mt-10 text-sm text-beige/40 space-y-1">
            <p>WhatsApp: {siteConfig.contact.whatsapp}</p>
            <p>Email: {siteConfig.contact.email}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
