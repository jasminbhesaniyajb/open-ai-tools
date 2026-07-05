"use client";

import type { Tool } from "@/data/tools";
import { getLogoCandidates } from "@/data/tools";
import { useMemo, useState } from "react";

const GRADIENTS = [
  "from-indigo-500 to-cyan-400",
  "from-violet-500 to-fuchsia-400",
  "from-sky-500 to-emerald-400",
  "from-rose-500 to-orange-400",
  "from-amber-500 to-lime-400",
  "from-purple-500 to-sky-400",
];

function gradientFor(slug: string): string {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) % 997;
  return GRADIENTS[hash % GRADIENTS.length];
}

export default function ToolLogo({
  tool,
  className = "h-11 w-11",
  imageClassName = "rounded-xl",
}: {
  tool: Tool;
  className?: string;
  imageClassName?: string;
}) {
  const logoCandidates = useMemo(() => {
    const candidates = tool.logo ? [tool.logo] : [];
    const fallback = getLogoCandidates(tool.url);
    return [...new Set([...candidates, ...fallback])];
  }, [tool.logo, tool.url]);

  const [logoIndex, setLogoIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);

  const currentLogo = logoCandidates[logoIndex];
  const showInitial = !currentLogo || logoError;

  const handleLogoError = () => {
    if (logoIndex < logoCandidates.length - 1) {
      setLogoIndex((index) => index + 1);
      return;
    }
    setLogoError(true);
  };

  if (showInitial) {
    return (
      <span
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-bold text-white ${gradientFor(tool.slug)} ${className}`}
      >
        {tool.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={currentLogo}
      alt={`${tool.name} logo`}
      loading="lazy"
      decoding="async"
      onError={handleLogoError}
      className={`shrink-0 border border-slate-200 bg-white object-contain p-1.5 dark:border-white/10 dark:bg-slate-900 ${className} ${imageClassName}`}
    />
  );
}
