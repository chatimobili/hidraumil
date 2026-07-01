import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "medianeira")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-medianeira")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Medianeira - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Medianeira e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Medianeira - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Medianeira e Oeste do Paraná.` },
      { property: "og:url", content: "/manutencao-paleteira-hidraulica-medianeira" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/manutencao-paleteira-hidraulica-medianeira" }],
  }),
  component: () => <CityServicePage content={content} />,
});
