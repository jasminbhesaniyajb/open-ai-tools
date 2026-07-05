"use client";

import type { Tool } from "@/data/tools";
import { getCategory } from "@/data/tools";
import Link from "next/link";
import PricingBadge from "./PricingBadge";
import ToolLogo from "./ToolLogo";

export default function ToolCard({ tool }: { tool: Tool }) {
  const category = getCategory(tool.category);

  return (
    <article className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ToolLogo tool={tool} className="h-11 w-11" imageClassName="rounded-xl" />
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              <Link href={`/tools/${tool.slug}`} className="focus:outline-none">
                {/* Stretched link makes the whole card clickable */}
                <span className="absolute inset-0" aria-hidden="true" />
                {tool.name}
              </Link>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {category?.icon} {category?.name}
            </p>
          </div>
        </div>
        <PricingBadge pricing={tool.pricing} />
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{tool.tagline}</p>

      <div className="mt-auto flex items-center justify-between pt-1 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-amber-400" aria-hidden="true">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
          {tool.rating.toFixed(1)}
        </span>
        <span className="font-medium text-indigo-600 transition-colors group-hover:text-indigo-500 dark:text-indigo-300 dark:group-hover:text-indigo-200">View tool →</span>
      </div>
    </article>
  );
}
