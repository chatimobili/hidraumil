import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";
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
      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          {children}

          <section className="bg-[#FEF3EC] rounded-2xl p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Cobertura</p>
            <h2 className="mt-3 text-secondary">Atendemos em Cascavel e Região Oeste do Paraná</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nossa equipe atende toda a região: Cascavel, Toledo, Foz do Iguaçu, Marechal Cândido Rondon, Medianeira, Assis Chateaubriand, Palotina, Santa Helena, Guaíra e demais cidades do Oeste do Paraná. Vamos até o seu galpão ou recebemos a paleteira na nossa oficina em Cascavel.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-secondary"><MapPin className="h-4 w-4 text-primary" /> Sede: Cascavel, Paraná</div>
          </section>

          <section className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Orçamento</p>
              <h2 className="text-secondary">Solicite seu orçamento</h2>
              <p className="text-muted-foreground text-lg">Resposta rápida pelo WhatsApp. Sem compromisso.</p>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition">
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
  return <h2 className="text-secondary">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-secondary mt-8">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-muted-foreground leading-relaxed">{children}</p>;
}
