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
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-white sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors open:border-indigo-400/30 open:bg-white/[0.05]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-white [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
