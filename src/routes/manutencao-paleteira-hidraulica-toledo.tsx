import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "toledo")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-toledo")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Toledo - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Toledo e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Toledo - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Toledo e Oeste do Paraná.` },
      { property: "og:url", content: "/manutencao-paleteira-hidraulica-toledo" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/manutencao-paleteira-hidraulica-toledo" }],
  }),
  component: () => <CityServicePage content={content} />,
});
