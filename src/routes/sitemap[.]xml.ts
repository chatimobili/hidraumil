import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre-nos", changefreq: "monthly", priority: "0.8" },
          { path: "/manutencao-paleteiras-hidraulicas-cascavel", changefreq: "monthly", priority: "0.9" },
          { path: "/conserto-paleteira-hidraulica-cascavel", changefreq: "monthly", priority: "0.9" },
          { path: "/locacao-paleteiras-hidraulicas-cascavel", changefreq: "monthly", priority: "0.9" },
          { path: "/venda-paleteiras-hidraulicas-cascavel", changefreq: "monthly", priority: "0.9" },
          { path: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel", changefreq: "monthly", priority: "0.9" },
          { path: "/venda-pecas-paleteiras", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/blog/guia-conserto-paleteira-hidraulica-cascavel", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/principais-defeitos-paleteira-hidraulica", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/aluguel-paleteira-hidraulica-cascavel", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/locacao-vs-compra-paleteira-cascavel", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/manutencao-preventiva-paleteira-hidraulica", changefreq: "yearly", priority: "0.6" },
          { path: "/blog/quanto-custa-consertar-paleteira-hidraulica", changefreq: "yearly", priority: "0.6" },
          { path: "/blog/paleteira-manual-vs-hidraulica", changefreq: "yearly", priority: "0.6" },
          { path: "/contato", changefreq: "yearly", priority: "0.7" },
        ];

        const urls = entries.map(e =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
