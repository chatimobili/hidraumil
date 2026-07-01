import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "santa-helena")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-santa-helena")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Santa Helena - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Santa Helena e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Santa Helena - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Santa Helena e Oeste do Paraná.` },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-santa-helena" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-santa-helena" }],
  }),
  component: () => <CityServicePage content={content} />,
});
