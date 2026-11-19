"use client";

import { motion } from "framer-motion";
import {
  Tent,
  UtensilsCrossed,
  Leaf,
  Flame,
  BookOpen,
  Mountain,
} from "lucide-react";

const experiences = [
  {
    icon: Tent,
    title: "Make Your Own Tent",
    description:
      "Bring your own tent and create your camping setup in the designated camping area. This is your space to build.",
    note: null,
  },
  {
    icon: Tent,
    title: "Tent Rental Available",
    description:
      "Don't have camping equipment? Tent rental can be arranged subject to availability.",
    note: "Contact us for rental pricing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cook Your Own Food",
    description:
      "Bring your own ingredients and prepare meals in designated safe cooking areas. Fire use subject to local regulations.",
    note: null,
  },
  {
    icon: UtensilsCrossed,
    title: "Food Available",
    description:
      "Don't want to cook? Optional food packages with simple, home-style meals are available at additional cost.",
    note: "Includes breakfast, lunch, and dinner.",
  },
  {
    icon: Leaf,
    title: "Explore Nature",
    description:
      "Experience nature walks, guided trails, and outdoor exploration where conditions and permissions allow.",
    note: null,
  },
  {
    icon: Flame,
    title: "Bonfire Experience",
    description:
      "Enjoy evenings outdoors around a bonfire — only in designated areas, where permitted and under safe conditions.",
    note: null,
  },
  {
    icon: BookOpen,
    title: "Peaceful Moments",
    description:
      "Read, relax, talk, explore, sit under the trees, or simply enjoy the silence. Time moves differently here.",
    note: null,
  },
  {
    icon: Mountain,
    title: "Adventure & Exploration",
    description:
      "Experience the raw side of outdoor living, natural terrain, and wilderness exploration at your own pace.",
    note: null,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl lg:text-5xl">
            Not a Resort. Not a Hotel.
            <br />
            <span className="text-earth-brown">
              A Different Way of Living.
            </span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-earth-brown/40 bg-earth-brown/10 px-6 py-2">
            <span className="text-lg font-bold text-earth-brown">
              70% Adventure
            </span>
            <span className="text-beige/40">|</span>
            <span className="text-lg font-bold text-beige/70">30% Comfort</span>
          </div>
          <p className="mt-4 text-sm text-beige/50 max-w-lg mx-auto">
            The experience is adventurous and authentic, not a luxury-controlled
            environment. Adventure here is responsible and safety-conscious.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/5 bg-forest-deep/50 p-6 transition-colors hover:border-earth-brown/20"
            >
              <exp.icon className="h-6 w-6 text-earth-brown mb-3" />
              <h3 className="font-semibold text-soft-white mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-beige/60 leading-relaxed">
                {exp.description}
              </p>
              {exp.note && (
                <p className="mt-2 text-xs text-green-400/80">{exp.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
