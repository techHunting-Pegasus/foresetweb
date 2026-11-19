"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle } from "lucide-react";

const guidelines = [
  "This is an outdoor wilderness experience, not a luxury resort. Expect basic amenities.",
  "Weather and terrain conditions can change without warning.",
  "Wildlife may be present. Maintain distance and do not feed animals.",
  "Follow all instructions from authorized guides and the site owner.",
  "Do not enter restricted forest areas or cross marked boundaries.",
  "Do not litter. Carry out all waste. Do not damage vegetation.",
  "No unauthorized open fires. Bonfires only in designated areas with permission.",
  "Carry essential personal medicines, first-aid kit, and personal supplies.",
  "Inform the owner of any medical conditions before your stay.",
  "Follow all local forest, environmental, and government regulations.",
  "Outdoor activities depend on weather, permissions, and local conditions.",
  "Emergency contact and evacuation arrangements will be communicated before your stay.",
];

export function SafetySection() {
  return (
    <section className="bg-forest-deep py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="h-10 w-10 text-earth-brown mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            Know Before You Enter the Forest
          </h2>
          <p className="mt-4 text-beige/60">
            Your safety matters. Read these guidelines carefully.
          </p>
        </motion.div>

        <div className="space-y-3">
          {guidelines.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-lg border border-white/5 bg-charcoal/40 p-4"
            >
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-beige/70">{g}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
