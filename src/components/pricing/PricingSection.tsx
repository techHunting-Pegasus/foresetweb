"use client";

import { motion } from "framer-motion";
import { Check, Users, Utensils } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatCurrency } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl lg:text-5xl">
            Transparent Pricing. No Hidden Charges.
          </h2>
          <p className="mt-4 text-lg text-beige/60">
            All prices are per day. Food is optional. Tent rental is separate.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {siteConfig.packages.map((pkg, i) => (
            <motion.div
              key={pkg.guests}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl border p-8 ${
                i === 1
                  ? "border-earth-brown/50 bg-earth-brown/10"
                  : "border-white/10 bg-forest-deep/50"
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-earth-brown px-4 py-1 text-xs font-semibold text-soft-white">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-green-500" />
                <span className="text-sm text-beige/60">
                  {pkg.guests} {pkg.guests === 1 ? "Person" : "People"}
                </span>
              </div>

              <h3 className="text-xl font-bold text-soft-white mb-1">
                {pkg.label}
              </h3>
              <p className="text-sm text-beige/50 mb-6">{pkg.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-soft-white">
                  {formatCurrency(pkg.stayPrice)}
                </span>
                <span className="text-beige/50 text-sm"> / day</span>
                {pkg.pricingType === "group" && (
                  <p className="text-xs text-beige/40 mt-1">
                    Group price for {pkg.guests} people
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-beige/70">
                  <Check className="h-4 w-4 text-green-500" />
                  Forest stay access
                </div>
                <div className="flex items-center gap-2 text-sm text-beige/70">
                  <Check className="h-4 w-4 text-green-500" />
                  Designated camping area
                </div>
                <div className="flex items-center gap-2 text-sm text-beige/70">
                  <Check className="h-4 w-4 text-green-500" />
                  Outdoor experience
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="h-4 w-4 text-earth-brown" />
                  <span className="text-beige/60">
                    Optional food: {formatCurrency(pkg.foodPrice)}/day
                  </span>
                </div>
                <p className="mt-2 text-xs text-beige/40">
                  Total with food:{" "}
                  {formatCurrency(pkg.stayPrice + pkg.foodPrice)}/day
                </p>
              </div>

              <a
                href="#calculator"
                className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  i === 1
                    ? "bg-earth-brown text-soft-white hover:bg-earth-brown/80"
                    : "border border-beige/20 text-beige hover:bg-white/5"
                }`}
              >
                Calculate Your Price
              </a>
            </motion.div>
          ))}
        </div>

        {/* 4+ guests */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center rounded-xl border border-white/10 bg-forest-deep/30 p-6 mb-8"
        >
          <p className="text-beige/70">
            <strong className="text-soft-white">
              Planning a bigger group experience?
            </strong>{" "}
            Contact us for a customised package.
          </p>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-green-400 hover:text-green-300"
          >
            Chat on WhatsApp &rarr;
          </a>
        </motion.div>

        {/* Discount banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-earth-brown/30 bg-earth-brown/10 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-soft-white mb-2">
            Special Discounts Available On Location!
          </h3>
          <p className="text-beige/60 max-w-lg mx-auto">
            Visit us, discuss your requirements, and get special on-location
            discounts. Final discounts depend on group size, duration of stay,
            and availability.
          </p>
        </motion.div>

        {/* Tent rental */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-beige/50">
            <strong className="text-beige/70">
              Don&apos;t have your own tent?
            </strong>{" "}
            Tent rental is available subject to availability. Contact us for
            rental pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
