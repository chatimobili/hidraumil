import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/locacao-paleteiras-hidraulicas-cascavel")({
  head: () => ({
    meta: [
      { title: "Locação de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { name: "description", content: "Aluguel de paleteiras hidráulicas em Cascavel e Oeste do Paraná. Planos mensais flexíveis, equipamentos revisados e manutenção inclusa. Ideal para demandas temporárias." },
      { property: "og:title", content: "Locação de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { property: "og:description", content: "Aluguel com manutenção inclusa em Cascavel e região." },
      { property: "og:url", content: "https://hidraumil.com.br/locacao-paleteiras-hidraulicas-cascavel" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/locacao-paleteiras-hidraulicas-cascavel" }],
  }),
  component: Page,
});

const incluido = [
  "Paleteira revisada e em perfeitas condições",
  "Manutenção preventiva inclusa no plano",
  "Substituição imediata em caso de falha",
  "Entrega e retirada no seu galpão em Cascavel",
  "Suporte técnico durante todo o contrato",
  "Sem custos com peças de desgaste",
];

const planos = [
  { n: "Mensal", desc: "Flexível para demandas pontuais.", b: ["Sem fidelidade", "Manutenção inclusa", "Troca imediata"] },
  { n: "Trimestral", desc: "Para projetos e sazonalidades.", b: ["Desconto progressivo", "Manutenção inclusa", "Troca imediata"], featured: true },
  { n: "Anual", desc: "Maior economia para operação contínua.", b: ["Melhor preço/mês", "Manutenção inclusa", "Troca imediata", "Equipamento reserva"] },
];

function Page() {
  return (
    <ServicePageShell
      title="Locação de Paleteiras Hidráulicas em Cascavel, PR"
      subtitle="Aluguel mensal flexível com equipamentos revisados e manutenção inclusa. Ideal para indústrias, supermercados, operações logísticas e demandas temporárias."
      serviceName="Locação de paleteiras hidráulicas em Cascavel"
    >
      <section>
        <H2>Por que alugar em vez de comprar?</H2>
        <P>
          A locação de paleteiras hidráulicas é a melhor escolha quando você precisa do equipamento mas não quer imobilizar capital, lidar com depreciação ou se preocupar com manutenção. Com a Hidraumil, você paga uma mensalidade fixa e recebe um equipamento sempre pronto para operar — se algo acontecer, trocamos na hora.
        </P>
      </section>

      <section>
        <H2>O que está incluído na locação?</H2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {incluido.map((i, idx) => (
            <li key={idx} className="flex items-start gap-3 rounded-xl bg-[#FEF3EC] p-4">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-secondary">{i}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Quando a locação de paleteira é a melhor opção?</H2>
        <P>
          Inventário anual com aumento temporário da demanda; obras e expansões com necessidade pontual de movimentação de carga; picos sazonais de produção (final de ano, safras, datas comerciais); empresas iniciando operação que não querem investir em ativos; reposição enquanto a paleteira própria está em manutenção. Em todos esses cenários, a locação entrega previsibilidade e zero dor de cabeça.
        </P>
      </section>

      <section>
        <H2>Planos de Locação</H2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {planos.map(p => (
            <div key={p.n} className={`rounded-2xl border p-7 bg-white shadow-sm ${p.featured ? "border-primary ring-2 ring-primary/30" : "border-border"}`}>
              {p.featured && <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">Mais escolhido</span>}
              <h3 className="text-2xl font-semibold text-secondary">{p.n}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.b.map(b => (
                  <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H2>Locação com manutenção inclusa</H2>
        <P>
          Toda paleteira locada conta com manutenção preventiva inclusa no plano. Você não se preocupa com peças, óleo ou paradas: nós cuidamos disso. Em caso de falha, fazemos a substituição imediata por outro equipamento equivalente, garantindo continuidade da sua operação em Cascavel e região.
        </P>
      </section>
    </ServicePageShell>
  );
}
