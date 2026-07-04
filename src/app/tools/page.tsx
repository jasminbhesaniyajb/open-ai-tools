import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ToolsExplorer from "@/components/ToolsExplorer";
import { TOOLS } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `All AI tools — browse ${TOOLS.length}+ curated AI apps`,
  description: `Browse ${TOOLS.length}+ hand-curated AI tools. Filter by category and pricing (free, freemium, paid) and search to find the perfect AI tool for any task.`,
  alternates: { canonical: "/tools" },
  openGraph: {
    title: `All AI tools — browse ${TOOLS.length}+ curated AI apps`,
    description: `Filter ${TOOLS.length}+ AI tools by category and pricing to find the perfect tool for any task.`,
    url: absoluteUrl("/tools"),
  },
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "All AI tools",
          url: absoluteUrl("/tools"),
          description: `Directory of ${TOOLS.length}+ curated AI tools with categories and pricing.`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: TOOLS.length,
            itemListElement: TOOLS.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.name,
              url: absoluteUrl(`/tools/${tool.slug}`),
            })),
          },
        }}
      />
      <Breadcrumbs items={[{ name: "All AI tools" }]} />
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">All AI tools</h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          Search and filter {TOOLS.length}+ curated AI tools by category and pricing. Every tool includes an honest summary, key features, and its pricing model.
        </p>
      </header>
      <ToolsExplorer tools={TOOLS} />
    </div>
  );
}
