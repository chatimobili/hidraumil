import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { blogCovers } from "@/lib/blogCovers";

import { Calendar, ChevronLeft } from "lucide-react";

export function BlogArticle({
  title,
  date,
  category,
  excerpt,
  slug,
  children,
}: {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  children: ReactNode;
}) {
  const cover = blogCovers[slug];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: cover ? [cover] : undefined,
    datePublished: date,
    author: { "@type": "Organization", name: "Hidraumil Hidráulicos" },
    publisher: {
      "@type": "Organization",
      name: "Hidraumil Hidráulicos",
      logo: { "@type": "ImageObject", url: "/favicon.ico" },
    },
    mainEntityOfPage: `/blog/${slug}`,
  };

  return (
    <>
      <PageHero eyebrow={category} title={title} subtitle={excerpt}>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-secondary-foreground/70">
          <Calendar className="h-4 w-4" /> {new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>
      </PageHero>

      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl prose-content">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline mb-8">
            <ChevronLeft className="h-4 w-4" /> Voltar ao blog
          </Link>

          {cover && (
            <figure className="mb-10 -mx-4 sm:mx-0">
              <img
                src={cover}
                alt={title}
                width={1600}
                height={900}
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[16/9]"
              />
            </figure>
          )}

          <div className="space-y-5 text-muted-foreground leading-relaxed [&_h2]:text-secondary [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-secondary [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-secondary [&_table]:w-full [&_table]:border-collapse [&_th]:bg-muted [&_th]:p-3 [&_th]:text-left [&_th]:text-secondary [&_td]:border [&_td]:border-border [&_td]:p-3 [&_th]:border [&_th]:border-border">
            {children}
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
