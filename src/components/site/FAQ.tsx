import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem { q: string; a: string; }

export function FAQ({ items, withSchema = true }: { items: FAQItem[]; withSchema?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(i => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <div className="mx-auto max-w-3xl">
      <ul className="divide-y divide-border rounded-xl border border-border bg-white shadow-sm">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <li key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-secondary">{it.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{it.a}</div>}
            </li>
          );
        })}
      </ul>
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </div>
  );
}
