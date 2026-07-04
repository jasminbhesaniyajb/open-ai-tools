import { PRICING_LABELS, type Pricing } from "@/data/tools";

const STYLES: Record<Pricing, string> = {
  free: "bg-emerald-500/10 text-emerald-700 ring-emerald-600/30 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-400/30",
  freemium: "bg-sky-500/10 text-sky-700 ring-sky-600/30 dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-400/30",
  paid: "bg-amber-500/10 text-amber-700 ring-amber-600/30 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-400/30",
  "free-trial": "bg-violet-500/10 text-violet-700 ring-violet-600/30 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-400/30",
};

export default function PricingBadge({ pricing }: { pricing: Pricing }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${STYLES[pricing]}`}>
      {PRICING_LABELS[pricing]}
    </span>
  );
}
