import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/data/tools";
import Logo from "./Logo";

const MAINTAINER = {
  name: "Jasmin Bhesaniya",
  portfolio: "https://jasminbhesaniya.com/",
  phone: "+91 78746 79215",
  email: "jasminbhesaniyajb@gmail.com",
  github: "https://github.com/jasminbhesaniyajb/betteropensource",
  linkedin: "https://www.linkedin.com/in/jasmin-bhesaniya",
  x: "https://x.com/BhesaniyaJb",
};

const SOCIALS = [
  {
    label: "GitHub",
    href: MAINTAINER.github,
    icon: (
      <path d="M10 .5a9.5 9.5 0 00-3 18.5c.47.09.65-.2.65-.45v-1.6c-2.65.58-3.2-1.27-3.2-1.27-.44-1.1-1.06-1.4-1.06-1.4-.87-.6.06-.58.06-.58.96.07 1.46.98 1.46.98.85 1.46 2.23 1.04 2.78.8.08-.62.33-1.05.6-1.29-2.1-.24-4.32-1.06-4.32-4.7 0-1.04.37-1.88.98-2.55-.1-.24-.42-1.21.09-2.53 0 0 .8-.25 2.61.97a9.1 9.1 0 014.76 0c1.81-1.22 2.6-.97 2.6-.97.52 1.32.2 2.29.1 2.53.61.67.98 1.51.98 2.55 0 3.65-2.23 4.45-4.35 4.69.34.3.65.87.65 1.76v2.6c0 .26.17.55.66.45A9.5 9.5 0 0010 .5z" />
    ),
  },
  {
    label: "LinkedIn",
    href: MAINTAINER.linkedin,
    icon: (
      <path d="M17 1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V3a2 2 0 00-2-2zM6.7 16.3H4.2V8.1h2.5v8.2zM5.4 7a1.5 1.5 0 110-2.9 1.5 1.5 0 010 2.9zm10.9 9.3h-2.5v-4c0-.95-.02-2.17-1.32-2.17-1.33 0-1.53 1.03-1.53 2.1v4.07H8.5V8.1h2.4v1.12h.03a2.63 2.63 0 012.37-1.3c2.53 0 3 1.67 3 3.84v4.54z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: MAINTAINER.x,
    icon: <path d="M11.9 8.46L18.83 .5h-1.64L11.17 7.4 6.36.5H.81l7.26 10.44L.81 19.5h1.64l6.35-7.3 5.07 7.3h5.55L11.9 8.46zm-2.25 2.58l-.74-1.04L3.04 1.72h2.52l4.72 6.68.74 1.04 6.14 8.69h-2.52l-5-7.09z" />,
  },
];

export default function Footer() {
  const half = Math.ceil(CATEGORIES.length / 2);
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label="AI Tool Atlas home">
              <Logo size={28} />
              <span className="text-lg font-bold text-slate-900 dark:text-white">AI Tool Atlas</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              A hand-curated directory of {TOOLS.length}+ AI tools across {CATEGORIES.length} categories. Find the right free or paid AI tool for any task — updated
              regularly.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link href="/free-ai-tools" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
                Free AI tools
              </Link>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <Link href="/paid-ai-tools" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
                Paid AI tools
              </Link>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <Link href="/tools" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
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
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        {/* ── Built and maintained by ── */}
        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/[0.03]">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Built and maintained by</p>
            <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">{MAINTAINER.name}</p>
            <div className="mt-3 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-indigo-400/50 hover:text-indigo-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-indigo-300"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <a
              href={MAINTAINER.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.26 6.26A6 6 0 004.2 9h2.6c.1-1.05.34-2 .68-2.74a5.4 5.4 0 01-1.22 0zm2.06-1.9C7.9 5.1 7.55 6 7.4 7h5.2c-.15-1-.5-1.9-.92-2.64C11.2 3.5 10.6 3.2 10 3.2s-1.2.3-1.68 1.16zM13.2 9a10.6 10.6 0 00-.68-2.74c.42.05.83.05 1.22 0A6 6 0 0115.8 9h-2.6zm-.68 4.74c.34-.74.58-1.69.68-2.74h2.6a6 6 0 01-2.06 2.74 5.4 5.4 0 00-1.22 0zM10 16.8c.6 0 1.2-.3 1.68-1.16.42-.74.77-1.64.92-2.64H7.4c.15 1 .5 1.9.92 2.64.48.86 1.08 1.16 1.68 1.16zm-3.74-3.06c-.34-.74-.58-1.69-.68-2.74H4.2a6 6 0 002.06 2.74c.4-.05.8-.05 1.22 0z"
                  clipRule="evenodd"
                />
              </svg>
              Portfolio
            </a>
            <a
              href={`tel:${MAINTAINER.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1.15a1.5 1.5 0 011.47 1.2l.44 2.19a1.5 1.5 0 01-.83 1.65l-.9.45a11.04 11.04 0 005.68 5.68l.45-.9a1.5 1.5 0 011.65-.83l2.19.44A1.5 1.5 0 0118 13.35v1.15a1.5 1.5 0 01-1.5 1.5h-1A13.5 13.5 0 012 4.5v-1z" />
              </svg>
              {MAINTAINER.phone}
            </a>
            <a
              href={`mailto:${MAINTAINER.email}`}
              className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M3 4a2 2 0 00-2 2v1.16l9 4.5 9-4.5V6a2 2 0 00-2-2H3z" />
                <path d="M19 9.06l-8.55 4.27a1 1 0 01-.9 0L1 9.06V14a2 2 0 002 2h14a2 2 0 002-2V9.06z" />
              </svg>
              {MAINTAINER.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-white/10">
          © {new Date().getFullYear()} AI Tool Atlas. All product names and logos are trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
