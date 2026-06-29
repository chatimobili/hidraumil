import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "quanto-custa-consertar-paleteira-hidraulica",
  title: "Quanto Custa Consertar uma Paleteira Hidráulica?",
  excerpt: "Descubra quanto custa consertar uma paleteira hidráulica e quais fatores influenciam no preço.",
  date: "2025-04-02",
  category: "Conserto",
};

export const Route = createFileRoute("/blog/quanto-custa-consertar-paleteira-hidraulica")({
  head: () => ({
    meta: [
      { title: `${meta.title} | Hidraumil` },
      { name: "description", content: "Descubra quanto custa consertar uma paleteira hidráulica e quais fatores influenciam no preço. Informações da Hidraumil, especialista em Cascavel, PR." },
      { property: "og:type", content: "article" },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.excerpt },
      { property: "og:url", content: `/blog/${meta.slug}` },
    ],
    links: [{ rel: "canonical", href: `/blog/${meta.slug}` }],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogArticle {...meta}>
      <h2>Por que essa é uma pergunta difícil de responder de cara</h2>
      <p>
        Quando o cliente liga perguntando "quanto custa consertar minha paleteira?", a resposta honesta é: depende. O preço de um conserto de paleteira hidráulica varia conforme o problema, a marca, a idade do equipamento e se peças precisam ser substituídas. Por isso, todo conserto sério começa por um diagnóstico técnico — que na Hidraumil é gratuito.
      </p>

      <h2>Faixas de preço por tipo de serviço</h2>
      <p>
        Para você ter uma referência geral (valores aproximados, sujeitos a variação conforme marca e modelo):
      </p>
      <ul>
        <li><strong>Troca de selos e vedações da bomba:</strong> serviço comum, com bom custo-benefício e impacto direto na pressão hidráulica.</li>
        <li><strong>Troca de óleo hidráulico:</strong> serviço simples, recomendado periodicamente, com valor acessível.</li>
        <li><strong>Substituição de rodas (carga ou direção):</strong> custo varia conforme o material (nylon, poliuretano) e a quantidade.</li>
        <li><strong>Reparo do cilindro hidráulico:</strong> pode incluir troca de gaxetas, retentores e haste; valor médio.</li>
        <li><strong>Troca completa de bomba hidráulica:</strong> serviço mais caro, recomendado quando há falha estrutural.</li>
        <li><strong>Alinhamento ou substituição de garfos:</strong> depende se é reparo ou troca completa.</li>
        <li><strong>Revisão geral (recondicionamento):</strong> opção para paleteiras antigas que custa uma fração do equipamento novo.</li>
      </ul>

      <h2>Fatores que influenciam o preço</h2>
      <p>
        Existem variáveis que mudam bastante o orçamento final. Marca do equipamento (peças de marcas premium custam mais), idade da paleteira (modelos antigos podem precisar de peças sob encomenda), gravidade do problema (um vazamento simples versus uma bomba destruída), necessidade de atendimento em campo, urgência (atendimento fora do horário comercial) e garantia oferecida pelo prestador.
      </p>

      <h2>Vale a pena consertar ou comprar nova?</h2>
      <p>
        A regra prática que usamos é: se o conserto custa mais que 60% do valor de uma paleteira nova equivalente, vale considerar a troca. Mas isso depende muito do estado geral do equipamento. Uma paleteira bem cuidada pode durar 10 anos ou mais com manutenção adequada. Um técnico experiente consegue dizer rapidamente se compensa investir no reparo.
      </p>

      <h2>Como evitar surpresas no orçamento</h2>
      <p>
        Exija sempre um diagnóstico por escrito antes de aprovar o serviço, com descrição do problema, peças necessárias, prazo e garantia. Desconfie de orçamentos genéricos por telefone — paleteira não é commodity. E prefira empresas locais com estrutura para honrar a garantia, como a Hidraumil em Cascavel.
      </p>

      <h2>Sinais de que o orçamento que você recebeu está "errado"</h2>
      <ul>
        <li><strong>Preço fechado sem diagnóstico:</strong> ninguém séria orça paleteira por telefone sem ver o equipamento.</li>
        <li><strong>"Trocar tudo" como única opção:</strong> oficina que recomenda revisão completa em qualquer paleteira não está olhando a sua.</li>
        <li><strong>Sem garantia por escrito:</strong> reparo sem garantia é loteria.</li>
        <li><strong>Peças "genéricas" sem origem:</strong> peças de baixa qualidade falham em semanas e levam outras junto.</li>
        <li><strong>Valor muito abaixo do mercado:</strong> alguém vai pagar a diferença — geralmente você, com o equipamento de volta na oficina em 30 dias.</li>
      </ul>

      <h2>Conserto barato sai caro: histórias reais que vemos toda semana</h2>
      <p>
        Cliente leva paleteira na "oficina do cunhado", paga metade do preço, volta em 20 dias com o mesmo problema — e agora com bomba comprometida. O orçamento que parecia caro vira o mais barato no fim, porque resolve de uma vez, com peça certa e garantia. Em conserto de paleteira hidráulica, a regra é simples: pague para resolver, não para tentar.
      </p>

      <h2>Solicite um orçamento sem compromisso</h2>
      <p>
        Mande pelo WhatsApp uma foto ou vídeo do problema e nossa equipe envia uma estimativa inicial. Se aprovar, agendamos o diagnóstico técnico gratuito e seguimos com o reparo com garantia. Atendemos Cascavel e todo o Oeste do Paraná.
      </p>
    </BlogArticle>
  );
}
