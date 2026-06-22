import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-paleteira.jpg";
import { SITE, services } from "@/lib/site";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import {
  Wrench, Hammer, Calendar, ShoppingCart, ShieldCheck, Cog,
  MessageCircle, ArrowRight, CheckCircle2, Award, Users, Trophy, ThumbsUp, PhoneCall, ClipboardCheck, FileCheck2, Rocket,
} from "lucide-react";

const iconMap = { Wrench, Hammer, Calendar, ShoppingCart, ShieldCheck, Cog } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manutenção e Conserto de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { name: "description", content: "A Hidraumil oferece manutenção, conserto, locação e venda de paleteiras hidráulicas em Cascavel e região Oeste do Paraná. Atendimento rápido, técnicos especializados e orçamento gratuito." },
      { property: "og:title", content: "Manutenção e Conserto de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { property: "og:description", content: "Manutenção, conserto, locação e venda de paleteiras hidráulicas em Cascavel, PR. Orçamento gratuito." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const faqs = [
  { q: "Quais tipos de paleteiras vocês atendem?", a: "Atendemos todas as marcas e modelos de paleteiras hidráulicas manuais, semielétricas e elétricas, incluindo marcas como Bovenau, Paletrans, Ybarra, Tecnomafra e similares. Nossa equipe é treinada para identificar peças e realizar serviços em todos os modelos do mercado." },
  { q: "Vocês fazem conserto de paleteiras em Cascavel?", a: "Sim, realizamos conserto e manutenção de paleteiras hidráulicas em Cascavel e em toda a região Oeste do Paraná. O atendimento pode ser feito na nossa oficina ou diretamente no local do cliente, conforme a necessidade da operação." },
  { q: "É possível alugar paleteiras em vez de comprar?", a: "Sim, oferecemos locação de paleteiras hidráulicas com planos flexíveis mensais ou por projeto. É ideal para demandas temporárias, picos de produção, inventários ou para empresas que preferem não imobilizar capital em equipamentos." },
  { q: "Vocês vendem peças de reposição para paleteiras?", a: "Trabalhamos com ampla linha de peças originais e compatíveis para paleteiras hidráulicas: cilindros, bombas, rodas, garfos, selos, vedações e muito mais. Atendemos sob consulta com entrega rápida em Cascavel e região." },
  { q: "Qual o prazo médio de atendimento?", a: "Para casos urgentes, buscamos atender no mesmo dia ou no dia seguinte, dependendo da localização. Já as manutenções programadas são agendadas conforme a disponibilidade da sua empresa, sem prejudicar a rotina operacional." },
  { q: "Atendem apenas empresas ou também pessoas físicas?", a: "Atendemos tanto empresas (indústrias, supermercados, distribuidoras, galpões e operadores logísticos) quanto profissionais autônomos e pessoas físicas que utilizam paleteiras hidráulicas no dia a dia." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Cascavel · Oeste do Paraná
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Manutenção e Conserto de Paleteiras Hidráulicas em <span className="text-primary">Cascavel, PR</span>
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/85 max-w-xl">
              Mais de 15 anos atendendo indústrias e empresas no Oeste do Paraná. Diagnóstico gratuito, atendimento rápido e garantia em todos os serviços.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-[var(--brand-dark)] transition">
                <MessageCircle className="h-5 w-5" /> Solicitar Orçamento pelo WhatsApp
              </a>
              <a href="#servicos" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-base font-semibold hover:bg-white/10 transition">
                Conheça Nossos Serviços <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Paleteira hidráulica laranja em ambiente industrial em Cascavel"
              width={1600}
              height={1100}
              className="relative w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Trophy, value: "5.497+", label: "Projetos Concluídos" },
            { icon: Users, value: "500+", label: "Empresas Atendidas" },
            { icon: Award, value: "15+", label: "Anos de Experiência" },
            { icon: ThumbsUp, value: "100%", label: "Satisfação" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-6 text-center shadow-sm">
              <s.icon className="h-8 w-8 mx-auto text-primary" />
              <div className="mt-3 text-3xl font-extrabold text-secondary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center">Por que escolher a Hidraumil em Cascavel?</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-center">
            A Hidraumil é especialista em manutenção, conserto e locação de paleteiras hidráulicas em Cascavel e toda a região Oeste do Paraná. Com mais de 15 anos de experiência, nossa equipe técnica é treinada para atender todas as marcas e modelos de paleteiras hidráulicas, manuais e elétricas. Realizamos desde reparos emergenciais até manutenções preventivas programadas, sempre com agilidade e garantia de serviço. Nosso compromisso é manter sua operação rodando — com diagnóstico claro, peças de qualidade e atendimento próximo, seja na nossa oficina ou diretamente no seu galpão.
          </p>
          <div className="mt-8 text-center">
            <Link to="/sobre-nos" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              Saiba mais sobre a empresa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Nossas Soluções em Paleteiras Hidráulicas</h2>
            <p className="mt-4 text-muted-foreground">Atendimento completo para empresas e indústrias em Cascavel e Oeste do Paraná.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="group rounded-xl border border-border bg-white p-7 shadow-sm hover:shadow-lg hover:border-primary/40 transition">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-secondary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Ver mais <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Como Funciona o Nosso Atendimento</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 1, icon: PhoneCall, t: "Entre em contato", d: "Fale conosco pelo WhatsApp ou telefone." },
              { n: 2, icon: ClipboardCheck, t: "Diagnóstico gratuito", d: "Avaliamos o equipamento sem custo." },
              { n: 3, icon: FileCheck2, t: "Aprovação do orçamento", d: "Você recebe um orçamento claro e transparente." },
              { n: 4, icon: Rocket, t: "Execução com garantia", d: "Serviço entregue com garantia e agilidade." },
            ].map(step => (
              <div key={step.n} className="relative rounded-xl bg-white/5 border border-white/10 p-6">
                <span className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{step.n}</span>
                <step.icon className="h-7 w-7 text-primary mt-2" />
                <h3 className="mt-3 font-bold text-lg">{step.t}</h3>
                <p className="mt-1.5 text-sm text-secondary-foreground/75">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center">Empresas que Confiam na Hidraumil</h2>
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              { n: "Carlos Mendes", c: "Distribuidora Oeste PR", t: "Atendimento rápido em uma emergência de produção. Nossa paleteira voltou a funcionar no mesmo dia. Recomendo." },
              { n: "Patrícia Almeida", c: "Indústria Alimentícia Cascavel", t: "Fazemos manutenção preventiva com a Hidraumil há mais de 4 anos. Equipe técnica de altíssimo nível." },
              { n: "Roberto Lima", c: "Supermercados Central", t: "Locamos paleteiras durante o inventário e foi a melhor decisão. Equipamentos novos e suporte impecável." },
            ].map((d, i) => (
              <figure key={i} className="rounded-xl border border-border bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-primary">{"★★★★★"}</div>
                <blockquote className="mt-3 text-secondary leading-relaxed">"{d.t}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/15 text-primary inline-flex items-center justify-center font-bold">{d.n[0]}</div>
                  <div>
                    <div className="font-semibold text-secondary text-sm">{d.n}</div>
                    <div className="text-xs text-muted-foreground">{d.c}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 rounded-md bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">Cliente {i + 1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center">Perguntas Frequentes sobre Paleteiras Hidráulicas</h2>
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
