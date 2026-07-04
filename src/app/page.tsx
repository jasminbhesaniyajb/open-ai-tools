import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import ToolCard from "@/components/ToolCard";
import { CATEGORIES, TOOLS, categoryCount, getFeaturedTools, getToolsByPricing } from "@/data/tools";

const FAQ_ITEMS = [
  {
    question: "What is the best free AI tool in 2026?",
    answer:
      "It depends on the task: ChatGPT and Claude lead for general assistance, NotebookLM is the standout free research tool, Meta AI is fully free for chat and images, and Stable Diffusion remains the best free image model you can run yourself. Browse our free AI tools page to compare all of them by category.",
  },
  {
    question: "What's the difference between free, freemium, and paid AI tools?",
    answer:
      "Free tools cost nothing to use. Freemium tools offer a genuinely useful free tier with paid upgrades for higher limits or advanced features — most popular AI tools follow this model. Paid tools require a subscription from day one, and free-trial tools let you test everything for a limited time before paying.",
  },
  {
    question: "How do you choose the tools listed on Open AI Tools?",
    answer:
      "We curate tools based on real-world popularity, output quality, active development, and value for money. Every listing includes an honest summary, key features, and current pricing model, so you can decide quickly whether a tool fits your workflow.",
  },
  {
    question: "Which AI tool should I use for writing?",
    answer:
      "For everyday polish across all your apps, Grammarly is hard to beat. For marketing content at scale, look at Jasper or Copy.ai. QuillBot is excellent for paraphrasing on a budget, and general assistants like ChatGPT and Claude handle long-form drafting brilliantly.",
  },
  {
    question: "Are AI tools safe to use for commercial work?",
    answer:
      "Most are, but check each tool's licensing. Adobe Firefly is explicitly trained on licensed content for commercial safety, and most major platforms grant you rights to your outputs on paid plans. Always review the terms of the specific tool before shipping client work.",
  },
];

export default function HomePage() {
  const featured = getFeaturedTools();
  const freeTools = getToolsByPricing("free", "freemium").slice(0, 6);

  return (
    <>
      {/* ── Hero ── */}
      <section className="aurora relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <span aria-hidden="true">✨</span> {TOOLS.length}+ curated tools · {CATEGORIES.length} categories · updated for 2026
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Discover the best{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">AI tools</span> for every task
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            A hand-curated directory of free and paid AI tools — chat assistants, image and video generators, coding copilots, writing aids, and more. Honest
            summaries. Clear pricing. No fluff.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:brightness-110"
            >
              Browse all tools
            </Link>
            <Link
              href="/free-ai-tools"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Free AI tools →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured tools ── */}
      <section aria-labelledby="featured-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 id="featured-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Featured AI tools
            </h2>
            <p className="mt-1 text-slate-400">Editor&rsquo;s picks — the tools defining each category right now.</p>
          </div>
          <Link href="/tools" className="hidden text-sm font-medium text-indigo-300 hover:text-indigo-200 sm:block">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" aria-labelledby="categories-heading" className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 id="categories-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Browse by category
          </h2>
          <p className="mt-1 text-slate-400">Jump straight to the type of AI tool you need.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition-all hover:border-indigo-400/40 hover:bg-white/[0.06]"
              >
                <span aria-hidden="true" className="text-2xl">
                  {category.icon}
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-white group-hover:text-indigo-200">{category.name}</span>
                  <span className="text-xs text-slate-500">{categoryCount(category.slug)} tools</span>
                </span>
                <span aria-hidden="true" className="text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-300">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free tools teaser ── */}
      <section aria-labelledby="free-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 id="free-heading" className="text-2xl font-bold text-white sm:text-3xl">
              Start free — no credit card needed
            </h2>
            <p className="mt-1 text-slate-400">Powerful AI tools with genuinely useful free tiers.</p>
          </div>
          <Link href="/free-ai-tools" className="hidden text-sm font-medium text-indigo-300 hover:text-indigo-200 sm:block">
            All free tools →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freeTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/free-ai-tools" className="text-sm font-medium text-indigo-300 hover:text-indigo-200">
            All free tools →
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/5 bg-white/[0.02] px-4 py-16 sm:px-6">
        <FaqSection items={FAQ_ITEMS} />
      </section>
    </>
  );
}
