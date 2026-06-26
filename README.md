# TAXPOINT website

Production-ready static Next.js website for TAXPOINT, an accounting and tax services company in Uzbekistan. The project is configured for GitHub Pages deployment with static export to `/out`.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- SEO-ready metadata, sitemap, robots
- Reusable section components
- Static export for GitHub Pages

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static output

```bash
npm install
npm run build
```

Next.js is configured with `output: "export"`, so the production files are written to `/out`.

## Telegram lead forms

All main CTA buttons open a short lead form. The static frontend sends lead data to a Cloudflare Worker, and the Worker sends the Telegram notification securely.

Frontend environment variable:

```bash
NEXT_PUBLIC_LEAD_ENDPOINT=https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev
```

Do not use `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` or expose Telegram credentials in the frontend. The Worker keeps these values as secrets:

```bash
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
ALLOWED_ORIGIN=https://taxpoint.uz
```

Worker source and setup instructions are in `cloudflare-worker/`.

## Deploy through GitHub Pages

1. Push the repository to GitHub.
2. In GitHub, open `Settings` → `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.
5. The workflow in `.github/workflows/deploy.yml` will run `npm install`, `npm run build`, upload `/out`, and deploy it to GitHub Pages.

This project does not use API routes, server actions, or server-side rendering requirements. The homepage and service routes under `/xizmatlar/...` are static.

## Contact details

Current contact values:

- Phone: `+998 93 045 37 36`, `+998 94 444 63 33`, `+998 50 009 00 50`
- Telegram link: `https://t.me/+998930453736`
- Address: `Farg'ona shahar, Mustaqillik ko'chasi 193-uy`
- Google Maps: `https://maps.app.goo.gl/HaSTYUr6S11YeiVq5`
- Yandex Maps: `https://yandex.uz/maps/-/CTQpuB11`
- Production domain in `src/app/layout.tsx`, `public/sitemap.xml`, and `public/robots.txt`

## Client logos

Add client logo PNG files to `public/clients/`. The "Biz bilan ishlayotganlar" marquee reads all `.png` files from that folder during build, so new logos will appear after the next deploy.

## SEO service URLs

The site includes SEO-ready service routes:

- `/xizmatlar/buxgalteriya-xizmati`
- `/xizmatlar/yatt-ochish`
- `/xizmatlar/mchj-ochish`
- `/xizmatlar/e-imzo-olish`
- `/xizmatlar/qqs-hisoboti`
- `/xizmatlar/nol-hisobot`
