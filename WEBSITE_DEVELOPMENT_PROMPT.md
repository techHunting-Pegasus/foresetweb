# COMPLETE WEBSITE DEVELOPMENT PROMPT

## Project: Forest Wilderness Camping & Adventure Retreat

**Version:** 1.0  
**Last Updated:** 2026-11-18  
**Status:** Ready for Development

---

## OVERVIEW

Build a complete, modern, immersive, premium-quality, and SEO-optimized website for a forest camping and wilderness adventure experience located in Himachal Pradesh, India.

**This is NOT a hotel, resort, or conventional tourist destination.**

The concept is to offer people an opportunity to escape their busy city lifestyle and experience a few days of real nature, forest living, freedom, adventure, and peace. The website must communicate authenticity, wilderness, simplicity, and freedom — not luxury.

---

## 1. BRAND IDENTITY

### 1.1 Brand Name

> **[BRAND NAME PLACEHOLDER]**
>
> _The actual business name must be provided by the owner before launch. Use this placeholder throughout development. It must be centralized in the configuration file so it can be updated in one place._

### 1.2 Primary Tagline

> "Escape the City. Live in the Forest."

### 1.3 Supporting Taglines

Use these contextually across the site — not all at once:

- "Less Signal. No Traffic. No Noise."
- "Leave the City Behind."
- "Find Your Wild."
- "Less People. More Nature."
- "Live Your Own Way."
- "No Celebrity Treatment. Just Be Human."
- "Make Your Own Tent. Cook Your Own Food."
- "Experience Life Beyond Your Screen."

### 1.4 Brand Philosophy

We are not selling luxury. We are offering an opportunity to experience a different way of living.

People spend most of their lives surrounded by traffic, mobile notifications, office pressure, crowded places, and artificial lifestyles. Here, they can experience:

- Dense forest surroundings
- Peace and natural silence
- Fewer people
- Limited mobile connectivity
- Real outdoor adventure
- Self-managed camping
- Outdoor cooking
- Nature exploration
- Freedom to live independently

The website should feel like entering a wilderness experience — not browsing a hotel booking site.

### 1.5 Brand Personality

Raw. Natural. Adventurous. Independent. Peaceful. Authentic. Unconventional.

---

## 2. LOCATION & MAP INTEGRATION

> ⚠️ **CRITICAL SECTION — Accuracy is mandatory.**

### 2.1 Exact GPS Coordinates

| Field | Value |
|-------|-------|
| Latitude | 31.976698 |
| Longitude | 76.653572 |
| State | Himachal Pradesh, India |

### 2.2 Map URLs (for integration)

| Purpose | URL |
|---------|-----|
| Google Maps Pin | `https://www.google.com/maps?q=31.976698,76.653572` |
| Satellite View | `https://www.google.com/maps/@31.976698,76.653572,16z/data=!3m1!1e3` |
| Directions | `https://www.google.com/maps/dir/?api=1&destination=31.976698,76.653572` |

### 2.3 Satellite Verification Instructions (for developer)

Before finalizing the website's location section, the developer must:

1. Open the exact GPS coordinates in Google Maps.
2. Switch to Satellite View and zoom in to inspect the immediate landscape.
3. Zoom out to inspect the wider geographical area.
4. Examine visible vegetation, roads, settlements, terrain, and nearby features.
5. Check possible road connectivity and nearest accessible approach.
6. Cross-reference with available terrain layers.

**Mandatory Restrictions:**

- Do NOT claim the property is legally inside a forest without independent verification.
- Do NOT invent nearby attractions, waterfalls, rivers, or roads that cannot be verified.
- Do NOT claim private ownership or forest permissions without written confirmation from the owner.
- Satellite imagery is NOT proof of land ownership, access rights, or permission for commercial camping.
- If exact details cannot be verified, keep them **editable** and mark them `[OWNER CONFIRMATION REQUIRED]`.

### 2.4 Website Map Section

Create an interactive location section with:

- Exact GPS location pin on an embedded map
- Google Maps iframe integration
- Satellite map view toggle
- Standard road map view toggle
- "Get Directions" button (opens Google Maps directions)
- "Open in Google Maps" button (opens in new tab)
- "Copy GPS Coordinates" button with clipboard feedback
- Full-screen map option (if technically supported)
- Fully responsive on mobile and desktop

**Section Heading:** "Find Your Way to the Wilderness."

**Advisory Note (displayed to visitors):**
> "Please confirm your route and arrival instructions with us before travelling. Road and weather conditions can vary."

---

## 3. WEBSITE DESIGN & VISUAL EXPERIENCE

### 3.1 Design Direction

The design must be **cinematic and immersive**. It should feel like stepping into a wilderness documentary — not browsing a commercial booking platform.

### 3.2 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Deep Forest Green | `#10251B` | Primary backgrounds, header |
| Dark Moss Green | `#263D2D` | Secondary backgrounds, cards |
| Earth Brown | `#594532` | Accents, buttons, borders |
| Charcoal | `#151A17` | Text on light backgrounds, overlays |
| Natural Beige | `#E8E0CE` | Body text on dark backgrounds, cards |
| Soft White | `#F5F4EF` | Light section backgrounds, text |

All colors must meet **WCAG 2.1 AA contrast requirements** for their text/background combinations.

### 3.3 Visual Direction

Use imagery of:

- Dense forest landscapes
- Mountain forests
- Natural camping setups (tents in clearings, not glamping)
- Forest pathways and trails
- Bonfire scenes (captioned: "where permitted")
- Outdoor cooking setups
- Nature and wilderness photography
- Starry night skies

**Image Policy:**

- Use authentic location photographs wherever available.
- Use high-quality stock images as placeholders until actual property photos are uploaded.
- **Never misrepresent stock photos as actual property photos.** Mark all placeholders with `[PLACEHOLDER IMAGE — Replace with actual property photo]` in the codebase.
- All images must have descriptive `alt` text for accessibility and SEO.

### 3.4 Typography

- **Headings:** Bold, modern sans-serif (e.g., Inter, Montserrat, or similar)
- **Body text:** Clean, readable sans-serif at 16px minimum base size
- **Accent/decorative text:** Optional serif for quotes or philosophy sections
- Ensure readability on all screen sizes

### 3.5 Animations & Interactions

Implement:

- Cinematic hero image transitions (crossfade or parallax)
- Smooth scrolling (native CSS `scroll-behavior: smooth`)
- Forest-inspired parallax effects on feature sections
- Text reveal animations on scroll (fade-up, stagger)
- Section fade-in on viewport entry
- Image reveal transitions (scale or clip-path)
- Subtle floating particles (fireflies/dust motes — toggle-able for performance)
- Animated CTA buttons (hover states, micro-interactions)
- Smooth pricing calculator transitions
- Scroll-triggered section animations
- Accordion animations for FAQ

**Performance Requirements:**

- All animations must use `will-change`, `transform`, and `opacity` only (GPU-accelerated).
- Respect `prefers-reduced-motion` media query — disable all non-essential animations.
- Must maintain 60fps on mid-range mobile devices.
- Lazy-load all off-screen animated content.
- Total JS bundle for animations must not exceed 50KB gzipped.

---

## 4. HOMEPAGE HERO SECTION

### Layout

Full-screen (100vh) cinematic hero with a dense forest background.

### Content

**Main Heading (H1):**
> Escape the City.  
> Live in the Forest.

**Subheading:**
> Less signal. No traffic. No city noise. Fewer people. Just nature, adventure, and the freedom to live your own way.

**Supporting Paragraph:**
> Leave your everyday routine behind. Spend a few days surrounded by nature, build your own camping experience, and rediscover the simple things in life.

**CTAs:**
- Primary: "Explore the Experience" → scrolls to Experience section
- Secondary: "Book Your Forest Escape" → scrolls to Booking section

**Scroll Indicator:** Animated down-arrow or "Scroll to explore" with subtle bounce animation.

---

## 5. WHY THIS PLACE IS DIFFERENT

An immersive feature section with 6 cards/blocks:

| Feature | Heading | Description |
|---------|---------|-------------|
| 📡 | Less Signal | Leave behind constant notifications and enjoy a break from your digital routine. _Actual mobile network availability may vary by operator and location._ |
| 🚗 | No Traffic | Escape crowded roads, traffic jams, and city congestion. |
| 🔇 | No City Noise | Experience natural sounds instead of horns, construction, and urban noise. |
| 👥 | Fewer People | Enjoy a quieter outdoor environment away from overcrowded tourist destinations. |
| 🌲 | Total Forest Experience | Experience the surrounding natural landscape and wilderness atmosphere. |
| 🏕️ | Your Own Freedom | No fixed luxury lifestyle here. Make your own tent, cook your own food, explore nature, and enjoy your stay your way — within essential safety and environmental guidelines. |

_Note: Icons above are conceptual. Use Lucide icons in implementation, not emoji._

---

## 6. THE FOREST EXPERIENCE

### Section Heading

> "Not a Resort. Not a Hotel. A Different Way of Living."

### Experience Cards

Each experience should be a visually engaging card or section with an image, heading, and description:

**Make Your Own Tent**
Bring your own tent and create your camping setup in an approved designated camping area.

**Tent Rental Available**
Don't have camping equipment? Tent rental can be arranged subject to availability. Contact us for rental pricing.

**Cook Your Own Food**
Bring your own ingredients and enjoy preparing your meals in designated safe cooking areas.

**Food Available**
Don't want to cook? Optional food packages are available at additional cost. See Pricing section.

**Explore Nature**
Experience nature walks, guided trails, and outdoor exploration where conditions and permissions allow.

**Bonfire Experience**
Enjoy evenings outdoors around a bonfire — only where permitted and under safe conditions.

**Peaceful Moments**
Read, relax, talk, explore, sit under the trees, or simply enjoy the silence.

**Adventure & Exploration**
Experience the raw side of outdoor living, natural terrain, and wilderness exploration.

### Experience Ratio

Display prominently:
> **70% Adventure. 30% Comfort.**

With note: _"The experience is adventurous and authentic, not a luxury-controlled environment. However, adventure does not mean deliberately exposing visitors to unsafe situations."_

---

## 7. BRAND PHILOSOPHY SECTION

### Layout

Full-width dark section (`#151A17` background) with large typography.

### Content

**Heading:**
> NO CELEBRITY TREATMENT.  
> JUST BE HUMAN.

**Body:**
> We are not building another luxury resort where everything is served to you.
>
> We believe in simple living, real experiences, and freedom.
>
> Make your own tent.  
> Cook your own food.  
> Walk through nature.  
> Sit under the stars.  
> Talk with people.  
> Enjoy silence.
>
> Here, nobody needs to impress anyone.  
> No unnecessary luxury.  
> No artificial lifestyle.  
> No city pressure.
>
> Just you, nature, and the experience of living.

Add subtle text-reveal animation on scroll.

---

## 8. PRICING & PACKAGES

### 8.1 Section Heading

> "Transparent Pricing. No Hidden Charges."

### 8.2 Important Pricing Rules

Before implementing, understand these rules:

- **All stay prices are PER DAY.**
- **Solo package is per-person pricing. Group packages (2-person, 3-person) are GROUP prices, NOT per-person.**
- **Food is always optional and charged separately.**
- **Tent rental is optional and NOT included in any package.**
- **All prices must be sourced from the centralized config file.**

### 8.3 Package Definitions

#### Package 1: Solo Forest Escape

| Item | Price |
|------|-------|
| Stay | ₹2,000 / person / day |
| Food (optional) | ₹1,000 / person / day |

Food includes: Breakfast + Lunch + Dinner.

#### Package 2: Two-Person Forest Escape

| Item | Price |
|------|-------|
| Stay (2 people) | ₹3,500 / day (group price) |
| Food (optional, 2 people) | ₹1,500 / day (group price) |
| **Total with food** | **₹5,000 / day** |

Food includes: Breakfast, Lunch, and Dinner for two.

#### Package 3: Three-Person Forest Adventure

| Item | Price |
|------|-------|
| Stay (3 people) | ₹5,500 / day (group price) |
| Food (optional, 3 people) | ₹2,000 / day (group price) |
| **Total with food** | **₹7,500 / day** |

Food includes: Breakfast, Lunch, and Dinner for three.

#### Groups Larger Than 3

> "Contact us for a custom group quotation."

### 8.4 Discount Information

Display prominently below packages:

> **"Special Discounts Available On Location!"**
>
> Visit us, discuss your requirements, and get special on-location discounts. Final discounts depend on group size, duration of stay, and availability.

**Do NOT advertise a fixed discount percentage.**

### 8.5 Tent Rental

Display as a separate optional service:

> **"Don't Have Your Own Tent?"**
>
> Tent rental is available subject to availability. Contact us for rental pricing.

| Config Key | Value |
|------------|-------|
| `tentRentalPrice` | `null` — `[OWNER MUST SET PRICE]` |
| `tentRentalAvailable` | `true` |

**Tent rental charges must NOT be included in calculator totals until the owner configures an actual price in the config.**

---

## 9. INTERACTIVE PRICING CALCULATOR

### 9.1 Input Fields

| # | Field | Type | Options |
|---|-------|------|---------|
| 1 | Number of Guests | Selector | 1, 2, 3, 4+ |
| 2 | Number of Days | Selector/Input | 1–30 |
| 3 | Food Required | Toggle | Yes / No |
| 4 | Tent Requirement | Selector | Own Tent / Rental Tent |

If "4+ guests" selected → show: **"Contact us for a custom group quotation."** and disable calculator.

If "Rental Tent" selected and `tentRentalPrice` is `null` → show: **"Tent rental pricing — contact us for current rates."** Do NOT add ₹0 to total.

### 9.2 Pricing Logic

```
IF guests == 1:
  stayRate = ₹2,000/day
  foodRate = ₹1,000/day
IF guests == 2:
  stayRate = ₹3,500/day
  foodRate = ₹1,500/day
IF guests == 3:
  stayRate = ₹5,500/day
  foodRate = ₹2,000/day

stayTotal = stayRate × days
foodTotal = (foodRequired ? foodRate × days : 0)
tentRental = (rentalTent && tentRentalPrice ? tentRentalPrice × days : 0)
bookingAdvance = guests × ₹500
estimatedTotal = stayTotal + foodTotal + tentRental
remainingBalance = estimatedTotal - bookingAdvance
```

### 9.3 Calculator Output Display

Show a clear summary:

- Selected package name
- Number of guests
- Number of days
- Stay charges breakdown
- Food charges breakdown (or "Not selected")
- Tent rental charges (or "Contact us for rates" or "Own tent")
- **Estimated Total**
- **Booking Advance** (₹500 × guests)
- **Remaining Balance** (payable at end of stay)

Footer note:
> "This is an estimate. Special on-location discounts may be available. Final pricing confirmed by owner."

### 9.4 CTA from Calculator

"Book via WhatsApp" button that opens WhatsApp with a prefilled message containing the calculator summary (see Section 11.3 for message format).

---

## 10. BOOKING PROCESS & PAYMENT POLICY

### 10.1 Section Heading

> "Your Forest Escape Starts Here."

### 10.2 Booking Advance

**₹500 per person** — this is the advance required to confirm a reservation.

### 10.3 Payment Steps

| Step | Action |
|------|--------|
| 1 | Submit your booking enquiry (via form or WhatsApp) |
| 2 | Owner confirms availability and final package details |
| 3 | Pay ₹500 per person as booking advance |
| 4 | Enjoy your forest experience |
| 5 | Pay the remaining balance at the end of your stay |

The advance is adjusted against the final total.

### 10.4 Payment Example

Display a worked example:

> **Example:** Two people, two days, with food.
>
> | Item | Calculation | Amount |
> |------|-------------|--------|
> | Forest Stay | ₹3,500 × 2 days | ₹7,000 |
> | Food | ₹1,500 × 2 days | ₹3,000 |
> | **Total** | | **₹10,000** |
> | Booking Advance | 2 persons × ₹500 | −₹1,000 |
> | **Remaining (end of stay)** | | **₹9,000** |

### 10.5 Payment Rules

- ₹500 advance is per guest, not per group.
- Remaining payment is collected at the end of the stay.
- Advance is adjusted against the final bill.
- Final pricing and availability must be confirmed by the owner.
- Do NOT show a confirmed booking until the owner verifies payment and availability.
- Cancellation and refund conditions must be displayed before accepting any booking.

### 10.6 Cancellation & Refund Policy

> ⚠️ `[OWNER MUST DEFINE CANCELLATION POLICY]`
>
> The following must be specified by the owner before launch:
> - Is the ₹500 advance refundable?
> - What is the cancellation deadline (e.g., 48 hours before check-in)?
> - Are partial refunds available?
> - What happens in case of weather-related cancellations?
>
> _Use placeholder text until the owner provides this information._

### 10.7 Payment Method

For the initial version: **WhatsApp-based booking confirmation only.**

**Architecture Note:** Keep the booking flow modular so a payment gateway (Razorpay, PhonePe, etc.) can be integrated later without restructuring the booking form or pricing calculator.

---

## 11. BOOKING FORM

### 11.1 Form Fields

| # | Field | Type | Required | Validation |
|---|-------|------|----------|------------|
| 1 | Full Name | Text | Yes | Min 2 characters |
| 2 | WhatsApp Number | Tel | Yes | Indian mobile: 10 digits, starts with 6-9 |
| 3 | Email Address | Email | Yes | Valid email format |
| 4 | Number of Guests | Number/Select | Yes | 1–10 (4+ shows "custom quote" note) |
| 5 | Check-in Date | Date | Yes | Must be today or future |
| 6 | Check-out Date | Date | Yes | Must be after check-in |
| 7 | Food Required | Toggle/Select | Yes | Yes / No |
| 8 | Tent Requirement | Select | Yes | Own Tent / Rental Tent |
| 9 | Adventure Interest | Textarea | No | Max 500 chars |
| 10 | Additional Message | Textarea | No | Max 1000 chars |

### 11.2 On Submission

1. Validate all required fields with inline error messages.
2. Calculate estimated price using calculator logic (Section 9.2).
3. Calculate booking advance (guests × ₹500).
4. Generate a complete booking summary.
5. Open WhatsApp with prefilled message.
6. Display confirmation that the enquiry has been sent.
7. Note: The owner will confirm availability and final pricing.

### 11.3 WhatsApp Prefilled Message Format

```
🏕️ *New Booking Enquiry — [BRAND NAME]*

*Name:* {fullName}
*WhatsApp:* {whatsappNumber}
*Email:* {email}
*Guests:* {guestCount}
*Check-in:* {checkInDate}
*Check-out:* {checkOutDate} ({dayCount} days)
*Food:* {foodRequired}
*Tent:* {tentRequirement}

*Estimated Stay:* ₹{stayTotal}
*Estimated Food:* ₹{foodTotal}
*Estimated Total:* ₹{estimatedTotal}
*Booking Advance:* ₹{bookingAdvance}

*Adventure Interest:* {adventureInterest || "None specified"}
*Message:* {additionalMessage || "None"}

Please confirm availability and pricing.
```

### 11.4 Contact Details (Centralized Config)

| Key | Value |
|-----|-------|
| `ownerWhatsApp` | `+91 7876631206` |
| `whatsAppUrl` | `https://wa.me/917876631206` |
| `ownerEmail` | `techhunting786@gmail.com` |
| `emailLink` | `mailto:techhunting786@gmail.com` |

---

## 12. SAFETY & WILDERNESS GUIDELINES

### Section Heading

> "Know Before You Enter the Forest."

### Guidelines (display as a checklist or card grid)

1. This is an outdoor wilderness experience, not a luxury resort. Expect basic amenities.
2. Weather and terrain conditions can change without warning.
3. Wildlife may be present in the area. Maintain distance and do not feed animals.
4. Follow all instructions from authorized guides and the site owner.
5. Do not enter restricted forest areas or cross marked boundaries.
6. Do not litter. Carry out all waste. Do not damage vegetation.
7. No unauthorized open fires. Bonfires only in designated areas with permission.
8. Carry essential personal medicines, a first-aid kit, and personal supplies.
9. Inform the owner of any medical conditions before your stay.
10. Follow all local forest, environmental, and government regulations.
11. Outdoor activities depend on weather, permissions, and local conditions.
12. Emergency contact and evacuation arrangements will be communicated before your stay.

**Do NOT promote dangerous or unauthorized adventure activities anywhere on the site.**

### Emergency Contact

> ⚠️ `[OWNER MUST PROVIDE: Local emergency numbers, nearest hospital, nearest police station]`

---

## 13. GALLERY & VISUAL EXPERIENCE

### Categories

Create a filterable gallery with these categories:

1. Dense Forest
2. Forest Camping
3. Outdoor Adventure
4. Camping Tents
5. Outdoor Cooking
6. Nature Trails
7. Bonfire
8. Night Sky
9. Peaceful Moments

### Implementation

- Responsive masonry or grid layout
- Category filter tabs
- Lightbox with swipe navigation on mobile
- Image reveal animations on scroll
- Smooth transitions between filter states
- Lazy loading for all images
- WebP format with JPEG fallback

### Image Policy

- Use authentic location photos wherever available.
- Use clearly marked placeholders until actual photos are uploaded.
- In the codebase, mark each placeholder: `// [PLACEHOLDER — Replace with actual property photo]`
- **Never display stock images as if they are actual property photos on the live site.** If using stock images, include a small disclaimer: _"Representative images. Actual experience may vary."_
- All images must have descriptive `alt` attributes.

---

## 14. LOCATION & DIRECTIONS SECTION

### Section Heading

> "Find Your Way to the Wilderness."

### Display

- GPS Coordinates displayed: `31.976698, 76.653572`
- Embedded interactive Google Map
- Toggle between Satellite and Road view
- "Get Directions" button
- "Open in Google Maps" button (new tab)
- "Copy Coordinates" button with toast/tooltip confirmation

### Advisory

> "Plan your journey, check the route, and contact us before travelling. Road and weather conditions may vary seasonally."

### Map URLs (from Section 2.2)

Reuse the centralized config values.

---

## 15. FAQ SECTION

### Implementation

Accordion-style with smooth expand/collapse animations. Schema.org `FAQPage` structured data for SEO.

### Questions & Answers

| # | Question | Answer |
|---|----------|--------|
| 1 | Is this a luxury resort? | No. This is an outdoor wilderness camping experience. Expect nature, adventure, and basic amenities — not hotel-style luxury. |
| 2 | Can I bring my own tent? | Yes. All packages assume you bring your own tent and camping equipment. |
| 3 | Can I rent a tent? | Yes, tent rental is available subject to availability. Contact us for current rental pricing. |
| 4 | Is food available? | Yes, optional food packages are available. See our Pricing section for details. |
| 5 | Can I cook my own food? | Yes. Designated safe cooking areas are provided. Bring your own ingredients and utensils. |
| 6 | Is mobile network available? | Coverage varies by operator and exact location. Expect limited or no signal in some areas. This is part of the experience. |
| 7 | What is the minimum stay? | `[OWNER TO CONFIRM — e.g., "1 day minimum" or "2 days minimum"]` |
| 8 | Can solo travellers visit? | Absolutely. Our Solo Forest Escape package is designed for individual adventurers. |
| 9 | Are couples and groups welcome? | Yes. We have packages for 2 and 3 people, and custom quotes for larger groups. |
| 10 | What is the price for two people? | ₹3,500 per day for stay. Food is optional at ₹1,500 per day for two. Total with food: ₹5,000/day. |
| 11 | What is the price for three people? | ₹5,500 per day for stay. Food is optional at ₹2,000 per day for three. Total with food: ₹7,500/day. |
| 12 | Is food included in the stay package? | No. Food is optional and charged separately. |
| 13 | Are special discounts available? | Yes. Visit us and discuss your requirements. On-location discounts depend on group size, duration, and availability. |
| 14 | How much is the booking advance? | ₹500 per person, adjusted against your final bill. |
| 15 | When do I pay the remaining amount? | At the end of your stay, after the final amount is confirmed. |
| 16 | What should I carry? | Tent and camping gear (unless renting), warm clothing, personal medicines, a first-aid kit, flashlight/headlamp, water bottle, comfortable trekking shoes, insect repellent, sunscreen, and any personal essentials. |
| 17 | Are guided adventure activities available? | Guided nature walks and trails may be available depending on conditions and permissions. Contact us for details. |
| 18 | What happens if weather becomes unsafe? | Your safety is the priority. Activities may be modified or postponed. `[OWNER TO CONFIRM: refund/reschedule policy for weather events]` |

---

## 16. CONTACT SECTION

### Section Heading

> "Ready to Leave the City Behind?"

### Description

> "Your next adventure doesn't need a luxury hotel. Sometimes all you need is a forest, a tent, and a few days away from everything."

### Contact Buttons

- **WhatsApp Now** → `https://wa.me/917876631206`
- **Send Email** → `mailto:techhunting786@gmail.com`
- **Book Your Stay** → scrolls to Booking Form

### Also Display

- Embedded location map (compact version)
- GPS coordinates with copy button
- Operating hours: `[OWNER TO CONFIRM]`

---

## 17. FOOTER

### Contents

**Brand:** `[BRAND NAME PLACEHOLDER]`  
**Tagline:** "Escape the City. Live in the Forest."

**Navigation Links:**
Home | Our Experience | Adventure | Pricing | Gallery | Location | Booking | Contact

**Legal Pages:**
- Privacy Policy `[OWNER TO PROVIDE or draft template]`
- Terms & Conditions `[OWNER TO PROVIDE or draft template]`
- Cancellation Policy `[OWNER TO DEFINE — see Section 10.6]`
- Safety Guidelines (links to Section 12)

**Contact:**
- WhatsApp: +91 7876631206
- Email: techhunting786@gmail.com

**Copyright:**
© {currentYear} `[BRAND NAME]`. All rights reserved.

---

## 18. SEO & DIGITAL MARKETING

### 18.1 Primary Keywords

- Forest Camping in Himachal Pradesh
- Adventure Camping in Himachal Pradesh
- Forest Retreat in Himachal Pradesh
- Wilderness Camping India
- Nature Retreat Himachal
- Remote Forest Camping
- Offbeat Camping Destination India
- Peaceful Forest Stay
- Digital Detox Retreat India
- Tent Camping in Himachal Pradesh
- Forest Adventure Experience

### 18.2 Secondary Keywords

- Escape from City Life
- Camping Away from City
- Peaceful Nature Stay
- Solo Forest Camping India
- Camping with Friends Himachal
- Couple Camping Experience
- Outdoor Cooking Experience
- Remote Nature Getaway
- Weekend Adventure Retreat
- Forest Camping with Food
- Camping with Tent Rental

### 18.3 Local SEO

> `[OWNER TO CONFIRM: Village name, district name, nearest town, nearest major city]`
>
> Once confirmed, integrate these into page titles, meta descriptions, headings, and structured data.

### 18.4 Technical SEO Requirements

| Requirement | Details |
|-------------|---------|
| Title Tags | Unique per page, 50–60 characters, keyword-rich |
| Meta Descriptions | Unique per page, 150–160 characters |
| Heading Hierarchy | Proper H1 → H2 → H3 structure, one H1 per page |
| Semantic HTML | HTML5 semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) |
| Image Alt Text | Descriptive alt attributes on all images |
| Open Graph | `og:title`, `og:description`, `og:image`, `og:url`, `og:type` |
| Twitter Cards | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| Canonical URLs | Self-referencing canonical on each page |
| XML Sitemap | Auto-generated, submitted to Search Console |
| robots.txt | Properly configured |
| Schema.org | `LocalBusiness` (or `TouristAttraction` / `LodgingBusiness` if applicable), `FAQPage`, `Product` for packages |
| Internal Linking | Between related sections |
| Mobile-First | Responsive design, mobile-first CSS |
| Image Optimization | WebP with fallback, responsive `srcset`, lazy loading |
| Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| Clean URLs | No query parameters, descriptive slugs |
| Google Search Console | Verification meta tag ready |
| Google Analytics | GA4 integration ready (tag in config) |

**Do NOT:**
- Use keyword stuffing
- Invent customer reviews, ratings, or testimonials
- Claim certifications or awards that don't exist
- Create fake social proof

---

## 19. TECHNICAL STACK & ARCHITECTURE

### 19.1 Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict mode) |
| UI Library | React |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |

### 19.2 Component Architecture

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── WhyDifferentSection.tsx
│   ├── ExperienceSection.tsx
│   ├── PhilosophySection.tsx
│   ├── AdventureSection.tsx
│   ├── PricingSection.tsx
│   ├── PricingCalculator.tsx
│   ├── BookingForm.tsx
│   ├── BookingSummary.tsx
│   ├── SafetySection.tsx
│   ├── GallerySection.tsx
│   ├── LocationMap.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── config/
│   └── site.ts          ← ALL business data lives here
├── lib/
│   └── pricing.ts       ← Pricing calculation logic
└── types/
    └── index.ts
```

### 19.3 Centralized Configuration (`config/site.ts`)

This is the **single source of truth** for all business data. No business information should be hardcoded in components.

```typescript
export const siteConfig = {
  brand: {
    name: "[BRAND NAME]",           // OWNER TO SET
    tagline: "Escape the City. Live in the Forest.",
    email: "techhunting786@gmail.com",
    whatsapp: "+917876631206",
    whatsappUrl: "https://wa.me/917876631206",
  },
  location: {
    latitude: 31.976698,
    longitude: 76.653572,
    state: "Himachal Pradesh",
    country: "India",
    village: "[OWNER TO CONFIRM]",
    district: "[OWNER TO CONFIRM]",
    nearestTown: "[OWNER TO CONFIRM]",
  },
  pricing: {
    packages: {
      solo: { stay: 2000, food: 1000, label: "Solo Forest Escape" },
      duo:  { stay: 3500, food: 1500, label: "Two-Person Forest Escape" },
      trio: { stay: 5500, food: 2000, label: "Three-Person Forest Adventure" },
    },
    bookingAdvancePerPerson: 500,
    tentRentalPricePerDay: null,     // OWNER TO SET — null = "contact us"
    currency: "INR",
    currencySymbol: "₹",
  },
  policies: {
    cancellation: "[OWNER TO DEFINE]",
    refundable: null,                // OWNER TO CONFIRM: true/false
    minimumStayDays: null,           // OWNER TO CONFIRM
  },
  seo: {
    siteUrl: "[DOMAIN TO BE SET]",
    gaId: null,                      // GA4 Measurement ID
    gscVerification: null,           // Google Search Console meta
  },
};
```

### 19.4 Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Focus indicators visible on all focusable elements
- Screen-reader friendly landmarks and ARIA labels
- Skip-to-content link
- Form labels and error messages associated with inputs
- Color contrast ratios verified
- `prefers-reduced-motion` respected
- `prefers-color-scheme` considered (optional dark mode)

### 19.5 Performance Requirements

- Lighthouse Performance score ≥ 90
- Lighthouse Accessibility score ≥ 95
- Lighthouse SEO score ≥ 95
- Lighthouse Best Practices score ≥ 90
- Total page weight < 3MB on initial load
- Time to Interactive < 3.5s on 4G
- No layout shifts from lazy-loaded content
- Responsive images with `srcset` and `sizes`
- No unnecessary third-party dependencies

---

## 20. ITEMS REQUIRING OWNER CONFIRMATION

Before the website can go live, the following must be confirmed by the owner:

| # | Item | Current Status |
|---|------|----------------|
| 1 | Business/Brand Name | `[NOT PROVIDED]` |
| 2 | Village, District, Nearest Town | `[NOT PROVIDED]` |
| 3 | Tent Rental Price | `[NOT PROVIDED]` |
| 4 | Minimum Stay Duration | `[NOT PROVIDED]` |
| 5 | Cancellation & Refund Policy | `[NOT PROVIDED]` |
| 6 | Emergency Contact Numbers | `[NOT PROVIDED]` |
| 7 | Nearest Hospital / Police Station | `[NOT PROVIDED]` |
| 8 | Operating Hours / Availability Seasons | `[NOT PROVIDED]` |
| 9 | Actual Property Photographs | `[NOT PROVIDED]` |
| 10 | Domain Name | `[NOT PROVIDED]` |
| 11 | Google Analytics ID | `[NOT PROVIDED]` |
| 12 | Legal Permissions for Commercial Camping | `[NOT VERIFIED]` |
| 13 | Privacy Policy / Terms Content | `[NOT PROVIDED]` |
| 14 | Weather-Related Cancellation Policy | `[NOT PROVIDED]` |

---

## 21. FINAL QUALITY CHECKLIST

Before considering the website complete, verify every item:

### Design & UX
- [ ] Cinematic, immersive feel — not a generic booking site
- [ ] Color palette consistently applied
- [ ] Typography hierarchy is clear and readable
- [ ] All animations are smooth and respect `prefers-reduced-motion`
- [ ] Mobile experience is fully responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] All CTAs are prominent and functional
- [ ] No horizontal scroll on any viewport

### Content & Accuracy
- [ ] No invented business information
- [ ] All placeholder content is clearly marked in code
- [ ] Stock images are not misrepresented as actual property photos
- [ ] Pricing is accurate and matches Section 8 exactly
- [ ] Calculator math is correct for all guest/day combinations
- [ ] Booking advance is correctly calculated as per-person
- [ ] WhatsApp prefilled message contains all booking details
- [ ] FAQ answers are honest and accurate
- [ ] Safety guidelines are comprehensive

### Technical
- [ ] All config values sourced from `config/site.ts`
- [ ] TypeScript strict mode, no `any` types
- [ ] No hardcoded business data in components
- [ ] Forms validate correctly with helpful error messages
- [ ] WhatsApp links open correctly on mobile and desktop
- [ ] Email links work correctly
- [ ] Google Maps embed loads and is interactive
- [ ] Copy-to-clipboard works for GPS coordinates
- [ ] All internal navigation links work (smooth scroll)
- [ ] 404 page exists

### SEO
- [ ] Unique title and meta description
- [ ] Proper heading hierarchy (single H1)
- [ ] All images have alt text
- [ ] Open Graph and Twitter Card meta tags present
- [ ] Schema.org structured data valid (test with Google Rich Results)
- [ ] XML sitemap generated
- [ ] robots.txt present
- [ ] Canonical URL set

### Performance
- [ ] Lighthouse scores meet targets (Section 19.5)
- [ ] Images optimized (WebP, responsive, lazy-loaded)
- [ ] No render-blocking resources
- [ ] Animations GPU-accelerated
- [ ] Bundle size reasonable

### Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Screen reader tested (or VoiceOver/NVDA compatible)
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible
- [ ] Form inputs have associated labels

---

## FINAL BRAND MESSAGE

> **LEAVE THE NOISE BEHIND.**  
> **FIND YOUR WILD.**  
> **ESCAPE THE CITY.**  
> **LIVE IN THE FOREST.**

---

_End of Development Prompt._
