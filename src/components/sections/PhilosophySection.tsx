"use client";

import { motion } from "framer-motion";

const lines = [
  "Make your own tent.",
  "Cook your own food.",
  "Walk through nature.",
  "Sit under the stars.",
  "Talk with people.",
  "Enjoy silence.",
];

export function PhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 to-charcoal" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-soft-white sm:text-5xl lg:text-6xl">
            No Celebrity Treatment.
            <br />
            <span className="text-earth-brown">Just Be Human.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-beige/60">
            We are not building another luxury resort where everything is served
            to you. We believe in simple living, real experiences, and freedom.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-beige/80"
              >
                {line}
              </motion.span>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-base text-beige/50">
            Here, nobody needs to impress anyone. No unnecessary luxury. No
            artificial lifestyle. No city pressure. Just you, nature, and the
            experience of living.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
