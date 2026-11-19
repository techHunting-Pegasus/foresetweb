"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { formatCurrency } from "@/lib/pricing";

const steps = [
  { num: "01", title: "Submit Enquiry", desc: "Fill the booking form or message us on WhatsApp." },
  { num: "02", title: "Confirm Details", desc: "Owner checks availability and confirms your package." },
  { num: "03", title: "Pay Advance", desc: `Pay ${formatCurrency(siteConfig.booking.advancePerPerson)} per person as booking advance.` },
  { num: "04", title: "Experience the Forest", desc: "Arrive, set up, and enjoy your wilderness stay." },
  { num: "05", title: "Pay Remaining", desc: "Settle the remaining balance after your trip ends." },
];

export function BookingProcessSection() {
  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            How Booking Works
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6 items-start"
            >
              <span className="text-3xl font-bold text-earth-brown/50 shrink-0 font-mono">
                {step.num}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-soft-white">
                  {step.title}
                </h3>
                <p className="text-sm text-beige/60 mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-forest-deep/50 p-8"
        >
          <h3 className="text-lg font-bold text-soft-white mb-4">
            Example: 2 People, 2 Days, With Food
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm max-w-sm">
            <span className="text-beige/60">Forest Stay</span>
            <span className="text-right text-soft-white">₹3,500 × 2 = ₹7,000</span>
            <span className="text-beige/60">Food Package</span>
            <span className="text-right text-soft-white">₹1,500 × 2 = ₹3,000</span>
            <span className="text-beige/70 font-semibold border-t border-white/10 pt-2">Total</span>
            <span className="text-right text-soft-white font-bold border-t border-white/10 pt-2">₹10,000</span>
            <span className="text-beige/60">Booking Advance</span>
            <span className="text-right text-green-400">-₹1,000</span>
            <span className="text-beige/70 font-semibold">Remaining</span>
            <span className="text-right text-soft-white font-bold">₹9,000</span>
          </div>
          <p className="mt-4 text-xs text-beige/40">
            Advance is {formatCurrency(siteConfig.booking.advancePerPerson)} per person,
            refundable within {siteConfig.booking.refundProcessingBusinessDays} business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
