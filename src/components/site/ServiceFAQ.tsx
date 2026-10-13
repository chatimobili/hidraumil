const questions = [
  {
    q: "Quanto tempo demora o conserto?",
    a: "O prazo depende da avaliação do equipamento e do serviço necessário. Consulte a equipe pelo WhatsApp (45) 99913-0659 para receber uma orientação sobre o seu caso.",
  },
  {
    q: "Vocês buscam a paleteira na empresa?",
    a: "Consulte pelo WhatsApp (45) 99913-0659 as possibilidades de coleta e atendimento na sua empresa. Informe a localização e o equipamento para combinar os detalhes com a equipe.",
  },
  {
    q: "Atendem quais cidades?",
    a: "Atendemos Cascavel e cidades do Oeste do Paraná. Informe sua cidade pelo WhatsApp (45) 99913-0659 para confirmar a disponibilidade e a forma de atendimento.",
  },
  {
    q: "Como pedir orçamento?",
    a: "Envie uma mensagem pelo WhatsApp (45) 99913-0659 com o modelo do equipamento, sua cidade e uma descrição da necessidade. Fotos ou vídeos podem ajudar a equipe a orientar o atendimento.",
  },
];

export function ServiceFAQ({ questions: faqQuestions = questions }: { questions?: { q: string; a: string }[] } = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="bg-background" aria-labelledby="service-faq-title">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="service-faq-title" className="text-secondary">Perguntas frequentes</h2>
        <dl className="mt-8 divide-y divide-border">
          {faqQuestions.map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="text-xl font-semibold text-secondary">{q}</dt>
              <dd className="mt-3 text-muted-foreground leading-relaxed">
                {a}{" "}
                <a href="https://wa.me/5545999130659" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Fale no WhatsApp.</a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}