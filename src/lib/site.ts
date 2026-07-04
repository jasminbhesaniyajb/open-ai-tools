export const SITE = {
  name: "AI Tool Atlas",
  tagline: "Your map to the best free & paid AI tools",
  description:
    "AI Tool Atlas is a curated directory of the best AI tools in 2026. Explore free and paid AI apps for chat, image generation, video, coding, writing, SEO, and more — with honest summaries, key features, and pricing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aitoolatlas.com",
  twitter: "@aitoolatlas",
} as const;

export function absoluteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}
