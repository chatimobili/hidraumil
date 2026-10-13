import { Link } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { CheckCircle2, HelpCircle } from "lucide-react";

export type CitySlug = "toledo" | "foz-do-iguacu" | "marechal-candido-rondon" | "medianeira" | "assis-chateaubriand" | "palotina" | "santa-helena" | "corbelia";

export interface CityContent {
  city: string;
  citySlug: CitySlug;
  distanceKm: number;
  road: string;
  seoTitle: string;
  description: string;
  subtitle: string;
  intro: string;
  economy: string;
  logistics: string;
  useCases: string[];
  problemsH2: string;
  problems: { title: string; text: string }[];
  preventive: string;
  nearbyCities: { name: string; slug: CitySlug }[];
  nearbyIntro: string;
  uniqueFaqs: { q: string; a: string }[];
  coverage: string;
  budget: string;
  benefits: string[];
}

export function CityServicePage({ content }: { content: CityContent }) {
  const pageUrl = `https://hidraumil.lovable.app/manutencao-paleteira-hidraulica-${content.citySlug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.uniqueFaqs.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://hidraumil.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Cidades atendidas", item: "https://hidraumil.lovable.app/cidades-atendidas" },
      { "@type": "ListItem", position: 3, name: content.city, item: pageUrl },
    ],
  };
  return (
    <ServicePageShell
      title={`Manutenção de Paleteira Hidráulica em ${content.city}`}
      subtitle={content.subtitle}
      serviceName={`Manutenção de paleteira hidráulica em ${content.city}`}
      factualCopy
      cityCopy={{ city: content.city, coverage: content.coverage, budget: content.budget, benefits: content.benefits }}
    >
      <section>
        <H2>Paleteiras hidráulicas em {content.city}</H2>
        <P>{content.intro}</P>
        <P>{content.economy}</P>
      </section>
      <section>
        <H2>Atendimento em {content.city} a partir de Cascavel</H2>
        <P>{content.logistics}</P>
      </section>
      <section>
        <H2>Segmentos que atendemos em {content.city}</H2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {content.useCases.map(text => (
            <li key={text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-secondary">{text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <H2>{content.problemsH2}</H2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {content.problems.map(problem => (
            <div key={problem.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-secondary">{problem.title}</h3>
              <P>{problem.text}</P>
            </div>
          ))}
        </div>
        <P>{content.preventive}</P>
      </section>
      <section>
        <H2>Perguntas frequentes sobre paleteira em {content.city}</H2>
        <div className="mt-6 space-y-4">
          {content.uniqueFaqs.map(({ q, a }) => (
            <details key={q} className="group rounded-2xl border border-border bg-card p-6 open:shadow-md transition">
              <summary className="flex cursor-pointer list-none items-start gap-3 font-semibold text-secondary">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="flex-1">{q}</span>
              </summary>
              <p className="mt-3 pl-8 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section>
        <H2>Também atendemos</H2>
        <P>{content.nearbyIntro}</P>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {content.nearbyCities.map(city => (
            <Link key={city.slug} to={`/manutencao-paleteira-hidraulica-${city.slug}`} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">
              Paleteira em {city.name}
            </Link>
          ))}
          <Link to="/cidades-atendidas" className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-secondary transition hover:border-primary hover:text-primary">Todas as cidades atendidas</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </ServicePageShell>
  );
}
