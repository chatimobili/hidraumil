import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(c => c.citySlug === "foz-do-iguacu")!;

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-foz-do-iguacu")({
  head: () => ({
    meta: [
      { title: `Manutenção de Paleteira Hidráulica em Foz do Iguaçu - PR | Hidraumil` },
      { name: "description", content: `Manutenção, conserto, aluguel e venda de paleteiras hidráulicas em Foz do Iguaçu e região. Assistência técnica com coleta, entrega e garantia — Hidraumil Cascavel.` },
      { property: "og:title", content: `Manutenção de Paleteira Hidráulica em Foz do Iguaçu - PR | Hidraumil` },
      { property: "og:description", content: `Atendimento técnico especializado em paleteiras hidráulicas em Foz do Iguaçu e Oeste do Paraná.` },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-foz-do-iguacu" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteira-hidraulica-foz-do-iguacu" }],
  }),
  component: () => <CityServicePage content={content} />,
});
