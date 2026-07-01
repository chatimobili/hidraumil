import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "palotina")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-palotina")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Palotina - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Palotina e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Palotina - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Palotina e Oeste do Paraná.` },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-palotina" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-palotina" }],
  }),
  component: () => <CityServicePage content={content} />,
});
