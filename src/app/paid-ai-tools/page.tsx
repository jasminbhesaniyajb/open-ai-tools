import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import { CATEGORIES, getToolsByPricing } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";

const PAID_TOOLS = getToolsByPricing("paid", "free-trial");

export const metadata: Metadata = {
  title: `Best paid AI tools in 2026 — premium AI software worth paying for`,
  description: `${PAID_TOOLS.length}+ premium AI tools that justify their price: professional video, enterprise writing, SEO suites, and revenue intelligence. Compare features before you buy.`,
  alternates: { canonical: "/paid-ai-tools" },
  openGraph: {
    title: "Best paid AI tools in 2026",
    description: "Premium AI software worth paying for — compared with features and pricing models.",
    url: absoluteUrl("/paid-ai-tools"),
  },
};

const FAQ_ITEMS = [
  {
    question: "Are paid AI tools worth it over free alternatives?",
    answer:
      "For professional use, often yes. Paid tools typically offer higher output quality, commercial licensing, team features, and reliability guarantees that free tiers don't. The right choice depends on how often you'll use the tool and whether its output directly earns you money.",
  },
  {
    question: "What should I check before paying for an AI tool?",
    answer:
      "Confirm the pricing tier includes the features you actually need (many advertise capabilities locked behind higher plans), check usage limits, verify commercial usage rights, and test the free trial where available before committing annually.",
  },
  {
    question: "Do paid AI tools offer free trials?",
    answer:
      "Many do — tools marked 'Free trial' here let you test the full product before paying. Others marked 'Paid' may offer money-back guarantees instead; check each tool's official site.",
  },
];

export default function PaidAiToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best paid AI tools",
          numberOfItems: PAID_TOOLS.length,
          itemListElement: PAID_TOOLS.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.name,
            url: absoluteUrl(`/tools/${tool.slug}`),
          })),
        }}
      />

      <header className="mb-12 max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          The best <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">paid AI tools</span> worth the money
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          Premium AI software delivers where free tiers stop: commercial licensing, studio-grade output, and enterprise features. These {PAID_TOOLS.length} tools
          earn their subscription. On a budget? Start with our{" "}
          <Link href="/free-ai-tools" className="text-indigo-300 underline decoration-indigo-400/40 hover:text-indigo-200">
            free AI tools guide
          </Link>
          .
        </p>
      </header>

      {CATEGORIES.map((category) => {
        const tools = PAID_TOOLS.filter((tool) => tool.category === category.slug);
        if (tools.length === 0) return null;
        return (
          <section key={category.slug} aria-labelledby={`paid-${category.slug}`} className="mb-12">
            <div className="mb-5 flex items-end justify-between">
              <h2 id={`paid-${category.slug}`} className="text-xl font-bold text-white">
                <span aria-hidden="true">{category.icon}</span> Paid AI tools for {category.name.toLowerCase()}
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
        <FaqSection items={FAQ_ITEMS} heading="Paid AI tools — FAQ" />
      </div>
    </div>
  );
}
