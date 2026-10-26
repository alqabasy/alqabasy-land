# AL-QABASY / شركة القبسي للتجارة

A bespoke bilingual, Arabic-first landing page for **AL-QABASY Trading Company**—the parent company with an in-house development team that designed and developed **QabasOne**.

## Run

Open `index.html` in any modern browser. No installation, compilation, backend, or external assets required. Optional: serve with `python -m http.server 8080` and open `http://localhost:8080`.

## Files

- `index.html` — semantic page structure, SEO metadata, accessible landmarks.
- `styles.css` — original responsive design system, RTL/LTR-compatible layouts.
- `app.js` — Arabic/English dictionaries, language persistence, mobile navigation, and copy-message interaction.
- `assets/mark.svg` — original **proposed** AL-QABASY monogram, not an assertion of existing official brand identity.
- `assets/hero-orbit.svg` — original infinity/connection graphic representing trade and development.
- `assets/trade-art.svg`, `assets/build-art.svg` — original editorial illustrations.
- `assets/favicon.svg`, `assets/app-icon-512.png`, `assets/og-cover.svg`, `assets/og-cover.png` — favicon, raster icon, and social-cover concept.

## Customization before publishing

1. **Brand approval:** The logo and color palette are original proposals, not verified official AL-QABASY assets. Replace with approved assets if needed.
2. **Official contact:** No company email, phone number, address, founding year, or invented trading sectors have been added. Add verified official contact channels in the contact section when supplied. The working copy-message button is a temporary useful interaction; it does **not** send a message.
3. **QabasOne link:** The project button currently opens `https://app.qabas.one`. Change it if a public product website is preferred.
4. **Product screenshot:** The QabasOne dashboard motif is a deliberately abstract *concept illustration*, not a screenshot of the actual application.
5. **Localization:** Edit translations in `copy.ar` / `copy.en` inside `app.js`. Default is Arabic, visitor choice is saved locally, and `?lang=en` and `?lang=ar` override the saved choice.
6. **Fonts:** The design works offline using installed system fonts with Arabic fallbacks. For consistent production typography, self-host your licensed font families or add approved CDN references.
7. **Social preview:** The social-cover PNG is included. Set `og:image` to its absolute public URL after deployment (the source SVG is also included).

## Design direction

Warm ivory, copper, and pine-green accents, with geometric orbital art. The company brand is distinct from QabasOne's product identity; their connection appears in the in-house development and product showcase sections. All business claims are intentionally limited to facts supplied for this brief.
