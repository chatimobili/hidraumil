import { Link } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { CheckCircle2, MapPin, Truck, Clock, Wrench } from "lucide-react";

export interface CityContent {
  city: string;
  citySlug: string;
  distanceKm: number;
  driveTime: string;
  intro: string;
  economy: string;
  neighborhoods: string[];
  nearbyCities: { name: string; slug: string }[];
}

export function CityServicePage({ content }: { content: CityContent }) {
  const title = `Manutenção de Paleteira Hidráulica em ${content.city} - PR`;
  const subtitle = `Assistência técnica, conserto, aluguel e venda de paleteiras em ${content.city} e região. Atendimento a partir de Cascavel com coleta, entrega e garantia por escrito.`;

  return (
    <ServicePageShell
      title={title}
      subtitle={subtitle}
      serviceName={`Manutenção de paleteira hidráulica em ${content.city}`}
    >
      <section>
        <H2>Paleteiras hidráulicas em {content.city}: atendimento completo</H2>
        <P>{content.intro}</P>
        <P>
          Estamos sediados em Cascavel, a cerca de {content.distanceKm} km de {content.city} —
          aproximadamente {content.driveTime} de estrada. Isso permite deslocamento
          rápido para atendimentos em campo, coleta e entrega de equipamentos e reposição
          ágil de peças, sem que sua empresa precise depender de fornecedores distantes.
        </P>
      </section>

      <section>
        <H2>Serviços que atendemos em {content.city}</H2>
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {[
            { icon: Wrench, t: "Manutenção preventiva e corretiva", d: `Planos de manutenção mensais para empresas de ${content.city}, com técnicos que vão até o seu galpão.` },
            { icon: Truck, t: "Conserto de paleteira hidráulica", d: `Diagnóstico gratuito e reparo com peças de procedência. Coleta e entrega em ${content.city}.` },
            { icon: Clock, t: "Aluguel de paleteira", d: `Locação de paleteiras manuais, semielétricas e elétricas com contratos flexíveis para operações em ${content.city}.` },
            { icon: CheckCircle2, t: "Venda de paleteiras e peças", d: `Equipamentos novos e revisados, com garantia, e peças originais para reposição em ${content.city}.` },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition">
              <s.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H2>Por que empresas de {content.city} escolhem a Hidraumil</H2>
        <P>{content.economy}</P>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {[
            "Diagnóstico técnico gratuito",
            "Orçamento sem compromisso pelo WhatsApp",
            "Coleta e entrega agendada",
            "Peças originais e compatíveis de procedência",
            "Garantia formal por escrito",
            "Contratos de manutenção mensal para indústrias",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl bg-[#FEF3EC] p-4">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-secondary">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Regiões e bairros atendidos em {content.city}</H2>
        <P>
          Atendemos indústrias, distribuidoras, supermercados, cooperativas e transportadoras
          em toda a área urbana e rural de {content.city}, incluindo:
        </P>
        <div className="mt-5 flex flex-wrap gap-2">
          {content.neighborhoods.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm text-secondary">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {n}
            </span>
          ))}
        </div>
      </section>

      <section>
        <H2>Cidades vizinhas que também atendemos</H2>
        <P>
          Além de {content.city}, a Hidraumil atende diversas cidades do Oeste do Paraná com
          manutenção, conserto, aluguel e venda de paleteiras hidráulicas:
        </P>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {content.nearbyCities.map((c) => {
            const href = c.slug === "cascavel"
              ? "/manutencao-paleteiras-hidraulicas-cascavel"
              : `/manutencao-paleteira-hidraulica-${c.slug}`;
            return (
              <Link
                key={c.slug}
                to={href as string}
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-secondary hover:border-primary hover:text-primary transition"
              >
                Paleteira em {c.name}
              </Link>
            );
          })}
        </div>
      </section>
    </ServicePageShell>
  );
}
