import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, H3, P } from "@/components/site/ServicePageShell";
import { AlertTriangle, ShieldCheck, Clock, Award, Users } from "lucide-react";

export const Route = createFileRoute("/manutencao-paleteiras-hidraulicas-cascavel")({
  head: () => ({
    meta: [
      { title: "Manutenção de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { name: "description", content: "Serviço completo de manutenção preventiva e corretiva de paleteiras hidráulicas em Cascavel, PR. Técnicos especializados, atendimento rápido e garantia. Solicite orçamento gratuito." },
      { property: "og:title", content: "Manutenção de Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { property: "og:description", content: "Manutenção preventiva e corretiva de paleteiras em Cascavel e Oeste do PR." },
      { property: "og:url", content: "https://hidraumil.com.br/manutencao-paleteiras-hidraulicas-cascavel" },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/manutencao-paleteiras-hidraulicas-cascavel" }],
  }),
  component: Page,
});

const sinais = [
  "Vazamento de óleo hidráulico na bomba ou cilindro",
  "Dificuldade ou lentidão para elevar a carga",
  "Garfo descendo sozinho com carga",
  "Ruídos anormais ao acionar a alavanca",
  "Rodas travadas, com folgas ou desgaste irregular",
  "Empunhadura dura, com falha de retorno ou folgas",
];

const diferenciais = [
  { icon: Award, t: "Técnicos certificados", d: "Equipe treinada para todas as marcas." },
  { icon: Clock, t: "Atendimento rápido", d: "Resposta no mesmo dia em emergências." },
  { icon: ShieldCheck, t: "Garantia de serviço", d: "Cobertura formal em todas as manutenções." },
  { icon: Users, t: "Atendimento em campo", d: "Vamos até o seu galpão em Cascavel e região." },
];

function Page() {
  return (
    <ServicePageShell
      title="Manutenção de Paleteiras Hidráulicas em Cascavel, PR"
      subtitle="Manutenção preventiva, corretiva e revisão completa do sistema hidráulico. Atendemos indústrias e empresas em Cascavel e toda a região Oeste do Paraná."
      serviceName="Manutenção de paleteiras hidráulicas em Cascavel"
    >
      <section>
        <H2>O que é a Manutenção de Paleteiras Hidráulicas?</H2>
        <P>
          A manutenção de paleteiras hidráulicas é o conjunto de inspeções, ajustes, lubrificações, trocas de peças e testes que mantêm o equipamento operando com segurança e desempenho. Como a paleteira é um equipamento de uso intensivo, sujeito a impactos, cargas variadas e ambientes agressivos, a manutenção regular é o que evita falhas inesperadas e prolonga sua vida útil.
        </P>
        <P>
          A ausência de manutenção causa vazamentos de óleo, queda de produtividade, falhas no sistema hidráulico, desgaste prematuro das rodas e — pior — acidentes de trabalho envolvendo cargas mal sustentadas. Investir em manutenção sai muito mais barato do que substituir um equipamento ou lidar com paradas de produção. Na Hidraumil, oferecemos planos de manutenção sob medida para a realidade da sua operação em Cascavel.
        </P>
      </section>

      <section>
        <H2>Tipos de Manutenção que Realizamos</H2>
        <H3>Manutenção Preventiva</H3>
        <P>
          Programada em intervalos definidos, a manutenção preventiva inclui inspeção visual, troca de óleo hidráulico, lubrificação de articulações, verificação de selos, vedações e rodas, e testes funcionais. É a melhor forma de garantir disponibilidade do equipamento e reduzir o custo total da operação ao longo do ano.
        </P>
        <H3>Manutenção Corretiva</H3>
        <P>
          Quando a paleteira já apresenta falha — vazamento, perda de carga, travamento — atuamos com diagnóstico rápido e reparo no menor tempo possível. Trabalhamos com estoque de peças críticas para que o equipamento volte a operar em horas, e não em dias, sempre com garantia formal do serviço.
        </P>
        <H3>Revisão Completa do Sistema Hidráulico</H3>
        <P>
          Recomendada para paleteiras com alta quilometragem ou após muito tempo sem manutenção. Inclui desmontagem da bomba e cilindro, substituição completa de selos e vedações, troca de óleo, ajuste de válvulas e teste de carga. Sua paleteira sai como nova, com garantia estendida.
        </P>
      </section>

      <section>
        <H2>Sinais de que sua Paleteira Precisa de Manutenção</H2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {sinais.map((s, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-[#FEF3EC] p-4">
              <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-secondary">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Por que Escolher a Hidraumil para Manutenção em Cascavel?</H2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diferenciais.map((d, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <d.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">{d.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </section>
    </ServicePageShell>
  );
}
