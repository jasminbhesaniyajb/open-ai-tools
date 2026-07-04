import type { MetadataRoute } from "next";
import { CATEGORIES, TOOLS } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/tools"), lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/free-ai-tools"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/paid-ai-tools"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...CATEGORIES.map((category) => ({
      url: absoluteUrl(`/category/${category.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...TOOLS.map((tool) => ({
      url: absoluteUrl(`/tools/${tool.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
