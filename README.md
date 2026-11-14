# Gatorbacks Fishing Charters website

Static site for www.gatorbacksfishingcharters.com, built with Eleventy and hosted on Netlify. Every push to `main` rebuilds the site automatically.

## Where things live

| To change | Edit |
| --- | --- |
| Phone, email, booking link, gift card link, Facebook, GTM ID, Google review links, reviews widget embed code | `src/_data/site.json` |
| Trip names, prices, descriptions, targeting, trip options, guest counts, photos | `src/_data/trips.json` (used by both Home and Charters) |
| Gallery photos and their sections | `src/_data/gallery.json` |
| The five "close to where you're staying" tiles | `src/_data/towns.json` (add an `img` file name and `alt` text to swap a placeholder for a photo) |
| Page text | `src/index.njk`, `src/charters.njk`, `src/reviews.njk`, `src/gallery.njk`, `src/about.njk`, `src/contact.njk` |
| Header, footer, meta tags | `src/_includes/base.njk` |
| Styles | `src/assets/css/site.css` (inlined into every page at build time) |
| Redirects and headers | `netlify.toml` |

Photos go in `src/images/` as full-size JPG or PNG. The build makes the WebP and JPEG sizes on its own.

**Reviews widget:** paste the provider's embed code (as one line) into `reviewsEmbed` in `src/_data/site.json`. It loads only when a visitor scrolls near it.

**Contact form:** uses Netlify Forms for now (submissions show under the site's Forms tab in Netlify; turn on email notifications there). Swap in the SWM form system's embed if Andre prefers.

## Run it on a computer

```bash
npm install
```

```bash
npm start
```

Then open http://localhost:8080. `npm run build` writes the finished site to `_site/`.

## Tracking

Only Google Tag Manager (GTM-M8RRK59Q) is in the code, loaded on the visitor's first scroll/tap/key press or 4 seconds after load. Add every other tag (GA4, Ads, Meta Pixel) inside GTM.

## Reference

`docs/BUILD-BRIEF.md` and `docs/design/` hold the approved brief and designs. `docs/logo-original.webp` is the logo source file.
