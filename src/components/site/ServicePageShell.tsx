import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import { FiquePorDentro } from "@/components/site/FiquePorDentro";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";
import { MapPin, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function ServicePageShell({
  title,
  subtitle,
  serviceName,
  children,
}: {
  title: string;
  subtitle: string;
  serviceName: string;
  children: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      address: { "@type": "PostalAddress", addressLocality: "Cascavel", addressRegion: "PR", addressCountry: "BR" },
      telephone: SITE.phoneE164,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Oeste do Paraná" },
  };

  return (
    <>
      <PageHero eyebrow="Cascavel · PR" title={title} subtitle={subtitle} />

      <article id="detalhes" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 space-y-20">
          {children}

          {/* Cobertura */}
          <section className="relative overflow-hidden rounded-[2rem] bg-[#0F1C2E] text-white p-10 md:p-14">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Cobertura</p>
                <h2 className="mt-3 text-white leading-[1.15]">
                  Atendemos em Cascavel e toda a <span className="text-primary">Região Oeste do Paraná</span>
                </h2>
                <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
                  Cascavel, Toledo, Foz do Iguaçu, Marechal Cândido Rondon, Medianeira, Assis Chateaubriand,
                  Palotina, Santa Helena, Guaíra e demais cidades do Oeste do Paraná. Vamos até o seu galpão
                  ou recebemos a paleteira na nossa oficina em Cascavel.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <MapPin className="h-4 w-4 text-primary" /> Sede: Cascavel, Paraná
                </div>
              </div>
              <div className="hidden lg:flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <MapPin className="h-14 w-14 text-primary" />
              </div>
            </div>
          </section>

          {/* Orçamento */}
          <section className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Orçamento</p>
              <h2 className="text-secondary leading-[1.15]">Solicite seu orçamento</h2>
              <p className="text-muted-foreground text-lg leading-[1.55]">
                Resposta rápida pelo WhatsApp ou pelo formulário. Sem compromisso.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Orçamento gratuito",
                  "Diagnóstico técnico especializado",
                  "Garantia formal por escrito",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Falar pelo WhatsApp
              </a>
            </div>
            <div className="lg:col-span-3"><ContactForm /></div>
          </section>
        </div>
      </article>

      <CTASection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-[1.15]">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 text-xl md:text-2xl font-semibold text-secondary leading-snug">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-muted-foreground text-lg leading-[1.7]">{children}</p>;
}

export function ServiceSection({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <section>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">{eyebrow}</p>
      )}
      {children}
    </section>
  );
}
