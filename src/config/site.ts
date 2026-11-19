export const siteConfig = {
  brand: {
    name: "The Lost Trail",
    tagline: "Escape the City. Live in the Forest.",
    philosophy: "No Celebrity Treatment. Just Be Human.",
    description:
      "A raw, nature-focused forest living and camping experience in a dense forest environment in Himachal Pradesh, India.",
  },

  contact: {
    whatsapp: "+917876631206",
    whatsappUrl: "https://wa.me/917876631206",
    email: "techhunting786@gmail.com",
  },

  location: {
    latitude: 31.976698,
    longitude: 76.653572,
    state: "Himachal Pradesh",
    country: "India",
    village: null as string | null,
    district: null as string | null,
    finalWalkingDistanceKm: 2,
    mapsUrl: "https://www.google.com/maps?q=31.976698,76.653572",
    satelliteUrl:
      "https://www.google.com/maps/@31.976698,76.653572,16z/data=!3m1!1e3",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=31.976698,76.653572",
  },

  booking: {
    advancePerPerson: 500,
    minimumStayDays: 1,
    refundProcessingBusinessDays: 7,
    advanceRefundable: true,
  },

  packages: [
    {
      guests: 1,
      stayPrice: 2000,
      foodPrice: 1000,
      pricingType: "per_person" as const,
      label: "Solo Forest Escape",
      description: "Perfect for solo adventurers seeking solitude in nature.",
    },
    {
      guests: 2,
      stayPrice: 3500,
      foodPrice: 1500,
      pricingType: "group" as const,
      label: "Two-Person Forest Escape",
      description: "Share the wilderness experience with a partner or friend.",
    },
    {
      guests: 3,
      stayPrice: 5500,
      foodPrice: 2000,
      pricingType: "group" as const,
      label: "Three-Person Forest Adventure",
      description: "A small group adventure deep in the forest.",
    },
  ],

  food: {
    optional: true,
    includes: ["Breakfast", "Lunch", "Dinner"],
    description: "Simple, home-style food. No junk. Just comforting meals.",
  },

  tent: {
    ownTentAllowed: true,
    rentalAvailable: true,
    rentalPrice: null as number | null,
  },

  currency: {
    code: "INR",
    symbol: "₹",
  },
} as const;

export type SiteConfig = typeof siteConfig;
