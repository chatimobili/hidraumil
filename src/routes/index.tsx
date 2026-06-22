import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/paleteira-hero.jpg.asset.json";
import equipeAsset from "@/assets/equipe-real.jpg.asset.json";
import mulherAsset from "@/assets/mulher-seguranca.jpg.asset.json";
import allmayer from "@/assets/clients/Allmayer-supermercado.png.asset.json";
import consilos from "@/assets/clients/Consilos.png.asset.json";
import coopavel from "@/assets/clients/Coopavel.png.asset.json";
import geriba from "@/assets/clients/Geriba-Alimentos.png.asset.json";
import infasa from "@/assets/clients/Infasa-industria-de-farinha.png.asset.json";
import jlConstrutora from "@/assets/clients/JL-Construtora.png.asset.json";
import megaMix from "@/assets/clients/MEGA-MIX.png.asset.json";

const heroImg = heroAsset.url;
const clientLogos = [
  { src: jlConstrutora.url, name: "JL Construtora" },
  { src: infasa.url, name: "Infasa Indústria de Farinha" },
  { src: geriba.url, name: "Geribá Alimentos" },
  { src: coopavel.url, name: "Coopavel" },
  { src: consilos.url, name: "Consilos" },
  { src: allmayer.url, name: "Allmayer Supermercado" },
  { src: megaMix.url, name: "Mega Mix" },
];

import { SITE } from "@/lib/site";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import {
  ArrowRight,
  Truck, Wrench, CalendarCheck, Star,
  ShoppingCart, Cog, ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

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
  { q: "Quais tipos de paleteiras vocês oferecem?", a: "Oferecemos uma ampla linha de paleteiras manuais e hidráulicas, novas e seminovas, ideais para diferentes necessidades de movimentação de cargas, sempre com segurança, robustez e eficiência." },
  { q: "Vocês também fazem consertos de paleteiras?", a: "Sim! Contamos com equipe especializada em conserto e manutenção de paleteiras, garantindo a restauração da durabilidade, desempenho e confiabilidade do seu equipamento." },
  { q: "É possível alugar paleteiras em vez de comprar?", a: "Claro! Trabalhamos com a locação de paleteiras hidráulicas e manuais, uma solução econômica e prática para empresas que buscam flexibilidade e não querem investir na compra imediata." },
  { q: "Vocês oferecem peças de reposição para paleteiras?", a: "Sim, temos uma linha completa de peças de reposição originais e de alta qualidade, assegurando maior durabilidade e desempenho para o seu equipamento." },
  { q: "Como funciona a assistência técnica?", a: "Nossa assistência técnica é ágil e eficiente, com serviços de manutenção preventiva e corretiva. O objetivo é minimizar o tempo de inatividade e garantir que suas operações não sejam prejudicadas." },
  { q: "Vocês atendem apenas empresas ou também clientes individuais?", a: "Atendemos tanto empresas que necessitam de soluções em maior escala quanto clientes individuais que buscam paleteiras para uso específico, seja na compra, locação ou manutenção." },
];

const stats = [
  { value: "5.700+", label: "Projetos concluídos" },
  { value: "500+", label: "Empresas satisfeitas" },
  { value: "15+", label: "Anos no negócio" },
  { value: "98%", label: "Dos clientes retornam" },
];

function OrangeWave({ flip = false, color = "#F97316" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[90px]">
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,30 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO — light, bold headline, image inside orange rounded frame */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-5">
              Especialistas em paleteiras
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-secondary">
              Sua paleteira está com algum{" "}
              <span className="text-primary">defeito</span>?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A maior causa do seu hidráulico estragar é a falta de manutenção.
              Conte com a Hidraumil para resolver — orçamento gratuito e rápido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Realize um orçamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-secondary/15 px-7 py-3.5 text-base font-semibold text-secondary hover:border-primary hover:text-primary transition"
              >
                Nossos serviços
              </a>
            </div>
          </div>

          {/* Image inside orange rounded frame (Empregga-style) */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary -rotate-2" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-secondary hidden md:block" aria-hidden="true" />
            <img
              src={heroImg}
              alt="Técnico inspecionando paleteira hidráulica em armazém"
              width={1200}
              height={1200}
              className="relative w-full h-auto rounded-[2rem] shadow-2xl object-cover aspect-[4/5] md:aspect-[5/5]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* STATS — light strip with orange numbers */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-primary leading-none tracking-tight">{s.value}</div>
              <div className="mt-3 text-sm text-secondary/70 uppercase tracking-wider font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WAVE divider into dark equipe section */}
      <OrangeWave />

      {/* EQUIPE — dark navy with orange-framed image card */}
      <section className="bg-[#0F1C2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-hero opacity-60" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-primary rotate-2" aria-hidden="true" />
            <img
              src={equipeAsset.url}
              alt="Equipe técnica Hidraumil em Cascavel"
              className="relative w-full h-auto rounded-[2rem] shadow-2xl object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-6 right-6 md:left-10 md:right-auto md:-bottom-8 bg-white rounded-xl shadow-xl border border-border px-5 py-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-secondary leading-none">+15 anos</p>
                <p className="text-xs text-muted-foreground mt-1">de experiência técnica</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Nossa equipe</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Técnicos experientes e altamente <span className="text-primary">qualificados</span>
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed text-lg">
              Nossos técnicos são treinados diretamente pelos fabricantes e conhecem cada detalhe
              de paleteiras manuais e hidráulicas. Cada atendimento tem diagnóstico documentado e
              prazo cumprido.
            </p>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
            >
              <WhatsAppIcon className="h-5 w-5" /> Fale com nossos técnicos
            </a>
          </div>
        </div>
      </section>

      {/* WAVE divider out of dark section */}
      <OrangeWave flip />


      {/* SERVIÇOS — featured cards with images (matches original layout) */}
      <section id="servicos" className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Nossos serviços</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Soluções completas em paleteiras para sua empresa
            </h2>
            <p className="mt-4 text-muted-foreground">
              Da venda à locação, passando pelo conserto especializado — oferecemos uma linha completa
              de paleteiras manuais e hidráulicas para manter suas operações ágeis, seguras e eficientes.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Cog,
                title: "Venda de peças para paleteiras",
                desc: "Manutenção rápida e eficiente começa com peças de qualidade. Trabalhamos com uma ampla linha de peças para paleteiras, garantindo durabilidade e desempenho.",
                to: "/venda-pecas-paleteiras",
              },
              {
                icon: ShieldCheck,
                title: "Assistência técnica de equipamentos hidráulicos",
                desc: "Assistência técnica especializada — garanta qualidade, confiabilidade e desempenho que você precisa para o sucesso dos seus projetos.",
                to: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
              },
              {
                icon: ShoppingCart,
                title: "Venda de paleteiras hidráulicas",
                desc: "Encontre as melhores soluções para movimentação de cargas com segurança, eficiência e robustez, otimizando o desempenho das suas operações.",
                to: "/venda-paleteiras-hidraulicas-cascavel",
              },
              {
                icon: CalendarCheck,
                title: "Locação de paleteiras hidráulicas",
                desc: "A melhor opção para movimentação de cargas com economia, praticidade e alto desempenho — soluções flexíveis e eficientes para sua empresa.",
                to: "/locacao-paleteiras-hidraulicas-cascavel",
              },
            ].map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group relative overflow-hidden rounded-2xl bg-[#1E2D3D] border border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-[#F97316]">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#F97316] group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COM A HIDRAUMIL NÃO EXISTEM DESCULPAS — feature row matching original */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-orange opacity-60" aria-hidden="true" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-4 border-white/60 hidden md:block" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-secondary/40 hidden md:block" />
              <img
                src={mulherAsset.url}
                alt="Manutenção profissional de paleteiras Hidraumil"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover ring-1 ring-black/10"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-6 right-6 md:left-10 md:right-auto md:-bottom-8 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-secondary leading-none">Sem desculpas</p>
                  <p className="text-xs text-muted-foreground mt-1">cuidamos de tudo para você</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
                Com a Hidraumil não existem desculpas!
              </h2>
              <p className="mt-5 text-primary-foreground/85 leading-relaxed">
                Todo amparo necessário para a manutenção do seu hidráulico. Somos especialistas em
                reparo e manutenção. Reforme a sua frota de paleteiras com total segurança e
                garantia que só a Hidraumil oferece.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { icon: Truck, t: "Coleta e entrega", d: "Realizamos a coleta e entrega dos equipamentos." },
                  { icon: Wrench, t: "Equipe técnica", d: "Contamos com uma equipe técnica especializada." },
                  { icon: CalendarCheck, t: "Agendamento", d: "Agendamos a manutenção preventiva." },
                  { icon: Star, t: "Garantia do serviço", d: "Todos os reparos têm garantia por escrito." },
                ].map((f) => (
                  <div key={f.t} className="flex items-start gap-4 rounded-2xl border-l-[3px] border-l-[#FFB347] border-y border-r border-white/10 bg-secondary p-5 shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-secondary">
                      <f.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{f.t}</h3>
                      <p className="mt-1 text-sm text-white/75">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-secondary shadow-lg hover:bg-white/90 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Fale com a Hidraumil
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES — logo grid */}
      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-secondary">
            Empresas que confiam no nosso trabalho
          </h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {clientLogos.map((c) => (
              <div key={c.name} className="flex items-center justify-center h-16">
                <img
                  src={c.src}
                  alt={c.name}
                  className="h-12 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — title left, items right (matches original) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Perguntas frequentes
            </h2>
            <p className="mt-5 text-muted-foreground">
              Navegue pelas nossas perguntas frequentes para encontrar respostas rápidas às suas
              dúvidas. Tem mais alguma dúvida? Entre em contato conosco.
            </p>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-[var(--brand-dark)] transition"
            >
              <WhatsAppIcon className="h-4 w-4" /> Entre em contato
            </a>
          </div>
          <div>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
