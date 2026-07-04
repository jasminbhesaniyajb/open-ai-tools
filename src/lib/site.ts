export const SITE = {
  name: "Open AI Tools",
  tagline: "Discover the best free & paid AI tools",
  description:
    "Open AI Tools is a curated directory of the best AI tools in 2026. Explore free and paid AI apps for chat, image generation, video, coding, writing, SEO, and more — with honest summaries, key features, and pricing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://open-ai-tools.vercel.app",
  twitter: "@openaitools",
} as const;

export function absoluteUrl(path = ""): string {
  return `${SITE.url}${path}`;
}
