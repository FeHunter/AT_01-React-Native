const ProductsList = [
  {
    name: 'Notebook Dell Inspiron 15',
    image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
    description:
      'Notebook de alto desempenho para uso profissional e entretenimento.',
    technicalSpecifications: {
      processor: 'Intel Core i7 10ª geração',
      memory: '16GB DDR4',
      storage: '512GB SSD',
      graphics: 'NVIDIA GeForce GTX 1650Ti 4GB',
      display: '15.6 polegadas Full HD',
    },
    vendorData: {
      name: 'Loja Tech',
      phone: '(XX) XXXX-XXXX',
      email: 'contato@lojatech.com',
      rating: 4,
    },
    comments: [
      {
        user: 'user123',
        date: '2024-03-18',
        comment: 'Ótimo desempenho e design elegante!',
        rating: 5,
      },
      {
        user: 'techlover',
        date: '2024-03-17',
        comment: 'Bateria poderia durar mais, mas no geral estou satisfeito.',
        rating: 4,
      },
    ],
    questions: [
      {
        user: 'interestedbuyer',
        date: '2024-03-16',
        question: 'Qual a duração da bateria em uso contínuo?',
        answer: 'A bateria tem autonomia média de 6 horas em uso moderado.',
      },
    ],
  },
  {
    name: 'Monitor Gamer ASUS ROG Strix',
    image: 'https://cdn.pixabay.com/photo/2017/08/01/18/34/tv-2567207_1280.jpg',
    description: 'Monitor de alta performance para gamers profissionais.',
    technicalSpecifications: {
      screenSize: '27 polegadas',
      resolution: '2560x1440 QHD',
      refreshRate: '165Hz',
      responseTime: '1ms',
      panelType: 'IPS',
    },
    vendorData: {
      name: 'Mega Hardware',
      phone: '(XX) XXXX-XXXX',
      email: 'vendas@megahardware.com',
      rating: 4.5,
    },
    comments: [
      {
        user: 'gamemaster',
        date: '2024-03-19',
        comment: 'Imagens incríveis e resposta rápida. Recomendo!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'techenthusiast',
        date: '2024-03-18',
        question: 'Esse monitor é compatível com G-Sync?',
        answer:
          'Sim, é totalmente compatível com G-Sync para uma experiência de jogo suave.',
      },
    ],
  },
  {
    name: 'Mouse Logitech G Pro Wireless',
    image: 'https://cdn.pixabay.com/photo/2021/04/07/16/13/gaming-mouse-6159550_1280.jpg',
    description: 'Mouse sem fio de alto desempenho para jogos competitivos.',
    technicalSpecifications: {
      sensor: 'Hero 25K',
      dpi: '100 - 25,600',
      buttons: '6 programáveis',
      weight: '80g',
    },
    vendorData: {
      name: 'Gamer Store',
      phone: '(XX) XXXX-XXXX',
      email: 'contato@gamerstore.com',
      rating: 4.8,
    },
    comments: [
      {
        user: 'proplayer',
        date: '2024-03-17',
        comment:
          'Excelente precisão e resposta rápida. O melhor mouse que já usei!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'mouseenthusiast',
        date: '2024-03-16',
        question: 'Esse mouse é confortável para uso prolongado?',
        answer:
          'Sim, é muito confortável e ergonômico, mesmo para longas sessões de jogo.',
      },
    ],
  },
  {
    name: 'Teclado Mecânico Corsair K95 RGB Platinum',
    image: 'https://cdn.pixabay.com/photo/2016/02/18/18/57/home-office-1207834_1280.jpg',
    description: 'Teclado mecânico premium com iluminação RGB personalizável.',
    technicalSpecifications: {
      switches: 'Cherry MX Speed',
      macroKeys: '6 programáveis',
      pollingRate: '1,000Hz',
      wristRest: 'Sim, destacável',
    },
    vendorData: {
      name: 'Tech Paradise',
      phone: '(XX) XXXX-XXXX',
      email: 'info@techparadise.com',
      rating: 4.7,
    },
    comments: [
      {
        user: 'keyboardfan',
        date: '2024-03-18',
        comment:
          'Digitação confortável e as teclas são muito responsivas. Recomendo!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'typingenthusiast',
        date: '2024-03-17',
        question: 'Esse teclado é resistente à água?',
        answer: "Sim, é resistente a respingos, mas não é à prova d'água.",
      },
    ],
  },
  {
    name: 'Headset HyperX Cloud II',
    image: 'https://cdn.pixabay.com/photo/2014/11/02/06/46/headphones-513493_1280.jpg',
    description:
      'Headset com som surround 7.1 para uma experiência imersiva de áudio.',
    technicalSpecifications: {
      transducerType: 'Dinâmico de 53mm',
      frequencyResponse: '15Hz-25kHz',
      impedance: '60 ohms',
      connectivity: 'USB e P2',
    },
    vendorData: {
      name: 'Audio Shop',
      phone: '(XX) XXXX-XXXX',
      email: 'atendimento@audioshop.com',
      rating: 4.5,
    },
    comments: [
      {
        user: 'audiophile',
        date: '2024-03-19',
        comment:
          'Qualidade sonora excelente e muito confortável de usar por horas.',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'gamer123',
        date: '2024-03-18',
        question: 'Esse headset é compatível com consoles de videogame?',
        answer: 'Sim, é compatível com a maioria dos consoles via conexão P2.',
      },
    ],
  },
  {
    name: 'Placa de Vídeo NVIDIA GeForce RTX 3080',
    image: 'https://s2-techtudo.glbimg.com/T3sUmSQ1Y4x6WfomwKn3T12KJmQ=/0x0:620x430/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/Z/C/JI2k1aTO6HLaAC3a3A2w/2012-12-20-conheca-opcoes-de-placas-de-video-de-acordo-com-seu-perfil-e-bolso.jpg',
    description:
      'Placa de vídeo de última geração para gráficos de alta performance.',
    technicalSpecifications: {
      gpu: 'NVIDIA Ampere',
      vram: '10GB GDDR6X',
      memoryInterface: '320-bit',
      powerConnectors: '2x 8-pin',
    },
    vendorData: {
      name: 'Tech Universe',
      phone: '(XX) XXXX-XXXX',
      email: 'suporte@techuniverse.com',
      rating: 4.9,
    },
    comments: [
      {
        user: 'pcbuilder',
        date: '2024-03-17',
        comment:
          'Desempenho impressionante em jogos e renderização. Vale cada centavo!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'techsavvy',
        date: '2024-03-16',
        question: 'Quantas portas HDMI essa placa tem?',
        answer: 'Possui 1 porta HDMI 2.1 e 3 portas DisplayPort 1.4a.',
      },
    ],
  },
  {
    name: 'Roteador TP-Link Archer AX6000',
    image: 'https://cdn.pixabay.com/photo/2020/07/25/09/08/modem-5436146_1280.jpg',
    description:
      'Roteador Wi-Fi 6 de alta velocidade para residências e escritórios.',
    technicalSpecifications: {
      wifiStandard: 'Wi-Fi 6 (802.11ax)',
      speed: 'Até 6Gbps',
      antennas: '8 externas',
      ports: '8 LAN Gigabit, 2 WAN Gigabit',
    },
    vendorData: {
      name: 'NetConnect',
      phone: '(XX) XXXX-XXXX',
      email: 'netconnect@provedor.com',
      rating: 4.6,
    },
    comments: [
      {
        user: 'homenetworker',
        date: '2024-03-18',
        comment: 'Sinal forte e estável em toda a casa. Ótimo desempenho!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'networkenthusiast',
        date: '2024-03-17',
        question: 'Quantos dispositivos podem ser conectados simultaneamente?',
        answer:
          'Este roteador suporta até 250 dispositivos conectados simultaneamente.',
      },
    ],
  },
  {
    name: 'SSD Kingston A2000 1TB',
    image: 'https://cdn.pixabay.com/photo/2014/04/09/08/16/data-storage-319844_1280.jpg',
    description:
      'SSD NVMe de alta velocidade para melhorar o desempenho do seu PC.',
    technicalSpecifications: {
      capacity: '1TB',
      interface: 'PCIe NVMe Gen3x4',
      readSpeed: 'Até 2,200MB/s',
      writeSpeed: 'Até 2,000MB/s',
    },
    vendorData: {
      name: 'Storage Tech',
      phone: '(XX) XXXX-XXXX',
      email: 'vendas@storagetech.com',
      rating: 4.7,
    },
    comments: [
      {
        user: 'pcuser',
        date: '2024-03-19',
        comment:
          'Meu PC ficou muito mais rápido após instalar esse SSD. Excelente custo-benefício!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'techsavvy',
        date: '2024-03-18',
        question: 'Esse SSD é compatível com slots M.2 PCIe?',
        answer: 'Sim, é compatível com slots M.2 PCIe 3.0 x4.',
      },
    ],
  },
  {
    name: 'Câmera Logitech C920 HD Pro',
    image: 'https://resource.logitech.com/content/dam/logitech/en/products/webcams/mx-brio/buy/gallery/mx-brio-3qtr-front-right-pale-gray-gallery.png',
    description: 'Câmera web Full HD para videochamadas e streaming.',
    technicalSpecifications: {
      resolution: '1080p',
      frameRate: '30fps',
      microphone: 'Estéreo integrado',
      connection: 'USB 2.0',
    },
    vendorData: {
      name: 'Video Store',
      phone: '(XX) XXXX-XXXX',
      email: 'contato@videostore.com',
      rating: 4.4,
    },
    comments: [
      {
        user: 'streamer123',
        date: '2024-03-19',
        comment:
          'Qualidade de imagem excelente e fácil de configurar. Recomendo para streaming!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'videocalluser',
        date: '2024-03-18',
        question: 'Essa câmera é compatível com Mac OS?',
        answer: 'Sim, é compatível com Mac OS X 10.6 ou superior.',
      },
    ],
  },
  {
    name: 'Smartphone Samsung Galaxy S22 Ultra',
    image: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg',
    description:
      'Smartphone premium com câmera avançada e desempenho excepcional.',
    technicalSpecifications: {
      display: '6.8 polegadas Dynamic AMOLED',
      processor: 'Exynos 2200',
      memory: '12GB RAM',
      storage: '256GB/512GB/1TB',
      camera: '108MP + 12MP + 12MP + 8MP',
      battery: '5,000mAh',
    },
    vendorData: {
      name: 'Mobile Emporium',
      phone: '(XX) XXXX-XXXX',
      email: 'sales@mobileemporium.com',
      rating: 4.9,
    },
    comments: [
      {
        user: 'smartphonefanatic',
        date: '2024-03-19',
        comment:
          'Câmera excepcional e desempenho impressionante. Melhor smartphone que já tive!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'techlover',
        date: '2024-03-18',
        question: 'Esse modelo suporta carregamento sem fio?',
        answer: 'Sim, suporta carregamento sem fio Qi.',
      },
    ],
  },
  {
    name: 'Router Cisco Catalyst 9300 Series',
    image: 'https://www.cisco.com/c/dam/assets/prod/product-selector/routers/catalyst-8500-12x4qc.png',
    description:
      'Roteador de alto desempenho para redes corporativas e data centers.',
    technicalSpecifications: {
      ports: '48 Gigabit Ethernet',
      uplinkPorts: '4 x 10G SFP+',
      throughput: 'Up to 480Gbps',
      powerSupply: 'Dual redundant power supplies',
    },
    vendorData: {
      name: 'NetWorks Solutions',
      phone: '(XX) XXXX-XXXX',
      email: 'info@networkssolutions.com',
      rating: 4.8,
    },
    comments: [
      {
        user: 'networkadministrator',
        date: '2024-03-19',
        comment:
          'Confiável e robusto, atende perfeitamente às demandas da nossa rede empresarial.',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'networkengineer',
        date: '2024-03-18',
        question: 'É possível empilhar múltiplos switches dessa série?',
        answer:
          'Sim, é possível empilhar até oito switches para maior escalabilidade.',
      },
    ],
  },
  {
    name: 'Smart TV LG OLED C1 65 polegadas',
    image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_1280.jpg',
    description:
      'TV OLED 4K com qualidade de imagem incrível e recursos inteligentes.',
    technicalSpecifications: {
      displaySize: '65 polegadas',
      resolution: '4K Ultra HD',
      smartFeatures: 'webOS 6.0, ThinQ AI, Google Assistant, Amazon Alexa',
      refreshRate: '120Hz',
      hdrSupport: 'Dolby Vision, HDR10, HLG',
    },
    vendorData: {
      name: 'TV Superstore',
      phone: '(XX) XXXX-XXXX',
      email: 'sales@tvsuperstore.com',
      rating: 4.7,
    },
    comments: [
      {
        user: 'hometheaterenthusiast',
        date: '2024-03-19',
        comment:
          'Qualidade de imagem surpreendente e sistema inteligente muito intuitivo.',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'tvshopper',
        date: '2024-03-18',
        question: 'Essa TV suporta reprodução de conteúdo em 3D?',
        answer: 'Não, essa TV não suporta reprodução de conteúdo em 3D.',
      },
    ],
  },
  {
    name: 'NVIDIA Jetson Nano Developer Kit',
    image: 'https://dcdn.mitiendanube.com/stores/001/888/523/products/141-8b3f7fc44733577c0716836500570605-480-0.jpg',
    description:
      'Plataforma de computação AI para aplicações embarcadas e de IoT.',
    technicalSpecifications: {
      gpu: 'NVIDIA Maxwell',
      cpu: 'Quad-core ARM A57',
      memory: '4GB LPDDR4',
      storage: 'MicroSD card slot',
      connectivity: 'Gigabit Ethernet, Wi-Fi, Bluetooth',
    },
    vendorData: {
      name: 'Embedded Tech',
      phone: '(XX) XXXX-XXXX',
      email: 'info@embeddedtech.com',
      rating: 4.6,
    },
    comments: [
      {
        user: 'embeddeddeveloper',
        date: '2024-03-19',
        comment:
          'Ótima plataforma para projetos de IoT e aprendizado de máquina.',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'techenthusiast',
        date: '2024-03-18',
        question:
          'Quantas câmeras pode suportar este kit para visão computacional?',
        answer:
          'Pode suportar até 4 câmeras simultaneamente para visão computacional.',
      },
    ],
  },
  {
    name: 'Antivírus Bitdefender Total Security 2024',
    image: 'https://media.cybernews.com/images/featured-big/2023/08/bitdefender-antivirus-review.jpg',
    description:
      'Suite de segurança abrangente para proteger dispositivos contra ameaças online.',
    technicalSpecifications: {
      platforms: 'Windows, macOS, Android, iOS',
      features:
        'Antivírus, firewall, proteção contra ransomware, VPN, controle parental',
      license: '1 ano, 5 dispositivos',
    },
    vendorData: {
      name: 'Cybersecurity Solutions',
      phone: '(XX) XXXX-XXXX',
      email: 'sales@cybersecuritysolutions.com',
      rating: 4.9,
    },
    comments: [
      {
        user: 'securityconscious',
        date: '2024-03-19',
        comment:
          'Excelente proteção contra ameaças online e fácil de usar. Recomendo!',
        rating: 5,
      },
    ],
    questions: [
      {
        user: 'privacyadvocate',
        date: '2024-03-18',
        question: 'Esta suite inclui uma VPN integrada?',
        answer: 'Sim, inclui uma VPN para proteger sua privacidade online.',
      },
    ],
  },
];

export default ProductsList;