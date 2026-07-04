# AI Tool Atlas

A curated directory of the best free & paid AI tools — built with Next.js 16, React 19, and Tailwind CSS 4. Fully static (SSG), SEO-first.

## Develop

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (99 static pages)
npm run lint
```

## Structure

- `src/data/tools.ts` — 16 categories, 65+ tools (the single source of truth; add tools here)
- `src/app/` — pages: home, /tools, /tools/[slug], /category/[slug], /free-ai-tools, /paid-ai-tools
- `src/components/` — Header, Footer, ToolCard, ToolsExplorer (client filters), FaqSection, JsonLd
- SEO: sitemap.ts, robots.ts, manifest.ts, per-page metadata + canonical, JSON-LD
  (WebSite+SearchAction, SoftwareApplication, ItemList, BreadcrumbList, FAQPage), OG image

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the production domain (used for canonicals, sitemap, and OG URLs), then deploy to Vercel or any Node host.
