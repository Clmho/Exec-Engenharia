export interface Obra {
  id: string;
  titulo: string;
  descricao: string;
  capa_imagem: string;
  imagens: string[];
  categoria: string;
  ano: string;
  localizacao: string;
}

export interface Noticia {
  id: string;
  titulo: string;
  conteudo: string;
  imagem_capa: string;
  data: string;
  resumo: string;
}

export interface Cliente {
  id: string;
  nome: string;
  logo_url: string;
  categoria: 'Empresas' | 'Parceiros' | 'Administradoras e Condomínios';
}

export const OBRAS: Obra[] = [
  {
    id: '1',
    titulo: 'Edifício Horizonte Azul',
    descricao: 'Um marco na arquitetura residencial contemporânea, o Edifício Horizonte Azul combina luxo, sustentabilidade e inovação tecnológica. Localizado em uma área nobre, o projeto conta com sistemas de reuso de água e energia solar.',
    capa_imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    imagens: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
    ],
    categoria: 'Residencial',
    ano: '2024',
    localizacao: 'São Paulo, SP'
  },
  {
    id: '2',
    titulo: 'Centro Empresarial Nexus',
    descricao: 'Complexo corporativo de alto padrão com certificação LEED. O projeto prioriza espaços abertos, iluminação natural e flexibilidade de layout para empresas de tecnologia.',
    capa_imagem: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    imagens: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop'
    ],
    categoria: 'Comercial',
    ano: '2023',
    localizacao: 'Curitiba, PR'
  },
  {
    id: '3',
    titulo: 'Planta Industrial LogiTech',
    descricao: 'Construção de galpão logístico de última geração, com piso de alta resistência e docas automatizadas. Foco em eficiência operacional e segurança.',
    capa_imagem: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
    imagens: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
    ],
    categoria: 'Industrial',
    ano: '2023',
    localizacao: 'Joinville, SC'
  }
];

export const NOTICIAS: Noticia[] = [
  {
    id: '1',
    titulo: 'Exec Engenharia recebe prêmio de Sustentabilidade',
    resumo: 'A empresa foi reconhecida pelas práticas inovadoras em canteiros de obras sustentáveis.',
    conteudo: 'A Exec Engenharia e Construções Ltda. recebeu nesta semana o prestigiado Prêmio EcoConstruir. O reconhecimento veio através do projeto de gestão de resíduos implementado em todas as nossas obras no último ano, reduzindo em 40% o descarte em aterros sanitários.',
    imagem_capa: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop',
    data: '15/03/2026'
  },
  {
    id: '2',
    titulo: 'Novas tecnologias no setor da construção civil',
    resumo: 'Como o uso de BIM e drones está transformando a precisão das nossas entregas.',
    conteudo: 'A digitalização do canteiro de obras não é mais uma tendência, mas uma realidade na Exec. Estamos utilizando drones para mapeamento topográfico e realidade aumentada para visualização de projetos estruturais em tempo real.',
    imagem_capa: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1000&auto=format&fit=crop',
    data: '10/02/2026'
  }
];

export const CLIENTES: Cliente[] = [
  { id: '1', nome: 'TechCorp Solutions', logo_url: 'https://logo.clearbit.com/google.com', categoria: 'Empresas' },
  { id: '2', nome: 'Global Logistics', logo_url: 'https://logo.clearbit.com/amazon.com', categoria: 'Empresas' },
  { id: '3', nome: 'Urban Living', logo_url: 'https://logo.clearbit.com/airbnb.com', categoria: 'Empresas' },
  { id: '4', nome: 'Green Energy SA', logo_url: 'https://logo.clearbit.com/tesla.com', categoria: 'Empresas' },
  { id: '5', nome: 'Inova Real Estate', logo_url: 'https://logo.clearbit.com/microsoft.com', categoria: 'Empresas' },
  { id: '6', nome: 'Prime Bank', logo_url: 'https://logo.clearbit.com/stripe.com', categoria: 'Empresas' },
  { id: '7', nome: 'Construtora Alpha', logo_url: 'https://logo.clearbit.com/autodesk.com', categoria: 'Parceiros' },
  { id: '8', nome: 'Engenharia Beta', logo_url: 'https://logo.clearbit.com/bentley.com', categoria: 'Parceiros' },
  { id: '9', nome: 'Arquitetura Gamma', logo_url: 'https://logo.clearbit.com/houzz.com', categoria: 'Parceiros' },
  { id: '10', nome: 'Adm. Predial Central', logo_url: 'https://logo.clearbit.com/zillow.com', categoria: 'Administradoras e Condomínios' },
  { id: '11', nome: 'Condomínio Solar', logo_url: 'https://logo.clearbit.com/realtor.com', categoria: 'Administradoras e Condomínios' },
  { id: '12', nome: 'Gestão Patrimonial', logo_url: 'https://logo.clearbit.com/redfin.com', categoria: 'Administradoras e Condomínios' }
];
