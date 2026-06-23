import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ShieldCheck, Clock, Award } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  showCTA = true,
  badges = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  showCTA?: boolean;
  badges?: boolean;
}) {
  return (
    <section className="relative bg-[#FEF3EC] overflow-hidden">
      {/* Decorative orange blob */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 text-3xl md:text-[44px] font-semibold leading-[1.1] text-secondary">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-[1.55] max-w-2xl">
              {subtitle}
            </p>
          )}

          {showCTA && (
            <div className="mt-8 flex items-center gap-5 flex-wrap">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Solicitar orçamento
              </a>
              <a
                href="#detalhes"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition"
              >
                Conheça o serviço ↓
              </a>
            </div>
          )}

          {badges && (
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                { icon: Award, t: "+15 anos de experiência" },
                { icon: ShieldCheck, t: "Garantia formal" },
                { icon: Clock, t: "Resposta em até 2h úteis" },
              ].map(({ icon: Icon, t }) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary shadow-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>

    </section>
  );
}
