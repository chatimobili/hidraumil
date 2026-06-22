import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { Search, Wrench, Cog, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/assistencia-tecnica-equipamentos-hidraulicos-cascavel")({
  head: () => ({
    meta: [
      { title: "Assistência Técnica em Equipamentos Hidráulicos em Cascavel | Hidraumil" },
      { name: "description", content: "Assistência técnica especializada em equipamentos hidráulicos em Cascavel. Atendemos paleteiras, equipamentos Bovenau e outros sistemas hidráulicos industriais." },
      { property: "og:title", content: "Assistência Técnica em Equipamentos Hidráulicos em Cascavel | Hidraumil" },
      { property: "og:description", content: "Atendimento especializado em equipamentos hidráulicos industriais, incluindo Bovenau." },
      { property: "og:url", content: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel" },
    ],
    links: [{ rel: "canonical", href: "/assistencia-tecnica-equipamentos-hidraulicos-cascavel" }],
  }),
  component: Page,
});

const etapas = [
  { icon: Search, t: "Diagnóstico técnico", d: "Avaliação completa do equipamento, identificação da causa raiz e relatório técnico." },
  { icon: Wrench, t: "Reparo especializado", d: "Execução do serviço com técnicos qualificados e ferramentas adequadas." },
  { icon: Cog, t: "Substituição de peças", d: "Peças originais ou compatíveis de procedência, com nota fiscal e garantia." },
  { icon: ShieldCheck, t: "Testes de segurança", d: "Teste de carga e funcionamento antes da entrega — equipamento volta seguro." },
];

function Page() {
  return (
    <ServicePageShell
      title="Assistência Técnica em Equipamentos Hidráulicos em Cascavel"
      subtitle="Atendimento técnico especializado para paleteiras, equipamentos Bovenau e sistemas hidráulicos industriais em Cascavel e Oeste do Paraná."
      serviceName="Assistência técnica em equipamentos hidráulicos em Cascavel"
    >
      <section>
        <H2>Especialistas em Equipamentos Bovenau</H2>
        <P>
          A Hidraumil é referência regional em assistência técnica para equipamentos da linha Bovenau, uma das marcas mais utilizadas pela indústria brasileira. Atendemos desde paleteiras hidráulicas até prensas, elevadores e outros sistemas hidráulicos da marca, com técnicos treinados, conhecimento profundo dos modelos e estoque de peças críticas para resposta rápida.
        </P>
        <P>
          Também damos assistência para outras marcas e fabricantes de equipamentos hidráulicos industriais — fale com a gente para confirmar atendimento ao seu equipamento.
        </P>
      </section>

      <section>
        <H2>Nosso processo de assistência técnica</H2>
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {etapas.map((e, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition">
              <e.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H2>Atendimento em campo ou na oficina</H2>
        <P>
          Vamos até a sua planta industrial em Cascavel ou recebemos o equipamento em nossa oficina, com retirada e devolução agendadas. Trabalhamos com contratos de manutenção mensal para empresas que precisam de disponibilidade técnica garantida.
        </P>
      </section>
    </ServicePageShell>
  );
}
