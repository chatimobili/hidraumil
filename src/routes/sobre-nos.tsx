import { createFileRoute } from "@tanstack/react-router";


import equipeAsset from "@/assets/equipe-nova.jpg.asset.json";
import allmayer from "@/assets/clients/Allmayer-supermercado.png.asset.json";
import consilos from "@/assets/clients/Consilos.png.asset.json";
import coopavel from "@/assets/clients/Coopavel.png.asset.json";
import geriba from "@/assets/clients/Geriba-Alimentos.png.asset.json";

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

const partners = [
  { src: coopavel.url, name: "Coopavel" },
  { src: consilos.url, name: "Consilos" },
  { src: allmayer.url, name: "Allmayer" },
  { src: geriba.url, name: "Geribá" },
];

const timeline = [
  { year: "2009", t: "Os fundadores começam a atuar no mercado de manutenção hidráulica em Cascavel." },
  { year: "2013", t: "Estruturação da primeira oficina dedicada exclusivamente a paleteiras hidráulicas." },
  { year: "2016", t: "Expansão do atendimento para toda a região Oeste do Paraná." },
  { year: "2019", t: "Inauguração da nova sede, com estoque permanente de peças e bancada técnica." },
  { year: "2022", t: "Início da operação de locação de paleteiras para indústrias e operadores logísticos." },
  { year: "2025", t: "Mais de 500 empresas atendidas e referência regional em paleteiras hidráulicas." },
];

function SobrePage() {
  return (
    <>
      {/* HERO — Empregga-style peach background, large centered heading */}
      <section className="relative bg-[#FEF3EC] overflow-hidden">
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Sobre nós
          </p>
          <h1 className="mt-6 font-semibold leading-[1.1] text-secondary">
            Somos uma empresa amada pela indústria e necessária para quem não pode deixar a operação parar.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg leading-[1.6]">
            A Hidraumil conecta técnica, agilidade e cuidado e direciona tudo para um só objetivo:
            manter as paleteiras hidráulicas das empresas brasileiras sempre em funcionamento.
          </p>
        </div>
        {/* white wave */}
        <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-16" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </section>

      {/* PARTNERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <p className="text-secondary text-xl md:text-2xl font-semibold leading-tight max-w-sm">
            Movidos pela inovação, assim como nossos parceiros e clientes:
          </p>
          <div className="flex flex-wrap items-center justify-around gap-x-10 gap-y-6 border-l border-gray-200 pl-10">
            {partners.map((p) => (
              <img key={p.name} src={p.src} alt={p.name} className="h-12 w-auto max-w-[160px] object-contain opacity-70" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE — dark section with text + image */}
      <section className="bg-[#0F1C2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-hero opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">A Hidraumil</p>
            <h2 className="mt-4 font-semibold leading-[1.1] text-white">Sobre a Hidraumil</h2>
            <p className="mt-6 text-white/80 text-lg leading-[1.6]">
              A Hidraumil é uma empresa especializada em manutenção, conserto, locação e venda de
              paleteiras hidráulicas em Cascavel e em toda a região Oeste do Paraná. Com mais de
              15 anos de atuação, atendemos indústrias, supermercados, distribuidoras e operadores
              logísticos que dependem de equipamentos confiáveis para manter a operação fluindo.
            </p>
            <p className="mt-5 text-white/70 text-lg leading-[1.6]">
              Estruturamos oficina equipada, estoque permanente de peças e uma equipe técnica
              certificada para resolver desde a manutenção preventiva até reparos de emergência.
              Mais de 500 empresas já confiam na Hidraumil para cuidar das suas paleteiras.
            </p>
          </div>
          <div className="relative">
            <img
              src={equipeAsset.url}
              alt="Equipe Hidraumil"
              className="relative w-full h-[420px] object-cover rounded-[2rem] shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* HISTÓRIA — light peach background, timeline cards */}
      <section className="bg-[#FEF3EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Conheça nossa história</p>
            <h2 className="mt-4 font-semibold leading-[1.15] text-secondary">Uma história de cuidado e confiança</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-[1.6]">
              A trajetória da Hidraumil é construída pela confiança dos clientes que precisam de
              paleteiras hidráulicas sempre prontas para operar.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-5 min-w-max">
              {timeline.map((m) => (
                <article key={m.year} className="bg-white rounded-2xl p-7 w-72 shrink-0 shadow-sm">
                  <p className="text-2xl font-semibold text-secondary">{m.year}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{m.t}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
