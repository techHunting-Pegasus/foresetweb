import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | " + siteConfig.brand.name,
  description: "Terms and conditions for " + siteConfig.brand.name,
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-charcoal pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-soft-white mb-8">Terms & Conditions</h1>
        <div className="prose prose-invert prose-sm max-w-none text-beige/70 space-y-6">
          <h2 className="text-xl font-semibold text-soft-white">Nature of the Experience</h2>
          <p>
            {siteConfig.brand.name} provides an outdoor wilderness camping experience, not a hotel
            or resort. Visitors should expect basic amenities and an adventurous, nature-focused stay.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Booking & Payment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Submitting an enquiry does not confirm a booking.</li>
            <li>All bookings are subject to availability and owner confirmation.</li>
            <li>A booking advance of ₹{siteConfig.booking.advancePerPerson} per person is required.</li>
            <li>Remaining balance is payable at the end of the stay.</li>
            <li>Final pricing is confirmed by the owner.</li>
          </ul>
          <h2 className="text-xl font-semibold text-soft-white">Visitor Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follow all safety guidelines and instructions from the owner and guides.</li>
            <li>Do not litter, damage vegetation, or disturb wildlife.</li>
            <li>Carry personal medicines and essential supplies.</li>
            <li>Be prepared for the approximately 2km walking/trekking approach.</li>
            <li>Follow all local forest and environmental regulations.</li>
          </ul>
          <h2 className="text-xl font-semibold text-soft-white">Liability</h2>
          <p>
            Outdoor activities involve inherent risks. {siteConfig.brand.name} takes reasonable
            precautions but is not liable for injuries, loss, or damage arising from participation
            in outdoor activities, weather events, or wildlife encounters. Visitors participate at
            their own risk.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Contact</h2>
          <p>
            For questions, contact us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-earth-brown hover:underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
        <div className="mt-12">
          <a href="/" className="text-sm text-earth-brown hover:underline">&larr; Back to Home</a>
        </div>
      </div>
    </div>
  );
}
