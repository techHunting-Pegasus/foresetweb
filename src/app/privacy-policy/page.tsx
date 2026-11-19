import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | " + siteConfig.brand.name,
  description: "Privacy policy for " + siteConfig.brand.name,
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-charcoal pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-soft-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-beige/70 space-y-6">
          <p>
            This privacy policy outlines how {siteConfig.brand.name} collects, uses, and
            protects the information you provide when using this website.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Information We Collect</h2>
          <p>
            When you submit a booking enquiry, we collect your name, WhatsApp number, email
            address, and booking details. This information is used solely to process your
            enquiry and communicate with you about your booking.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your booking enquiries.</li>
            <li>To confirm availability and pricing.</li>
            <li>To communicate important information about your stay.</li>
          </ul>
          <h2 className="text-xl font-semibold text-soft-white">Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties except
            as required to process your booking or as required by law.
          </p>
          <h2 className="text-xl font-semibold text-soft-white">Contact</h2>
          <p>
            For questions about this policy, contact us at{" "}
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
