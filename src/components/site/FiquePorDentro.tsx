import { Link } from "@tanstack/react-router";
import { posts } from "@/lib/site";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

export function FiquePorDentro() {
  const latest = posts.slice(0, 3);
  return (
    <section className="bg-[#FEF3EC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Conteúdos Hidraumil</p>
            <h2 className="mt-3 text-secondary leading-[1.15]">Fique por dentro</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Guias, dicas técnicas e novidades sobre paleteiras hidráulicas para a sua operação.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Ver todos os artigos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {latest.map((p) => (
            <article
              key={p.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-secondary via-secondary to-primary/70 flex items-center justify-center overflow-hidden">
                <BookOpen className="h-14 w-14 text-white/70" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {p.category}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-secondary leading-snug">
                  <Link to={`/blog/${p.slug}` as any} className="hover:text-primary transition">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(p.date).toLocaleDateString("pt-BR")}
                  </span>
                  <Link
                    to={`/blog/${p.slug}` as any}
                    className="inline-flex items-center gap-1 font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
