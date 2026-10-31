# Luxury Cab Rental — website starter

A responsive Next.js App Router + React + TypeScript + Tailwind CSS website starter for Luxury Cab Rental in Lucknow, Uttar Pradesh. The hero uses the five photographs supplied with the request and the curved rotating tile component.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configure business contact details

Edit `src/lib/site.ts` and set `phone` and `whatsapp` to your business number with digits only, including India's country code `91` (example format: `919876543210`). The call and WhatsApp links remain inactive until these values are set, avoiding broken placeholder links.

## Before production deployment

1. Add your real production domain to `metadataBase` in `src/app/layout.tsx` when you are ready to deploy, so generated metadata uses the correct domain.
2. Confirm that you have rights to use the supplied car photographs and that their descriptions match the actual vehicles you offer.
3. Update the copy to reflect your exact services, terms, fleet availability and pricing. Do not publish unverified claims or rates.
4. Add a privacy policy and any required business/legal details before collecting customer information.
5. Run `npm run build` and fix any reported errors before deploying.

## Image assets

The five supplied photographs are stored in `public/images/` and referenced by the hero component:

- `jaguar-red.jpg`
- `bmw-autumn.jpg`
- `mercedes-sunset.jpg`
- `mercedes-winter.jpg`
- `audi-night.jpg`

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    ui/
      tilted-grid-hero.tsx
  lib/
    site.ts
    utils.ts
public/
  images/
```

The `cn` utility in `src/lib/utils.ts` is the standard `clsx` + `tailwind-merge` helper expected by shadcn-style components.
