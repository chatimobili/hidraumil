import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell, H2, P } from "@/components/site/ServicePageShell";
import { Cog, Disc3, CircleDot, Layers, Droplets, Grip, GitBranch, Link2 } from "lucide-react";

export const Route = createFileRoute("/venda-pecas-paleteiras")({
  head: () => ({
    meta: [
      { title: "Peças para Paleteiras Hidráulicas | Venda em Cascavel | Hidraumil" },
      { name: "description", content: "Compre peças para paleteiras hidráulicas em Cascavel. Cilindros, bombas, rodas, garfos, selos e muito mais. Peças originais e compatíveis com entrega rápida." },
      { property: "og:title", content: "Peças para Paleteiras Hidráulicas em Cascavel | Hidraumil" },
      { property: "og:description", content: "Cilindros, bombas, rodas, selos e mais — entrega rápida em Cascavel e região." },
      { property: "og:url", content: "/venda-pecas-paleteiras" },
    ],
    links: [{ rel: "canonical", href: "/venda-pecas-paleteiras" }],
  }),
  component: Page,
});

const categorias = [
  { icon: Cog, t: "Cilindros hidráulicos", d: "Cilindros completos e kits de reparo." },
  { icon: Droplets, t: "Bombas hidráulicas", d: "Bombas novas e recondicionadas." },
  { icon: Disc3, t: "Rodas e rodízios", d: "Rodas de carga, direção e nylon." },
  { icon: Layers, t: "Garfos", d: "Garfos completos e reforçados." },
  { icon: CircleDot, t: "Selos e vedações", d: "Kits de selos para bomba e cilindro." },
  { icon: Grip, t: "Empunhaduras", d: "Empunhaduras completas e gatilhos." },
  { icon: GitBranch, t: "Válvulas", d: "Válvulas de descida e retenção." },
  { icon: Link2, t: "Correntes e pinos", d: "Correntes, pinos, anéis e fixadores." },
];

function Page() {
  return (
    <ServicePageShell
      title="Peças para Paleteiras Hidráulicas em Cascavel"
      subtitle="Ampla linha de peças originais e compatíveis com entrega rápida em Cascavel e região Oeste do Paraná."
      serviceName="Venda de peças para paleteiras hidráulicas"
    >
      <section>
        <H2>Categorias de peças disponíveis</H2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categorias.map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <c.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-secondary">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <H2>Solicite a peça que você precisa</H2>
        <P>
          Envie pelo WhatsApp a marca, modelo e — se possível — o código da peça ou foto do componente. Nossa equipe localiza o item correto, confirma disponibilidade e envia orçamento com prazo de entrega. Trabalhamos com peças de procedência e garantia.
        </P>
      </section>
    </ServicePageShell>
  );
}
