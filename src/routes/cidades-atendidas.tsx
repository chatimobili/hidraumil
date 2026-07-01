import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CITIES } from "@/lib/citiesServed";
import { MapPin, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/cidades-atendidas")({
  head: () => ({
    meta: [
      { title: "Cidades Atendidas no Oeste do Paraná | Hidraumil" },
      { name: "description", content: "Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Cascavel, Toledo, Foz do Iguaçu, Marechal C. Rondon, Medianeira, Palotina e mais cidades do Oeste do PR." },
      { property: "og:title", content: "Cidades Atendidas no Oeste do Paraná | Hidraumil" },
      { property: "og:description", content: "Veja todas as cidades atendidas pela Hidraumil no Oeste do Paraná." },
      { property: "og:url", content: "https://hidraumil.lovable.app/cidades-atendidas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.lovable.app/cidades-atendidas" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Cidades atendidas pela Hidraumil no Oeste do Paraná",
        itemListElement: [
          { city: "Cascavel", slug: "cascavel", route: "/manutencao-paleteiras-hidraulicas-cascavel" },
          ...CITIES.map(c => ({ city: c.city, slug: c.citySlug, route: `/manutencao-paleteira-hidraulica-${c.citySlug}` })),
        ].map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Paleteira hidráulica em ${c.city}`,
          url: `https://hidraumil.lovable.app${c.route}`,
        })),
      }),
    }],
  }),
  component: CidadesAtendidas,
});

function CidadesAtendidas() {
  const cascavel = {
    city: "Cascavel",
    citySlug: "cascavel",
    distanceKm: 0,
    driveTime: "sede",
    href: "/manutencao-paleteiras-hidraulicas-cascavel",
    highlight: true,
  };
  const others = CITIES.map(c => ({
    city: c.city,
    citySlug: c.citySlug,
    distanceKm: c.distanceKm,
    driveTime: c.driveTime,
    href: `/manutencao-paleteira-hidraulica-${c.citySlug}`,
    highlight: false,
  })).sort((a, b) => a.distanceKm - b.distanceKm);

  const allCities = [cascavel, ...others];

  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Cidades atendidas no Oeste do Paraná"
        subtitle="A Hidraumil atende toda a região Oeste do Paraná com manutenção, conserto, aluguel e venda de paleteiras hidráulicas. Confira abaixo as cidades com página dedicada e o que oferecemos em cada uma."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allCities.map((c) => (
              <Link
                key={c.citySlug}
                to={c.href}
                className={`group relative rounded-2xl border p-7 bg-white transition hover:-translate-y-1 hover:shadow-xl ${
                  c.highlight ? "border-primary shadow-md" : "border-gray-200"
                }`}
              >
                {c.highlight && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                    Sede
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-secondary leading-tight">{c.city}</h2>
                    <p className="text-xs text-muted-foreground">Paraná</p>
                  </div>
                </div>

                {!c.highlight && (
                  <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {c.distanceKm} km de Cascavel · {c.driveTime}
                  </p>
                )}

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em {c.city}.
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Ver serviços em {c.city} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[#FEF3EC] p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
              Sua cidade não está na lista?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Também atendemos outras cidades do Oeste e Sudoeste do Paraná mediante consulta.
              Fale com a gente pelo WhatsApp e confirmamos o atendimento na sua região.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-dark)] transition"
            >
              Falar com a Hidraumil <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
