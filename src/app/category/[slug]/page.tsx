import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ToolCard from "@/components/ToolCard";
import { CATEGORIES, getCategory, getToolsByCategory } from "@/data/tools";
import { SITE, absoluteUrl } from "@/lib/site";

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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: category.name, item: absoluteUrl(`/category/${slug}`) },
          ],
        }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-slate-300">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-300">
            {category.name}
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span aria-hidden="true">{category.icon}</span> Best {category.name.toLowerCase()} AI tools
        </h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          {category.blurb} We compare {tools.length} standout tools below — including free options.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Cross-category internal links */}
      <section aria-labelledby="more-categories" className="mt-16 border-t border-white/10 pt-10">
        <h2 id="more-categories" className="text-lg font-bold text-white">
          Explore more categories
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {otherCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/category/${item.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
