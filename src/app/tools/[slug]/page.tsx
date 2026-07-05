import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PricingBadge from "@/components/PricingBadge";
import ToolCard from "@/components/ToolCard";
import ToolLogo from "@/components/ToolLogo";
import { PRICING_LABELS, TOOLS, getCategory, getRelatedTools, getTool } from "@/data/tools";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
          // Offer requires a concrete price — only free tools can state one truthfully;
          // the rich-result eligibility for the rest comes from aggregateRating.
          ...(tool.pricing === "free" || tool.pricing === "freemium"
            ? { offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: PRICING_LABELS[tool.pricing] } }
            : {}),
          aggregateRating: { "@type": "AggregateRating", ratingValue: tool.rating, bestRating: 5, ratingCount: 100 },
        }}
      />
      <Breadcrumbs items={[{ name: category?.name ?? "Tools", href: `/category/${tool.category}` }, { name: tool.name }]} />

      {/* Hero */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <ToolLogo tool={tool} className="h-16 w-16" imageClassName="rounded-2xl" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{tool.name}</h1>
            <p className="mt-1.5 text-lg text-slate-600 dark:text-slate-400">{tool.tagline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <PricingBadge pricing={tool.pricing} />
              <Link
                href={`/category/${tool.category}`}
                className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              >
                {category?.icon} {category?.name}
              </Link>
              <span className="inline-flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
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
        <h2 id="overview-heading" className="text-xl font-bold text-slate-900 dark:text-white">
          What is {tool.name}?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{tool.description}</p>
      </section>

      {/* Key features */}
      <section aria-labelledby="features-heading" className="mt-10">
        <h2 id="features-heading" className="text-xl font-bold text-slate-900 dark:text-white">
          Key features
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {tool.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
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
        <h2 id="pricing-heading" className="text-xl font-bold text-slate-900 dark:text-white">
          Pricing
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
          {tool.name} follows a <strong className="text-slate-900 dark:text-white">{PRICING_LABELS[tool.pricing].toLowerCase()}</strong> model.{" "}
          {tool.pricing === "free" && "It's completely free to use — no subscription required."}
          {tool.pricing === "freemium" && "You can start free and upgrade for higher limits or advanced features when you need them."}
          {tool.pricing === "paid" && "A paid subscription is required; check the official site for current plans."}
          {tool.pricing === "free-trial" && "You can test everything during the trial period before committing to a paid plan."}{" "}
          Visit the{" "}
          <a href={tool.url} target="_blank" rel="noopener noreferrer nofollow" className="text-indigo-600 underline decoration-indigo-500/40 hover:text-indigo-500 dark:text-indigo-300 dark:decoration-indigo-400/40 dark:hover:text-indigo-200">
            official {tool.name} website
          </a>{" "}
          for up-to-date pricing.
        </p>
      </section>

      {/* Alternatives — TAAFT-style internal linking */}
      {alternatives.length > 0 && (
        <section aria-labelledby="alternatives-heading" className="mt-14">
          <h2 id="alternatives-heading" className="text-xl font-bold text-slate-900 dark:text-white">
            {tool.name} alternatives
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">More {category?.name.toLowerCase()} tools worth comparing.</p>
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
