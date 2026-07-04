import JsonLd from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

// FAQ accordion + FAQPage structured data for rich results.
export default function FaqSection({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
        {heading}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-slate-200 bg-white transition-colors open:border-indigo-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:open:border-indigo-400/30 dark:open:bg-white/[0.05]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-slate-400 transition-transform group-open:rotate-45 dark:text-slate-500">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
