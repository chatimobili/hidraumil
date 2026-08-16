export const SITE_URL = "https://hidraumil.com.br";
export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

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
  email: "hidraumil@hotmail.com",
  address: "Cascavel, Paraná - Brasil",
  hours: "Segunda a Sexta, 08:00 às 18:00",
};

export const services = [
  {
    slug: "/manutencao-paleteiras-hidraulicas-cascavel",
    title: "Manutenção de Paleteira",
    short: "Manutenção de paleteira preventiva e corretiva com técnicos especializados e garantia por escrito.",
    icon: "Wrench",
  },
  {
    slug: "/conserto-paleteira-hidraulica-cascavel",
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
  {
    slug: "assistencia-tecnica-paleteira-cascavel",
    title: "Assistência Técnica de Paleteira Hidráulica em Cascavel: Como Escolher a Empresa Certa",
    excerpt: "Como escolher a melhor assistência técnica de paleteira hidráulica em Cascavel-PR: critérios, sinais de alerta, garantia, prazos e o que uma empresa séria oferece.",
    date: "2026-07-05",
    category: "Assistência técnica",
  },
  {
    slug: "pecas-paleteira-hidraulica-cascavel",
    title: "Peças para Paleteira Hidráulica em Cascavel: Guia de Compra e Onde Encontrar Originais",
    excerpt: "Guia completo de peças para paleteira hidráulica em Cascavel-PR: quais componentes mais quebram, como identificar originais Bovenau e evitar peça paralela de baixa qualidade.",
    date: "2026-07-02",
    category: "Peças",
  },
  {
    slug: "paleteira-industria-alimentos-cascavel",
    title: "Paleteira Hidráulica para Indústria de Alimentos em Cascavel: Qual Modelo Escolher",
    excerpt: "Guia para escolher paleteira hidráulica em indústrias de alimentos de Cascavel-PR: rodas certas, aço inox, higiene, capacidade e manutenção específica para ambientes frios e úmidos.",
    date: "2026-06-30",
    category: "Guia",
  },
  {
    slug: "paleteira-2000kg-vs-3000kg-cascavel",
    title: "Paleteira Hidráulica 2000kg ou 3000kg: Qual Escolher em Cascavel-PR",
    excerpt: "Comparativo entre paleteira hidráulica de 2000kg e 3000kg em Cascavel-PR: diferenças de preço, aplicações ideais, durabilidade e como dimensionar para sua operação.",
    date: "2026-06-28",
    category: "Guia",
  },
  {
    slug: "seguranca-operacao-paleteira-cascavel",
    title: "Segurança na Operação de Paleteira Hidráulica: NR-11 e Boas Práticas para Empresas de Cascavel",
    excerpt: "Guia de segurança na operação de paleteira hidráulica em Cascavel-PR: exigências da NR-11, EPIs, treinamento, inspeção diária e como reduzir acidentes na sua indústria.",
    date: "2026-06-27",
    category: "Segurança",
  },
  {
    slug: "oleo-hidraulico-paleteira-cascavel",
    title: "Óleo Hidráulico para Paleteira: Qual Usar, Quando Trocar e Onde Comprar em Cascavel",
    excerpt: "Guia técnico sobre óleo hidráulico para paleteira em Cascavel-PR: viscosidade correta, quando trocar, riscos de misturar óleos e onde comprar o óleo certo.",
    date: "2026-06-26",
    category: "Manutenção",
  },
  {
    slug: "paleteira-cooperativas-oeste-parana",
    title: "Paleteira Hidráulica para Cooperativas Agrícolas do Oeste do Paraná: Guia Completo",
    excerpt: "Paleteira hidráulica em cooperativas agrícolas do Oeste do Paraná: modelos ideais, uso com big bag, safra e entressafra, manutenção rural e por que Bovenau é referência.",
    date: "2026-06-24",
    category: "Aplicações",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "https://hidraumil.com.br/og-hidraumil.jpg",
  "@id": "https://hidraumil.com.br/#localbusiness",
  url: "https://hidraumil.com.br",
  telephone: SITE.phoneE164,
  email: SITE.email,
  description:
    "Especialistas em manutenção, conserto e aluguel de paleteiras hidráulicas em Cascavel e região Oeste do Paraná. Atendimento rápido, peças originais e garantia por escrito.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Parecis, 1039 - Santo Onofre",
    addressLocality: "Cascavel",
    addressRegion: "PR",
    postalCode: "85806-410",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hidraumil.com.br/#website",
  url: "https://hidraumil.com.br",
  name: "Hidraumil Hidráulicos",
  description:
    "Manutenção, conserto e aluguel de paleteiras hidráulicas em Cascavel e região Oeste do Paraná.",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    "@id": "https://hidraumil.com.br/#organization",
    name: "Hidraumil Hidráulicos",
    url: "https://hidraumil.com.br",
    logo: {
      "@type": "ImageObject",
      url: "https://hidraumil.com.br/__l5e/assets-v1/864d08f1-ec9e-4344-a14e-e0aa27695b28/logo-hidraumil.png",
    },
  },
};
