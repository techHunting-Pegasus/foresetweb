"use client";

import { motion } from "framer-motion";
import {
  SignalZero,
  CarFront,
  VolumeX,
  Users,
  TreePine,
  Compass,
} from "lucide-react";

const features = [
  {
    icon: SignalZero,
    title: "Less Signal",
    description:
      "Leave behind constant notifications and enjoy a break from your digital routine. Network availability may vary by operator and location.",
  },
  {
    icon: CarFront,
    title: "No Traffic",
    description:
      "Escape crowded roads, traffic jams, and city congestion. Here, the only path is through the trees.",
  },
  {
    icon: VolumeX,
    title: "No City Noise",
    description:
      "Experience natural sounds instead of horns, construction, and urban noise. Let the forest be your soundtrack.",
  },
  {
    icon: Users,
    title: "Fewer People",
    description:
      "Enjoy a quieter outdoor environment away from overcrowded tourist destinations. Space to breathe.",
  },
  {
    icon: TreePine,
    title: "Total Forest Experience",
    description:
      "Immerse yourself in a dense forest environment. Experience the landscape and wilderness atmosphere firsthand.",
  },
  {
    icon: Compass,
    title: "Your Own Freedom",
    description:
      "No fixed luxury lifestyle. Make your own tent, cook your own food, explore nature, and enjoy your stay your way.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl lg:text-5xl">
            Why This Place Is Different
          </h2>
          <p className="mt-4 text-lg text-beige/60 max-w-2xl mx-auto">
            This isn&apos;t another tourist spot. It&apos;s a chance to live differently,
            even if just for a few days.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-charcoal/50 p-8 transition-all hover:border-earth-brown/30 hover:bg-charcoal/80"
            >
              <feature.icon className="h-8 w-8 text-green-500 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-soft-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-beige/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
