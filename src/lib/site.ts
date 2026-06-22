export const SITE = {
  name: "Hidraumil Hidráulicos",
  shortName: "Hidraumil",
  city: "Cascavel",
  state: "Paraná",
  region: "Oeste do Paraná",
  phoneDisplay: "(44) 99999-9999",
  phoneE164: "+5544999999999",
  whatsappNumber: "5544999999999",
  whatsappUrl: "https://wa.me/5544999999999",
  email: "contato@hidraumil.com.br",
  address: "Cascavel, Paraná - Brasil",
  hours: "Segunda a Sexta, 08:00 às 18:00",
};

export const services = [
  {
    slug: "manutencao-paleteiras-hidraulicas-cascavel",
    title: "Manutenção Preventiva e Corretiva",
    short: "Manutenção completa para garantir desempenho e segurança da sua paleteira hidráulica.",
    icon: "Wrench",
  },
  {
    slug: "conserto-paleteira-hidraulica-cascavel",
    title: "Conserto de Paleteiras",
    short: "Reparo rápido para vazamentos, falhas na bomba, cilindro, rodas e mais.",
    icon: "Hammer",
  },
  {
    slug: "locacao-paleteiras-hidraulicas-cascavel",
    title: "Locação de Paleteiras Hidráulicas",
    short: "Aluguel mensal flexível com manutenção inclusa e equipamentos revisados.",
    icon: "Calendar",
  },
  {
    slug: "venda-paleteiras-hidraulicas-cascavel",
    title: "Venda de Paleteiras Hidráulicas",
    short: "Paleteiras novas e revisadas: manuais, semielétricas e elétricas.",
    icon: "ShoppingCart",
  },
  {
    slug: "assistencia-tecnica-equipamentos-hidraulicos-cascavel",
    title: "Assistência Técnica Especializada",
    short: "Atendimento técnico em equipamentos hidráulicos industriais, incluindo Bovenau.",
    icon: "ShieldCheck",
  },
  {
    slug: "venda-pecas-paleteiras",
    title: "Venda de Peças e Componentes",
    short: "Cilindros, bombas, rodas, garfos, selos e vedações com entrega rápida.",
    icon: "Cog",
  },
];

export const posts = [
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
