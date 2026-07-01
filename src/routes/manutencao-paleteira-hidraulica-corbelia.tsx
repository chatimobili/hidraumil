import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "corbelia")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-corbelia")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Corbélia - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Corbélia e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Corbélia - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Corbélia e Oeste do Paraná.` },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-corbelia" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-corbelia" }],
  }),
  component: () => <CityServicePage content={content} />,
});
