import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "oleo-hidraulico-paleteira-cascavel",
  title: "Óleo Hidráulico para Paleteira: Qual Usar, Quando Trocar e Onde Comprar em Cascavel",
  excerpt: "Guia técnico sobre óleo hidráulico para paleteira em Cascavel-PR: viscosidade correta, quando trocar, riscos de misturar óleos e onde comprar o óleo certo.",
  date: "2026-06-26",
  category: "Manutenção",
};

export const Route = createFileRoute("/blog/oleo-hidraulico-paleteira-cascavel")({
  head: () => ({
    meta: [
      { title: `${meta.title} | Hidraumil` },
      { name: "description", content: meta.excerpt },
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
      <p>
        O <strong>óleo hidráulico</strong> é o "sangue" da paleteira. Óleo errado ou vencido causa em cascata: perda de força, aquecimento, ressecamento de selo, vazamento e, no fim, troca de bomba. Este guia resolve as três perguntas que mais recebemos em Cascavel: qual óleo usar, quando trocar e onde comprar o certo.
      </p>

      <h2>Qual óleo usar em paleteira hidráulica</h2>
      <p>
        A recomendação padrão da Bovenau e da maioria das fabricantes é <strong>óleo hidráulico ISO VG 32 ou 46</strong> (depende do modelo e da temperatura do ambiente). Em Cascavel, por causa do clima com verão quente, a maioria das paleteiras trabalha melhor com <strong>ISO VG 46</strong>. Confira sempre o manual do seu equipamento.
      </p>

      <h2>Óleo mineral, semissintético ou sintético?</h2>
      <ul>
        <li><strong>Mineral</strong>: mais barato, atende bem uso comum e ambientes secos;</li>
        <li><strong>Semissintético</strong>: melhor estabilidade térmica, indicado para uso pesado;</li>
        <li><strong>Sintético</strong>: mais caro, faz sentido só em ambientes de temperatura extrema (câmara fria ou operação 24h);</li>
        <li>Em ambientes de contato com alimentos: usar <strong>óleo grau alimentício (H1)</strong>.</li>
      </ul>

      <h2>Nunca faça isto</h2>
      <ul>
        <li><strong>Misturar óleos de marcas ou tipos diferentes</strong> — cria emulsão, entope filtro e destrói a bomba;</li>
        <li>Usar óleo de motor, ATF (transmissão automática) ou óleo de máquina de costura;</li>
        <li>Completar com "o que tem no armazém" sem confirmar a especificação;</li>
        <li>Comprar óleo em embalagem sem lacre.</li>
      </ul>

      <h2>Quando trocar o óleo hidráulico</h2>
      <p>
        A regra prática para paleteira manual em uso comercial é <strong>troca a cada 12 meses</strong>. Em indústria com uso pesado, o intervalo cai para <strong>6 meses</strong>. Sinais claros de que o óleo precisa ser trocado agora:
      </p>
      <ul>
        <li>Cor escurecida (o óleo novo é âmbar claro; se está preto, trocou de cor por contaminação);</li>
        <li>Cheiro de queimado;</li>
        <li>Aparência leitosa (indica água no sistema);</li>
        <li>Partículas em suspensão.</li>
      </ul>

      <h2>Quanto óleo cabe em uma paleteira?</h2>
      <p>
        A maioria das paleteiras manuais Bovenau usa entre <strong>0,3 e 0,5 litro</strong> de óleo hidráulico. Elétricas variam de 1 a 3 litros dependendo do modelo. Comprar 1 galão de 5 L costuma ser suficiente para várias trocas.
      </p>

      <h2>Passo a passo da troca (resumo)</h2>
      <ol>
        <li>Descer o garfo completamente;</li>
        <li>Retirar o parafuso de dreno (ou virar cuidadosamente para escoar);</li>
        <li>Escoar todo o óleo velho em recipiente adequado (descarte com empresa licenciada);</li>
        <li>Recolocar o dreno com vedação nova;</li>
        <li>Abastecer com óleo novo pelo bujão de enchimento até o nível indicado;</li>
        <li>Sangrar o sistema: levantar e descer 5-10 vezes sem carga;</li>
        <li>Verificar nível novamente.</li>
      </ol>

      <h2>Onde comprar óleo hidráulico em Cascavel</h2>
      <p>
        A Hidraumil vende <strong>óleo hidráulico da especificação correta para paleteiras Bovenau</strong> — ISO VG 32, 46 e opções grau alimentício — com nota fiscal e retirada em Cascavel ou entrega para o Oeste do Paraná. Se preferir, agende a troca completa: fazemos no seu galpão com registro para manutenção preventiva.
      </p>
    </BlogArticle>
  );
}
