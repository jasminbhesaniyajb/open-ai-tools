export const SITE = {
  name: "AI Tool Atlas",
  tagline: "Your map to the best free & paid AI tools",
  description:
    "Discover the best AI tools in 2026 for writing, coding, image generation, video, SEO, design, productivity, research, and automation. Compare free and paid AI apps with features, pricing, and honest summaries.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aitoolatlas.com",
  twitter: "@aitoolatlas",
} as const;

export function absoluteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}
