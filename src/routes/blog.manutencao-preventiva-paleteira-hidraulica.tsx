import { Link } from "@tanstack/react-router";
import { RevisionCTA } from "@/components/site/RevisionCTA";
import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "manutencao-preventiva-paleteira-hidraulica",
  title: "Manutenção Preventiva de Paleteira Hidráulica: Guia Completo",
  excerpt: "Aprenda como fazer a manutenção preventiva da sua paleteira hidráulica, evitar falhas e aumentar a vida útil do equipamento.",
  date: "2025-03-10",
  category: "Manutenção",
};

export const Route = createFileRoute("/blog/manutencao-preventiva-paleteira-hidraulica")({
  head: () => ({
    meta: [
      { title: "Manutenção Preventiva de Paleteira: Checklist e Prazos" },
      { name: "description", content: "Checklist de manutenção preventiva da paleteira hidráulica: o que revisar, a cada quanto tempo e os sinais de defeito. Veja o passo a passo." },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Manutenção Preventiva de Paleteira: Checklist e Prazos" },
      { property: "og:description", content: "Checklist de manutenção preventiva da paleteira hidráulica: o que revisar, a cada quanto tempo e os sinais de defeito. Veja o passo a passo." },
      { property: "og:url", content: `https://hidraumil.com.br/blog/${meta.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Manutenção Preventiva de Paleteira: Checklist e Prazos" },
      { name: "twitter:description", content: "Checklist de manutenção preventiva da paleteira hidráulica: o que revisar, a cada quanto tempo e os sinais de defeito. Veja o passo a passo." },
    ],
    links: [{ rel: "canonical", href: `https://hidraumil.com.br/blog/${meta.slug}` }],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogArticle {...meta}>
      <h2>O que é manutenção preventiva?</h2>
      <p>
        Manutenção preventiva é o conjunto de inspeções e serviços realizados em intervalos programados, antes que qualquer falha aconteça. Em paleteiras hidráulicas, ela envolve verificar nível e qualidade do óleo, lubrificar articulações, conferir vedações, testar a bomba e o cilindro, examinar rodas e garfos e validar o funcionamento da válvula de descida. A lógica é simples: identificar desgastes pequenos antes que virem grandes problemas.
      </p>
      <RevisionCTA />

      <h2>Por que é importante</h2>
      <p>
        Uma paleteira sem manutenção falha sempre na pior hora — no meio de uma carga, num inventário urgente, num dia de pico. Os prejuízos vão muito além do reparo: produção parada, equipe ociosa, cargas atrasadas e, em casos graves, risco de acidente de trabalho. A manutenção preventiva, por outro lado, custa pouco, é rápida e mantém o equipamento pronto. Empresas que adotam um plano preventivo costumam reduzir em mais de 60% os custos anuais com paleteiras.
      </p>

      <h2>Checklist de manutenção preventiva</h2>
      <ul>
        <li><strong>Sistema hidráulico:</strong> verificar nível de óleo, presença de vazamentos e contaminação. Trocar o óleo conforme orientação do fabricante.</li>
        <li><strong>Bomba e cilindro:</strong> testar elevação total, observar se há perda de pressão com carga e ruídos anormais.</li>
        <li><strong>Válvula de descida:</strong> confirmar que o garfo desce de forma controlada e que não cai sozinho com carga.</li>
        <li><strong>Rodas e rodízios:</strong> verificar desgaste, folgas no eixo e travamento. Substituir rodas com superfície achatada ou rachada.</li>
        <li><strong>Garfos:</strong> conferir alinhamento, soldas e ausência de deformação.</li>
        <li><strong>Empunhadura:</strong> testar gatilho de descida, articulações e lubrificar pontos móveis.</li>
        <li><strong>Selos e vedações:</strong> inspecionar quanto a vazamentos e endurecimento.</li>
        <li><strong>Identificação e segurança:</strong> manter etiqueta de capacidade legível e adesivos de alerta no lugar.</li>
      </ul>

      <h2>Com que frequência fazer</h2>
      <p>
        A frequência ideal depende do uso. Para paleteiras de uso intenso (mais de 4 horas por dia, ambiente industrial), recomendamos inspeção mensal e revisão completa a cada 6 meses. Para uso moderado (lojas, depósitos pequenos), inspeção trimestral e revisão anual já entregam excelente resultado. Em ambientes agressivos — frigoríficos, química, exposição a água —, a frequência deve aumentar e o óleo precisa ser específico.
      </p>

      <h2>Quais sinais indicam necessidade de reparo</h2>
      <p>
        Mesmo com manutenção preventiva em dia, fique atento: vazamento de óleo sob o equipamento, dificuldade de elevar a carga, garfo descendo sozinho, ruído metálico ao acionar a bomba, rodas travadas ou com folga, e empunhadura dura são sinais claros de que algo precisa ser corrigido antes que evolua para uma falha total.
      </p>

      <h2>Erros comuns que destroem a paleteira antes da hora</h2>
      <ul>
        <li><strong>Sobrecarga frequente:</strong> operar acima da capacidade nominal deforma garfo, força a bomba e estoura o cilindro.</li>
        <li><strong>Óleo errado ou contaminado:</strong> usar óleo de motor, água ou misturar fluidos destrói selos em semanas.</li>
        <li><strong>Manobras bruscas:</strong> bater em batente, descer com peso de uma vez, virar com carga elevada — tudo isso castiga a estrutura.</li>
        <li><strong>Ignorar pequenos sintomas:</strong> gota de óleo, gatilho duro, ruído nas rodas. O que parece "normal" hoje vira reparo caro em três meses.</li>
        <li><strong>Armazenar paleteira carregada por longos períodos:</strong> achata rodas e fadiga a estrutura.</li>
      </ul>

      <h2>Manutenção preventiva x corretiva: a conta que poucos fazem</h2>
      <p>
        Um plano preventivo básico custa uma fração de um único conserto de emergência. Mais importante: previne paradas não planejadas, que sempre acontecem na pior hora — final do mês, dia de embarque, pico de produção. Para quem opera com poucas paleteiras, uma única parada não programada pode custar mais do que a manutenção preventiva anual inteira.
      </p>

      <h2>Como a Hidraumil pode ajudar</h2>
      <p>
        A Hidraumil oferece planos de manutenção preventiva sob medida para empresas em Cascavel e região Oeste do Paraná. Cuidamos do agendamento, do checklist técnico, das peças de reposição e da garantia. Você foca na sua operação; nós cuidamos da paleteira. Fale com a gente pelo WhatsApp e monte um plano para a sua frota.
      </p>
      <p>
        <Link to="/manutencao-paleteiras-hidraulicas-cascavel" className="font-semibold text-primary hover:underline">Manutenção de paleteiras hidráulicas em Cascavel</Link>
      </p>
      <RevisionCTA />
    </BlogArticle>
  );
}
