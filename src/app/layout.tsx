import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "The Lost Trail | Forest Camping in Himachal Pradesh | Wilderness Adventure",
  description:
    "Escape the city and live in the forest. The Lost Trail offers raw wilderness camping, adventure, and nature in Himachal Pradesh. Build your own tent, cook your own food, and reconnect with nature.",
  keywords: [
    "The Lost Trail",
    "Forest Camping in Himachal Pradesh",
    "Adventure Camping",
    "Wilderness Camping",
    "Nature Retreat",
    "Digital Detox Retreat",
    "Offbeat Camping Destination",
    "Tent Camping Himachal",
  ],
  openGraph: {
    title: "The Lost Trail — Escape the City. Live in the Forest.",
    description:
      "A raw wilderness camping experience in Himachal Pradesh. No luxury. Just nature, adventure, and freedom.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lost Trail — Escape the City. Live in the Forest.",
    description:
      "Wilderness camping in Himachal Pradesh. Build your tent, cook your food, live your way.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-charcoal text-beige font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />

          <GoogleAnalytics gaId={"G-TDELKBSPVP"} />

      </body>
    </html>
  );
}
