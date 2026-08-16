import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "seguranca-operacao-paleteira-cascavel",
  title: "Segurança na Operação de Paleteira Hidráulica: NR-11 e Boas Práticas para Empresas de Cascavel",
  excerpt: "Guia de segurança na operação de paleteira hidráulica em Cascavel-PR: exigências da NR-11, EPIs, treinamento, inspeção diária e como reduzir acidentes na sua indústria.",
  date: "2026-06-27",
  category: "Segurança",
};

export const Route = createFileRoute("/blog/seguranca-operacao-paleteira-cascavel")({
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
        Acidente com paleteira hidráulica é mais comum do que parece — pé prensado, queda de carga, capotamento em rampa. Além do dano humano, gera afastamento, multa e ação trabalhista. Este guia reúne o que empresas de Cascavel precisam aplicar para operar em conformidade com a <strong>NR-11</strong> e as boas práticas do setor.
      </p>

      <h2>O que a NR-11 exige</h2>
      <p>
        A Norma Regulamentadora 11 do Ministério do Trabalho trata de <strong>transporte, movimentação, armazenagem e manuseio de materiais</strong>. Para paleteira, o essencial é:
      </p>
      <ul>
        <li>Operador treinado e autorizado por escrito pela empresa;</li>
        <li>Equipamento com capacidade nominal visível e respeitada;</li>
        <li>Sinalização de áreas de circulação;</li>
        <li>Manutenção preventiva documentada.</li>
      </ul>

      <h2>Treinamento do operador</h2>
      <p>
        Não existe curso oficial de "operador de paleteira manual", mas a empresa é obrigada a fornecer <strong>capacitação interna documentada</strong>: como levantar carga, como manobrar em rampa, o que fazer se o garfo descer sozinho, como inspecionar o equipamento antes do uso. Guarde lista de presença e conteúdo — auditoria pede.
      </p>

      <h2>EPIs obrigatórios</h2>
      <ul>
        <li><strong>Calçado de segurança com biqueira</strong> (aço ou composite);</li>
        <li>Luva de proteção mecânica;</li>
        <li>Colete refletivo em áreas com trânsito de empilhadeira;</li>
        <li>Capacete em áreas com movimentação vertical acima.</li>
      </ul>

      <h2>Checklist diário de 60 segundos</h2>
      <p>
        Antes de cada turno, o operador deve verificar:
      </p>
      <ul>
        <li>Vazamento de óleo no chão;</li>
        <li>Garfo alinhado, sem empenamento;</li>
        <li>Válvula de descida travando com carga (levantar 20 cm, esperar 30 s);</li>
        <li>Rodas girando livres, sem trava ou ruído;</li>
        <li>Alavanca respondendo entre subir, neutro e descer.</li>
      </ul>
      <p>
        Qualquer alteração: retirar de operação e chamar a assistência técnica.
      </p>

      <h2>Erros de operação que mais causam acidente</h2>
      <ol>
        <li><strong>Puxar a paleteira em rampa</strong> em vez de empurrar — a carga tomba sobre o operador;</li>
        <li>Carregar acima da capacidade nominal;</li>
        <li>Andar com o garfo alto (correto é sempre 5–10 cm do chão);</li>
        <li>Deixar paleteira estacionada em rampa sem calço;</li>
        <li>Usar paleteira com defeito conhecido "só mais um pouco".</li>
      </ol>

      <h2>Manutenção preventiva reduz acidente</h2>
      <p>
        A maioria dos acidentes com paleteira envolve <strong>falha do equipamento</strong>: válvula de descida com vazamento interno, garfo empenado, roda travada. Um plano de manutenção preventiva a cada 3 ou 6 meses, com ordem de serviço registrada, protege sua empresa em caso de acidente e reduz sinistros.
      </p>

      <h2>Como a Hidraumil ajuda sua indústria em Cascavel</h2>
      <p>
        Oferecemos <strong>contratos de manutenção preventiva com laudo técnico</strong> — o documento certo para auditoria e defesa em caso de acidente. Atendemos indústrias, cooperativas e centros de distribuição em Cascavel e Oeste do Paraná. Chame no WhatsApp para montar seu plano.
      </p>
    </BlogArticle>
  );
}
