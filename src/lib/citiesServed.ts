import type { CityContent } from "@/components/site/CityServicePage";

export const CITIES: CityContent[] = [
  {
    city: "Toledo",
    citySlug: "toledo",
    distanceKm: 50,
    driveTime: "45 minutos",
    intro:
      "Toledo é um dos maiores polos agroindustriais do Oeste do Paraná, com forte presença de frigoríficos, cooperativas, distribuidoras e empresas de logística. Essa combinação faz da paleteira hidráulica um equipamento essencial na rotina de armazéns, docas de expedição e centros de distribuição de Toledo — e é exatamente onde a Hidraumil atua.",
    economy:
      "A operação industrial de Toledo não pode parar. Uma paleteira parada em uma doca de expedição atrasa carregamento, gera hora extra e coloca prazo de entrega em risco. Por isso trabalhamos com atendimento ágil, contratos de manutenção preventiva e estoque de peças críticas — para que o equipamento volte a operar no menor tempo possível.",
    neighborhoods: ["Centro", "Vila Industrial", "Jardim La Salle", "Jardim Coopagro", "Vila Pioneiro", "Jardim Panorama", "Distrito de Vila Nova"],
    nearbyCities: [
      { name: "Cascavel", slug: "cascavel" },
      { name: "Marechal Cândido Rondon", slug: "marechal-candido-rondon" },
      { name: "Palotina", slug: "palotina" },
      { name: "Assis Chateaubriand", slug: "assis-chateaubriand" },
    ],
  },
  {
    city: "Foz do Iguaçu",
    citySlug: "foz-do-iguacu",
    distanceKm: 140,
    driveTime: "1h50",
    intro:
      "Foz do Iguaçu concentra hotéis, centros de convenções, atacadistas, importadoras e operações de logística ligadas à fronteira. Todo esse ecossistema depende de movimentação constante de cargas paletizadas, seja em depósitos hoteleiros, cozinhas industriais ou armazéns de importação — e a paleteira hidráulica é o equipamento que faz esse trabalho.",
    economy:
      "Em Foz do Iguaçu, o custo de trocar um equipamento com defeito por um novo raramente compensa. Uma manutenção bem-feita devolve a paleteira à operação por uma fração do preço. Nós fazemos coleta agendada, executamos o serviço em Cascavel e devolvemos o equipamento com garantia — sem que sua empresa precise deslocar equipe ou parar por muitos dias.",
    neighborhoods: ["Vila Portes", "Vila Yolanda", "Jardim América", "Centro", "Parque Industrial", "Três Lagoas", "Cidade Nova"],
    nearbyCities: [
      { name: "Cascavel", slug: "cascavel" },
      { name: "Medianeira", slug: "medianeira" },
      { name: "Santa Helena", slug: "santa-helena" },
      { name: "Toledo", slug: "toledo" },
    ],
  },
  {
    city: "Marechal Cândido Rondon",
    citySlug: "marechal-candido-rondon",
    distanceKm: 85,
    driveTime: "1h15",
    intro:
      "Marechal Cândido Rondon é uma cidade com forte tradição agroindustrial e presença marcante de cooperativas e indústrias de alimentos. Essas operações usam paleteiras hidráulicas todos os dias para movimentar sacaria, caixas de produtos acabados e insumos entre linhas de produção, expedição e caminhões — e falhas nesse fluxo custam caro.",
    economy:
      "Manter a paleteira em ordem em Marechal Cândido Rondon significa manter linha de produção fluindo e docas de expedição operando dentro do horário. Trabalhamos com manutenção preventiva mensal para indústrias e cooperativas, evitando quebras justamente nos períodos de safra e picos de expedição.",
    neighborhoods: ["Centro", "Jardim Líder", "Vila Gaúcha", "Jardim Concórdia", "Parque Industrial", "Vila Alto Alegre"],
    nearbyCities: [
      { name: "Toledo", slug: "toledo" },
      { name: "Palotina", slug: "palotina" },
      { name: "Santa Helena", slug: "santa-helena" },
      { name: "Cascavel", slug: "cascavel" },
    ],
  },
  {
    city: "Medianeira",
    citySlug: "medianeira",
    distanceKm: 85,
    driveTime: "1h",
    intro:
      "Medianeira reúne indústrias de alimentos, frigoríficos e operações de logística que movimentam grandes volumes de carga paletizada todos os dias. Paleteira hidráulica é equipamento de linha de frente em Medianeira — e por isso o serviço de manutenção precisa ser rápido, técnico e com garantia.",
    economy:
      "Uma paleteira travada em uma câmara fria ou em uma doca de carregamento em Medianeira gera prejuízo em minutos. Nossos técnicos conhecem os defeitos típicos dos equipamentos usados em ambientes frios e úmidos — desgaste acelerado de rodas, ressecamento de vedações e oxidação de válvulas — e resolvem com peças adequadas.",
    neighborhoods: ["Centro", "Bairro Ipê", "Jardim Irriguáçú", "Vila Cabral", "Parque Independência", "Frigobrás"],
    nearbyCities: [
      { name: "Foz do Iguaçu", slug: "foz-do-iguacu" },
      { name: "Cascavel", slug: "cascavel" },
      { name: "Santa Helena", slug: "santa-helena" },
      { name: "Toledo", slug: "toledo" },
    ],
  },
  {
    city: "Assis Chateaubriand",
    citySlug: "assis-chateaubriand",
    distanceKm: 90,
    driveTime: "1h10",
    intro:
      "Assis Chateaubriand tem uma economia fortemente ligada ao agronegócio, com cooperativas, unidades de recebimento de grãos e indústrias de rações. A paleteira hidráulica aparece em armazéns, depósitos de insumos, expedição de embalados e supermercados — em todos esses cenários, a Hidraumil atende.",
    economy:
      "Para empresas de Assis Chateaubriand, a alternativa mais comum é trazer o equipamento até Cascavel, onde temos oficina completa, ou receber nossa equipe em campo em casos de contrato. Assim você não fica dependendo de assistência que demora dias para dar retorno.",
    neighborhoods: ["Centro", "Vila Nova", "Jardim América", "Parque Industrial", "Cohapar", "Distrito Encantado do Oeste"],
    nearbyCities: [
      { name: "Toledo", slug: "toledo" },
      { name: "Palotina", slug: "palotina" },
      { name: "Cascavel", slug: "cascavel" },
      { name: "Marechal Cândido Rondon", slug: "marechal-candido-rondon" },
    ],
  },
  {
    city: "Palotina",
    citySlug: "palotina",
    distanceKm: 105,
    driveTime: "1h20",
    intro:
      "Palotina é um polo agroindustrial reconhecido pela presença de grandes plantas de processamento de proteína animal e uma rede robusta de cooperativas. Toda essa cadeia produtiva usa intensivamente paleteiras hidráulicas para movimentar carga paletizada — e o custo de parada nesse ambiente é alto.",
    economy:
      "Em Palotina, priorizamos contratos de manutenção preventiva para indústrias com frota de paleteiras, com revisões programadas que evitam quebras em horário de expedição. Também atendemos empresas menores e supermercados com serviços pontuais, com coleta e entrega.",
    neighborhoods: ["Centro", "Jardim Gisele", "Vila Nova", "Jardim Petrópolis", "Parque Industrial", "Distrito de São Camilo"],
    nearbyCities: [
      { name: "Marechal Cândido Rondon", slug: "marechal-candido-rondon" },
      { name: "Assis Chateaubriand", slug: "assis-chateaubriand" },
      { name: "Toledo", slug: "toledo" },
      { name: "Cascavel", slug: "cascavel" },
    ],
  },
  {
    city: "Santa Helena",
    citySlug: "santa-helena",
    distanceKm: 110,
    driveTime: "1h30",
    intro:
      "Santa Helena, às margens do Lago de Itaipu, combina turismo, agroindústria e uma rede crescente de operações logísticas e supermercadistas. A paleteira hidráulica é presença certa em depósitos de bebidas, atacadistas, cooperativas e distribuidoras da cidade.",
    economy:
      "Atendemos Santa Helena com coleta e entrega agendadas, além de visitas técnicas em campo para contratos de manutenção. Nosso foco é resolver o problema na primeira visita, com peças em mãos e garantia por escrito.",
    neighborhoods: ["Centro", "Vila Panorama", "Jardim Aliança", "Bairro São João", "Parque Industrial"],
    nearbyCities: [
      { name: "Marechal Cândido Rondon", slug: "marechal-candido-rondon" },
      { name: "Medianeira", slug: "medianeira" },
      { name: "Foz do Iguaçu", slug: "foz-do-iguacu" },
      { name: "Cascavel", slug: "cascavel" },
    ],
  },
  {
    city: "Corbélia",
    citySlug: "corbelia",
    distanceKm: 30,
    driveTime: "30 minutos",
    intro:
      "Corbélia fica na porta de casa da Hidraumil — pouco mais de meia hora de Cascavel. Isso significa atendimento praticamente no mesmo dia para empresas locais: cooperativas, indústrias, supermercados e distribuidoras que dependem de paleteiras hidráulicas para manter a operação fluindo.",
    economy:
      "A proximidade com Cascavel torna o custo total do serviço em Corbélia muito competitivo: baixa taxa de deslocamento, coleta rápida e devolução ágil. Para empresas com frota de paleteiras, oferecemos contratos mensais com preço fixo e visitas programadas.",
    neighborhoods: ["Centro", "Vila Industrial", "Jardim Universitário", "Bairro São Cristóvão", "Distrito de Sede Alvorada"],
    nearbyCities: [
      { name: "Cascavel", slug: "cascavel" },
      { name: "Toledo", slug: "toledo" },
      { name: "Assis Chateaubriand", slug: "assis-chateaubriand" },
      { name: "Palotina", slug: "palotina" },
    ],
  },
];
