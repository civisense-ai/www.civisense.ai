# www.civisense.ai

The marketing website for **civisense.ai** — an AI-powered governance intelligence platform delivering real-time grievance resolution, citizen sentiment analysis, and decision support for local government bodies across India.

This repository is a [Next.js](https://nextjs.org/) (App Router) project converted from a single-file HTML prototype.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — start the local development server with hot reload
- `npm run build` — build the production bundle
- `npm run start` — run the production build (after `npm run build`)
- `npm run lint` — run Next.js / ESLint checks

## Project Structure

```
app/
  layout.jsx     # Root layout — fonts, metadata, <html>/<body>
  page.jsx       # Home route ("/") — server entry that renders <HomePage />
  HomePage.jsx   # Client component — renders the marketing page markup and runs interactive scripts
  globals.css    # Global styles (extracted from the original HTML)
public/
  legacy.html    # Archival copy of the original single-file HTML
```

## Deployment

Any platform that supports Next.js works (Vercel, Netlify, AWS, self-hosted Node). The simplest option is to push to Vercel and connect this GitHub repo.

## License

Proprietary — © civisense.ai
