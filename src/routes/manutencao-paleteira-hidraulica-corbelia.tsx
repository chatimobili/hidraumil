import { createFileRoute } from "@tanstack/react-router";
import { CityServicePage } from "@/components/site/CityServicePage";
import { CITIES } from "@/lib/citiesServed";

const content = CITIES.find(city => city.citySlug === "corbelia");
if (!content) throw new Error("Missing city content: corbelia");

export const Route = createFileRoute("/manutencao-paleteira-hidraulica-corbelia")({
  head: () => ({
    meta: [
      { title: content.seoTitle },
      { name: "description", content: content.description },
      { property: "og:title", content: content.seoTitle },
      { property: "og:description", content: content.description },
      { property: "og:url", content: "https://hidraumil.lovable.app/manutencao-paleteira-hidraulica-corbelia" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.lovable.app/manutencao-paleteira-hidraulica-corbelia" }],
  }),
  component: () => <CityServicePage content={content} />,
});
