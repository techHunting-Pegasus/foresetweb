import { siteConfig } from "@/config/site";

export interface PricingResult {
  packageLabel: string;
  guests: number;
  days: number;
  stayPerDay: number;
  foodPerDay: number;
  stayTotal: number;
  foodTotal: number;
  tentRental: number | null;
  estimatedTotal: number;
  advanceAmount: number;
  remainingBalance: number;
  customQuote: boolean;
  foodIncluded: boolean;
  tentRentalRequested: boolean;
}

export function calculatePricing(
  guests: number,
  days: number,
  foodRequired: boolean,
  rentalTent: boolean
): PricingResult {
  if (guests > 3 || guests < 1) {
    return {
      packageLabel: "Custom Group Package",
      guests,
      days,
      stayPerDay: 0,
      foodPerDay: 0,
      stayTotal: 0,
      foodTotal: 0,
      tentRental: null,
      estimatedTotal: 0,
      advanceAmount: guests * siteConfig.booking.advancePerPerson,
      remainingBalance: 0,
      customQuote: true,
      foodIncluded: foodRequired,
      tentRentalRequested: rentalTent,
    };
  }

  const pkg = siteConfig.packages.find((p) => p.guests === guests)!;
  const stayTotal = pkg.stayPrice * days;
  const foodTotal = foodRequired ? pkg.foodPrice * days : 0;
  const tentRental =
    rentalTent && siteConfig.tent.rentalPrice
      ? siteConfig.tent.rentalPrice * days
      : null;
  const estimatedTotal = stayTotal + foodTotal + (tentRental ?? 0);
  const advanceAmount = guests * siteConfig.booking.advancePerPerson;
  const remainingBalance = Math.max(0, estimatedTotal - advanceAmount);

  return {
    packageLabel: pkg.label,
    guests,
    days,
    stayPerDay: pkg.stayPrice,
    foodPerDay: foodRequired ? pkg.foodPrice : 0,
    stayTotal,
    foodTotal,
    tentRental,
    estimatedTotal,
    advanceAmount,
    remainingBalance,
    customQuote: false,
    foodIncluded: foodRequired,
    tentRentalRequested: rentalTent,
  };
}

export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
