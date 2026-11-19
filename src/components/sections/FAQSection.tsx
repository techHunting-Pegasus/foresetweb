"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is this a luxury resort?",
    a: "No. This is a raw, nature-focused forest living experience. The idea is to experience a simpler way of living — set up your own tent or rent one, prepare your own food, explore nature, and enjoy life away from the usual city environment.",
  },
  {
    q: "Can I bring my own tent?",
    a: "Absolutely! You are welcome to bring your own tent and set it up at the campsite, subject to the designated camping area and safety guidelines.",
  },
  {
    q: "Can I rent a tent?",
    a: "Yes. Tent rental is available subject to availability. Please contact us through WhatsApp to confirm availability and rental charges.",
  },
  {
    q: "Is food available?",
    a: "Yes. We offer an optional food package with simple, home-style meals — breakfast, lunch, and dinner. It is not included in the basic stay price and can be selected as an add-on.",
  },
  {
    q: "Can I cook my own food?",
    a: "Yes! You can prepare your own food using your own utensils. Cooking with fire is subject to local regulations, weather conditions, and safety requirements at the designated cooking area.",
  },
  {
    q: "Is mobile network available?",
    a: "Yes, mobile network connectivity is generally available, but the signal may be limited or inconsistent depending on your network provider. Do not expect the same connectivity as in a city.",
  },
  {
    q: "What is the minimum stay?",
    a: "The minimum stay is one day.",
  },
  {
    q: "Can solo travellers visit?",
    a: "Yes! Solo travellers are welcome. Whether you want peaceful time alone or an independent outdoor experience, you can visit on your own.",
  },
  {
    q: "Are couples and groups welcome?",
    a: "Yes. Couples, friends, families, and groups are all welcome. Contact us for group-specific arrangements and customised packages.",
  },
  {
    q: "What is the price for two people?",
    a: "Stay: ₹3,500 per day for both people. Optional food: ₹1,500 per day for both people. Total with food: ₹5,000 per day. Special on-location discounts may be available.",
  },
  {
    q: "What is the price for three people?",
    a: "Stay: ₹5,500 per day for all three people. Optional food: ₹2,000 per day for all three. Total with food: ₹7,500 per day. Special on-location discounts may be available.",
  },
  {
    q: "Is food included in the stay price?",
    a: "No. Food is optional. You can choose the additional food package or prepare your own meals.",
  },
  {
    q: "Are on-location discounts available?",
    a: "Yes! Special discounts are available on location. Discounts may depend on the number of guests, duration of stay, and availability.",
  },
  {
    q: "How much is the booking advance?",
    a: "The booking advance is ₹500 per person. For example: 1 person = ₹500, 2 people = ₹1,000, 3 people = ₹1,500. The advance is adjusted against the final bill.",
  },
  {
    q: "Is the booking advance refundable?",
    a: "Yes. The booking advance is refundable, with the refund processed within 7 business days.",
  },
  {
    q: "When do I pay the remaining balance?",
    a: "You can pay the remaining balance after the end of your trip.",
  },
  {
    q: "What should I carry?",
    a: "Comfortable clothing, walking/trekking shoes, personal toiletries, water bottle, necessary medicines, a torch or flashlight, and weather-appropriate clothing. If bringing your own tent or cooking equipment, carry those as well.",
  },
  {
    q: "Are guided activities available?",
    a: "Yes. Guided activities are available. Please contact us before your visit to understand the available activities, schedules, and arrangements.",
  },
  {
    q: "What happens during bad weather?",
    a: "Weather is part of the outdoor experience. However, visitor safety always comes first. Activities may be adjusted or paused depending on weather and local safety conditions.",
  },
  {
    q: "Are washrooms available?",
    a: "This is a basic, raw forest-living experience. Visitors should not expect luxury washroom facilities. Please confirm the actual arrangements before booking.",
  },
  {
    q: "Is the location accessible by car?",
    a: "Vehicles can reach a point near the location. After that, visitors need to cover approximately 2 km on foot through a mountain path to reach the campsite. Please carry suitable footwear.",
  },
  {
    q: "Can I stay for just one day?",
    a: "Yes. One day is the minimum stay duration.",
  },
  {
    q: "Can I choose between bringing my own tent and renting one?",
    a: "Yes. You can bring your own tent or request a rental tent, subject to availability.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-soft-white pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-beige/40 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-beige/60 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="bg-charcoal py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-beige/60">
            Everything you need to know before your forest adventure.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
