"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = [
  "All",
  "Forest",
  "Camping",
  "Nature",
  "Adventure",
  "Night Sky",
];

const images = [
  { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", alt: "Dense forest landscape", cat: "Forest" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80", alt: "Camping tent in nature", cat: "Camping" },
  { src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600&q=80", alt: "Mountain trail through forest", cat: "Nature" },
  { src: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=600&q=80", alt: "Campfire in the wilderness", cat: "Adventure" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", alt: "Night sky with stars over mountains", cat: "Night Sky" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", alt: "Sunlight through dense forest trees", cat: "Forest" },
  { src: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=600&q=80", alt: "Tent setup in mountain clearing", cat: "Camping" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", alt: "Misty mountain forest", cat: "Nature" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", alt: "Mountain peaks and adventure", cat: "Adventure" },
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <section id="gallery" className="bg-forest-deep py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            The Wilderness Experience
          </h2>
          <p className="mt-4 text-beige/60">
            Representative images. Actual experience may vary.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm transition-all ${
                filter === cat
                  ? "bg-earth-brown text-soft-white"
                  : "border border-white/10 text-beige/60 hover:border-earth-brown/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs text-soft-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.cat}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={filtered[lightbox]?.src.replace("w=600", "w=1200")}
                alt={filtered[lightbox]?.alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
