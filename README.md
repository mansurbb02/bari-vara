# Dhaka Rental Network

Premium Bangla-first rental property website for Dhaka, Bangladesh.

**Design system:** Premium Simplicity — no shadows, no gradients, no glassmorphism.

## Stack

- React 19 + TypeScript
- Vite
- React Router
- Mobile-first responsive
- Bangla-first with English localization
- Node.js-ready data models (mock data for now)

## Design principles

- Trustworthy, local, calm, simple, human, modern
- Typography: Anek Bangla (headings), Tiro Bangla (body), Inter (UI/numbers)
- Colors: Deep green `#14532D`, warm off-white `#FAFAF7`, restrained accents
- 8px spacing system, thin borders instead of shadows
- Real photography, image-first UX for low digital literacy

## Getting started

```bash
cd dhaka-rental-network
npm install
npm run dev
```

Open http://localhost:5173

## Pages

- `/` — Home (hero + search, areas, verified properties, how it works, FAQ)
- `/search` — Property listing with filters
- `/property/:id` — Property details with sticky CTA
- `/areas` — Area explorer
- `/pricing` — Free / Monthly / Yearly plans
- `/requests` — Tenant requirements
- `/list-property` — List a home
- `/how-it-works`, `/verification`, `/help`, `/login`, `/about`, `/terms`, `/privacy`, `/contact`

## Structure

```
src/
  components/   # Button, PropertyCard, AreaCard, Header, Footer, VerificationBadge
  pages/        # All route pages
  data/         # mockData.ts (realistic Dhaka rental data)
  types/        # Property, Area, TenantRequest, SubscriptionPlan
  i18n/         # translations + LanguageContext
```

## Notes

- All CTAs have logical destinations
- No lorem ipsum — all sample content is realistic Bangladesh rental copy
- Ready to connect to Node.js APIs later (clean data models)
- Language toggle: বাংলা | English in header and footer
