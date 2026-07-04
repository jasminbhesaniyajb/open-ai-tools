"use client";

// Toggles the `.dark` class on <html> and persists the choice. The sun/moon icons
// swap purely via CSS (dark:hidden / dark:block), so no state or hydration concerns.
export default function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — theme just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {/* Moon — shown in light mode (click to go dark) */}
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5 dark:hidden" aria-hidden="true">
        <path d="M17.3 12.1a7.5 7.5 0 01-9.4-9.4A7.5 7.5 0 1017.3 12z" />
      </svg>
      {/* Sun — shown in dark mode (click to go light) */}
      <svg viewBox="0 0 20 20" fill="currentColor" className="hidden h-4.5 w-4.5 dark:block" aria-hidden="true">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 12a4 4 0 100-8 4 4 0 000 8zm0 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-6a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm11.66-5.66a1 1 0 010 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.42 0zM6.46 13.54a1 1 0 010 1.41l-.7.71a1 1 0 01-1.42-1.42l.71-.7a1 1 0 011.41 0zm9.2 2.12a1 1 0 01-1.42 0l-.7-.71a1 1 0 011.41-1.41l.71.7a1 1 0 010 1.42zM6.46 6.46a1 1 0 01-1.41 0l-.71-.7a1 1 0 011.42-1.42l.7.71a1 1 0 010 1.41z" />
      </svg>
    </button>
  );
}
