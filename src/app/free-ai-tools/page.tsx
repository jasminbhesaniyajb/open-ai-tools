import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import { CATEGORIES, getToolsByPricing } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";

const FREE_TOOLS = getToolsByPricing("free", "freemium");

export const metadata: Metadata = {
  title: `${FREE_TOOLS.length}+ best free AI tools in 2026 (tested & curated)`,
  description: `Discover ${FREE_TOOLS.length}+ genuinely free AI tools for chat, images, video, coding, and writing. Every tool has a real free tier — no credit card required to start.`,
  alternates: { canonical: "/free-ai-tools" },
  openGraph: {
    title: `${FREE_TOOLS.length}+ best free AI tools in 2026`,
    description: "Free AI tools for every task — chat, images, video, coding, writing, and more.",
    url: absoluteUrl("/free-ai-tools"),
  },
};

const FAQ_ITEMS = [
  {
    question: "Are these AI tools really free?",
    answer:
      "Yes — every tool on this page is either completely free or offers a genuinely useful free tier (freemium). You can start using all of them without paying, and most without a credit card.",
  },
  {
    question: "What's the catch with freemium AI tools?",
    answer:
      "Freemium tools typically limit usage (daily credits, generation counts, or context size) or reserve their most capable models for paid plans. For casual and light professional use, the free tiers are often more than enough.",
  },
  {
    question: "Which completely free AI tool is the most powerful?",
    answer:
      "NotebookLM (Google's research assistant), Meta AI (chat and images), Stable Diffusion (open-source image generation), and Socratic (homework help) are standouts that cost nothing at all.",
  },
];

export default function FreeAiToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best free AI tools",
          numberOfItems: FREE_TOOLS.length,
          itemListElement: FREE_TOOLS.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.name,
            url: absoluteUrl(`/tools/${tool.slug}`),
          })),
        }}
      />

      <header className="mb-12 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          The best <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">free AI tools</span> in 2026
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          {FREE_TOOLS.length}+ AI tools you can start using today without spending a cent. Everything here is free or has a genuinely useful free tier — organized
          by category so you can find what you need fast. Looking for premium options instead? See our{" "}
          <Link href="/paid-ai-tools" className="text-indigo-300 underline decoration-indigo-400/40 hover:text-indigo-200">
            paid AI tools guide
          </Link>
          .
        </p>
      </header>

      {/* Grouped by category — mirrors the "free AI tools for X" SEO pattern */}
      {CATEGORIES.map((category) => {
        const tools = FREE_TOOLS.filter((tool) => tool.category === category.slug);
        if (tools.length === 0) return null;
        return (
          <section key={category.slug} aria-labelledby={`free-${category.slug}`} className="mb-12">
            <div className="mb-5 flex items-end justify-between">
              <h2 id={`free-${category.slug}`} className="text-xl font-bold text-white">
                <span aria-hidden="true">{category.icon}</span> Free AI tools for {category.name.toLowerCase()}
              </h2>
              <Link href={`/category/${category.slug}`} className="text-sm text-indigo-300 hover:text-indigo-200">
                All {category.name.toLowerCase()} →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="border-t border-white/10 pt-14">
        <FaqSection items={FAQ_ITEMS} heading="Free AI tools — FAQ" />
      </div>
    </div>
  );
}
