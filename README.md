# Gioielleria Catalano - Sito Web Ufficiale

Sito web premium per Gioielleria Catalano, Francavilla di Sicilia.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v3
- Lucide React (icone)
- Deploy su Vercel

## Setup

```bash
npm install
npm run dev
```

## Struttura URL

- `/it` - Italiano (default)
- `/en` - English

Il root `/` fa redirect automatico a `/it`.

## File immagini richiesti in `/public/`

### Logo
- `logolight.webp` - Logo per light mode
- `logodark.webp` - Logo per dark mode
- `logolight.webp` - Logo webp light
- `logodark.webp` - Logo webp dark

### SVG Firma Catalano
- `catalano-light.svg` - C dorata + G nera/antracite (per light mode)
- `catalano-dark.svg` - C dorata + G bianca (per dark mode)

### Hero
- `herolight.webp`
- `herodark.webp`

### La Gioielleria
- `gioiellerialight.webp`
- `gioielleriadark.webp`

### Casati
- `casatilight.webp`
- `casatidark.webp`

### Collezioni (con sfondo trasparente)
- `anelli.webp`
- `collane.webp`
- `bracciali.webp`
- `orecchini.webp`
- `orologi.webp`
- `cerimonie.webp`
- `regali.webp`

### Brand loghi (PNG bianchi 1:1)
- `brands/brand1.png`
- `brands/brand2.png`
- `brands/brand3.png`
- ecc.

### OG Image
- `og-image.jpg` (1200x630)

## Customizzare i brand

Apri `components/Brands.tsx` e aggiorna l'array `brands`:

```ts
const brands = [
  { name: "Salvini", logo: "/brands/salvini.png" },
  { name: "Brosway", logo: "/brands/brosway.png" },
  // ...
];
```

## Aggiornare indirizzo e contatti

Modifica in `lib/i18n.ts` i campi:
- `visita.address`
- `visita.phone`
- `visita.hours`

E aggiorna i link `href` in `VisitaInNegozio.tsx` e `Footer.tsx`.

## Google Maps embed

In `VisitaInNegozio.tsx`, sostituisci il blocco placeholder con:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

## Dark mode

Il tema viene salvato in `localStorage` con chiave `catalano-theme`.
Toggle nella navbar. Il tema persiste tra sessioni.

## Deploy Vercel

1. Push su GitHub
2. Import su Vercel
3. Build command: `npm run build`
4. Output dir: `.next`
5. Node version: 18+
