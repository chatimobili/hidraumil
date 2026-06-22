import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/paleteira-hero.jpg.asset.json";
import equipeAsset from "@/assets/equipe.png.asset.json";
import caixaAsset from "@/assets/caixa-pesada.jpg.asset.json";
import tecnicoAsset from "@/assets/tecnico-construcao.jpg.asset.json";
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
  ArrowRight, Trophy, Users, Award, ThumbsUp,
  Truck, Wrench, CalendarCheck, Check,
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

function Stat({ icon: Icon, value, label }: { icon: typeof Trophy; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-[var(--shadow-card)] border border-border">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-extrabold text-secondary leading-none">{value}</div>
        <div className="mt-1 text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO — light, headline on left, photo on right (matches original) */}
      <section className="relative bg-surface overflow-hidden">
        {/* subtle pixel pattern accents */}
        <div className="absolute top-10 left-10 hidden lg:block" aria-hidden="true">
          <div className="grid grid-cols-3 gap-1 opacity-40">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="h-2 w-2 bg-white border border-border" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-16 right-10 hidden lg:block" aria-hidden="true">
          <div className="grid grid-cols-4 gap-1 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-2 w-2 bg-white border border-border" />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-secondary">
              Sua paleteira está com algum defeito?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Saiba que a maior causa do seu hidráulico estragar é a falta de manutenção do mesmo.
              Conte com a Hidraumil pra resolver!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-[var(--brand-dark)] transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Realize um orçamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-7 py-3.5 text-base font-semibold text-secondary hover:border-primary hover:text-primary transition"
              >
                Nossos serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Técnico inspecionando paleteira hidráulica em armazém"
              width={1200}
              height={1200}
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/5] md:aspect-[5/5]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* STATS — clean inline row with icon + number (matches original) */}
      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <Stat icon={Trophy} value="5.700+" label="Projetos concluídos" />
          <Stat icon={Users} value="500+" label="Empresas satisfeitas" />
          <Stat icon={Award} value="15+" label="Anos no negócio" />
          <Stat icon={ThumbsUp} value="100%" label="Dos clientes satisfeitos" />
        </div>
      </section>

      {/* EQUIPE — image left, text right */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-4 border-primary/80 hidden md:block" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-secondary/10 hidden md:block" />
            <img
              src={equipeAsset.url}
              alt="Equipe técnica Hidraumil em Cascavel"
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover ring-1 ring-black/5"
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
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Técnicos experientes e altamente qualificados
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Realizamos inspeções minuciosas, identificando e corrigindo quaisquer problemas que
              possam comprometer a eficiência dos seus equipamentos.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                { t: "Todas as marcas e modelos", d: "Soluções personalizadas para qualquer paleteira hidráulica." },
                { t: "Reparos rápidos", d: "Minimizamos o tempo de inatividade da sua operação." },
                { t: "Manutenção preventiva", d: "Garantimos que seus equipamentos estejam sempre prontos." },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">{item.t}</p>
                    <p className="text-sm text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-[var(--brand-dark)] transition"
            >
              <WhatsAppIcon className="h-5 w-5" /> Fale com nossos técnicos
            </a>
          </div>
        </div>
      </section>

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
                img: caixaAsset.url,
                title: "Venda de peças para paleteiras",
                desc: "Manutenção rápida e eficiente começa com peças de qualidade. Trabalhamos com uma ampla linha de peças para paleteiras, garantindo durabilidade e desempenho.",
                to: "/venda-pecas-paleteiras",
              },
              {
                img: tecnicoAsset.url,
                title: "Assistência técnica de equipamentos hidráulicos",
                desc: "Assistência técnica especializada — garanta qualidade, confiabilidade e desempenho que você precisa para o sucesso dos seus projetos.",
                to: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
              },
              {
                img: mulherAsset.url,
                title: "Venda de paleteiras hidráulicas",
                desc: "Encontre as melhores soluções para movimentação de cargas com segurança, eficiência e robustez, otimizando o desempenho das suas operações.",
                to: "/venda-paleteiras-hidraulicas-cascavel",
              },
              {
                img: heroImg,
                title: "Locação de paleteiras hidráulicas",
                desc: "A melhor opção para movimentação de cargas com economia, praticidade e alto desempenho — soluções flexíveis e eficientes para sua empresa.",
                to: "/locacao-paleteiras-hidraulicas-cascavel",
              },
            ].map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group relative overflow-hidden rounded-2xl bg-white border border-border shadow-[var(--shadow-card)] hover:shadow-xl transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-secondary">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COM A HIDRAUMIL NÃO EXISTEM DESCULPAS — feature row matching original */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
                Com a Hidraumil não existem desculpas!
              </h2>
              <p className="mt-5 text-primary-foreground/85 leading-relaxed">
                Todo amparo necessário para a manutenção do seu hidráulico. Somos especialistas em
                reparo e manutenção. Reforme a sua frota de paleteiras com total segurança e
                garantia que só a Hidraumil oferece.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-secondary shadow-lg hover:bg-white/90 transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> Fale com a Hidraumil
              </a>
            </div>
            <div className="grid sm:grid-cols-1 gap-5">
              {[
                { icon: Truck, t: "Coleta e entrega", d: "Realizamos a coleta e entrega dos equipamentos." },
                { icon: Wrench, t: "Equipe técnica", d: "Contamos com uma equipe técnica especializada." },
                { icon: CalendarCheck, t: "Agendamento", d: "Agendamos a manutenção preventiva." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-secondary p-6 shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-secondary">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{f.t}</h3>
                    <p className="mt-1 text-sm text-white/75">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES — logo grid */}
      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Alguns de nossos clientes
          </p>
          <h2 className="mt-3 text-center text-2xl md:text-3xl font-extrabold text-secondary">
            Empresas que confiam na Hidraumil
          </h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {clientLogos.map((c) => (
              <div key={c.name} className="flex items-center justify-center h-16 bg-white rounded-md">
                <img src={c.src} alt={c.name} className="max-h-full max-w-[140px] object-contain" loading="lazy" />
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
