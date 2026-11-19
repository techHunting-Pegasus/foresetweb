"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle } from "lucide-react";
import { calculatePricing, formatCurrency } from "@/lib/pricing";
import { siteConfig } from "@/config/site";

export function PricingCalculator() {
  const [guests, setGuests] = useState(2);
  const [days, setDays] = useState(2);
  const [food, setFood] = useState(true);
  const [tent, setTent] = useState<"own" | "rental">("own");

  const pricing = useMemo(
    () => calculatePricing(guests, days, food, tent === "rental"),
    [guests, days, food, tent]
  );

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to enquire about a ${days}-day stay for ${guests} guest(s). Food: ${food ? "Yes" : "No"}. Tent: ${tent === "own" ? "Own" : "Rental"}. Estimated total: ${formatCurrency(pricing.estimatedTotal)}.`
  );

  return (
    <section id="calculator" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="h-6 w-6 text-earth-brown" />
            <span className="text-sm uppercase tracking-wider text-beige/60">
              Price Calculator
            </span>
          </div>
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            Estimate Your Trip Cost
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-beige/70 mb-3">
                Number of Guests
              </label>
              <div className="flex gap-3">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setGuests(n)}
                    className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                      guests === n
                        ? "bg-earth-brown text-soft-white"
                        : "border border-white/10 text-beige/60 hover:border-earth-brown/40"
                    }`}
                  >
                    {n} {n === 1 ? "Person" : "People"}
                  </button>
                ))}
                <button
                  onClick={() => setGuests(4)}
                  className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                    guests >= 4
                      ? "bg-earth-brown text-soft-white"
                      : "border border-white/10 text-beige/60 hover:border-earth-brown/40"
                  }`}
                >
                  4+
                </button>
              </div>
            </div>

            {/* Days */}
            {!pricing.customQuote && (
              <>
                <div>
                  <label className="block text-sm font-medium text-beige/70 mb-3">
                    Number of Days: {days}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-earth-brown"
                  />
                  <div className="flex justify-between text-xs text-beige/40 mt-1">
                    <span>1 day</span>
                    <span>14 days</span>
                  </div>
                </div>

                {/* Food */}
                <div>
                  <label className="block text-sm font-medium text-beige/70 mb-3">
                    Food Package
                  </label>
                  <div className="flex gap-3">
                    {[
                      { val: true, label: "Yes — Include Meals" },
                      { val: false, label: "No — I'll Cook" },
                    ].map((opt) => (
                      <button
                        key={String(opt.val)}
                        onClick={() => setFood(opt.val)}
                        className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                          food === opt.val
                            ? "bg-earth-brown text-soft-white"
                            : "border border-white/10 text-beige/60 hover:border-earth-brown/40"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {food && (
                    <p className="text-xs text-beige/40 mt-2">
                      Includes breakfast, lunch & dinner.
                    </p>
                  )}
                </div>

                {/* Tent */}
                <div>
                  <label className="block text-sm font-medium text-beige/70 mb-3">
                    Tent Preference
                  </label>
                  <div className="flex gap-3">
                    {[
                      { val: "own" as const, label: "Own Tent" },
                      { val: "rental" as const, label: "Rental Tent" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => setTent(opt.val)}
                        className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                          tent === opt.val
                            ? "bg-earth-brown text-soft-white"
                            : "border border-white/10 text-beige/60 hover:border-earth-brown/40"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {tent === "rental" && !siteConfig.tent.rentalPrice && (
                    <p className="text-xs text-earth-brown mt-2">
                      Tent rental pricing — contact us for current rates.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Summary */}
          <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-8">
            {pricing.customQuote ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-soft-white mb-4">
                  Custom Group Package
                </h3>
                <p className="text-beige/60 mb-6">
                  For groups of 4 or more, contact us for a customised
                  quotation.
                </p>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-soft-white mb-1">
                  {pricing.packageLabel}
                </h3>
                <p className="text-sm text-beige/50 mb-6">
                  {pricing.guests} {pricing.guests === 1 ? "guest" : "guests"}{" "}
                  &middot; {pricing.days} {pricing.days === 1 ? "day" : "days"}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-beige/70">
                    <span>
                      Stay ({formatCurrency(pricing.stayPerDay)}/day &times;{" "}
                      {pricing.days})
                    </span>
                    <span className="text-soft-white">
                      {formatCurrency(pricing.stayTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-beige/70">
                    <span>
                      {pricing.foodIncluded
                        ? `Food (${formatCurrency(pricing.foodPerDay)}/day × ${pricing.days})`
                        : "Food"}
                    </span>
                    <span className="text-soft-white">
                      {pricing.foodIncluded
                        ? formatCurrency(pricing.foodTotal)
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between text-beige/70">
                    <span>Tent Rental</span>
                    <span className="text-soft-white">
                      {!pricing.tentRentalRequested
                        ? "Own tent"
                        : pricing.tentRental !== null
                          ? formatCurrency(pricing.tentRental)
                          : "To be confirmed"}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-beige/80">Estimated Total</span>
                      <span className="text-soft-white">
                        {formatCurrency(pricing.estimatedTotal)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-beige/50">
                    <span>
                      Booking Advance ({pricing.guests} &times; {formatCurrency(500)})
                    </span>
                    <span>{formatCurrency(pricing.advanceAmount)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-400">
                    <span>Remaining (pay after trip)</span>
                    <span>{formatCurrency(pricing.remainingBalance)}</span>
                  </div>
                </div>

                <p className="mt-4 text-xs text-beige/40 text-center">
                  Estimate only. Special on-location discounts may be available.
                  Final pricing confirmed by owner.
                </p>

                <a
                  href={`${siteConfig.contact.whatsappUrl}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
