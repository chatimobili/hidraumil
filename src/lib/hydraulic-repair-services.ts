export type RepairQuestion = { q: string; a: string };
export type RepairService = {
  path: string; title: string; description: string; h1: string; subtitle: string;
  intro: string[]; sections: { title: string; paragraphs?: string[]; items?: { title: string; text: string }[] }[];
  steps: { title: string; text: string }[]; questions: RepairQuestion[];
};

export const jackRepairService: RepairService = {
  path: "/conserto-macaco-hidraulico-cascavel",
  title: "Conserto de Macaco Hidráulico em Cascavel | Hidraumil",
  description: "Macaco hidráulico perdendo pressão, vazando ou sem subir? Conserto de macacos jacaré, garrafa e de oficina em Cascavel. Orçamento pelo WhatsApp.",
  h1: "Conserto de Macaco Hidráulico em Cascavel",
  subtitle: "Conserto e manutenção de macacos jacaré, garrafa e de oficina para Cascavel e região.",
  intro: [
    "A Hidraumil realiza conserto e manutenção de macacos hidráulicos para oficinas, borracharias, transportadoras e indústrias de Cascavel e região. Quando o equipamento deixa de elevar, apresenta vazamento ou não sustenta a carga, é importante interromper o uso e investigar a origem da falha. O sistema depende da combinação entre bomba, válvulas, óleo e vedações; por isso, substituir uma peça sem avaliar o conjunto pode deixar o problema principal sem solução. A análise técnica considera os sintomas relatados e as condições do equipamento.",
    "Macacos usados em veículos leves, manutenção de frotas e rotinas industriais trabalham em condições diferentes de carga e frequência. Informe à equipe o tipo de macaco, a capacidade indicada na identificação e o que mudou no funcionamento. Fotografias da placa, da haste e dos pontos de vazamento ajudam no primeiro contato. O atendimento abrange Cascavel e o Oeste do Paraná, com os detalhes de recebimento e transporte combinados pelo WhatsApp. A possibilidade de reparo é definida após a avaliação, sem presumir que todo equipamento possa ser recuperado.",
  ],
  sections: [
    { title: "Tipos de macaco que consertamos", items: [
      { title: "Macaco jacaré", text: "Com rodas e braço de elevação, é comum em oficinas e borracharias. A avaliação considera o conjunto hidráulico, o acionamento e as condições de articulação, pois folgas mecânicas também podem interferir no uso. Mesmo quando o sintoma parece ser apenas perda de pressão, é necessário observar se existem danos no corpo, nos apoios ou no braço. A capacidade nominal deve ser respeitada em qualquer operação." },
      { title: "Macaco garrafa", text: "Nesse modelo compacto, o êmbolo se desloca verticalmente para elevar a carga. Vedações desgastadas, válvulas com dificuldade de fechamento e óleo inadequado podem comprometer seu desempenho. A inspeção verifica sinais de vazamento e a condição da superfície do êmbolo. A posição de trabalho e o procedimento de armazenamento precisam seguir as orientações do fabricante; não se deve improvisar o uso em outra posição." },
      { title: "Macaco de oficina e aplicações em carreta", text: "Equipamentos utilizados na manutenção de veículos e carretas exigem atenção à capacidade, ao apoio e ao modo de acionamento. Informe se o macaco tem acionamento manual ou outro sistema, além da aplicação habitual. Esses dados orientam a avaliação e a identificação dos componentes. O conserto não aumenta a capacidade original do equipamento nem substitui os cuidados de segurança necessários na elevação." },
    ] },
    { title: "Defeitos mais comuns", paragraphs: ["Os sinais abaixo são referências para descrever o problema, não um diagnóstico definitivo. Mais de uma falha pode produzir o mesmo comportamento. Não abra válvulas, complete o reservatório ou ajuste mecanismos sem identificar o procedimento correto do modelo."], items: [
      { title: "Não sobe", text: "A causa provável pode ser nível incorreto de óleo, entrada de ar ou uma válvula que não permite formar pressão no circuito." },
      { title: "Desce sozinho", text: "Vedação interna desgastada ou válvula de retenção com falha pode permitir a passagem de óleo e provocar a descida da carga." },
      { title: "Vazamento de óleo", text: "Vedações danificadas ou desgaste na superfície do êmbolo podem permitir a saída de óleo e exigir inspeção do ponto de vazamento." },
      { title: "Perde pressão com carga", text: "Uma vedação comprometida ou uma válvula sem fechamento adequado pode causar fuga interna de óleo quando o esforço aumenta." },
      { title: "Alavanca solta", text: "Folga na ligação da alavanca com o êmbolo da bomba pode prejudicar o acionamento, devendo ser diferenciada de falhas nas válvulas." },
    ] },
    { title: "Cuidados antes de encaminhar o equipamento", paragraphs: [
      "Retire o macaco de operação quando houver descida inesperada, deformação ou perda de sustentação. Nunca permaneça sob um veículo apoiado somente no macaco: utilize os apoios apropriados e siga o manual do veículo e do equipamento. O macaco é um recurso de elevação, não uma autorização para trabalhar sem suporte adicional. Não tente reproduzir um defeito com alguém próximo à carga e não exceda a capacidade para testar se o problema desaparece.",
      "Para facilitar a avaliação, registre quando o defeito começou, se ocorre sem carga ou apenas durante a elevação e se houve queda, sobrecarga ou troca de óleo recente. Não misture fluidos de especificações diferentes e não use produtos improvisados como substitutos do óleo recomendado. Se houver vazamento, informe o local observado sem desmontar o conjunto. Consulte a equipe sobre a forma de encaminhamento e acondicione o equipamento de modo a evitar deslocamento e derramamento durante o transporte.",
    ] },
  ],
  steps: [
    { title: "Contato no WhatsApp", text: "Envie o tipo de macaco, sua cidade, a capacidade indicada e uma descrição do defeito. Fotos ou vídeos feitos sem exposição a risco ajudam a equipe a orientar o recebimento e a entender a necessidade de atendimento." },
    { title: "Avaliação", text: "O equipamento é examinado para identificar a origem do problema, o estado dos componentes e a viabilidade do conserto. A análise distingue desgaste de vedação, falha de válvula, problemas de óleo e danos mecânicos que possam comprometer o funcionamento." },
    { title: "Orçamento", text: "Após a avaliação, a equipe apresenta o serviço necessário para sua aprovação. Valores, disponibilidade de componentes e condições de execução são tratados para o caso concreto. A descrição inicial por mensagem não substitui a inspeção nem determina previamente o custo do reparo." },
    { title: "Reparo e teste com carga", text: "Com o orçamento aprovado, são realizados os reparos definidos na avaliação e o teste com carga adequada ao equipamento, em condições controladas. A verificação observa elevação, sustentação, descida e possíveis vazamentos, respeitando a capacidade nominal e o procedimento técnico aplicável." },
  ],
  questions: [
    { q: "Meu macaco desce sozinho. Posso continuar usando?", a: "Interrompa o uso e solicite uma avaliação. A descida inesperada pode indicar falha de vedação ou válvula e comprometer a sustentação. Não faça testes improvisados com veículos ou pessoas na área de risco." },
    { q: "Vocês consertam macaco jacaré, garrafa e de oficina?", a: "A Hidraumil atende essas categorias de macaco hidráulico. Envie a identificação, a capacidade e fotos para orientar a avaliação. A possibilidade de recuperação depende do estado do equipamento e dos componentes necessários." },
    { q: "Quanto custa e quanto tempo leva o conserto?", a: "O valor e o prazo dependem do diagnóstico, do reparo necessário e da disponibilidade de componentes. Consulte a equipe pelo WhatsApp para receber as condições específicas após a avaliação, sem estimativas genéricas para modelos diferentes." },
    { q: "Como solicitar atendimento em Cascavel e região?", a: "Envie uma mensagem pelo WhatsApp (45) 99913-0659 com sua cidade, o tipo de macaco e os sintomas. Combine com a equipe a forma de encaminhamento do equipamento e as informações necessárias para o orçamento." },
  ],
};

export const cylinderRepairService: RepairService = {
  path: "/reparo-cilindro-hidraulico-cascavel",
  title: "Reparo de Cilindro Hidráulico em Cascavel | Hidraumil",
  description: "Reparo de cilindros e pistões hidráulicos em Cascavel: troca de vedações, retífica de haste e testes. Atendemos indústria, agro e máquinas pesadas.",
  h1: "Reparo de Cilindro e Pistão Hidráulico em Cascavel",
  subtitle: "Troca de vedações, recuperação de haste e revisão de cilindros para indústria, agro e máquinas pesadas.",
  intro: [
    "A Hidraumil realiza reparo de cilindros e pistões hidráulicos em Cascavel para aplicações na indústria, no agronegócio, em retroescavadeiras e em equipamentos de movimentação. Esses conjuntos transformam a pressão do óleo em movimento e força. Quando surgem vazamentos, perda de desempenho ou irregularidade no curso, a análise precisa considerar tanto o cilindro quanto sua interação com o circuito. Um sintoma atribuído ao pistão também pode estar relacionado a alimentação, válvulas ou condições de montagem, por isso o diagnóstico orienta o serviço.",
    "Em equipamentos industriais e máquinas utilizadas no campo, as condições de trabalho influenciam o desgaste das vedações, da haste e dos elementos de guia. Poeira, contaminação do óleo, esforços laterais e impactos merecem atenção durante a avaliação. Para solicitar atendimento em Cascavel e no Oeste do Paraná, informe a aplicação, a identificação disponível e os sintomas observados. Fotografias da haste e dos pontos de vazamento auxiliam o contato inicial. A viabilidade de recuperação e o escopo do reparo são definidos pela condição real das peças, não apenas pela aparência externa.",
  ],
  sections: [
    { title: "Sinais de que o cilindro precisa de reparo", items: [
      { title: "Vazamento na haste", text: "Óleo aparecendo na saída da haste pode estar associado ao desgaste das vedações, a danos no raspador ou a irregularidades na superfície de contato. A simples troca do kit pode não resolver se a haste estiver riscada ou se houver folga excessiva. Registre o ponto de vazamento e interrompa o uso quando a condição comprometer o controle do equipamento." },
      { title: "Perda de força", text: "A passagem interna de óleo pelas vedações do pistão pode reduzir a força disponível ou permitir deslocamento indesejado. Entretanto, pressão insuficiente e falhas nas válvulas também produzem sintomas semelhantes. Informe em qual movimento ocorre a perda e se ela aparece com carga, com aquecimento ou durante a sustentação. Essa descrição ajuda a distinguir problemas do cilindro e do circuito." },
      { title: "Movimento irregular", text: "Trancos, hesitação ou dificuldade em completar o curso podem envolver ar no sistema, contaminação, desgaste das guias ou problemas de alimentação. Não aumente a pressão como tentativa de compensar a falha. A avaliação deve considerar as condições de operação e montagem, além do estado das superfícies internas, para evitar que um reparo parcial mantenha a causa do movimento irregular." },
      { title: "Haste riscada ou empenada", text: "Riscos profundos podem danificar vedações novas, enquanto o empenamento altera o alinhamento e concentra esforços. A recuperação depende das medidas e do estado do material. A retífica ou outro processo de recuperação não deve ser presumido como solução para toda haste: a equipe avalia a viabilidade e informa quando a condição exige outra abordagem técnica." },
    ] },
    { title: "Serviços", items: [
      { title: "Troca de kit de vedação", text: "A substituição considera as dimensões, o perfil e as condições de trabalho dos componentes. Também é importante verificar alojamentos, raspadores e elementos de guia. Uma vedação inadequada pode falhar mesmo em uma haste sem danos aparentes. Por isso, o kit é definido a partir da identificação do conjunto e da inspeção, não somente por semelhança visual com a peça removida." },
      { title: "Recuperação de haste", text: "O serviço considera o desgaste superficial, as medidas e o alinhamento, com avaliação da possibilidade de retífica e recuperação. A superfície deve ser compatível com o trabalho das vedações e com a aplicação do cilindro. Danos severos ou deformações podem limitar a recuperação; a solução proposta depende da análise técnica, sem prometer reaproveitamento de qualquer haste." },
      { title: "Revisão completa", text: "A revisão examina o conjunto para identificar desgaste no pistão, guias, haste, alojamentos e componentes de vedação. A limpeza e a inspeção ajudam a reconhecer partículas e sinais de atrito anormal. O objetivo é definir um reparo coerente com os problemas encontrados e identificar condições que poderiam causar nova falha, inclusive questões de alinhamento ou contaminação do sistema." },
      { title: "Teste de estanqueidade", text: "Depois do reparo, a verificação busca identificar vazamentos nas condições de teste apropriadas ao cilindro. A avaliação do funcionamento considera o movimento e a resposta do conjunto. Os parâmetros devem respeitar as características do equipamento e a aplicação informada. Um teste controlado não autoriza aumentar a pressão de trabalho da máquina nem exceder a especificação original." },
    ] },
    { title: "Informações para uma avaliação mais precisa", paragraphs: [
      "Informe se o cilindro atua na elevação, no basculamento, na direção ou em outra função, e descreva o comportamento observado. Se houver identificação de pressão, curso ou modelo, envie uma fotografia legível. Relate reparos anteriores e qualquer mudança recente no óleo ou no funcionamento da máquina. Não desmonte linhas pressurizadas para obter imagens: pressão residual pode provocar lesões, mesmo com o equipamento desligado. A despressurização e a remoção devem seguir o manual e ser realizadas por pessoal habilitado.",
      "Na preparação para o encaminhamento, consulte a equipe sobre recebimento e transporte. As conexões precisam ser protegidas contra entrada de sujeira, sem improvisações que contaminem o circuito. O peso e as dimensões do conjunto exigem meios de movimentação adequados. Depois do reparo, a instalação correta, o alinhamento e a limpeza do sistema continuam importantes para o funcionamento. Se a causa original estiver fora do cilindro, ela também precisa ser tratada para que vedações e superfícies recuperadas não sofram o mesmo desgaste novamente.",
    ] },
  ],
  steps: [
    { title: "Contato no WhatsApp", text: "Envie a aplicação do cilindro, a identificação disponível, sua cidade e uma descrição dos sintomas. Fotos dos pontos de vazamento e da haste ajudam a orientar a conversa, desde que possam ser obtidas sem contato com partes móveis ou pressurizadas." },
    { title: "Avaliação", text: "A equipe examina o conjunto e identifica os componentes comprometidos. A análise considera vedações, superfícies, folgas e a viabilidade de recuperação da haste. Informações sobre o circuito da máquina ajudam a diferenciar a falha do cilindro de problemas externos." },
    { title: "Orçamento", text: "O escopo do serviço é apresentado após o diagnóstico para sua aprovação. Custo, disponibilidade de componentes e condições de execução são informados conforme o caso. A necessidade de retífica ou substituição não é definida antes de verificar as medidas e o estado das peças." },
    { title: "Reparo e teste com carga", text: "Após a aprovação, são executados os serviços definidos e os testes adequados ao conjunto. A verificação com carga aplicável e em condições controladas considera funcionamento e estanqueidade, respeitando as especificações. O teste depende da configuração do cilindro e não substitui os procedimentos de instalação e operação da máquina." },
  ],
  questions: [
    { q: "Trocar as vedações resolve qualquer vazamento?", a: "Não necessariamente. Riscos na haste, desgaste de guias ou danos nos alojamentos podem comprometer uma vedação nova. A inspeção determina se a troca do kit é suficiente ou se o conjunto exige outro reparo." },
    { q: "Uma haste riscada ou empenada pode ser recuperada?", a: "A possibilidade depende das medidas, do material e da gravidade do dano. A equipe avalia a viabilidade de recuperação ou retífica e informa a solução proposta. Não é possível confirmar o reaproveitamento apenas por uma descrição do problema." },
    { q: "Vocês atendem cilindros de máquinas agrícolas e retroescavadeiras?", a: "O serviço contempla aplicações no agronegócio, em retroescavadeiras, na indústria e em equipamentos de movimentação. Envie a identificação e as características do cilindro para orientar a avaliação e confirmar as condições de atendimento ao seu conjunto." },
    { q: "Como recebo um orçamento e a previsão de reparo?", a: "Entre em contato pelo WhatsApp (45) 99913-0659 com sua cidade, aplicação e sintomas. A equipe orienta o encaminhamento. O orçamento e a previsão dependem da avaliação técnica e dos componentes necessários, sem um valor ou prazo único para todos os cilindros." },
  ],
};

export function repairServiceHead(service: RepairService) {
  const url = `https://hidraumil.lovable.app${service.path}`;
  return {
    meta: [
      { title: service.title },
      { name: "description", content: service.description },
      { property: "og:title", content: service.title },
      { property: "og:description", content: service.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: service.title },
      { name: "twitter:description", content: service.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
