"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, AlertCircle } from "lucide-react";
import { calculatePricing, formatCurrency } from "@/lib/pricing";
import { generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

function dateDiffDays(start: string, end: string): number {
  const s = new Date(start);
  const e = new Date(end);
  const diff = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export function BookingForm() {
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);
  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    guests: 2,
    checkIn: "",
    checkOut: "",
    food: true,
    tent: "own" as "own" | "rental",
    activities: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const days = form.checkIn && form.checkOut ? dateDiffDays(form.checkIn, form.checkOut) : 0;
  const pricing = useMemo(
    () => calculatePricing(form.guests, Math.max(days, 1), form.food, form.tent === "rental"),
    [form.guests, days, form.food, form.tent]
  );

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) e.fullName = "Name is required.";
    if (!/^[6-9]\d{9}$/.test(form.whatsapp.replace(/\s/g, "")))
      e.whatsapp = "Enter a valid 10-digit Indian mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.guests < 1) e.guests = "At least 1 guest required.";
    if (!form.checkIn) e.checkIn = "Select check-in date.";
    if (!form.checkOut) e.checkOut = "Select check-out date.";
    if (form.checkIn && form.checkOut && days < 1) e.checkOut = "Check-out must be after check-in.";
    if (form.checkIn && today && form.checkIn < today) e.checkIn = "Check-in cannot be in the past.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage({
      fullName: form.fullName,
      whatsapp: form.whatsapp,
      email: form.email,
      guests: form.guests,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      days,
      foodRequired: form.food,
      tentPreference: form.tent,
      guidedActivities: form.activities,
      additionalMessage: form.message,
      pricing,
    });

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
    setSubmitted(true);
  }

  const update = (field: string, value: string | number | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <section id="booking" className="bg-charcoal py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-12">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-soft-white mb-2">Enquiry Sent!</h2>
              <p className="text-beige/60 mb-6">
                Your booking enquiry has been sent via WhatsApp. The owner will confirm availability and final pricing.
              </p>
              <p className="text-xs text-beige/40 mb-6">
                Submitting an enquiry does not confirm a booking. Please wait for owner confirmation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-earth-brown hover:text-earth-brown/80"
              >
                Send another enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-charcoal py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            Your Forest Escape Starts Here
          </h2>
          <p className="mt-4 text-beige/60">
            Submit an enquiry. We&apos;ll confirm availability and pricing via WhatsApp.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Full Name *</label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white placeholder:text-beige/30 focus:border-earth-brown focus:outline-none"
              placeholder="Your full name"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">WhatsApp Number *</label>
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white placeholder:text-beige/30 focus:border-earth-brown focus:outline-none"
              placeholder="10-digit mobile number"
            />
            {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Email Address *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white placeholder:text-beige/30 focus:border-earth-brown focus:outline-none"
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Number of Guests *</label>
            <select
              value={form.guests}
              onChange={(e) => update("guests", Number(e.target.value))}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white focus:border-earth-brown focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
            {form.guests > 3 && (
              <p className="mt-1 text-xs text-earth-brown">Custom quotation will be provided.</p>
            )}
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Check-in Date *</label>
            <input
              type="date"
              value={form.checkIn}
              min={today || undefined}
              onChange={(e) => update("checkIn", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white focus:border-earth-brown focus:outline-none"
            />
            {errors.checkIn && <p className="mt-1 text-xs text-red-400">{errors.checkIn}</p>}
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Check-out Date *</label>
            <input
              type="date"
              value={form.checkOut}
              min={form.checkIn || today || undefined}
              onChange={(e) => update("checkOut", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white focus:border-earth-brown focus:outline-none"
            />
            {errors.checkOut && <p className="mt-1 text-xs text-red-400">{errors.checkOut}</p>}
          </div>

          {/* Food */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Food Package</label>
            <select
              value={form.food ? "yes" : "no"}
              onChange={(e) => update("food", e.target.value === "yes")}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white focus:border-earth-brown focus:outline-none"
            >
              <option value="yes">Yes — Include Meals</option>
              <option value="no">No — I&apos;ll Cook My Own</option>
            </select>
          </div>

          {/* Tent */}
          <div>
            <label className="block text-sm font-medium text-beige/70 mb-2">Tent Preference</label>
            <select
              value={form.tent}
              onChange={(e) => update("tent", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white focus:border-earth-brown focus:outline-none"
            >
              <option value="own">Own Tent</option>
              <option value="rental">Rental Tent</option>
            </select>
          </div>

          {/* Activities */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-beige/70 mb-2">
              Interest in Guided Activities
            </label>
            <input
              type="text"
              value={form.activities}
              onChange={(e) => update("activities", e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white placeholder:text-beige/30 focus:border-earth-brown focus:outline-none"
              placeholder="e.g., Nature walks, trekking, photography..."
            />
          </div>

          {/* Additional message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-beige/70 mb-2">Additional Message</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={3}
              maxLength={1000}
              className="w-full rounded-xl border border-white/10 bg-forest-deep/50 px-4 py-3 text-soft-white placeholder:text-beige/30 focus:border-earth-brown focus:outline-none resize-none"
              placeholder="Any special requirements or questions..."
            />
          </div>

          {/* Pricing summary */}
          {days > 0 && form.guests <= 3 && (
            <div className="md:col-span-2 rounded-xl border border-white/10 bg-forest-deep/30 p-6">
              <h3 className="text-sm font-semibold text-soft-white mb-3">Estimated Pricing</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-beige/60">Stay</span>
                <span className="text-right text-soft-white">{formatCurrency(pricing.stayTotal)}</span>
                <span className="text-beige/60">Food</span>
                <span className="text-right text-soft-white">
                  {pricing.foodIncluded ? formatCurrency(pricing.foodTotal) : "Not selected"}
                </span>
                <span className="text-beige/60">Tent</span>
                <span className="text-right text-soft-white">
                  {form.tent === "own" ? "Own tent" : "To be confirmed"}
                </span>
                <span className="text-beige/70 font-semibold border-t border-white/10 pt-2">
                  Estimated Total
                </span>
                <span className="text-right text-soft-white font-bold border-t border-white/10 pt-2">
                  {formatCurrency(pricing.estimatedTotal)}
                </span>
                <span className="text-beige/50">Booking Advance</span>
                <span className="text-right text-beige/50">{formatCurrency(pricing.advanceAmount)}</span>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="md:col-span-2 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-beige/40 mt-0.5 shrink-0" />
            <p className="text-xs text-beige/40">
              Submitting this form does not confirm a booking. The owner will verify availability and
              confirm final pricing. Booking advance: {formatCurrency(siteConfig.booking.advancePerPerson)} per person,
              refundable within {siteConfig.booking.refundProcessingBusinessDays} business days.
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 py-4 text-sm font-semibold text-white transition-colors hover:bg-green-500"
            >
              <Send className="h-4 w-4" />
              Send Booking Enquiry via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
