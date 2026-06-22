import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, H3, P } from "@/components/site/ServicePageShell";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/venda-paleteiras-hidraulicas-cascavel")({
  head: () => ({
    meta: [
      { title: "Venda de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { name: "description", content: "Compre paleteiras hidráulicas em Cascavel com a Hidraumil. Equipamentos novos e revisados, manuais e elétricas, com assistência técnica e garantia." },
      { property: "og:title", content: "Venda de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { property: "og:description", content: "Paleteiras novas e revisadas com garantia em Cascavel, PR." },
      { property: "og:url", content: "/venda-paleteiras-hidraulicas-cascavel" },
    ],
    links: [{ rel: "canonical", href: "/venda-paleteiras-hidraulicas-cascavel" }],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePageShell
      title="Venda de Paleteiras Hidráulicas em Cascavel, PR"
      subtitle="Paleteiras novas e revisadas — manuais, semielétricas, elétricas e de alta elevação — com garantia e assistência técnica local."
      serviceName="Venda de paleteiras hidráulicas em Cascavel"
    >
      <section>
        <H2>Tipos de Paleteiras Hidráulicas que Vendemos</H2>
        <H3>Paleteira Hidráulica Manual</H3>
        <P>Ideal para movimentações leves e médias dentro de armazéns, lojas e indústrias. Capacidade típica de 2.000 a 3.000 kg, com acionamento totalmente manual. Modelo robusto e de baixo custo de manutenção.</P>
        <H3>Paleteira Semielétrica</H3>
        <P>Combina tração elétrica com elevação manual ou vice-versa. Reduz o esforço do operador em trajetos longos sem o custo de uma paleteira totalmente elétrica.</P>
        <H3>Paleteira Elétrica</H3>
        <P>Elevação e tração 100% elétricas, com baterias de longa duração. Indicada para uso intensivo em armazéns, centros de distribuição e indústrias com alto volume de movimentação.</P>
        <H3>Paleteira de Alta Elevação</H3>
        <P>Eleva o pallet a alturas maiores, funcionando como mini empilhadeira. Excelente custo-benefício para operações que precisam empilhar cargas sem investir em equipamento maior.</P>
      </section>

      <section>
        <H2>Paleteiras Novas e Revisadas</H2>
        <P>
          Comercializamos equipamentos novos das principais marcas do mercado e também paleteiras revisadas em nossa oficina — totalmente recondicionadas, com peças substituídas e teste de carga. Uma ótima alternativa para reduzir investimento sem abrir mão de qualidade.
        </P>
      </section>

      <section>
        <H2>Por que comprar com a Hidraumil?</H2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            "Equipamentos testados antes da entrega",
            "Garantia formal em todos os modelos",
            "Assistência técnica local em Cascavel",
            "Estoque permanente de peças de reposição",
            "Entrega rápida no Oeste do Paraná",
            "Consultoria para escolher o modelo ideal",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-[#FEF3EC] p-4">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-secondary">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Solicite uma cotação de paleteiras em Cascavel</H2>
        <P>Fale com nosso time comercial pelo WhatsApp e receba uma proposta personalizada conforme sua operação e capacidade desejada.</P>
      </section>
    </ServicePageShell>
  );
}
