import { ServiceFAQ } from "@/components/site/ServiceFAQ";
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { Wrench } from "lucide-react";

export const Route = createFileRoute("/conserto-paleteira-hidraulica-cascavel")({
  head: () => ({
    meta: [
      { title: "Conserto de Paleteira em Cascavel: Manual e Hidráulica" },
      { name: "description", content: "Paleteira vazando óleo, sem subir ou sem segurar carga? Consertamos paleteiras manuais e hidráulicas em Cascavel. Orçamento rápido pelo WhatsApp." },
      { property: "og:title", content: "Conserto de Paleteira em Cascavel: Manual e Hidráulica" },
      { property: "og:description", content: "Paleteira vazando óleo, sem subir ou sem segurar carga? Consertamos paleteiras manuais e hidráulicas em Cascavel. Orçamento rápido pelo WhatsApp." },
      { property: "og:url", content: "https://hidraumil.com.br/conserto-paleteira-hidraulica-cascavel" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Conserto de Paleteira em Cascavel: Manual e Hidráulica" },
      { name: "twitter:description", content: "Paleteira vazando óleo, sem subir ou sem segurar carga? Consertamos paleteiras manuais e hidráulicas em Cascavel. Orçamento rápido pelo WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "https://hidraumil.com.br/conserto-paleteira-hidraulica-cascavel" }],
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
    <>
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
    <ServiceFAQ />
    </>
  );
}
