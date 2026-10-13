import { describe, expect, test } from "bun:test";
import { CITIES } from "./citiesServed";

function paragraphs(city) {
  return [city.intro, city.economy, city.logistics, ...city.problems.map(p => p.text), city.preventive, ...city.uniqueFaqs.map(f => f.a), city.nearbyIntro, city.coverage, city.budget];
}
function tokens(text) {
  return text.toLocaleLowerCase("pt-BR").match(/[\p{L}\p{N}]+/gu) ?? [];
}
function grams(text) {
  const words = tokens(text);
  return words.slice(0, -4).map((_, i) => words.slice(i, i + 5).join(" "));
}

for (const city of CITIES) {
  describe(city.city, () => {
    test("has 600–900 words of useful local text", () => {
      const count = [...paragraphs(city), ...city.useCases].join(" ").split(/\s+/).length;
      expect(count).toBeGreaterThanOrEqual(600);
      expect(count).toBeLessThanOrEqual(900);
    });
    test("has at least 60% unique five-word sequences after removing city names", () => {
      const normalize = text => CITIES.reduce((value, item) => value.replaceAll(item.city, "MUNICIPIO"), text);
      const own = grams(normalize(paragraphs(city).join(" ")));
      const other = new Set(CITIES.filter(c => c !== city).flatMap(c => grams(normalize(paragraphs(c).join(" ")))));
      const ratio = own.filter(g => !other.has(g)).length / own.length;
      expect(ratio).toBeGreaterThanOrEqual(0.6);
    });
    test("does not reuse any paragraph from another city", () => {
      const others = CITIES.filter(c => c !== city).flatMap(paragraphs);
      for (const paragraph of paragraphs(city)) expect(others).not.toContain(paragraph);
    });
    test("title is no longer than 60 characters", () => {
      expect(Array.from(city.seoTitle).length).toBeLessThanOrEqual(60);
    });
    test("description is no longer than 155 characters", () => {
      expect(Array.from(city.description).length).toBeLessThanOrEqual(155);
    });
    test("city Service coverage is emitted once with a Cascavel provider", async () => {
      const response = await fetch(`http://localhost:8080/manutencao-paleteira-hidraulica-${city.citySlug}`);
      expect(response.status).toBe(200);
      const html = await response.text();
      const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
      const services = schemas.filter(s => s["@type"] === "Service");
      expect(services).toHaveLength(1);
      expect(services[0].areaServed).toEqual({ "@type": "City", name: `${city.city}, PR` });
      expect(services[0].provider.address.addressLocality).toBe("Cascavel");
    });
  });
}
