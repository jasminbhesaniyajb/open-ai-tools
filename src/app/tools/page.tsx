import type { Metadata } from "next";
import ToolsExplorer from "@/components/ToolsExplorer";
import { TOOLS } from "@/data/tools";

export const metadata: Metadata = {
  title: `All AI tools — browse ${TOOLS.length}+ curated AI apps`,
  description: `Browse ${TOOLS.length}+ hand-curated AI tools. Filter by category and pricing (free, freemium, paid) and search to find the perfect AI tool for any task.`,
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">All AI tools</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Search and filter {TOOLS.length}+ curated AI tools by category and pricing. Every tool includes an honest summary, key features, and its pricing model.
        </p>
      </header>
      <ToolsExplorer tools={TOOLS} />
    </div>
  );
}
