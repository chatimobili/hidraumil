import { describe, expect, test } from "bun:test";
import { jackRepairService, cylinderRepairService } from "./hydraulic-repair-services";

for (const service of [jackRepairService, cylinderRepairService]) {
  describe(service.path, () => {
    test("title respects the 60-character limit", () => {
      expect(Array.from(service.title).length).toBeLessThanOrEqual(60);
    });
    test("description respects the 155-character limit", () => {
      expect(Array.from(service.description).length).toBeLessThanOrEqual(155);
    });
    test("Service schema includes the requested provider and coverage", async () => {
      const response = await fetch(`http://localhost:8080${service.path}`);
      expect(response.status).toBe(200);
      const html = await response.text();
      const schemas = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
      const schema = schemas.find(item => item["@type"] === "Service");
      expect(schema?.provider["@type"]).toBe("LocalBusiness");
      expect(schema?.provider.name).toBe("Hidraumil Hidráulicos");
      expect(schema?.areaServed).toEqual([
        { "@type": "City", name: "Cascavel, PR" },
        { "@type": "AdministrativeArea", name: "Oeste do Paraná" },
      ]);
    });
  });
}
