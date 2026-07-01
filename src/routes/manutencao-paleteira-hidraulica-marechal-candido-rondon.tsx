import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "marechal-candido-rondon")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-marechal-candido-rondon")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Marechal Cândido Rondon - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Marechal Cândido Rondon e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Marechal Cândido Rondon - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Marechal Cândido Rondon e Oeste do Paraná.` },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-marechal-candido-rondon" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-marechal-candido-rondon" }],
  }),
  component: () => <CityServicePage content={content} />,
});
