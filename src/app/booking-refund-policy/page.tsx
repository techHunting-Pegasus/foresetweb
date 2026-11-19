import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Booking & Refund Policy | " + siteConfig.brand.name,
  description: "Booking and refund policy for " + siteConfig.brand.name,
};

export default function BookingRefundPolicy() {
  return (
    <div className="min-h-screen bg-charcoal pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-soft-white mb-8">Booking & Refund Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-beige/70 space-y-6">
          <h2 className="text-xl font-semibold text-soft-white">Booking Process</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Submit a booking enquiry through the website form or WhatsApp.</li>
            <li>The owner confirms availability and final pricing.</li>
            <li>Pay ₹{siteConfig.booking.advancePerPerson} per person as booking advance.</li>
            <li>Booking is confirmed once the owner verifies payment.</li>
            <li>Remaining balance is collected after the trip ends.</li>
          </ol>
          <h2 className="text-xl font-semibold text-soft-white">Booking Advance</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>₹{siteConfig.booking.advancePerPerson} per person is required to confirm a booking.</li>
            <li>The advance is adjusted against the final bill.</li>
            <li>The advance is refundable, processed within {siteConfig.booking.refundProcessingBusinessDays} business days.</li>
          </ul>
          <h2 className="text-xl font-semibold text-soft-white">Cancellation</h2>
          <p>
            If you need to cancel your booking, please inform us as early as possible via WhatsApp.
            The booking advance will be refunded within {siteConfig.booking.refundProcessingBusinessDays} business days.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Weather-Related Changes</h2>
          <p>
            If weather conditions make the experience unsafe, activities may be modified or the
            stay may be rescheduled. Please contact us to discuss arrangements.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Contact</h2>
          <p>
            For booking-related queries, reach us on WhatsApp at {siteConfig.contact.whatsapp} or
            email{" "}
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
