# WOW FACTOR Website — Componentized Starter

A Next.js 16 + React 19 + TypeScript + Framer Motion sample website based on the client requirements and references supplied for WOW FACTOR.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```text
app/
├── components/
│   ├── HomePage.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Arrow.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   └── BookingModal.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TickerSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── ParallaxSection.tsx
│       ├── ResultsSection.tsx
│       ├── TreatmentDirectory.tsx
│       ├── TeamSection.tsx
│       ├── CredibilitySection.tsx
│       ├── TestimonialsSection.tsx
│       ├── SocialSection.tsx
│       ├── MedicalTourismSection.tsx
│       └── BookingCTA.tsx
├── data/
│   └── siteData.ts
├── globals.css
├── layout.tsx
└── page.tsx
```

## Important

The homepage Social section pairs the reels in `app/data/instagramReels.ts`
with the numbered PNG covers in `public/images/editorial/reels`.
The first reel uses `1.png`, the second uses `2.png`, and so on.

Replace remaining sample content with client-approved assets before launch.
