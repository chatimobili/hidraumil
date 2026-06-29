export const SITE = {
  name: "Hidraumil Hidráulicos",
  shortName: "Hidraumil",
  city: "Cascavel",
  state: "Paraná",
  region: "Oeste do Paraná",
  phoneDisplay: "(45) 99913-0659",
  phoneE164: "+5545999130659",
  whatsappNumber: "5545999130659",
  whatsappUrl: "https://wa.me/5545999130659",
  email: "contato@hidraumil.com.br",
  address: "Cascavel, Paraná - Brasil",
  hours: "Segunda a Sexta, 08:00 às 18:00",
};

export const services = [
  {
    slug: "assistencia-tecnica-equipamentos-hidraulicos-cascavel",
    title: "Manutenção de Paleteira",
    short: "Manutenção de paleteira preventiva e corretiva com técnicos especializados e garantia por escrito.",
    icon: "Wrench",
  },
  {
    slug: "assistencia-tecnica-equipamentos-hidraulicos-cascavel",
    title: "Conserto de Paleteira",
    short: "Conserto de paleteira manual e hidráulica com coleta e entrega em Cascavel e região.",
    icon: "Hammer",
  },
  {
    slug: "locacao-paleteiras-hidraulicas-cascavel",
    title: "Aluguel de Paleteira",
    short: "Aluguel de paleteira (locação) com contratos flexíveis e manutenção inclusa.",
    icon: "Calendar",
  },
  {
    slug: "venda-paleteiras-hidraulicas-cascavel",
    title: "Venda de Paleteiras",
    short: "Paleteiras novas e revisadas: manuais, semielétricas e elétricas.",
    icon: "ShoppingCart",
  },
  {
    slug: "venda-pecas-paleteiras",
    title: "Venda de Peças",
    short: "Peças para manutenção de paleteira: cilindros, bombas, rodas, garfos, selos e vedações.",
    icon: "Cog",
  },
];

export const posts = [
  {
    slug: "guia-conserto-paleteira-hidraulica-cascavel",
    title: "Conserto de Paleteira Hidráulica em Cascavel: Guia Completo de Diagnóstico e Reparo",
    excerpt: "Guia técnico completo de conserto de paleteira hidráulica em Cascavel-PR: diagnóstico, etapas do reparo, prazos, garantia e como escolher uma assistência confiável.",
    date: "2026-06-25",
    category: "Conserto",
  },
  {
    slug: "principais-defeitos-paleteira-hidraulica",
    title: "Conserto de Paleteira Hidráulica: Os 7 Defeitos Mais Comuns e Como Resolver",
    excerpt: "Conheça os 7 defeitos que mais aparecem no conserto de paleteira hidráulica, suas causas, sinais de alerta e o reparo certo para cada um deles.",
    date: "2026-06-22",
    category: "Conserto",
  },
  {
    slug: "aluguel-paleteira-hidraulica-cascavel",
    title: "Aluguel de Paleteira em Cascavel-PR: Como Funciona, Quanto Custa e Quando Vale a Pena",
    excerpt: "Tudo sobre aluguel de paleteira em Cascavel-PR: modalidades de locação, valores médios, manutenção inclusa, prazos e quando alugar compensa mais que comprar.",
    date: "2026-06-18",
    category: "Aluguel",
  },
  {
    slug: "locacao-vs-compra-paleteira-cascavel",
    title: "Locação de Paleteira Hidráulica em Cascavel: Vantagens vs. Compra para Empresas do Oeste do Paraná",
    excerpt: "Locação ou compra de paleteira? Compare custos, riscos e benefícios para empresas de Cascavel e Oeste do Paraná e descubra qual modelo é o ideal para sua operação.",
    date: "2026-06-15",
    category: "Aluguel",
  },
  {
    slug: "manutencao-preventiva-paleteira-hidraulica",
    title: "Manutenção Preventiva de Paleteira Hidráulica: Guia Completo",
    excerpt: "Como fazer a manutenção preventiva da sua paleteira hidráulica, evitar falhas e aumentar a vida útil do equipamento.",
    date: "2025-03-10",
    category: "Manutenção",
  },
  {
    slug: "quanto-custa-consertar-paleteira-hidraulica",
    title: "Quanto Custa Consertar uma Paleteira Hidráulica?",
    excerpt: "Descubra quanto custa consertar uma paleteira hidráulica e quais fatores influenciam no preço.",
    date: "2025-04-02",
    category: "Conserto",
  },
  {
    slug: "paleteira-manual-vs-hidraulica",
    title: "Paleteira Manual ou Hidráulica: Qual Escolher para Sua Empresa?",
    excerpt: "Entenda as diferenças entre paleteira manual e hidráulica e descubra a melhor opção para sua operação.",
    date: "2025-05-15",
    category: "Guia",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "/og-hidraumil.jpg",
  "@id": "https://hidraumil.com.br/#localbusiness",
  url: "https://hidraumil.com.br",
  telephone: SITE.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cascavel",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Cascavel" },
    { "@type": "AdministrativeArea", name: "Oeste do Paraná" },
  ],
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    opens: "08:00",
    closes: "18:00",
  }],
  priceRange: "$$",
};
