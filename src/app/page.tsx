import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { AdventureSection } from "@/components/sections/AdventureSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { BookingProcessSection } from "@/components/sections/BookingProcessSection";
import { BookingForm } from "@/components/booking/BookingForm";
import { SafetySection } from "@/components/sections/SafetySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ForestAdventureAnimation } from "@/components/adventure-animation/ForestAdventureAnimation";

export default function HomePage() {
  return (
    <div className="relative">
      <ForestAdventureAnimation />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PhilosophySection />
        <AdventureSection />
        <PricingSection />
        <PricingCalculator />
        <BookingProcessSection />
        <BookingForm />
        <SafetySection />
        <GallerySection />
        <LocationSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
