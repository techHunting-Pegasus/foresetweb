"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Copy, Check, Footprints, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LocationSection() {
  const [copied, setCopied] = useState(false);
  const coords = `${siteConfig.location.latitude}, ${siteConfig.location.longitude}`;

  function copyCoords() {
    navigator.clipboard.writeText(coords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="location" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-soft-white sm:text-4xl">
            Find Your Way to the Wilderness
          </h2>
          <p className="mt-4 text-beige/60">
            {siteConfig.location.state}, {siteConfig.location.country}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000!2d${siteConfig.location.longitude}!3d${siteConfig.location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1700000000000`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campsite location on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Coordinates */}
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-green-500 shrink-0" />
              <div>
                <p className="text-sm text-beige/60">GPS Coordinates</p>
                <p className="text-soft-white font-mono text-sm">{coords}</p>
              </div>
              <button
                onClick={copyCoords}
                className="ml-auto rounded-lg border border-white/10 p-2 text-beige/50 hover:text-soft-white transition-colors"
                aria-label="Copy coordinates"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Walking notice */}
            <div className="rounded-xl border border-earth-brown/30 bg-earth-brown/10 p-5">
              <div className="flex items-start gap-3">
                <Footprints className="h-5 w-5 text-earth-brown shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-soft-white mb-1">
                    Final {siteConfig.location.finalWalkingDistanceKm}km on Foot
                  </h3>
                  <p className="text-sm text-beige/60">
                    Your journey doesn&apos;t end where the road ends. Vehicles can reach a nearby
                    point, then continue approximately {siteConfig.location.finalWalkingDistanceKm}km
                    on foot through a mountain path to experience the forest.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility warning */}
            <div className="rounded-xl border border-yellow-600/20 bg-yellow-600/5 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-sm text-beige/60">
                  Please be prepared for a mountain walk. This experience may not
                  be suitable for visitors who cannot comfortably walk the final
                  route. Contact us to confirm trail conditions.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-earth-brown px-5 py-3 text-sm font-semibold text-soft-white hover:bg-earth-brown/80 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-beige hover:bg-white/5 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>

            <p className="text-xs text-beige/40">
              Plan your journey, check the route, and contact us before travelling.
              Road and weather conditions may vary seasonally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
