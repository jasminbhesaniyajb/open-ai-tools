import { PRICING_LABELS, type Pricing } from "@/data/tools";

const STYLES: Record<Pricing, string> = {
  free: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  freemium: "bg-sky-500/15 text-sky-300 ring-sky-400/30",
  paid: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  "free-trial": "bg-violet-500/15 text-violet-300 ring-violet-400/30",
};

export default function PricingBadge({ pricing }: { pricing: Pricing }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${STYLES[pricing]}`}>
      {PRICING_LABELS[pricing]}
    </span>
  );
}
