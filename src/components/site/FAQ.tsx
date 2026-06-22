import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <div className="space-y-4">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-secondary">{it.q}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center text-primary">
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-4 text-muted-foreground leading-relaxed">
                  {it.a}
                </div>
              </div>
            )}
          </div>
        );
      })}
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </div>
  );
}
