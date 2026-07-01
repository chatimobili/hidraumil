import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-novo.jpg.asset.json";
import equipeAsset from "@/assets/equipe-nova.jpg.asset.json";
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

import { FAQ } from "@/components/site/FAQ";
import {
  ArrowRight,
  Truck, Wrench, CalendarCheck, Star,
  ShoppingCart, Cog, ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manutenção de Paleteira | Conserto e Aluguel de Paleteiras em Cascavel | Hidraumil" },
      { name: "description", content: "Hidraumil: manutenção de paleteira, conserto de paleteira e aluguel de paleteira em Cascavel e região. Técnicos especializados, peças originais e atendimento rápido. Solicite seu orçamento!" },
      { property: "og:title", content: "Manutenção de Paleteira | Conserto e Aluguel | Hidraumil Cascavel" },
      { property: "og:description", content: "Especialistas em manutenção, conserto e aluguel de paleteiras hidráulicas em Cascavel. Orçamento grátis, coleta e entrega inclusa." },
      { property: "og:url", content: "https://hidraumil.com.br/" },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://hidraumil.com.br/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as any,
    ],
  }),
  component: Home,
});

const faqs = [
  { q: "Vocês fazem manutenção de paleteira?", a: "Sim! A Hidraumil é especializada em manutenção de paleteira hidráulica e manual. Nossos técnicos realizam diagnóstico, troca de peças e manutenção preventiva com rapidez e garantia por escrito." },
  { q: "Vocês fazem conserto de paleteira?", a: "Sim. O conserto de paleteira é um dos nossos principais serviços. Atendemos paleteiras manuais e hidráulicas, com retirada e entrega no local do cliente em Cascavel e região." },
  { q: "É possível fazer aluguel de paleteira?", a: "Sim! Oferecemos aluguel de paleteira (locação) para empresas que precisam de flexibilidade. Contratos mensais, equipamentos revisados e entrega rápida." },
  { q: "Vocês oferecem peças de reposição para paleteiras?", a: "Sim, temos uma linha completa de peças para manutenção de paleteira — originais e de alta qualidade — assegurando maior durabilidade e desempenho do seu equipamento." },
  { q: "Como funciona a assistência técnica?", a: "Nossa assistência técnica é ágil e eficiente. Realizamos o conserto de paleteira no local do cliente ou com coleta e entrega, com serviços de manutenção preventiva e corretiva para minimizar o tempo de inatividade." },
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
      {/* HERO — full-bleed image, white card flush-left, subtle orange arc */}
      <section className="relative bg-white">
        <div className="relative w-full overflow-hidden h-[640px] md:h-[680px]">
          <img
            src={heroImg}
            alt="Técnico Hidraumil pronto para atender em Cascavel"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />

          {/* black gradient on the right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0) 70%)" }}
            aria-hidden="true"
          />

          {/* subtle orange sweeping arc on the right side */}
          <svg
            viewBox="0 0 1440 700"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <path
              d="M1440,120 C1180,180 980,360 920,640 C915,680 920,700 920,700 L980,700 C980,700 1000,500 1100,380 C1220,240 1360,200 1440,200 Z"
              fill="#F97316"
              opacity="0.7"
            />
          </svg>

          {/* White card aligned with the page container */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow-2xl rounded-[2rem] p-8 md:p-12 max-w-[560px] w-full pointer-events-auto">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-5 flex items-center gap-2">
                  <span>⚡</span> Bem-vindo(a) à Hidraumil
                </p>
                <h1 className="text-2xl md:text-[35px] font-semibold leading-[1.1] text-secondary">
                  Manutenção, Conserto e Aluguel de{" "}
                  <span className="text-primary">Paleteiras em Cascavel</span>
                </h1>
                <p className="mt-4 text-lg font-semibold text-secondary">
                  Sua paleteira com defeito? A Hidraumil resolve.
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-[1.5]">
                  Manutenção, conserto e aluguel de paleteira com técnicos especializados
                  em Cascavel e região Oeste do Paraná. Atendimento rápido e garantia por escrito.
                </p>

                <div className="mt-7 flex items-center gap-5 flex-wrap">
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition"
                  >
                    Conheça mais ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating pill badges on the right side over the image */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="absolute top-[22%] right-[10%] bg-white rounded-full shadow-xl px-5 py-3 flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Wrench className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-secondary">Rapidez</span>
            </div>
            <div className="absolute top-[48%] right-[28%] bg-white rounded-full shadow-xl px-5 py-3 flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-secondary">Garantia</span>
            </div>
            <div className="absolute top-[70%] right-[7%] bg-white rounded-full shadow-xl px-5 py-3 flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Star className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-secondary">+15 anos</span>
            </div>
          </div>
        </div>

        {/* STATS strip below the hero with thin vertical orange dividers */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = [Star, Wrench, CalendarCheck, ShieldCheck][i] ?? Star;
              return (
                <div
                  key={s.label}
                  className={`relative px-6 py-4 ${i > 0 ? "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-12 lg:before:w-[2px] lg:before:bg-primary/40 lg:before:content-['']" : ""}`}
                >
                  <div className="text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-xl md:text-2xl font-semibold text-secondary leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* EQUIPE — light section, Empregga-style two-column */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Nossa equipe</p>
            <h2 className="mt-4 text-3xl md:text-[44px] font-semibold text-secondary leading-[1.15]">
              Especialistas em <span className="text-primary">Manutenção e Conserto</span> de Paleteiras Hidráulicas
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">Com a Hidraumil, você nunca mais vai precisar:</p>

            <ul className="mt-8 divide-y divide-gray-200 border-t border-b border-gray-200">
              {[
                { icon: Wrench, t: "Esperar dias por um conserto" },
                { icon: ShieldCheck, t: "Improvisar com peças sem garantia" },
                { icon: CalendarCheck, t: "Perder produção com paleteiras paradas" },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-center gap-5 py-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-lg font-semibold text-secondary">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img
              src={equipeAsset.url}
              alt="Equipe técnica Hidraumil em Cascavel"
              className="relative w-full h-auto rounded-[2rem] shadow-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      {/* SERVIÇOS — featured cards with images (matches original layout) */}
      <section id="servicos" className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Nossos serviços</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-secondary leading-tight">
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
                icon: Wrench,
                title: "Manutenção de Paleteiras",
                desc: "Manutenção de paleteira preventiva e corretiva, com técnicos especializados, peças originais e garantia por escrito para sua operação não parar.",
                to: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
              },
              {
                icon: ShieldCheck,
                title: "Conserto de Paleteiras Hidráulicas",
                desc: "Conserto de paleteira manual e hidráulica: vazamentos, bomba, cilindro, rodas e mais. Coleta e entrega inclusa em Cascavel e região.",
                to: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel",
              },
              {
                icon: CalendarCheck,
                title: "Aluguel de Paleteiras Hidráulicas",
                desc: "Aluguel de paleteira (locação de paleteira) com contratos flexíveis, equipamentos revisados, manutenção inclusa e entrega rápida.",
                to: "/locacao-paleteiras-hidraulicas-cascavel",
              },
              {
                icon: ShoppingCart,
                title: "Venda de Paleteiras Hidráulicas",
                desc: "Paleteiras novas e revisadas — manuais, semielétricas e elétricas — com segurança, robustez e alto desempenho para sua operação.",
                to: "/venda-paleteiras-hidraulicas-cascavel",
              },
              {
                icon: Cog,
                title: "Venda de Peças para Paleteiras",
                desc: "Peças para manutenção de paleteira: cilindros, bombas, rodas, garfos, selos e vedações originais com entrega rápida.",
                to: "/venda-pecas-paleteiras",
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
                <h3 className="mt-6 text-2xl font-semibold text-white leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#F97316] group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTO RICO — SEO: Por que escolher */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight">
            Por que escolher a Hidraumil para <span className="text-primary">Manutenção, Conserto e Aluguel de Paleteiras?</span>
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              A Hidraumil é referência em manutenção de paleteira em Cascavel e região Oeste do Paraná.
              Com mais de 15 anos de experiência, nossa equipe técnica realiza o conserto de paleteira —
              manual ou hidráulica — com agilidade, peças originais e garantia formal.
            </p>
            <p>
              Além do conserto e da manutenção de paleteiras, oferecemos aluguel de paleteira para empresas
              que precisam de equipamentos por tempo determinado, sem a necessidade de investir na compra.
              Nossos contratos de locação são flexíveis, com entrega e retirada incluídas.
            </p>
            <p>
              Atendemos indústrias, distribuidoras, atacadistas e comércios em Cascavel, Foz do Iguaçu,
              Toledo, Marechal Cândido Rondon e toda a região Oeste do Paraná.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS — Empregga-style: centered intro + 3x2 cards grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">BENEFÍCIOS HIDRAUMIL</p>
            <h2 className="mt-4 text-secondary leading-[1.15]">
              Manutenção Rápida e Confiável de Paleteiras — Conserto com Garantia e Aluguel Flexível
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Entenda as principais vantagens de contar com a Hidraumil na sua operação:
            </p>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)] hover:bg-[var(--brand-dark)] hover:-translate-y-0.5 transition"
            >
              <WhatsAppIcon className="h-5 w-5" /> Quero um orçamento
            </a>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, t: "Equipe técnica especializada", d: "Profissionais treinados com mais de 15 anos de experiência em paleteiras." },
              { icon: Truck, t: "Coleta e entrega", d: "Buscamos e devolvemos o seu equipamento sem que a sua operação pare." },
              { icon: CalendarCheck, t: "Agendamento ágil", d: "Atendimento rápido e manutenção preventiva programada." },
              { icon: ShieldCheck, t: "Garantia por escrito", d: "Todos os reparos saem com garantia formal e peças de procedência." },
              { icon: Star, t: "Atendimento dedicado", d: "Acompanhamento próximo do início ao fim do serviço." },
              { icon: Cog, t: "Peças originais", d: "Trabalhamos com peças de qualidade para máxima durabilidade." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-gray-200 bg-white px-7 py-7 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary leading-snug">{f.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES — Empregga-style: orange split + image, dark bar with logos */}
      <section className="bg-white">
        <div className="relative">
          {/* Orange left panel */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 lg:w-[42%] bg-primary" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image + badge */}
            <div className="relative">
              <img
                src={mulherAsset.url}
                alt="Profissional qualificada"
                className="relative w-full h-[420px] md:h-[460px] object-cover rounded-tr-[6rem] rounded-bl-[6rem] shadow-2xl"
                loading="lazy"
              />
              <div className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-white border-[6px] border-primary items-center justify-center shadow-xl">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-secondary leading-[1.15]">
                <span className="text-primary">+500 empresas</span> confiam na Hidraumil para manter suas paleteiras sempre operando.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Em um mercado em que cada hora de paleteira parada significa prejuízo,
                oferecemos uma solução completa de manutenção, locação e venda para que
                a sua operação nunca pare.
              </p>
            </div>
          </div>
        </div>

        {/* Dark bar with label + logos */}
        <div className="bg-[#0F1C2E]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-[260px_1fr] gap-8 items-center">
            <p className="text-white font-semibold leading-tight text-lg">
              Empresas que<br />confiam na Hidraumil
            </p>
            <div
              className="overflow-x-auto scrollbar-hide -mx-4 px-4 cursor-grab active:cursor-grabbing select-none min-w-0"
              onMouseDown={(e) => {
                const el = e.currentTarget;
                const startX = e.pageX - el.offsetLeft;
                const startScroll = el.scrollLeft;
                let moved = false;
                const onMove = (ev: MouseEvent) => {
                  moved = true;
                  el.scrollLeft = startScroll - (ev.pageX - el.offsetLeft - startX);
                };
                const onUp = () => {
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                  if (moved) {
                    const prevent = (ev: Event) => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      window.removeEventListener("click", prevent, true);
                    };
                    window.addEventListener("click", prevent, true);
                  }
                };
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
              }}
            >
              <div className="flex gap-6 items-center min-w-max">
                {clientLogos.map((c) => (
                  <div key={c.name} className="flex items-center justify-center h-20 shrink-0">
                    <img
                      src={c.src}
                      alt={c.name}
                      draggable={false}
                      className="h-16 w-auto max-w-[200px] object-contain bg-white rounded-lg px-4 py-2 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />




      {/* FAQ — Empregga-style: peach background, left intro + help card, right accordion */}
      <section className="bg-[#FEF3EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">CENTRAL DE AJUDA</p>
            <h2 className="mt-3 text-secondary leading-tight">
              Ficou com alguma dúvida?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Confira nossas respostas com as perguntas mais frequentes sobre a Hidraumil
              e nossos serviços de paleteiras.
            </p>

            <div className="mt-10 bg-white rounded-2xl px-8 py-8 text-center max-w-sm shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center text-primary text-3xl font-semibold">?</div>
              <h3 className="mt-3 text-secondary">Não encontrou o que procura?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fale com nosso time.</p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Tirar outra dúvida!
              </a>
            </div>
          </div>
          <div>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>

  );
}
