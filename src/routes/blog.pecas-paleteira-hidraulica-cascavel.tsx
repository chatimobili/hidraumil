import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "pecas-paleteira-hidraulica-cascavel",
  title: "Peças para Paleteira Hidráulica em Cascavel: Guia de Compra e Onde Encontrar Originais",
  excerpt: "Guia completo de peças para paleteira hidráulica em Cascavel-PR: quais componentes mais quebram, como identificar originais Bovenau e evitar peça paralela de baixa qualidade.",
  date: "2026-07-02",
  category: "Peças",
};

export const Route = createFileRoute("/blog/pecas-paleteira-hidraulica-cascavel")({
  head: () => ({
    meta: [
      { title: `${meta.title} | Hidraumil` },
      { name: "description", content: meta.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.excerpt },
      { property: "og:url", content: `https://hidraumil.com.br/blog/${meta.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://hidraumil.com.br/blog/${meta.slug}` }],
  }),
  component: Page,
});

function Page() {
  return (
    <BlogArticle {...meta}>
      <p>
        Comprar <strong>peças para paleteira hidráulica em Cascavel</strong> parece simples, mas o mercado está cheio de componentes paralelos que duram menos, aquecem o óleo e derrubam a vida útil do equipamento. Este guia mostra o que sempre vale a pena comprar original e como não cair em peça ruim.
      </p>

      <h2>Peças que mais precisam de reposição</h2>
      <p>
        Em uma paleteira em operação diária, algumas peças se tornam consumíveis. Em ordem de frequência: <strong>rodas de carga e direção</strong>, <strong>kits de selos e retentores</strong>, <strong>válvula de descida</strong>, <strong>bomba hidráulica</strong>, <strong>cabo/gatilho de acionamento</strong> e <strong>rolamentos das rodas</strong>. Manter essas peças em estoque na empresa reduz o tempo parado.
      </p>

      <h2>Original Bovenau vs. peça paralela</h2>
      <p>
        A peça original Bovenau é fabricada com a tolerância dimensional exata do equipamento — o retentor não vaza, a roda não desalinha, o selo mantém a pressão. Peça paralela genérica costuma ter <strong>metade da vida útil</strong> e, no caso das bombas, pode contaminar o óleo com resíduos metálicos que danificam o cilindro. Economizar 30% em uma peça paralela quase sempre custa mais caro em prejuízo.
      </p>

      <h2>Como identificar peça original</h2>
      <ul>
        <li>Embalagem lacrada com identificação da marca Bovenau;</li>
        <li>Código de peça compatível com o manual do equipamento;</li>
        <li>Nota fiscal com descrição detalhada, não apenas "peça hidráulica";</li>
        <li>Garantia formal do fornecedor (mínimo 90 dias).</li>
      </ul>

      <h2>Onde comprar peças de paleteira em Cascavel</h2>
      <p>
        A Hidraumil mantém em Cascavel um dos <strong>maiores estoques de peças Bovenau originais</strong> do Oeste do Paraná — rodas, selos, bombas, cilindros, válvulas, cabos e acessórios. Vendemos para clientes finais, oficinas e revendedores, com envio para toda a região: Toledo, Foz do Iguaçu, Marechal Cândido Rondon, Medianeira, Palotina, Santa Helena, Assis Chateaubriand e Corbélia.
      </p>

      <h2>Dica final: peça a peça antes de precisar</h2>
      <p>
        Manter um kit básico de manutenção (óleo hidráulico, kit de selos, par de rodas e cabo de acionamento) na sua empresa é a diferença entre uma paleteira parada por 5 minutos e uma paleteira parada por 5 dias. Consulte o WhatsApp da Hidraumil e monte seu kit sob medida para o modelo que você opera.
      </p>
    </BlogArticle>
  );
}
