import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/data/tools";
import Logo from "./Logo";

export default function Footer() {
  const half = Math.ceil(CATEGORIES.length / 2);
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Open AI Tools home">
              <Logo size={28} />
              <span className="text-lg font-bold text-white">Open AI Tools</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              A hand-curated directory of {TOOLS.length}+ AI tools across {CATEGORIES.length} categories. Find the right free or paid AI tool for any task — updated
              regularly.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link href="/free-ai-tools" className="text-indigo-300 hover:text-indigo-200">
                Free AI tools
              </Link>
              <span className="text-slate-600">·</span>
              <Link href="/paid-ai-tools" className="text-indigo-300 hover:text-indigo-200">
                Paid AI tools
              </Link>
              <span className="text-slate-600">·</span>
              <Link href="/tools" className="text-indigo-300 hover:text-indigo-200">
                All tools
              </Link>
            </div>
          </div>

          {/* Category links — strong internal linking for SEO */}
          {[CATEGORIES.slice(0, half), CATEGORIES.slice(half)].map((column, index) => (
            <nav key={index} aria-label={`Categories ${index + 1}`} className="space-y-2.5">
              {index === 0 && <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Categories</h2>}
              {index === 1 && <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 md:invisible md:block">&nbsp;</h2>}
              {column.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`} className="block text-sm text-slate-400 transition-colors hover:text-white">
                  {category.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Open AI Tools. All product names and logos are trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
