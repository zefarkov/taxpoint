# TaxPoint website

Production-ready static Next.js website for TaxPoint, an accounting and tax services company in Uzbekistan. The project is configured for GitHub Pages deployment with static export to `/out`.

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

Next.js is configured with `output: "export"`, so the production files are generated in `/out`.

## Deploy through GitHub Pages

1. Push the repository to GitHub.
2. In GitHub, open `Settings` → `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.
5. The workflow in `.github/workflows/deploy.yml` will run `npm install`, `npm run build`, upload `/out`, and deploy it to GitHub Pages.

This project does not use API routes, server actions, or server-side rendering requirements. All pages are statically generated, including the service routes under `/xizmatlar/...`.

## Content source

The tariffs and service lists are based on the attached `TAXOINT xizmatlar.docx` file:

- Start: 1 500 000 so‘m / oy
- Standard: 2 000 000 so‘m / oy
- Business: 3 500 000 so‘m / oy
- Pro: 6 000 000 so‘m / oy

## Contact placeholders to replace

Update these values before launch:

- Phone: `+998 XX XXX XX XX`
- Telegram username and link: `@taxpoint`, `https://t.me/taxpoint`
- Address: `Toshkent, O‘zbekiston`
- Production domain in `src/app/layout.tsx`, `public/sitemap.xml`, and `public/robots.txt`

## SEO service URLs

The site includes SEO-ready service routes:

- `/xizmatlar/buxgalteriya-xizmati`
- `/xizmatlar/yatt-ochish`
- `/xizmatlar/mchj-ochish`
- `/xizmatlar/e-imzo-olish`
- `/xizmatlar/qqs-hisoboti`
- `/xizmatlar/nol-hisobot`
