import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-hero opacity-60" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl font-semibold leading-[1.1]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/80 text-lg leading-[1.5]">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
