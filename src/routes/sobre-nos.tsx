import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Eye,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
} from "lucide-react";

import equipeAsset from "@/assets/equipe-nova.jpg.asset.json";
import tecnicoAsset from "@/assets/tecnico-construcao.jpg.asset.json";
import allmayer from "@/assets/clients/Allmayer-supermercado.png.asset.json";
import consilos from "@/assets/clients/Consilos.png.asset.json";
import coopavel from "@/assets/clients/Coopavel.png.asset.json";
import geriba from "@/assets/clients/Geriba-Alimentos.png.asset.json";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "Sobre a Hidraumil | Paleteiras Hidráulicas em Cascavel, PR" },
      {
        name: "description",
        content:
          "Há mais de 15 anos cuidando de paleteiras hidráulicas em Cascavel: conserto, manutenção, locação e venda para indústrias do Oeste do Paraná.",
      },
      { property: "og:title", content: "Sobre a Hidraumil | Paleteiras Hidráulicas em Cascavel" },
      {
        property: "og:description",
        content:
          "15+ anos, 500+ empresas atendidas. Conserto, manutenção e locação de paleteiras hidráulicas em Cascavel e região.",
      },
      { property: "og:url", content: "/sobre-nos" },
      { property: "og:image", content: equipeAsset.url },
    ],
    links: [{ rel: "canonical", href: "/sobre-nos" }],
  }),
  component: SobrePage,
});

const partners = [
  { src: coopavel.url, name: "Coopavel" },
  { src: consilos.url, name: "Consilos" },
  { src: allmayer.url, name: "Allmayer" },
  { src: geriba.url, name: "Geribá" },
];

const valores = [
  {
    icon: Target,
    title: "Missão",
    text: "Manter as operações das empresas funcionando sem interrupções, com paleteiras hidráulicas sempre prontas para o trabalho.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em manutenção e locação de paleteiras hidráulicas em todo o Oeste do Paraná até 2030.",
  },
  {
    icon: HeartHandshake,
    title: "Valores",
    text: "Agilidade no atendimento, transparência no orçamento, garantia em cada serviço e relação humana com cada cliente.",
  },
];

const equipe = [
  {
    name: "Adilson Marciano Alves",
    role: "Fundador & Diretor Técnico",
    bio: "Mais de 20 anos em hidráulica industrial. Lidera as decisões técnicas e o atendimento aos grandes clientes.",
    initials: "AM",
    color: "bg-primary",
  },
  {
    name: "Jéssica Gonçalves",
    role: "Gerente Administrativa",
    bio: "Responsável pela rotina administrativa, financeira e pelo relacionamento com clientes da Hidraumil.",
    initials: "JG",
    color: "bg-secondary",
  },
  {
    name: "Luiz Antônio Marciano Alves",
    role: "Líder de Assistência Técnica",
    bio: "Especialista em diagnóstico e reparo de paleteiras hidráulicas de todas as marcas que circulam pela região.",
    initials: "LA",
    color: "bg-primary",
  },
];

const timeline = [
  { year: "2009", t: "Fundação da Hidraumil em Cascavel/PR, com foco em manutenção hidráulica industrial." },
  { year: "2013", t: "100ª empresa atendida na região Oeste do Paraná." },
  { year: "2018", t: "Expansão da operação para locação de paleteiras hidráulicas." },
  { year: "2022", t: "Marca de 5.000 projetos concluídos em manutenção, conserto e venda." },
  { year: "2024", t: "Mais de 500 empresas ativas na carteira de clientes da Hidraumil." },
];

function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FEF3EC] overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Sobre nós
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-[1.1] text-secondary">
            Somos uma empresa amada pela indústria e necessária para quem não pode deixar a operação parar.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg leading-[1.6]">
            A Hidraumil conecta técnica, agilidade e cuidado em um só objetivo:
            manter as paleteiras hidráulicas das empresas brasileiras sempre em funcionamento.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <p className="text-secondary text-xl md:text-2xl font-semibold leading-tight max-w-sm">
            Movidos pela inovação, assim como nossos parceiros e clientes:
          </p>
          <div className="flex flex-wrap items-center justify-around gap-x-10 gap-y-6 border-l border-gray-200 pl-10">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={`Logotipo ${p.name}`}
                className="h-12 w-auto max-w-[160px] object-contain opacity-70"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 1 — NOSSA HISTÓRIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Nossa história
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1.15] text-secondary">
              De uma pequena oficina a referência regional
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-[1.7]">
              <p>
                A Hidraumil nasceu em 2009, em Cascavel, do incômodo dos seus fundadores
                ao ver indústrias da região perdendo dias inteiros de produção por causa
                de paleteiras hidráulicas paradas. O mercado oferecia assistência lenta,
                peças difíceis de encontrar e pouco compromisso com prazo.
              </p>
              <p>
                Começamos pequenos, atendendo uma indústria por vez, com diagnóstico
                honesto, peças de qualidade e o compromisso de devolver o equipamento
                operando no menor tempo possível. Cada cliente satisfeito virou
                indicação — e foi a indicação que construiu a nossa reputação.
              </p>
              <p>
                Hoje, com mais de 15 anos de estrada, somos referência em manutenção,
                conserto, locação e venda de paleteiras hidráulicas no Oeste do Paraná.
                Mais de <strong className="text-secondary">500 empresas</strong> já
                confiaram suas operações à Hidraumil — e seguimos crescendo com o
                mesmo cuidado do primeiro atendimento.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem]" aria-hidden="true" />
            <img
              src={equipeAsset.url}
              alt="Equipe da Hidraumil em Cascavel ao lado de paleteiras hidráulicas"
              className="relative w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — MISSÃO, VISÃO E VALORES */}
      <section className="bg-[#FEF3EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Princípios
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1.15] text-secondary">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valores.map((v) => {
              const Icon = v.icon;
              return (
                <article
                  key={v.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-transparent hover:border-primary/20"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-secondary">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — NOSSA EQUIPE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Pessoas
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1.15] text-secondary">
              Quem está por trás da Hidraumil
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-[1.6]">
              Um time enxuto, técnico e próximo do cliente — do orçamento à entrega.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {equipe.map((m) => (
              <article
                key={m.name}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`mx-auto h-24 w-24 rounded-full ${m.color} text-white flex items-center justify-center text-2xl font-semibold shadow-lg`}
                  aria-hidden="true"
                >
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-secondary">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — LINHA DO TEMPO */}
      <section className="bg-[#0F1C2E] relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Linha do tempo
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1.15] text-white">
              Os marcos que construíram a Hidraumil
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="mt-16 hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-6 h-0.5 bg-white/15" aria-hidden="true" />
              <ol className="relative grid grid-cols-5 gap-4">
                {timeline.map((m) => (
                  <li key={m.year} className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold shadow-lg ring-4 ring-[#0F1C2E]">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <p className="mt-4 text-2xl font-semibold text-primary">{m.year}</p>
                    <p className="mt-2 text-white/75 text-sm leading-relaxed px-2">{m.t}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="mt-12 md:hidden relative border-l border-white/15 ml-3 space-y-8">
            {timeline.map((m) => (
              <li key={m.year} className="pl-6 relative">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-[#0F1C2E]" aria-hidden="true" />
                <p className="text-xl font-semibold text-primary">{m.year}</p>
                <p className="mt-2 text-white/80 leading-relaxed">{m.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEÇÃO 5 — LOCALIZAÇÃO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={tecnicoAsset.url}
              alt="Técnico Hidraumil atendendo cliente em Cascavel, Paraná"
              className="w-full h-[420px] object-cover rounded-[2rem] shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Onde estamos
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-[1.15] text-secondary">
              Cascavel/PR — atendemos toda a região Oeste do Paraná
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-[1.6]">
              Nossa sede fica em Cascavel, posição estratégica para atender com
              agilidade indústrias, supermercados, distribuidoras e operadores
              logísticos de toda a região. <strong className="text-secondary">Coleta e entrega de
              paleteiras estão inclusas</strong> — você não precisa se preocupar com o transporte.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-secondary">Endereço</p>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-secondary">Telefone / WhatsApp</p>
                  <a href={`tel:${SITE.phoneE164}`} className="text-muted-foreground hover:text-primary">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-secondary">E-mail</p>
                  <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-primary break-all">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-secondary">Horário de atendimento</p>
                  <p className="text-muted-foreground">{SITE.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Truck className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-secondary">Área de atendimento</p>
                  <p className="text-muted-foreground">Cascavel e toda a região Oeste do Paraná — coleta e entrega inclusas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
