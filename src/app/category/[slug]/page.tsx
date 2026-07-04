import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import { CATEGORIES, getCategory, getToolsByCategory } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const count = getToolsByCategory(slug).length;
  const title = `Best ${category.name} AI tools in 2026 (${count} compared)`;
  const description = `${category.blurb} Compare the ${count} best ${category.name.toLowerCase()} tools — free and paid — with features and pricing.`;
  return {
    title,
    description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: { title, description, url: absoluteUrl(`/category/${slug}`) },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const tools = getToolsByCategory(slug);
  const otherCategories = CATEGORIES.filter((item) => item.slug !== slug).slice(0, 8);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Best ${category.name} AI tools`,
          numberOfItems: tools.length,
          itemListElement: tools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.name,
            url: absoluteUrl(`/tools/${tool.slug}`),
          })),
        }}
      />
      <Breadcrumbs items={[{ name: category.name }]} />

      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          <span aria-hidden="true">{category.icon}</span> Best {category.name.toLowerCase()} AI tools
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
          {category.blurb} We compare {tools.length} standout tools below — including free options.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Cross-category internal links */}
      <section aria-labelledby="more-categories" className="mt-16 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 id="more-categories" className="text-lg font-bold text-slate-900 dark:text-white">
          Explore more categories
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {otherCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/category/${item.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 transition-colors hover:border-indigo-400/50 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400/40 dark:hover:text-white"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
