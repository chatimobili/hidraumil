import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Award, Zap, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre a Hidraumil | Especialistas em Paleteiras Hidráulicas em Cascavel" },
      { name: "description", content: "Conheça a Hidraumil, empresa com mais de 15 anos de experiência em manutenção, conserto e locação de paleteiras hidráulicas em Cascavel, PR." },
      { property: "og:title", content: "Sobre a Hidraumil | Paleteiras Hidráulicas em Cascavel" },
      { property: "og:description", content: "Mais de 15 anos atendendo indústrias no Oeste do Paraná." },
      { property: "og:url", content: "/sobre-nos" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nos" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Sobre a Hidraumil Hidráulicos — Cascavel, Paraná"
        subtitle="Especialistas em paleteiras hidráulicas para indústrias, supermercados, distribuidoras e operadores logísticos do Oeste do Paraná."
      />

      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">Nossa História</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A Hidraumil nasceu da necessidade de oferecer ao mercado industrial do Oeste do Paraná um serviço técnico de qualidade em paleteiras hidráulicas. Com mais de 15 anos de atuação, nos tornamos referência em Cascavel e região, atendendo centenas de empresas dos setores industrial, alimentício, logístico e varejista.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              O que começou como um pequeno serviço técnico evoluiu para uma estrutura completa, com oficina equipada, técnicos certificados, estoque permanente de peças e atendimento em campo. Hoje, somos parceiros estratégicos de operações que não podem parar — entregando manutenção preventiva, conserto rápido, locação flexível e venda de paleteiras novas e revisadas. Nossa trajetória é construída pela confiança dos clientes e pela busca constante por excelência técnica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">Nossa Missão</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Manter a operação dos nossos clientes em pleno funcionamento, oferecendo soluções técnicas em paleteiras hidráulicas com agilidade, transparência e garantia. Acreditamos que um bom equipamento, bem mantido, é a base de uma logística produtiva e segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">Nossos Valores</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[
                { icon: Award, t: "Qualidade Técnica", d: "Mão de obra especializada, peças de procedência e processos padronizados." },
                { icon: Zap, t: "Agilidade", d: "Atendimento rápido para emergências, porque cada minuto parado é prejuízo." },
                { icon: ShieldCheck, t: "Transparência", d: "Diagnóstico claro, orçamento honesto e garantia em todos os serviços." },
              ].map((v, i) => (
                <div key={i} className="rounded-xl border border-border p-6 bg-white shadow-sm">
                  <v.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-3 font-bold text-secondary">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">Nossa Equipe</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[
                { n: "Marcos Silva", c: "Diretor Técnico" },
                { n: "Júlio Oliveira", c: "Técnico Sênior" },
                { n: "Ana Costa", c: "Atendimento Comercial" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-border p-6 bg-white shadow-sm text-center">
                  <div className="h-20 w-20 mx-auto rounded-full bg-primary/15 text-primary inline-flex items-center justify-center text-2xl font-bold">
                    <Users className="h-9 w-9" />
                  </div>
                  <h3 className="mt-4 font-bold text-secondary">{m.n}</h3>
                  <p className="text-sm text-muted-foreground">{m.c}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <CTASection title="Vamos conversar?" subtitle="Conte para a gente o que sua operação precisa. Atendimento por WhatsApp, telefone ou na nossa oficina em Cascavel." />
    </>
  );
}
