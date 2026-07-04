import Link from "next/link";
import { SITE, absoluteUrl } from "@/lib/site";
import JsonLd from "./JsonLd";

export interface Crumb {
  name: string;
  /** Omit on the last (current) item. */
  href?: string;
}

// Visible breadcrumb trail + schema.org BreadcrumbList in one component so the
// two never drift apart. "Home" is prepended automatically.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            // Google allows omitting `item` on the final (current page) crumb.
            ...(crumb.href ? { item: crumb.href === "/" ? SITE.url : absoluteUrl(crumb.href) } : {}),
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((crumb, index) => (
            <li key={`${crumb.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-slate-900 dark:hover:text-slate-300">
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-slate-700 dark:text-slate-300">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
