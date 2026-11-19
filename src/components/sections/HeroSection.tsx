"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-charcoal to-charcoal" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-beige/60">
            Himachal Pradesh, India
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-soft-white sm:text-6xl lg:text-7xl">
            Escape the City.
            <br />
            <span className="text-green-400">Live in the Forest.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-beige/80 sm:text-xl">
            Less signal. No traffic. No city noise. Fewer people. Just nature,
            adventure, and the freedom to live your own way.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base text-beige/50">
            Leave your everyday routine behind. Spend a few days surrounded by
            nature and rediscover the simple things in life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#experience"
              className="rounded-full bg-earth-brown px-8 py-4 text-sm font-semibold uppercase tracking-wider text-soft-white transition-all hover:bg-earth-brown/80 hover:shadow-lg hover:shadow-earth-brown/20"
            >
              Explore the Experience
            </a>
            <a
              href="#booking"
              className="rounded-full border border-beige/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-beige transition-all hover:border-beige/60 hover:bg-white/5"
            >
              Book Your Forest Escape
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-beige/40" />
      </motion.div>
    </section>
  );
}
