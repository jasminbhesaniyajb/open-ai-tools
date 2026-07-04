"use client";

import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, PRICING_LABELS, type Pricing, type Tool } from "@/data/tools";
import ToolCard from "./ToolCard";

const PRICING_FILTERS: Array<{ value: Pricing | "all"; label: string }> = [
  { value: "all", label: "All pricing" },
  { value: "free", label: PRICING_LABELS.free },
  { value: "freemium", label: PRICING_LABELS.freemium },
  { value: "paid", label: PRICING_LABELS.paid },
  { value: "free-trial", label: PRICING_LABELS["free-trial"] },
];

export default function ToolsExplorer({ tools, initialCategory = "all" }: { tools: Tool[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [pricing, setPricing] = useState<Pricing | "all">("all");

  // Supports the sitewide SearchAction (schema.org): /tools?q=term pre-fills the search.
  // Read once on mount from the URL so the page itself stays fully static. Deferred a
  // tick so hydration completes with the server-rendered empty value first.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (!q) return;
    const id = setTimeout(() => setQuery(q), 0);
    return () => clearTimeout(id);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      if (category !== "all" && tool.category !== category) return false;
      if (pricing !== "all" && tool.pricing !== pricing) return false;
      if (q && !`${tool.name} ${tool.tagline} ${tool.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [tools, query, category, pricing]);

  return (
    <div className="space-y-6">
      {/* Search + filters */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <svg viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.45 4.4l3.32 3.33a.75.75 0 11-1.06 1.06l-3.33-3.32A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search AI tools…"
            aria-label="Search AI tools"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          />
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
          className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-slate-200 focus:border-indigo-400/60 focus:outline-none"
        >
          <option value="all">All categories</option>
          {CATEGORIES.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Pricing pills */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by pricing">
        {PRICING_FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setPricing(filter.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              pricing === filter.value ? "bg-indigo-500 text-white shadow shadow-indigo-500/30" : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {filter.label}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-slate-500">
          {filtered.length} tool{filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
          <p className="text-lg font-medium text-white">No tools match your filters</p>
          <p className="mt-1 text-sm text-slate-400">Try a different search term or clear the filters.</p>
        </div>
      )}
    </div>
  );
}
