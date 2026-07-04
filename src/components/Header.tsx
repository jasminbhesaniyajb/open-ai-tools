import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/tools", label: "All tools" },
  { href: "/free-ai-tools", label: "Free AI tools" },
  { href: "/paid-ai-tools", label: "Paid AI tools" },
  { href: "/#categories", label: "Categories" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Open AI Tools home">
          <Logo size={30} />
          <span className="text-lg font-bold tracking-tight text-white">
            Open <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">AI</span> Tools
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tools"
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:brightness-110"
        >
          Explore tools
        </Link>
      </div>
    </header>
  );
}
