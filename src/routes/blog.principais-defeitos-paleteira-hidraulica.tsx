import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

const meta = {
  slug: "principais-defeitos-paleteira-hidraulica",
  title: "Conserto de Paleteira Hidráulica: Os 7 Defeitos Mais Comuns e Como Resolver",
  excerpt: "Conheça os 7 defeitos que mais aparecem no conserto de paleteira hidráulica, suas causas, sinais de alerta e o reparo certo para cada um deles.",
  date: "2026-06-22",
  category: "Conserto",
};

export const Route = createFileRoute("/blog/principais-defeitos-paleteira-hidraulica")({
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
        Depois de mais de uma década atendendo empresas em Cascavel e Oeste do Paraná, percebemos que <strong>quase todo conserto de paleteira hidráulica</strong> se concentra em poucos defeitos recorrentes. Reconhecer cedo cada um deles evita que um problema simples vire um reparo caro. Veja os 7 mais comuns, com causa, sinal de alerta e a solução correta.
      </p>

      <h2>1. Paleteira não levanta a carga</h2>
      <p>
        Sintoma clássico: você aciona o gatilho/pedal, ouve a bomba trabalhando, mas o garfo não sobe — ou sobe muito pouco. Causa mais comum: <strong>nível baixo de óleo hidráulico</strong> ou contaminação por ar/água. Em segundo lugar, vem o desgaste dos selos da bomba. Solução: completar ou trocar o óleo (sempre com a especificação correta) e, se persistir, recondicionar a bomba com kit de selos. Nunca improvise misturando óleos diferentes.
      </p>

      <h2>2. Garfo desce sozinho com carga</h2>
      <p>
        Você ergue, deixa o pallet parado por alguns minutos e ele começa a descer sem você acionar a válvula. Esse é o defeito que mais oferece risco — pode causar acidente. Causa: <strong>válvula de descida com vazamento interno</strong> ou retentor do cilindro gasto. Solução: troca da válvula e dos retentores do cilindro. Não opere a paleteira até resolver.
      </p>

      <h2>3. Vazamento de óleo</h2>
      <p>
        Manchas de óleo no chão embaixo da paleteira ou marcas escorrendo na haste do cilindro. Causa: <strong>vedações ressecadas ou hastes com risco</strong>. Vedação seca acontece por idade ou por óleo de qualidade ruim. Risco na haste vem de contato com sujeira ou impacto. Solução: troca de selos, retentores e, se necessário, retífica ou substituição da haste.
      </p>

      <h2>4. Empunhadura dura ou travada</h2>
      <p>
        O gatilho ou alavanca não responde como antes; é preciso forçar para mudar entre subir, neutro e descer. Causa: <strong>falta de lubrificação nas articulações</strong> ou cabo de acionamento desregulado. Solução: limpeza, lubrificação e regulagem do cabo. É o tipo de reparo barato que, se postergado, evolui para troca da válvula.
      </p>

      <h2>5. Rodas travadas ou ruidosas</h2>
      <p>
        Paleteira "rasga" o chão, fica pesada para empurrar ou faz ruído metálico ao deslocar. Causa: <strong>rolamentos secos ou achatamento das rodas</strong> por carga parada por longos períodos. Solução: troca das rodas (carga e direção) e dos rolamentos. Usar rodas de poliuretano onde o piso é frio ou úmido aumenta muito a vida útil.
      </p>

      <h2>6. Garfo torto ou empenado</h2>
      <p>
        Pallet entra torto, paleteira "puxa" para um lado, garfo encosta no chão de forma desigual. Causa: <strong>impacto, queda ou sobrecarga reincidente</strong>. Solução: dependendo da gravidade, alinhamento em prensa hidráulica ou substituição do conjunto de garfos. Operar paleteira com garfo empenado acelera o desgaste de toda a estrutura.
      </p>

      <h2>7. Pressão hidráulica fraca</h2>
      <p>
        A paleteira até levanta, mas perde força ao chegar perto da capacidade nominal — algo que deveria pegar 2.000 kg só vai com 1.200 kg. Causa: <strong>desgaste do conjunto bomba + cilindro</strong> ou válvula de alívio desregulada. Solução: revisão completa do sistema hidráulico, ajuste da válvula de alívio e troca de componentes desgastados.
      </p>

      <h2>O que esses 7 defeitos têm em comum</h2>
      <p>
        Quase todos começam pequenos — uma gota de óleo, um gatilho um pouco mais duro, uma roda meio ruidosa. Quando ignorados, evoluem rápido. Por isso, manutenção preventiva e atenção a esses sinais de alerta sai sempre mais barato do que o conserto de emergência.
      </p>

      <h2>Atendimento em Cascavel e Oeste do Paraná</h2>
      <p>
        A Hidraumil atende todos esses defeitos com diagnóstico gratuito, peças com garantia e técnicos especializados. Mande seu sintoma pelo WhatsApp — em muitos casos, conseguimos dizer na conversa se é coisa simples ou se vai precisar de oficina.
      </p>
    </BlogArticle>
  );
}
