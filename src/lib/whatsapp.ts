import { siteConfig } from "@/config/site";
import { formatCurrency, type PricingResult } from "./pricing";

export interface BookingData {
  fullName: string;
  whatsapp: string;
  email: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  days: number;
  foodRequired: boolean;
  tentPreference: "own" | "rental";
  guidedActivities: string;
  additionalMessage: string;
  pricing: PricingResult;
}

export function generateWhatsAppMessage(data: BookingData): string {
  const lines = [
    `Hello! I would like to enquire about a forest camping booking.`,
    ``,
    `Name: ${data.fullName}`,
    `WhatsApp: ${data.whatsapp}`,
    `Email: ${data.email}`,
    `Guests: ${data.guests}`,
    `Check-in: ${data.checkIn}`,
    `Check-out: ${data.checkOut}`,
    `Duration: ${data.days} day${data.days > 1 ? "s" : ""}`,
    `Food Package: ${data.foodRequired ? "Yes" : "No"}`,
    `Tent Preference: ${data.tentPreference === "own" ? "Own Tent" : "Rental Tent"}`,
    `Guided Activities: ${data.guidedActivities || "Not specified"}`,
    ``,
    `--- Estimated Pricing ---`,
    `Stay Cost: ${formatCurrency(data.pricing.stayTotal)}`,
    `Food Cost: ${data.pricing.foodIncluded ? formatCurrency(data.pricing.foodTotal) : "Not selected"}`,
    `Tent Rental: ${data.pricing.tentRentalRequested ? (data.pricing.tentRental !== null ? formatCurrency(data.pricing.tentRental) : "To be confirmed") : "Own tent"}`,
    `Estimated Total: ${formatCurrency(data.pricing.estimatedTotal)}`,
    `Booking Advance: ${formatCurrency(data.pricing.advanceAmount)}`,
    `Remaining Balance: ${formatCurrency(data.pricing.remainingBalance)}`,
    ``,
    data.additionalMessage
      ? `Additional Message: ${data.additionalMessage}\n`
      : "",
    `Please confirm availability and final pricing. Also let me know if any special on-location discount is available.`,
    ``,
    `Thank you!`,
  ];

  return lines.filter((l) => l !== undefined).join("\n");
}

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `${siteConfig.contact.whatsappUrl}?text=${encoded}`;
}
