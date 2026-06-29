import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "guia-conserto-paleteira-hidraulica-cascavel",
  title: "Conserto de Paleteira Hidráulica em Cascavel: Guia Completo de Diagnóstico e Reparo",
  excerpt: "Guia técnico completo de conserto de paleteira hidráulica em Cascavel-PR: diagnóstico, etapas do reparo, prazos, garantia e como escolher uma assistência confiável.",
  date: "2026-06-25",
  category: "Conserto",
};

export const Route = createFileRoute("/blog/guia-conserto-paleteira-hidraulica-cascavel")({
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
      <h2>Por que o conserto de paleteira hidráulica precisa ser feito por especialista</h2>
      <p>
        A paleteira hidráulica é um equipamento aparentemente simples, mas que reúne sistema mecânico, hidráulico e estrutural num só corpo. Quando ela falha, o problema raramente é só "o que aparece" — um vazamento de óleo pode indicar selo gasto, mas também pode ser sinal de uma haste do cilindro empenada por excesso de carga. Por isso, o <strong>conserto de paleteira hidráulica em Cascavel</strong> precisa começar sempre por um diagnóstico técnico feito por quem entende do equipamento — não por "tentativa e erro" que destrói peças boas no caminho.
      </p>
      <p>
        Na Hidraumil, atendemos empresas de Cascavel e de todo o Oeste do Paraná com conserto especializado em paleteiras manuais hidráulicas, semielétricas e elétricas, de praticamente todas as marcas do mercado. Este guia mostra como funciona um reparo bem feito, quanto tempo leva, o que esperar de garantia e como evitar oficinas improvisadas que custam barato na hora e caro depois.
      </p>

      <h2>As 4 etapas de um conserto profissional</h2>
      <h3>1. Diagnóstico técnico</h3>
      <p>
        Tudo começa com a inspeção. O técnico avalia sistema hidráulico (óleo, bomba, cilindro, válvulas), conjunto mecânico (rodas, eixos, garfos, soldas) e empunhadura (gatilho, articulações). Em Cascavel, oferecemos diagnóstico gratuito — você só paga se aprovar o orçamento.
      </p>
      <h3>2. Orçamento por escrito</h3>
      <p>
        Antes de qualquer reparo, você recebe um orçamento detalhado com peças, mão de obra, prazo e garantia. Nada de "depois a gente vê" — surpresas no fim do serviço são o maior motivo de cliente insatisfeito com oficina de paleteira.
      </p>
      <h3>3. Execução do reparo</h3>
      <p>
        Com aprovação, o serviço é executado em bancada com ferramental específico: prensa hidráulica para o cilindro, chaves dedicadas para a bomba, óleo hidráulico ISO 32/46 conforme especificação do fabricante. Peças originais ou paralelas de qualidade equivalente — você decide.
      </p>
      <h3>4. Teste e entrega</h3>
      <p>
        Antes de devolver, o equipamento é testado em carga real: elevação total com peso máximo, descida controlada, manobra com rodas livres e travadas. Só sai da oficina paleteira que aprovaria pra uso da nossa própria operação.
      </p>

      <h2>Quanto tempo leva o conserto</h2>
      <p>
        Para problemas simples (troca de selos, óleo, rodas), o reparo fica pronto em 24 a 48 horas. Reparos médios (recondicionamento do cilindro, troca da bomba) levam de 3 a 5 dias úteis. Recondicionamento completo, com pintura e troca de peças estruturais, pode levar de 7 a 10 dias. Em casos de urgência, fazemos atendimento expresso ou cedemos paleteira reserva enquanto a sua está em manutenção.
      </p>

      <h2>Garantia: o termômetro da assistência</h2>
      <p>
        Empresa séria oferece garantia por escrito — mínimo 90 dias sobre mão de obra e o prazo do fabricante para peças. Se a oficina não dá garantia ou só promete verbalmente, suspeite. Na Hidraumil, toda nota de serviço já vem com o termo de garantia impresso e assinado.
      </p>

      <h2>Coleta e entrega em Cascavel e região</h2>
      <p>
        Sabemos que tirar paleteira do galpão para levar à oficina dá trabalho. Por isso, atendemos com <strong>coleta e entrega gratuita</strong> em Cascavel e cidades vizinhas do Oeste do Paraná: Toledo, Foz do Iguaçu, Marechal Cândido Rondon, Santa Helena, Assis Chateaubriand, Medianeira, Quedas do Iguaçu e região. Em alguns casos, executamos o reparo no próprio local do cliente.
      </p>

      <h2>Como escolher onde consertar sua paleteira</h2>
      <ul>
        <li><strong>Especialização:</strong> prefira oficinas que trabalham com paleteira, não "tudo um pouco".</li>
        <li><strong>Estrutura física:</strong> visite ou peça fotos da oficina; bancada, prensa e ferramental aparecem na hora.</li>
        <li><strong>Garantia por escrito:</strong> sem garantia, sem serviço.</li>
        <li><strong>Tempo no mercado:</strong> empresa local com anos de atuação não some depois do reparo.</li>
        <li><strong>Reputação:</strong> avaliações no Google, indicações de outros clientes e portfólio público são bons indicadores.</li>
      </ul>

      <h2>Solicite seu orçamento de conserto</h2>
      <p>
        Está com paleteira parada ou apresentando algum defeito? Fale com a Hidraumil pelo WhatsApp. Mande uma foto ou vídeo do problema e nossa equipe dá uma estimativa inicial na hora. Atendemos Cascavel e todo o Oeste do Paraná com diagnóstico gratuito e garantia em todo serviço.
      </p>
    </BlogArticle>
  );
}
