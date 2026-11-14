# Gatorbacks Fishing Charters: build brief

Approved by Andre on Nov 14, 2026. Build with the `swm-site-launch` skill (Eleventy on GitHub + Netlify). Where this brief and the skills differ, this brief wins; where this brief is silent, the skills apply.

## What's in this folder

- `design/Main-design.html` and `design/Charters-design.html`: the approved Home and Charters page designs. They are the visual source of truth for layout, spacing, type and color. They were made in a design canvas, so treat them as reference markup (inline styles, `<x-dc>`, `{{blue}}` and `{{book}}` tokens), not code to ship. `{{blue}}` = `#0070C0`, `{{book}}` = `#C8460F`. Rebuild them as clean Eleventy templates with one stylesheet.
- `images/`: every photo the designs use, at full size, plus both logos. Files marked `LOWRES` or `SCREENSHOT` are stand-ins until William sends better photos. `images/gallery-old-site/` holds the old site's gallery (small originals).

## The business

| Item | Detail |
| --- | --- |
| Business | Gatorbacks Fishing Charters, Capt. William Ashmore (solo) |
| Domain | www.gatorbacksfishingcharters.com (currently a one-page Wix editor site) |
| Phone | 813-714-5670 (call or text) |
| Email | [EMAIL] |
| Booking | https://book.vallypro.com/p/gatorbacks-fishing-charters (label "Book Now", every booking button, new tab) |
| Gift cards | https://book.vallypro.com/p/gatorbacks-fishing-charters/cart/gift-card |
| Facebook | https://www.facebook.com/gatorbacksbait (icon only) |
| Facts we can use | Florida native; 40+ years fishing Tampa Bay and Central Florida; USCG 100 ton Master license; fishing license, rods/reels/tackle and fish cleaning included; bring drinks (no glass), snacks, sunglasses, sunscreen |

This is William's personal site. Charter Fishing Tampa Bay (charterfishingtampabay.com) is the separate co-branded group site he's also on. Reuse nothing from CFTB: no copy, headings, FAQs, meta or photos.

## Rules from Andre for this site

- No Google rating or review count anywhere (top strip, hero, reviews). Reviews show only through an embedded Google reviews widget with the Google logo and rotating reviews.
- No colored overlays on photos. Neutral dark fades only where white text needs it.
- Don't lean on "private." Guests don't worry about shared trips. At most one mention in trip details.
- Copy leads with the guest's day and real moments, not the captain's résumé. Never invent facts, reviews or numbers; use [PLACEHOLDERS].
- Header logo is big: about 112px tall on desktop, scaled down on phones so it never crowds Book Now. Andre said the current logo file looks weak: use the original from Drive (Client Folders > Charter Fishing Tampa Bay > Gatorbacks > "GatorBacks LLC Logo.zip", file id 1q6fS_siyQFy2l89UWBZp7RXS6nESeOF0; white version "gatorbacks-logo-white.png", id 1zx4qNwoBfmPr-B2005TmrOUAyWU530qs). If you can't reach Drive, ask Andre to attach the zip; `images/logo-full-color.png` (1082px) is the fallback.
- Fonts: Archivo 700/800 for headings, Source Sans 3 400/600/700 for body (18px min, near black #161616). Self-host both.
- Colors: blue #0070C0 (headings, top strip, footer), Book Now orange #C8460F, light tint #EAF3FB for alternate bands. No grey text.

## Pages (six, nothing else)

| Page | URL | SEO title | Meta description |
| --- | --- | --- | --- |
| Home | / | Gatorbacks Charter Fishing Tampa FL \| Redfish Trips | Charter fishing in Tampa Bay with Capt. William Ashmore, a Florida native with 40+ years on these waters. Redfish, snook & more. Book online. |
| Charters | /charters/ | Fishing Charters in Tampa Bay, FL \| Gatorbacks | Charters with Capt. William Ashmore: inshore, redfish, snook, tarpon, shark, nearshore, grouper & offshore, plus Kissimmee crappie. Book online. |
| Reviews | /reviews/ | Reviews \| Gatorbacks Fishing Charters | Read Google reviews from anglers who fished Tampa Bay with Capt. William Ashmore of Gatorbacks Fishing Charters. See what to expect & book your trip. |
| Gallery | /gallery/ | Photo Gallery \| Gatorbacks Fishing Charters | Real photos from Gatorbacks charters in Tampa Bay & Kissimmee, with Capt. William Ashmore & the anglers who fished with him. See them & book a trip. |
| About | /about/ | Capt. William Ashmore \| Gatorbacks Fishing Charters | Meet Capt. William Ashmore, a Florida native with 40+ years fishing Tampa Bay & Central Florida & a USCG 100 ton Master license. Book a trip with him. |
| Contact | /contact/ | Contact Gatorbacks Fishing Charters \| Tampa Bay | Call or text Capt. William Ashmore at 813-714-5670 or send a message to plan a Tampa Bay or Kissimmee fishing trip. Book online anytime. |

Menu: Home, Charters, Reviews, Gallery, About, Contact, then Book Now at the far right at every screen size. Top strip: "Call or text 813-714-5670" (tap to call). No floating buttons.

### Home (follow `design/Main-design.html`, in this order)

1. Hero: redfish-in-the-mangroves photo, H1 "Tampa Bay Fishing Charters", one button "See Our Charters" jumping to the charters. No booking or call button on the banner.
2. Opening statement: big line "Redfish along the mangroves, snook in the bay, and a cooler of snapper back at the dock by sunset." with the two short paragraphs beside it.
3. Three photo cards: In the bay, Out in the Gulf, Back at the dock.
4. What Anglers Say: embedded Google reviews widget only (rotating, Google logo). The one real quote shown in the design is from his old site; the widget replaces it.
5. Our Charters: nine cards (Inshore, Redfish, Snook, Tarpon, Shark, Nearshore, Grouper, Offshore, Crappie), each linking to its section on /charters/ (#inshore etc.). "From $___" from VallyPro. One Book Now under the cards plus "or call or text".
6. Every Trip Includes: full-width band directly under the charters.
7. Fishing Charters Close to Where You're Staying: five photo tiles (Tampa, St. Petersburg, Clearwater, Anna Maria, Kissimmee). Purpose: someone staying in Clearwater sees they're in the right place. Use free-license place photos (Unsplash preferred, no credit needed; Wikimedia Commons is fine with the required credit in the footer). Confirm Tampa and Clearwater with Andre before launch; the old site only listed St. Pete, Anna Maria and Kissimmee.
8. Meet Capt. William Ashmore: cropped hogfish photo, two short paragraphs, link to /about/.
9. From the Boat: four photos linking to /gallery/.
10. Gift card line with link.
11. Book Your Trip: sunset dock group photo with a plain dark layer, Book Now, "or call or text".
12. Footer: white-text logo, Facebook icon, page links, phone, "Messages get answered once the captain is off the water," gift cards, "© 2026 Gatorbacks Fishing Charters", "Website by Saltwater Marketing" linking to https://www.saltwatermarketing.net/ (new tab).

### Charters (follow `design/Charters-design.html`)

Hero with the three-anglers grouper photo and H1 "Fishing Charters in Tampa Bay"; one lead line; a sticky trip bar; nine alternating trip rows (photo, name, "From $___", short description, Targeting / Trip options / Guests / Included list, one Book Now each); What to Bring; Book Your Trip band. Pull trip options, durations, guest counts and prices from VallyPro in a real browser (Playwright); flag anything that disagrees with the old site. Offshore species: [SPECIES], ask Andre. Add 5 to 8 real booking FAQs with FAQPage schema only if William or Andre supplies the answers; otherwise leave the section out.

### Reviews, Gallery, About, Contact (not designed; build in the same system)

- Reviews: the same Google reviews widget, "Read all reviews on Google" and "Leave a review" links.
- Gallery: real photos sorted by trip type, tap to enlarge, each section linking to its spot on /charters/.
- About: Capt. Ashmore from the facts above only, plus [placeholders] for anything personal. 250 to 400 words max; keep it short rather than pad it.
- Contact: tap to call and text, email, Facebook icon, map, and a contact form (name, email, phone, charter, date, guests, message) with text-message consent wording and a thank-you page (noindex). The old Wix form must be replaced before launch.

## Technical

- Tracking: copy the GTM container ID from the old site's source; only the delayed GTM loader goes in the code (see `swm-site-launch`). List any other tags found for Andre.
- Old site is one page at `/`. Add 301s for any other Wix paths found (and /home, /blank-*). Canonicals point to https://www.gatorbacksfishingcharters.com.
- Schema: LocalBusiness on home without AggregateRating (no rating shown on the page); BreadcrumbList on inner pages; FAQPage only where FAQs appear.
- Targets: PageSpeed 99+ on phones and desktop, one H1 per page, sitemap.xml, robots.txt, 404, alt text that describes each photo, WebP images with width/height, lazy loading below the fold, hero preloaded.
- Before showing Andre: screenshots of Home and Charters at phone (390px) and desktop (1440px) widths next to the design files.

## Still open (keep as placeholders, list them in the hand-off)

- Email address.
- VallyPro prices, trip options and guest counts.
- Offshore species; what he fishes near St. Pete and Anna Maria, if used.
- Google reviews widget provider and embed code (Andre's call).
- Contact form tool (SWM uses "our system" for forms unless Andre says otherwise).
- Town photos for the five tiles.
- Better photos for the LOWRES and SCREENSHOT stand-ins.
