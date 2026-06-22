import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { Wrench } from "lucide-react";

export const Route = createFileRoute("/conserto-paleteira-hidraulica-cascavel")({
  head: () => ({
    meta: [
      { title: "Conserto de Paleteira Hidráulica em Cascavel | Hidraumil" },
      { name: "description", content: "Conserto especializado de paleteiras hidráulicas em Cascavel e Oeste do Paraná. Diagnóstico gratuito, reparo rápido e garantia. Atendemos todas as marcas." },
      { property: "og:title", content: "Conserto de Paleteira Hidráulica em Cascavel | Hidraumil" },
      { property: "og:description", content: "Reparo rápido com garantia para todas as marcas em Cascavel." },
      { property: "og:url", content: "/conserto-paleteira-hidraulica-cascavel" },
    ],
    links: [{ rel: "canonical", href: "/conserto-paleteira-hidraulica-cascavel" }],
  }),
  component: Page,
});

const problemas = [
  "Vazamento de óleo hidráulico",
  "Dificuldade para elevar carga",
  "Rodas travadas ou com folga",
  "Garfo torto ou amassado",
  "Bomba hidráulica com defeito",
  "Cilindro com folga ou perda de pressão",
  "Válvula de descida com problema",
  "Empunhadura quebrada ou travada",
];

const marcas = ["Bovenau", "Paletrans", "Ybarra", "Tecnomafra", "Lift Mais", "Marcon", "Aço Toledo", "Genérica"];

function Page() {
  return (
    <ServicePageShell
      title="Conserto de Paleteira Hidráulica em Cascavel e Região"
      subtitle="Diagnóstico gratuito, reparo com peças de qualidade e garantia em todas as marcas e modelos."
      serviceName="Conserto de paleteira hidráulica em Cascavel"
    >
      <section>
        <H2>Problemas mais comuns em paleteiras hidráulicas que consertamos</H2>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {problemas.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-[#FEF3EC] p-4">
              <Wrench className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-secondary">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <H2>Como é o processo de conserto?</H2>
        <P>
          Você entra em contato pelo WhatsApp descrevendo o problema. Nosso técnico avalia o caso e agenda a retirada do equipamento ou o atendimento em campo, conforme a urgência. Após o diagnóstico — que é gratuito — você recebe um orçamento detalhado, com prazo e garantia. Aprovado o serviço, executamos o reparo com peças originais ou compatíveis de procedência e devolvemos a paleteira pronta para operar.
        </P>
        <P>
          Para emergências em Cascavel, conseguimos atender no mesmo dia ou no dia seguinte na maioria dos casos. Nossa prioridade é manter sua operação rodando.
        </P>
      </section>

      <section>
        <H2>Consertamos todas as marcas</H2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {marcas.map(m => (
            <div key={m} className="rounded-xl bg-[#FEF3EC] py-4 text-center text-sm font-semibold text-secondary">{m}</div>
          ))}
        </div>
      </section>

      <section>
        <H2>Orçamento gratuito para conserto em Cascavel</H2>
        <P>
          Envie uma foto ou vídeo do problema pelo WhatsApp e receba uma estimativa inicial em minutos. O diagnóstico técnico completo é sempre gratuito.
        </P>
      </section>
    </ServicePageShell>
  );
}
