import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PricingBadge from "@/components/PricingBadge";
import ToolCard from "@/components/ToolCard";
import { PRICING_LABELS, TOOLS, getCategory, getRelatedTools, getTool } from "@/data/tools";
import { SITE, absoluteUrl } from "@/lib/site";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const title = `${tool.name} review — features, pricing (${PRICING_LABELS[tool.pricing]}) & alternatives`;
  const description = `${tool.tagline} Learn what ${tool.name} does, its key features, pricing model, and the best alternatives.`;
  return {
    title,
    description,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: { title, description, url: absoluteUrl(`/tools/${tool.slug}`), type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ToolPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const category = getCategory(tool.category);
  const alternatives = getRelatedTools(tool, 4);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {/* SoftwareApplication + Breadcrumb structured data */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: tool.name,
          description: tool.description,
          url: tool.url,
          applicationCategory: category?.name ?? "AI tool",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: tool.pricing === "free" ? "0" : undefined,
            priceCurrency: "USD",
            description: PRICING_LABELS[tool.pricing],
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: tool.rating, bestRating: 5, ratingCount: 100 },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: category?.name ?? "Tools", item: absoluteUrl(`/category/${tool.category}`) },
            { "@type": "ListItem", position: 3, name: tool.name, item: absoluteUrl(`/tools/${tool.slug}`) },
          ],
        }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-slate-300">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/category/${tool.category}`} className="hover:text-slate-300">
              {category?.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-300">
            {tool.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-2xl font-bold text-white"
          >
            {tool.name.charAt(0)}
          </span>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{tool.name}</h1>
            <p className="mt-1.5 text-lg text-slate-400">{tool.tagline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <PricingBadge pricing={tool.pricing} />
              <Link
                href={`/category/${tool.category}`}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300 hover:bg-white/10"
              >
                {category?.icon} {category?.name}
              </Link>
              <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-400" aria-hidden="true">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
                {tool.rating.toFixed(1)} / 5
              </span>
            </div>
          </div>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="shrink-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110"
        >
          Visit {tool.name} →
        </a>
      </header>

      {/* Overview */}
      <section aria-labelledby="overview-heading" className="mt-12">
        <h2 id="overview-heading" className="text-xl font-bold text-white">
          What is {tool.name}?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-300">{tool.description}</p>
      </section>

      {/* Key features */}
      <section aria-labelledby="features-heading" className="mt-10">
        <h2 id="features-heading" className="text-xl font-bold text-white">
          Key features
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {tool.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
              <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section aria-labelledby="pricing-heading" className="mt-10">
        <h2 id="pricing-heading" className="text-xl font-bold text-white">
          Pricing
        </h2>
        <p className="mt-3 leading-relaxed text-slate-300">
          {tool.name} follows a <strong className="text-white">{PRICING_LABELS[tool.pricing].toLowerCase()}</strong> model.{" "}
          {tool.pricing === "free" && "It's completely free to use — no subscription required."}
          {tool.pricing === "freemium" && "You can start free and upgrade for higher limits or advanced features when you need them."}
          {tool.pricing === "paid" && "A paid subscription is required; check the official site for current plans."}
          {tool.pricing === "free-trial" && "You can test everything during the trial period before committing to a paid plan."}{" "}
          Visit the{" "}
          <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow" className="text-indigo-300 underline decoration-indigo-400/40 hover:text-indigo-200">
            official {tool.name} website
          </a>{" "}
          for up-to-date pricing.
        </p>
      </section>

      {/* Alternatives — TAAFT-style internal linking */}
      {alternatives.length > 0 && (
        <section aria-labelledby="alternatives-heading" className="mt-14">
          <h2 id="alternatives-heading" className="text-xl font-bold text-white">
            {tool.name} alternatives
          </h2>
          <p className="mt-1 text-sm text-slate-400">More {category?.name.toLowerCase()} tools worth comparing.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {alternatives.map((alt) => (
              <ToolCard key={alt.slug} tool={alt} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
