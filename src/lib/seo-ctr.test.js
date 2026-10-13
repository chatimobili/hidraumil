import { describe, expect, test } from "bun:test";

const paths = [
  "/",
  "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
  "/conserto-paleteira-hidraulica-cascavel",
  "/manutencao-paleteiras-hidraulicas-cascavel",
  "/locacao-paleteiras-hidraulicas-cascavel",
  "/venda-paleteiras-hidraulicas-cascavel",
  "/blog/manutencao-preventiva-paleteira-hidraulica",
  "/blog/guia-conserto-paleteira-hidraulica-cascavel",
];

describe("CTR metadata limits in server-rendered HTML", () => {
  for (const path of paths) {
    test(`${path}: title is at most 60 characters`, async () => {
      const response = await fetch(`http://localhost:8080${path}`);
      expect(response.status).toBe(200);
      const html = await response.text();
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
      expect(title).toBeDefined();
      expect(Array.from(title ?? "").length).toBeLessThanOrEqual(60);
    });

    test(`${path}: description is at most 155 characters`, async () => {
      const html = await (await fetch(`http://localhost:8080${path}`)).text();
      const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
      expect(description).toBeDefined();
      expect(Array.from(description ?? "").length).toBeLessThanOrEqual(155);
    });
  }
});

test("sitemap includes the existing assistance page", async () => {
  const response = await fetch("http://localhost:8080/sitemap.xml");
  expect(response.status).toBe(200);
  expect(await response.text()).toContain("/assistencia-tecnica-equipamentos-hidraulicos-cascavel</loc>");
});