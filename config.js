// =====================================================================
// DADOS DA BRAK — preencha aqui os campos pendentes.
// Todo o site lê as informações deste arquivo.
// =====================================================================

export const COMPANY = {
  name: 'BRAK',
  // Arquivo da logo oficial: coloque o PNG em public/logo-brak.png
  logo: '/logo-brak.png',
  tagline: 'Construção • Reformas • Elétrica • Solar • Segurança',
  intro: 'A BRAK oferece soluções completas para construção, reformas e manutenção.',
  about: 'A BRAK oferece soluções completas para construção, reformas e manutenção.',
  cnpj: '[a definir]',
  address: '', // Ex.: 'Rua Exemplo, 123 - Bairro, Cidade - UF'
  hours: 'Segunda a sexta-feira: 08h às 18h.',
  coverageNote:
    'Atendemos nossa cidade e regiões próximas. Para atendimentos fora da cidade, poderá haver cobrança de deslocamento.',
}

// WhatsApp: somente dígitos, com DDI + DDD. Ex.: '5563999999999'
export const WHATSAPP_NUMBER = ''

// Link direto para a conversa, sem mensagem automática.
export const whatsappLink = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : ''

export const INSTAGRAM = {
  handle: '@brak.ng',
  url: 'https://www.instagram.com/brak.ng/',
}

export const LOCATION = {
  lat: -8.773892,
  lng: -47.7497849,
  embedUrl: 'https://www.google.com/maps?q=-8.7738920,-47.7497849&z=16&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-8.7738920,-47.7497849',
}

export const PAYMENTS = ['Pix', 'Cartão', 'Dinheiro']

export const QUOTE_INFO =
  'Os orçamentos podem ser gratuitos, mas alguns serviços poderão exigir visita técnica. Quando houver cobrança de visita técnica, o valor será informado diretamente pelo WhatsApp durante o atendimento.'

export const SERVICES = [
  {
    id: 'construcao',
    icon: 'Home',
    title: 'Construção de casas',
    description: 'Construção completa de casas, do início ao fim.',
  },
  {
    id: 'reformas',
    icon: 'Hammer',
    title: 'Reformas em geral',
    description: 'Reformas residenciais e comerciais de diferentes portes.',
  },
  {
    id: 'pintura',
    icon: 'PaintRoller',
    title: 'Pintura e acabamento',
    description: 'Preparação de paredes, pintura e acabamento.',
  },
  {
    id: 'eletrica',
    icon: 'Zap',
    title: 'Serviços elétricos',
    description: 'Instalações elétricas, manutenção e adequações.',
  },
  {
    id: 'solar',
    icon: 'Sun',
    title: 'Energia solar',
    description:
      'Venda, instalação, manutenção, projetos e consultoria em energia solar.',
  },
  {
    id: 'pisos',
    icon: 'Layers',
    title: 'Pisos e revestimentos',
    description:
      'Instalação de pisos, revestimentos de paredes e remoção de revestimentos antigos.',
  },
  {
    id: 'cameras',
    icon: 'Cctv',
    title: 'Câmeras e segurança',
    description:
      'Venda, instalação, configuração e manutenção de sistemas de câmeras.',
  },
  {
    id: 'reparos',
    icon: 'Wrench',
    title: 'Pequenos reparos e manutenção',
    description: 'Trocas, ajustes, pequenas instalações e manutenções em geral.',
  },
]
