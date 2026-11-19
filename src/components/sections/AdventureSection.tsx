"use client";

import { motion } from "framer-motion";
import { Footprints, Sun, Moon, Camera } from "lucide-react";

const adventures = [
  {
    icon: Footprints,
    title: "Mountain Trails",
    description:
      "Walk through forest paths and mountain terrain. The final 2km to the campsite itself is an adventure through nature.",
  },
  {
    icon: Sun,
    title: "Sunrise & Nature",
    description:
      "Wake up to mountain sunrises, misty mornings, and the sounds of the forest coming alive around you.",
  },
  {
    icon: Moon,
    title: "Night Under Stars",
    description:
      "Experience night skies away from city light pollution. Stars, silence, and the sounds of the wilderness.",
  },
  {
    icon: Camera,
    title: "Photography & Exploration",
    description:
      "Dense forests, mountain landscapes, and raw nature. Bring your camera and capture something real.",
  },
];

export function AdventureSection() {
  return (
    <section id="adventure" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl lg:text-5xl">
            Adventure & Guided Activities
          </h2>
          <p className="mt-4 text-lg text-beige/60 max-w-2xl mx-auto">
            Guided activities are available — contact us before your visit to
            understand schedules and arrangements.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {adventures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 rounded-2xl border border-white/5 bg-charcoal/40 p-8"
            >
              <item.icon className="h-10 w-10 shrink-0 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold text-soft-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-beige/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
