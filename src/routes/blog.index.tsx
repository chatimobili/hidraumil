import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

import { posts } from "@/lib/site";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog sobre Paleteiras Hidráulicas | Dicas e Manutenção | Hidraumil" },
      { name: "description", content: "Dicas, guias e artigos técnicos sobre manutenção, conserto, locação e venda de paleteiras hidráulicas. Conteúdo da Hidraumil — Cascavel, PR." },
      { property: "og:title", content: "Blog Hidraumil — Paleteiras Hidráulicas" },
      { property: "og:description", content: "Conteúdo técnico sobre paleteiras hidráulicas." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog Hidraumil — Dicas sobre Paleteiras Hidráulicas"
        subtitle="Guias, comparativos e dicas técnicas para operar e manter sua paleteira com mais segurança e produtividade."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map(p => (
            <article key={p.slug} className="rounded-xl border border-border bg-white shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition">
              <div className="aspect-[16/10] bg-gradient-to-br from-secondary via-secondary to-primary/60 flex items-center justify-center text-white">
                <BookOpen className="h-12 w-12 opacity-70" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h2 className="mt-2 text-lg font-bold text-secondary leading-snug">
                  <Link to={`/blog/${p.slug}` as any} className="hover:text-primary">{p.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(p.date).toLocaleDateString("pt-BR")}</span>
                  <Link to={`/blog/${p.slug}` as any} className="inline-flex items-center gap-1 font-semibold text-primary">Ler artigo <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
