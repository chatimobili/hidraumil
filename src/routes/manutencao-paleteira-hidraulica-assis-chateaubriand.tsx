import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "assis-chateaubriand")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-assis-chateaubriand")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Assis Chateaubriand - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Assis Chateaubriand e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Assis Chateaubriand - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Assis Chateaubriand e Oeste do Paraná.` },
      { property: "og:url", content: "/manutencao-paleteira-hidraulica-assis-chateaubriand" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/manutencao-paleteira-hidraulica-assis-chateaubriand" }],
  }),
  component: () => <CityServicePage content={content} />,
});
