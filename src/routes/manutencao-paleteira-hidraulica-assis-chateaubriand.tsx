import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(city => city.citySlug === "assis-chateaubriand");
if (!content) throw new Error("Missing city content: assis-chateaubriand");

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-assis-chateaubriand")({
  head: () => ({
    meta: [
      { title: content.seoTitle },
      { name: "description", content: content.description },
      { property: "og:title", content: content.seoTitle },
      { property: "og:description", content: content.description },
      { property: "og:url", content: "https://hidraumil.lovable.app/manutencao-paleteira-hidraulica-assis-chateaubriand" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.lovable.app/manutencao-paleteira-hidraulica-assis-chateaubriand" }],
  }),
  component: () => <CityServicePage content={content} />,
});
