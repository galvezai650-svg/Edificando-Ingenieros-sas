export interface Project {
  id: string
  title: string
  category: string
  categorySlug: string
  location: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  client: string
  year: string
  type: string
  services: string[]
  highlights: string[]
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  benefits: string[]
  projects: number
  category: 'construccion' | 'disenos' | 'adicionales'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  authorRole: string
  published: boolean
  featured: boolean
  createdAt: string
  readTime: string
}

// ═══════════════════════════════════════════════════════════
// COMPANY INFO
// ═══════════════════════════════════════════════════════════
export const companyInfo = {
  slogan: 'Fundamentando confianza, edificando calidad',
  name: 'EDIFICANDO Ingenieros S.A.S.',
  shortName: 'Edificando Ingenieros',
  description: 'Empresa colombiana dedicada a la construcción y diseño de obras civiles, con amplia experiencia en el sector público y privado en el Eje Cafetero.',
  message: 'Tu proyecto es importante para nosotros, te ayudaremos para que cumplas tu sueño',
  phone: '310 887 0044',
  email: 'contacto@edificandoingenierossas.com',
  address: 'Cra 9 #14-20',
  city: 'Chinchiná, Caldas',
  region: 'Eje Cafetero Colombiano',
  founded: 2013,
}

// ═══════════════════════════════════════════════════════════
// PROJECT CATEGORIES
// ═══════════════════════════════════════════════════════════
export const projectCategories = [
  { id: 'todos', label: 'Todos', emoji: '' },
  { id: 'pavimentos', label: 'Pavimentos y Vías', emoji: '🛣️' },
  { id: 'estructuras', label: 'Estructuras', emoji: '🏗️' },
  { id: 'acueductos', label: 'Acueductos y Alcantarillados', emoji: '💧' },
  { id: 'estabilidad', label: 'Estabilidad de Taludes', emoji: '⛰️' },
  { id: 'otras-obras', label: 'Otras Obras', emoji: '🏊' },
]

// ═══════════════════════════════════════════════════════════
// REAL PROJECTS (20 projects from portfolio)
// ═══════════════════════════════════════════════════════════
export const projects: Project[] = [
  // ─── 1. PAVIMENTOS Y VÍAS (6 proyectos) ─────────────────
  {
    id: 'pavimento-avenida-kevin-angel',
    title: 'Pavimentos - Avenida Kevin Ángel',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Pavimentación de la Avenida Kevin Ángel para mejorar la infraestructura vial del municipio de Manizales.',
    fullDescription: 'Proyecto de pavimentación de la Avenida Kevin Ángel en Manizales, ejecutado para la Alcaldía de Manizales. Los trabajos incluyeron la construcción de pavimento para mejorar la transitabilidad y seguridad vial de esta importante avenida de la ciudad, beneficiando a miles de habitantes y vehiculos que transitan diariamente por esta vía.',
    image: '/images/kevin-angel-7.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775539586403-cb2f4b09-1f01-4bac-92aa-d2d012822f29.png',
      'https://image2url.com/r2/default/images/1775539646178-f2e5b8a1-bdf3-4415-8d1d-67a7b4c31664.png',
      'https://image2url.com/r2/default/images/1775539712510-b50e21b1-4dc3-4c3c-b51c-038841f59066.png',
      'https://image2url.com/r2/default/images/1775539777739-7ab9f0f6-d98a-454b-831a-ef37b8590cdc.png',
      'https://image2url.com/r2/default/images/1775540237333-b078c172-9e35-448b-b099-27a728586e5e.png',
      'https://image2url.com/r2/default/images/1775540281075-3e577199-319f-4e85-b706-53bac2f9a6ab.png',
      '/images/kevin-angel-7.png',
    ],
    client: 'Alcaldía de Manizales',
    year: '2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Pavimentos'],
  },
  {
    id: 'bodega-aguacate-aranzazu',
    title: 'Bodega Almacenamiento de Aguacate - Aranzazu',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Aranzazu, Caldas',
    description: 'Construcción de bodega destinada al almacenamiento de aguacate e insumos para su producción en el municipio de Aranzazu, sector UP San José.',
    fullDescription: 'Proyecto de construcción de una bodega destinada al almacenamiento de aguacate e insumos para su producción en el municipio de Aranzazu, sector UP San José. La obra fue diseñada para fortalecer la cadena productiva agrícola, proporcionando un espacio adecuado para el manejo, conservación y logística del producto, contribuyendo al desarrollo económico local.',
    image: 'https://image2url.com/r2/default/images/1775656666369-e0beae28-3447-4367-878f-558b796423af.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775656266663-b8bb94f8-790c-49c7-b82e-08ae0c44c78a.png',
      'https://image2url.com/r2/default/images/1775656324764-1644dd75-6a8b-4fd4-a9c7-9b680ade2f0e.png',
      'https://image2url.com/r2/default/images/1775656359656-04cb9efe-2de8-4f0d-8d62-2b2cc20ca677.png',
      'https://image2url.com/r2/default/images/1775656409342-6dab1eec-67c7-4b62-8db8-f13cbe8efcd2.png',
      'https://image2url.com/r2/default/images/1775656452490-9c11da50-2ddf-4463-b573-4b0ef13911ae.png',
      'https://image2url.com/r2/default/images/1775656598848-4297e678-26e6-46eb-beda-0ef1fb60219a.png',
    ],
    client: 'UP San José',
    year: '2021',
    type: 'Obra de Infraestructura',
    services: ['Construcción de infraestructura', 'Obras civiles', 'Estructura metálica', 'Instalaciones hidrosanitarias', 'Acabados arquitectónicos'],
    highlights: ['Sector productivo agrícola', 'Infraestructura de almacenamiento', 'Optimización logística', 'Apoyo al sector agroindustrial', 'Municipio de Aranzazu'],
  },
  {
    id: 'pavimento-cll-10-5-6-villamaria',
    title: 'Pavimento Cll 10 entre 5 y 6 - Villamaría',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Villamaría, Caldas',
    description: 'Proyecto de reposición de pavimento y redes hidrosanitarias en la calle 10 entre carreras 5 y 6 del municipio de Villamaría.',
    fullDescription: 'Proyecto de reposición de pavimento y redes hidrosanitarias en la calle 10 entre carreras 5 y 6 del municipio de Villamaría, ejecutado para mejorar la infraestructura vial y los sistemas de acueducto y alcantarillado. La obra permitió optimizar la transitabilidad, seguridad vial y el correcto manejo de aguas, beneficiando a la comunidad local y mejorando la calidad de vida de los habitantes del sector.',
    image: 'https://image2url.com/r2/default/images/1775611438020-6a5a7956-9e38-4e7c-a20c-dfceada9f6aa.png',
    gallery: [
      'https://image2url.com/r2/default/images/1775611220048-f3cc71fa-26e5-4306-be2c-442563db1900.png',
      'https://image2url.com/r2/default/images/1775611276160-afc0fd61-8a29-486f-b3a-375f5c2a6664.png',
      'https://image2url.com/r2/default/images/1775611343473-a8e955ce-8770-4fc4-aa3b-9d4dc5250272.png',
      'https://image2url.com/r2/default/images/1775611390027-105cb5ab-17a5-49df-ab82-1c260455ee03.png',
      'https://image2url.com/r2/default/images/1775611438020-6a5a7956-9e38-4e7c-a20c-dfceada9f6aa.png',
    ],
    client: 'Alcaldía de Villamaría',
    year: '2021 - 2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial', 'Construcción de alcantarillado', 'Redes de acueducto', 'Obras civiles'],
    highlights: ['Sector público', 'Infraestructura urbana', 'Mejoramiento vial', 'Redes hidrosanitarias', 'Municipio de Villamaría'],
  },
  {
    id: 'pavimento-sector-moniquira',
    title: 'Pavimentos - Sector Moniquirá',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Pavimentación del Sector Moniquirá en Manizales, mejorando la calidad de vida de los residentes del sector.',
    fullDescription: 'Proyecto de pavimentación ejecutado en el Sector Moniquirá de Manizales para la Alcaldía de Manizales. Este proyecto permitió mejorar las condiciones viales de una zona residencial de alta afluencia, facilitando el acceso vehicular y peatonal de los habitantes del sector.',
    image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Infraestructura vial'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Pavimentos'],
  },
  {
    id: 'placas-huella-san-julian-pomos',
    title: 'Placas Huella San Julián y Pomos',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Villamaría, Caldas',
    description: 'Construcción de placas huella en las veredas San Julián y Pomos del municipio de Villamaría.',
    fullDescription: 'Proyecto de construcción de placas huella en las veredas San Julián y Pomos del municipio de Villamaría, ejecutado para la Alcaldía de Villamaría. Estas obras permitieron mejorar el acceso peatonal y vehicular en zonas rurales del municipio, facilitando la conectividad de las comunidades locales.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Villamaría',
    year: '2023',
    type: 'Obra Pública',
    services: ['Placas huella', 'Infraestructura rural'],
    highlights: ['Sector público', 'Alcaldía', 'Villamaría', 'Placas huella'],
  },
  {
    id: 'pavimento-alcantarillado-acueducto-aquamana',
    title: 'Pavimento, Alcantarillado y Acueducto',
    category: 'Pavimentos y Vías',
    categorySlug: 'pavimentos',
    location: 'Manizales, Caldas',
    description: 'Proyecto integral de pavimentación, alcantarillado y acueducto ejecutado para Aquamaná E.S.P.',
    fullDescription: 'Proyecto integral que combinó obras de pavimentación, alcantarillado y acueducto para Aquamaná E.S.P. en Manizales. Este proyecto multidisciplinario demuestra nuestra capacidad para gestionar obras complejas que requieren la integración de diferentes disciplinas de la ingeniería civil.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Obra Pública',
    services: ['Pavimentación', 'Alcantarillado', 'Acueducto'],
    highlights: ['Empresa de servicios públicos', 'Aquamaná', 'Manizales', 'Obra integral'],
  },

  // ─── 2. ESTRUCTURAS (4 proyectos) ────────────────────────
  {
    id: 'colegio-vereda-el-trabol',
    title: 'Colegio Vereda El Trábol',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Chinchiná, Caldas',
    description: 'Construcción de infraestructura educativa en la vereda El Trábol del municipio de Chinchiná.',
    fullDescription: 'Construcción de un colegio en la vereda El Trábol del municipio de Chinchiná, ejecutado para la Alcaldía de Chinchiná. El proyecto incluyó el diseño estructural y la construcción completa de la edificación educativa, contribuyendo al mejoramiento de la infraestructura educativa del municipio y beneficiando a la comunidad rural.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Construcción estructural', 'Diseño estructural', 'Obra civil'],
    highlights: ['Sector público', 'Educación', 'Chinchiná', 'Infraestructura social'],
  },
  {
    id: 'porteria-condominio-taboga',
    title: 'Portería Condominio Taboga',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Condominio Taboga, Caldas',
    description: 'Construcción de la portería principal del Condominio Taboga con diseño moderno y funcional.',
    fullDescription: 'Construcción de la portería principal para el Condominio Taboga. El proyecto incluyó diseño arquitectónico y ejecución estructural, creando un acceso moderno y funcional que combina estética con seguridad para los residentes del condominio.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Condominio Taboga',
    year: '2022',
    type: 'Obra Privada',
    services: ['Construcción estructural', 'Diseño arquitectónico', 'Acabados'],
    highlights: ['Sector privado', 'Condominio', 'Portería', 'Caldas'],
  },
  {
    id: 'bodega-almacenamiento-vision-norte',
    title: 'Bodega de Almacenamiento',
    category: 'Estructuras',
    categorySlug: 'estructuras',
    location: 'Visión Norte, Cartama - Caldas',
    description: 'Construcción de bodega de almacenamiento en el sector Visión Norte, vereda Cartama.',
    fullDescription: 'Construcción de bodega de almacenamiento en el sector Visión Norte, vereda Cartama, municipio de Aranzazu, Caldas. El proyecto fue ejecutado como obra privada, diseñado para proporcionar una solución de almacenamiento funcional y durable con acabados de calidad.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Privado',
    year: '2022',
    type: 'Obra Privada',
    services: ['Construcción industrial', 'Diseño estructural', 'Acabados'],
    highlights: ['Sector privado', 'Bodega', 'Cartama', 'Aranzazu'],
  },

  // ─── 3. ACUEDUCTOS Y ALCANTARILLADOS (4 proyectos) ───────
  {
    id: 'colector-san-carlos',
    title: 'Colector San Carlos',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción del colector San Carlos para el sistema de alcantarillado de Manizales.',
    fullDescription: 'Proyecto de construcción del sistema de alcantarillado colector San Carlos, ejecutado para Aquamaná E.S.P. en Manizales, Caldas. La obra incluyó la instalación de redes de alcantarillado que mejoran el sistema de saneamiento básico de la ciudad, contribuyendo a la salud pública y el bienestar de la comunidad.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2021',
    type: 'Infraestructura Hidrosanitaria',
    services: ['Alcantarillado', 'Redes sanitarias', 'Infraestructura hidráulica'],
    highlights: ['Empresa de servicios públicos', 'Aquamaná', 'Manizales', 'Alcantarillado'],
  },
  {
    id: 'alcantarillado-cll-10-entre-6-7',
    title: 'Alcantarillado Calle 10 Entre 6 y 7',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción del sistema de alcantarillado en la Calle 10 entre Carreras 6 y 7.',
    fullDescription: 'Proyecto de construcción del sistema de alcantarillado en la Calle 10 entre Carreras 6 y 7 de Manizales, ejecutado para Aquamaná E.S.P. Esta obra de infraestructura hidrosanitaria permitió mejorar la cobertura del servicio de alcantarillado en esta zona de la ciudad.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Infraestructura Hidrosanitaria',
    services: ['Alcantarillado', 'Redes sanitarias', 'Infraestructura hidráulica'],
    highlights: ['Empresa de servicios públicos', 'Aquamaná', 'Manizales', 'Alcantarillado'],
  },
  {
    id: 'acueducto-cll-10-entre-6-7',
    title: 'Acueducto Calle 10 Entre 6 y 7',
    category: 'Acueductos y Alcantarillados',
    categorySlug: 'acueductos',
    location: 'Manizales, Caldas',
    description: 'Construcción del sistema de acueducto en la Calle 10 entre Carreras 6 y 7.',
    fullDescription: 'Proyecto de construcción del sistema de acueducto en la Calle 10 entre Carreras 6 y 7 de Manizales, ejecutado para Aquamaná E.S.P. Este proyecto garantizó el suministro de agua potable a los residentes de esta zona, complementando las obras de alcantarillado realizadas en el mismo sector.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Aquamaná E.S.P.',
    year: '2022',
    type: 'Infraestructura Hidrosanitaria',
    services: ['Acueducto', 'Redes de agua potable', 'Infraestructura hidráulica'],
    highlights: ['Empresa de servicios públicos', 'Aquamaná', 'Manizales', 'Acueducto'],
  },

  // ─── 4. ESTABILIDAD DE TALUDES (4 proyectos) ─────────────
  {
    id: 'muro-la-carolita',
    title: 'Muro La Carolita',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Construcción de muro de contención en La Carolita para la estabilización del terreno.',
    fullDescription: 'Construcción de muro de contención en la zona de La Carolita, Manizales, ejecutado para la Alcaldía de Manizales. La obra de contención fue diseñada y construida para garantizar la estabilidad del terreno y proteger las viviendas y vías cercanas, aplicando técnicas de ingeniería geotécnica especializada.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2023',
    type: 'Obra de Contención',
    services: ['Muros de contención', 'Estabilización de taludes', 'Geotecnia'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Contención'],
  },
  {
    id: 'muro-talud-manizales',
    title: 'Muro en Talud',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Construcción de muro de contención para la estabilización de talud en zona urbana de Manizales.',
    fullDescription: 'Construcción de muro de contención para la estabilización de un talud en zona urbana de Manizales, ejecutado para la Alcaldía de Manizales. El proyecto requirió un análisis geotécnico detallado y la implementación de soluciones de contención seguras y duraderas para proteger la infraestructura y la comunidad.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2018',
    type: 'Obra de Contención',
    services: ['Muros de contención', 'Estabilización de taludes', 'Geotecnia'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Estabilización'],
  },
  {
    id: 'muro-morrogacho',
    title: 'Muro Morrogacho',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Construcción de muro de contención en Morrogacho para prevención de riesgos geotécnicos.',
    fullDescription: 'Construcción de muro de contención en la zona de Morrogacho, Manizales, ejecutado para la Alcaldía de Manizales. La obra fue diseñada para prevenir riesgos por movimientos de masa y proteger la infraestructura vial y las viviendas ubicadas en las proximidades del talud.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2018',
    type: 'Obra de Contención',
    services: ['Muros de contención', 'Estabilización de taludes', 'Geotecnia'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Contención'],
  },
  {
    id: 'estabilizacion-talud-manizales',
    title: 'Estabilización de Talud',
    category: 'Estabilidad de Taludes',
    categorySlug: 'estabilidad',
    location: 'Manizales, Caldas',
    description: 'Obra de estabilización de talud para prevención de deslizamientos en Manizales.',
    fullDescription: 'Proyecto de estabilización de talud en Manizales, ejecutado para la Alcaldía de Manizales. La obra incluyó la implementación de técnicas de ingeniería geotécnica para garantizar la estabilidad del terreno y prevenir riesgos por movimientos en masa, protegiendo a la comunidad y la infraestructura del sector.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Manizales',
    year: '2018',
    type: 'Obra de Contención',
    services: ['Estabilización de taludes', 'Geotecnia', 'Obras de protección'],
    highlights: ['Sector público', 'Alcaldía', 'Manizales', 'Estabilización'],
  },

  // ─── 5. OTRAS OBRAS (4 proyectos) ────────────────────────
  {
    id: 'piscina-social-condominio-el-libano',
    title: 'Piscina Social',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Condominio El Líbano, Palestina - Caldas',
    description: 'Construcción de piscina social para el Condominio El Líbano en Palestina, Caldas.',
    fullDescription: 'Construcción de piscina social para el Condominio El Líbano en Palestina, Caldas. El proyecto incluyó la construcción completa de la piscina con sistemas de filtración, áreas de deck, zona de showers y acabados de alta calidad, creando un espacio de recreación para los residentes del condominio.',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Condominio El Líbano',
    year: '2023',
    type: 'Obra Privada',
    services: ['Construcción de piscinas', 'Diseño hidráulico', 'Acabados'],
    highlights: ['Sector privado', 'Piscina', 'Palestina', 'Condominio'],
  },
  {
    id: 'cancha-vereda-naranjal',
    title: 'Cancha Vereda Naranjal',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Chinchiná, Caldas',
    description: 'Construcción de cancha deportiva en la vereda Naranjal del municipio de Chinchiná.',
    fullDescription: 'Construcción de cancha deportiva en la vereda Naranjal del municipio de Chinchiná, ejecutado para la Alcaldía de Chinchiná. Este proyecto de infraestructura deportiva contribuye al bienestar y la recreación de la comunidad rural, fomentando la práctica deportiva y la convivencia social.',
    image: 'https://images.unsplash.com/photo-1564429238961-bf8fe1b6d6a4?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Construcción deportiva', 'Infraestructura comunitaria', 'Obras civiles'],
    highlights: ['Sector público', 'Deporte', 'Chinchiná', 'Vereda Naranjal'],
  },
  {
    id: 'gimnasios-biosaludables',
    title: 'Gimnasios Biosaludables',
    category: 'Otras Obras',
    categorySlug: 'otras-obras',
    location: 'Chinchiná, Caldas',
    description: 'Construcción de gimnasios biosaludables al aire libre para la comunidad de Chinchiná.',
    fullDescription: 'Construcción de gimnasios biosaludables al aire libre en Chinchiná, ejecutado para la Alcaldía de Chinchiná. Este proyecto de infraestructura recreativa promueve la actividad física y la salud pública, proporcionando a la comunidad espacios equipados para el ejercicio al aire libre.',
    image: 'https://images.unsplash.com/photo-1564429238961-bf8fe1b6d6a4?w=800&h=600&fit=crop',
    gallery: [],
    client: 'Alcaldía de Chinchiná',
    year: '2023',
    type: 'Obra Pública',
    services: ['Construcción recreativa', 'Infraestructura comunitaria', 'Obras civiles'],
    highlights: ['Sector público', 'Salud', 'Chinchiná', 'Gimnasios'],
  },
]

// ═══════════════════════════════════════════════════════════
// PORTFOLIO SUMMARY
// ═══════════════════════════════════════════════════════════
export const portfolioSummary = {
  totalProjects: 20,
  period: '2018 - 2023',
  departments: [
    { name: 'Caldas', municipalities: ['Manizales', 'Villamaría', 'Chinchiná', 'Palestina', 'Cartama/Aranzazu'] },
    { name: 'Risaralda', municipalities: ['Pereira'] },
  ],
  sectors: {
    publico: { label: 'Sector Público', description: 'Alcaldías, Empresas de Servicios Públicos (E.S.P.)' },
    privado: { label: 'Sector Privado', description: 'Condominios, Propietarios particulares, Empresas' },
  },
  categories: [
    { label: 'Infraestructura Vial', items: ['Pavimentos rígidos y flexibles', 'Placas huella', 'Mantenimiento vial'] },
    { label: 'Construcción Estructural', items: ['Edificaciones educativas (colegios)', 'Bodegas industriales', 'Porterías y accesos', 'Estructuras metálicas y de concreto'] },
    { label: 'Saneamiento Básico', items: ['Redes de acueducto', 'Sistemas de alcantarillado', 'Colectores sanitarios'] },
    { label: 'Geotecnia', items: ['Muros de contención', 'Estabilización de taludes', 'Obras de protección'] },
    { label: 'Obras Comunitarias', items: ['Piscinas sociales', 'Canchas deportivas', 'Gimnasios al aire libre'] },
  ],
}

// ═══════════════════════════════════════════════════════════
// PUBLIC SECTOR INFO
// ═══════════════════════════════════════════════════════════
export const publicSector = {
  volume: '20 proyectos ejecutados',
  volumeFormatted: '20 proyectos',
  clients: {
    alcaldias: [
      'Manizales', 'Chinchiná', 'Villamaría', 'Pereira', 'Palestina',
      'Cali', 'Yopal', 'Pácora', 'Aguadas', 'Neira', 'Aranzazu', 'Armenia'
    ],
    empresas: [
      'Gensa', 'Aquamaná', 'INVIAS', 'Corpocaldas', 'Aguas de Manizales', 'Empocaldas'
    ],
    gobernaciones: ['Caldas', 'Risaralda'],
  },
}

// ═══════════════════════════════════════════════════════════
// SERVICES (Categorized)
// ═══════════════════════════════════════════════════════════
export const serviceCategories = [
  { id: 'construccion', label: 'Construcción', icon: 'Building2' },
  { id: 'disenos', label: 'Diseños y Estudios', icon: 'PenTool' },
  { id: 'adicionales', label: 'Servicios Adicionales', icon: 'Star' },
]

export const services: Service[] = [
  // ─── A. SERVICIOS DE CONSTRUCCIÓN ───
  {
    id: 'casas-urbanas-rurales',
    icon: 'Home',
    title: 'Casas Urbanas y Rurales',
    description: 'Construcción de viviendas de alta calidad tanto en zonas urbanas como rurales, adaptadas a las necesidades del cliente.',
    fullDescription: 'Diseñamos y construimos casas urbanas y rurales con los más altos estándares de calidad. Cada proyecto es personalizado para adaptarse a las condiciones del terreno, el clima y las preferencias del propietario, garantizando un hogar funcional, estético y duradero.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    features: ['Diseño personalizado', 'Construcción en obra', 'Acabados premium', 'Llave en mano'],
    benefits: ['Hogar a tu medida', 'Materiales de calidad', 'Garantía estructural', 'Asesoría integral'],
    projects: 30,
    category: 'construccion',
  },
  {
    id: 'bodegas-almacenamiento',
    icon: 'Warehouse',
    title: 'Bodegas de Almacenamiento',
    description: 'Construcción de bodegas industriales y comerciales con diseño funcional para optimizar el almacenamiento.',
    fullDescription: 'Construimos bodegas de almacenamiento con diseños funcionales que optimizan el espacio, la circulación y la logística. Adaptadas para diversos sectores como agrícola, industrial y comercial.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop',
    features: ['Diseño industrial', 'Sistemas de ventilación', 'Zonas de carga', 'Refrigeración opcional'],
    benefits: ['Maximización de espacio', 'Durabilidad', 'Funcionalidad', 'Adaptación al sector'],
    projects: 12,
    category: 'construccion',
  },
  {
    id: 'pavimentos-placas',
    icon: 'Route',
    title: 'Pavimentos y Placas Huella',
    description: 'Ejecución de pavimentos rígidos, flexibles y placas huella para vías y espacios públicos.',
    fullDescription: 'Realizamos proyectos de pavimentación con diferentes tecnologías: pavimentos flexibles (asfalto), pavimentos rígidos (concreto) y placas huella, adaptándonos a las necesidades del proyecto y las condiciones del terreno. Comprobada experiencia con alcaldías del Eje Cafetero.',
    image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&h=600&fit=crop',
    features: ['Pavimento asfáltico', 'Pavimento en concreto', 'Placas huella', 'Mantenimiento vial'],
    benefits: ['Durabilidad', 'Tecnología adecuada', 'Acabados de calidad', 'Mantenimiento vial'],
    projects: 25,
    category: 'construccion',
  },
  {
    id: 'piscinas-jacuzzis',
    icon: 'Waves',
    title: 'Piscinas y Jacuzzis',
    description: 'Construcción de piscinas y jacuzzis residenciales y comerciales con sistemas de filtración.',
    fullDescription: 'Diseñamos y construimos piscinas y jacuzzis de cualquier dimensión y estilo. Incluimos sistemas de filtración, iluminación subacuática, áreas de deck y paisajismo complementario para crear espacios de recreación perfectos.',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop',
    features: ['Diseño personalizado', 'Sistema de filtración', 'Iluminación LED', 'Deck y zonas húmedas'],
    benefits: ['Acabados premium', 'Eficiencia hídrica', 'Durabilidad', 'Espacio de recreación'],
    projects: 15,
    category: 'construccion',
  },
  {
    id: 'acueductos-alcantarillados',
    icon: 'Droplets',
    title: 'Acueductos y Alcantarillados',
    description: 'Diseño y construcción de sistemas de acueducto y alcantarillado para proyectos urbanos y rurales.',
    fullDescription: 'Implementamos sistemas completos de acueducto y alcantarillado que garantizan el suministro de agua potable y la correcta disposición de aguas residuales. Experiencia comprobada con empresas de servicios públicos como Aquamaná E.S.P.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    features: ['Redes de acueducto', 'Alcantarillado sanitario', 'Colectores sanitarios', 'Sistemas de bombeo'],
    benefits: ['Normatividad vigente', 'Eficiencia hidráulica', 'Sostenibilidad', 'Impacto social positivo'],
    projects: 18,
    category: 'construccion',
  },
  {
    id: 'obras-estabilizacion',
    icon: 'Shield',
    title: 'Obras de Estabilización',
    description: 'Muros de contención, estabilización de taludes y soluciones geotécnicas para terrenos en pendiente.',
    fullDescription: 'Ejecutamos obras especializadas de estabilización geotécnica que garantizan la seguridad de terrenos y estructuras. Incluimos muros de contención en concreto reforzado, pantallas ancladas, zanjas de drenaje, gaviones y soil nailing. Experiencia comprobada con la Alcaldía de Manizales.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    features: ['Muros de contención', 'Estabilización de taludes', 'Zanjas de drenaje', 'Gaviones', 'Soil nailing'],
    benefits: ['Seguridad estructural', 'Ingeniería geotécnica', 'Soluciones a medida', 'Normas técnicas'],
    projects: 20,
    category: 'construccion',
  },
  {
    id: 'estructuras-metalicas',
    icon: 'Building2',
    title: 'Estructuras Metálicas',
    description: 'Diseño y montaje de estructuras metálicas para cubiertas, naves industriales y puentes peatonales.',
    fullDescription: 'Fabricamos y montamos estructuras metálicas de cualquier envergadura: cubiertas industriales, naves, puentes peatonales, marcos estructurales y más. Trabajamos con acero de alta calidad y uniones certificadas.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    features: ['Cubiertas metálicas', 'Naves industriales', 'Puentes peatonales', 'Estructuras especiales'],
    benefits: ['Ligeras y resistentes', 'Montaje rápido', 'Versatilidad', 'Alta capacidad de carga'],
    projects: 14,
    category: 'construccion',
  },
  {
    id: 'juegos-infantiles',
    icon: 'Star',
    title: 'Juegos Infantiles',
    description: 'Construcción de parques infantiles con diseños seguros y creativos.',
    fullDescription: 'Diseñamos y construimos parques y zonas de juegos infantiles con materiales seguros y duraderos. Cada proyecto se adapta al espacio disponible y a los rangos de edad de los beneficiarios, cumpliendo con las normas de seguridad vigentes.',
    image: 'https://images.unsplash.com/photo-1564429238961-bf8fe1b6d6a4?w=800&h=600&fit=crop',
    features: ['Diseños seguros', 'Materiales certificados', 'Adaptación al espacio', 'Múltiples rangos de edad'],
    benefits: ['Seguridad infantil', 'Espacios de recreación', 'Comunidad', 'Normatividad cumplida'],
    projects: 10,
    category: 'construccion',
  },
  {
    id: 'redes-electricas',
    icon: 'Zap',
    title: 'Redes Eléctricas',
    description: 'Diseño e instalación de redes eléctricas para proyectos residenciales, comerciales e industriales.',
    fullDescription: 'Realizamos el diseño, instalación y puesta en marcha de redes eléctricas para cualquier tipo de proyecto. Incluimos redes de media y baja tensión, alumbrado público, sistemas de emergencia y tableros de control.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    features: ['Redes de media tensión', 'Alumbrado público', 'Tableros de control', 'Sistemas de emergencia'],
    benefits: ['Normatividad eléctrica RETIE', 'Seguridad', 'Eficiencia energética', 'Calidad garantizada'],
    projects: 16,
    category: 'construccion',
  },
  // ─── B. DISEÑOS Y ESTUDIOS ───
  {
    id: 'diseno-estructural',
    icon: 'FileText',
    title: 'Diseño Estructural',
    description: 'Cálculo y diseño estructural de edificaciones, puentes y obras civiles con software especializado.',
    fullDescription: 'Realizamos diseños estructurales completos utilizando software de última generación. Incluimos modelos matemáticos, memorias de cálculo, planos detallados y especificaciones técnicas que cumplen con la normatividad colombiana (NSR-10).',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    features: ['Memorias de cálculo', 'Planos estructurales', 'NSR-10', 'Modelado BIM'],
    benefits: ['Seguridad estructural', 'Optimización de materiales', 'Cumplimiento normativo', 'Documentación completa'],
    projects: 40,
    category: 'disenos',
  },
  {
    id: 'diseno-vial-geometrico',
    icon: 'Route',
    title: 'Diseño Vial y Geométrico',
    description: 'Diseño geométrico de vías urbanas y rurales con estudios de tráfico y señalización.',
    fullDescription: 'Elaboramos diseños viales completos que incluyen geometría horizontal y vertical, secciones transversales, estudios de tráfico, diseño de intersecciones, señalización y drenaje. Cumplimos con los manuales de diseño vial del INVIAS.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    features: ['Geometría vial', 'Secciones transversales', 'Señalización', 'Diseño INVIAS'],
    benefits: ['Seguridad vial', 'Normatividad INVIAS', 'Fluidez vehicular', 'Diseño integral'],
    projects: 22,
    category: 'disenos',
  },
  {
    id: 'diseno-redes-hidrosanitarias',
    icon: 'Droplets',
    title: 'Diseño de Redes Hidrosanitarias',
    description: 'Diseño de acueductos, alcantarillados y sistemas de drenaje pluvial.',
    fullDescription: 'Desarrollamos diseños de redes hidrosanitarias completos que incluyen acueducto, alcantarillado sanitario, alcantarillado pluvial y sistemas de tratamiento. Utilizamos software especializado para el dimensionamiento óptimo de las redes.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    features: ['Acueducto', 'Alcantarillado', 'Drenaje pluvial', 'Plantas de tratamiento'],
    benefits: ['Eficiencia hidráulica', 'Normatividad RAS', 'Sostenibilidad', 'Impacto social'],
    projects: 20,
    category: 'disenos',
  },
  {
    id: 'disenos-arquitectonicos',
    icon: 'PenTool',
    title: 'Diseños Arquitectónicos',
    description: 'Planos arquitectónicos completos con visualización 3D para cualquier tipo de proyecto.',
    fullDescription: 'Creamos diseños arquitectónicos que combinan estética, funcionalidad y sostenibilidad. Entregamos planos completos, renders 3D fotorealistas y recorridos virtuales que permiten visualizar el resultado final antes de construir.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    features: ['Planos completos', 'Renders 3D', 'Recorridos virtuales', 'Mobiliario y acabados'],
    benefits: ['Visualización previa', 'Diseño personalizado', 'Funcionalidad', 'Estética y confort'],
    projects: 35,
    category: 'disenos',
  },
  {
    id: 'estudio-suelos',
    icon: 'Compass',
    title: 'Estudio de Suelos',
    description: 'Estudios geotécnicos completos para conocer las condiciones del terreno y fundamentar diseños.',
    fullDescription: 'Realizamos estudios de suelos que incluyen perforaciones, ensayos de laboratorio, análisis de capacidad de carga, nivel freático y recomendaciones de cimentación. Fundamentamos técnicamente todas las decisiones constructivas.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    features: ['Perforaciones', 'Ensayos de laboratorio', 'Capacidad de carga', 'Recomendaciones de cimentación'],
    benefits: ['Seguridad en cimentaciones', 'Cumplimiento normativo', 'Información técnica', 'Reducción de riesgos'],
    projects: 28,
    category: 'disenos',
  },
  {
    id: 'estudios-susceptibilidad',
    icon: 'FileText',
    title: 'Estudios de Susceptibilidad',
    description: 'Evaluación de riesgos por movimientos en masa y fenómenos de remoción en masa.',
    fullDescription: 'Elaboramos estudios de susceptibilidad que evalúan el riesgo de movimientos en masa, inundaciones y otros fenómenos naturales. Incluimos cartografía, análisis de amenazas y recomendaciones de mitigación para garantizar la seguridad de los proyectos.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    features: ['Análisis de amenazas', 'Cartografía de riesgos', 'Mitigación', 'Normatividad ambiental'],
    benefits: ['Seguridad del proyecto', 'Cumplimiento ambiental', 'Información para decisiones', 'Plan de mitigación'],
    projects: 15,
    category: 'disenos',
  },
  {
    id: 'topografia',
    icon: 'Compass',
    title: 'Topografía',
    description: 'Levantamientos topográficos con tecnología de punta para cualquier tipo de proyecto.',
    fullDescription: 'Realizamos levantamientos topográficos con equipos de alta precisión (estación total, GPS diferencial, drones). Entregamos planos con curvas de nivel, cálculos de áreas, perfiles y toda la información necesaria para la planificación de proyectos.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    features: ['Levantamiento planimétrico', 'Curvas de nivel', 'Perfiles', 'Vuelo con dron'],
    benefits: ['Alta precisión', 'Tecnología GPS/GNSS', 'Planimetría digital', 'Información completa'],
    projects: 32,
    category: 'disenos',
  },
  // ─── C. SERVICIOS ADICIONALES ───
  {
    id: 'acabados',
    icon: 'Paintbrush',
    title: 'Acabados',
    description: 'Pinturas, enchapes, revoques, carpintería metálica y acabados en madera de alta calidad.',
    fullDescription: 'Ofrecemos un servicio integral de acabados que incluye pinturas decorativas e industriales, enchapes en cerámica y porcelanato, revoques en estuco y liso, carpintería metálica (ventanas, barandas, puertas), y acabados en madera para pisos, cielos rasos y mobiliario.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop',
    features: ['Pinturas', 'Enchapes', 'Revoques', 'Carpintería metálica', 'Acabados en madera'],
    benefits: ['Calidad premium', 'Variedad de materiales', 'Personal especializado', 'Acabado perfecto'],
    projects: 45,
    category: 'adicionales',
  },
  {
    id: 'urbanizacion-conjuntos',
    icon: 'Home',
    title: 'Urbanización de Conjuntos',
    description: 'Urbanización completa de conjuntos campestres y residenciales, incluyendo vías, redes y zonas comunes.',
    fullDescription: 'Desarrollamos proyectos de urbanización integral para conjuntos campestres y residenciales. Incluimos diseño urbanístico, construcción de vías internas, instalación de redes de acueducto y alcantarillado, redes eléctricas, zonas comunes, paisajismo y demarcación de lotes.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    features: ['Diseño urbanístico', 'Redes completas', 'Zonas comunes', 'Paisajismo', 'Loteo'],
    benefits: ['Proyecto llave en mano', 'Normatividad urbanística', 'Zonas de amenidad', 'Plusvalía'],
    projects: 8,
    category: 'adicionales',
  },
  {
    id: 'planes-manejo-transito',
    icon: 'Route',
    title: 'Planes de Manejo de Tránsito',
    description: 'Elaboración de planes de manejo de tránsito para proyectos de construcción en vías públicas.',
    fullDescription: 'Diseñamos planes de manejo de tránsito que garantizan la seguridad de peatones, vehículos y trabajadores durante la ejecución de proyectos de construcción en vías públicas. Incluyen señalización temporal, desvíos, horarios de trabajo y medidas de seguridad.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    features: ['Señalización temporal', 'Desvíos vehiculares', 'Horarios de trabajo', 'Medidas de seguridad'],
    benefits: ['Seguridad vial', 'Cumplimiento normativo', 'Continuidad del tráfico', 'Prevención de accidentes'],
    projects: 18,
    category: 'adicionales',
  },
  {
    id: 'mantenimiento-puentes',
    icon: 'Building2',
    title: 'Mantenimiento de Puentes y Estructuras',
    description: 'Mantenimiento preventivo y correctivo de puentes y estructuras metálicas.',
    fullDescription: 'Realizamos mantenimiento integral de puentes y estructuras metálicas que incluye inspección técnica, limpieza, tratamiento anticorrosivo, reparación de elementos estructurales, pintura y refuerzo de conexiones, garantizando la vida útil y seguridad de estas infraestructuras.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    features: ['Inspección técnica', 'Tratamiento anticorrosivo', 'Pintura especializada', 'Refuerzo estructural'],
    benefits: ['Extensión de vida útil', 'Seguridad estructural', 'Prevención', 'Normatividad'],
    projects: 12,
    category: 'adicionales',
  },
  {
    id: 'venta-propiedades',
    icon: 'Home',
    title: 'Venta de Propiedades',
    description: 'Venta de propiedades residenciales y comerciales en el Eje Cafetero colombiano.',
    fullDescription: 'Ofrecemos un portafolio de propiedades residenciales y comerciales ubicadas en las mejores zonas del Eje Cafetero colombiano. Proporcionamos asesoría completa para la compra de terrenos, lotes, casas y proyectos en desarrollo.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    features: ['Casas', 'Lotes', 'Bodegas', 'Proyectos en desarrollo'],
    benefits: ['Mejores ubicaciones', 'Asesoría legal', 'Precios competitivos', 'Eje Cafetero'],
    projects: 10,
    category: 'adicionales',
  },
  {
    id: 'fotografia-aerea',
    icon: 'Camera',
    title: 'Fotografía Aérea',
    description: 'Servicios de fotografía y videografía aérea con drones para proyectos de construcción y topografía.',
    fullDescription: 'Ofrecemos servicios profesionales de fotografía y videografía aérea utilizando drones de alta resolución. Ideales para el seguimiento de obras, levantamientos topográficos, inspecciones de estructuras, promoción inmobiliaria y documentación de proyectos.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
    features: ['Fotografía aérea', 'Videografía', 'Inspección de obras', 'Promoción inmobiliaria'],
    benefits: ['Alta resolución', 'Perspectivas únicas', 'Seguimiento de obras', 'Material promocional'],
    projects: 25,
    category: 'adicionales',
  },
  {
    id: 'renderizado-3d',
    icon: 'PenTool',
    title: 'Renderizado 3D',
    description: 'Visualización arquitectónica 3D fotorrealista para proyectos de construcción y diseño.',
    fullDescription: 'Creamos renders 3D fotorrealistas de alta calidad que permiten visualizar proyectos antes de construir. Incluimos recorridos virtuales, animaciones arquitectónicas, visualización de acabados y iluminación, y presentaciones para clientes e inversionistas.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    features: ['Renders fotorrealistas', 'Recorridos virtuales', 'Animaciones', 'Presentaciones'],
    benefits: ['Visualización previa', 'Venta más fácil', 'Decisiones informadas', 'Impacto visual'],
    projects: 30,
    category: 'adicionales',
  },
]

// ═══════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════
export const testimonials = [
  {
    id: 1,
    name: 'Carlos Enrique Ospina',
    role: 'Administrador, Condominio El Líbano',
    content: 'Edificando Ingenieros construyó nuestra piscina social con acabados excelentes. El cumplimiento de plazos y la calidad del trabajo fueron destacados. Totalmente recomendados.',
    rating: 5,
    avatar: 'CO',
  },
  {
    id: 2,
    name: 'Ana María Londoño',
    role: 'Infraestructura Municipal, Villamaría',
    content: 'Las placas huella en San Julián y Pomos se ejecutaron impecablemente. La comunicación constante y el resultado final beneficiaron a toda la comunidad rural.',
    rating: 5,
    avatar: 'AL',
  },
  {
    id: 3,
    name: 'Jorge Humberto Restrepo',
    role: 'Propietario, Bodega Visión Norte',
    content: 'Las bodegas de almacenamiento en Cartama superaron nuestras expectativas. El diseño funcional y la calidad de construcción optimizan nuestra operación completa.',
    rating: 5,
    avatar: 'JR',
  },
  {
    id: 4,
    name: 'Diana Patricia Giraldo',
    role: 'Coordinación, Aquamaná E.S.P.',
    content: 'Hemos trabajado con Edificando Ingenieros en múltiples proyectos de acueducto y alcantarillado. Su capacidad técnica y cumplimiento de cronogramas los hacen un aliado confiable.',
    rating: 5,
    avatar: 'DG',
  },
]

// ═══════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════
export const stats = [
  { label: 'Obras Ejecutadas', number: 22, suffix: '+', icon: 'Building2' },
  { label: 'Clientes Institucionales', number: 6, suffix: '+', icon: 'Users' },
  { label: 'Años de Experiencia', number: 10, suffix: '+', icon: 'Award' },
  { label: 'Municipios Atendidos', number: 6, suffix: '+', icon: 'HardHat' },
]

// ═══════════════════════════════════════════════════════════
// PROCESS STEPS (6 PASOS)
// ═══════════════════════════════════════════════════════════
export const processSteps = [
  {
    number: 1,
    icon: 'Lightbulb',
    title: 'Conociendo su Idea',
    description: 'Escuchamos tus ideas y te asesoramos para dar forma al proyecto. Analizamos tus necesidades, presupuesto y plazos.',
  },
  {
    number: 2,
    icon: 'PenTool',
    title: 'Ante-proyecto',
    description: 'Realizamos diseños con la normativa vigente y elaboramos un presupuesto detallado y transparente.',
  },
  {
    number: 3,
    icon: 'FileText',
    title: 'Culminación de Diseños',
    description: 'Exponemos el proyecto completo, permitimos modificaciones y ofrecemos asesoría permanente para tu aprobación.',
  },
  {
    number: 4,
    icon: 'Shield',
    title: 'Licencias y Permisos',
    description: 'Gestionamos ante las entidades pertinentes la obtención de todos los avales y permisos necesarios.',
  },
  {
    number: 5,
    icon: 'Hammer',
    title: 'Construcción',
    description: 'Ejecución de actividades con equipo capacitado y seguimiento continuo de calidad y avances.',
  },
  {
    number: 6,
    icon: 'Key',
    title: 'Entrega',
    description: 'Recorrido final, entrega de estudios, planos, registro fotográfico y garantías por escrito.',
  },
]

// ═══════════════════════════════════════════════════════════
// BLOG POSTS
// ═══════════════════════════════════════════════════════════
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Construcción en el Eje Cafetero: Experiencia y Compromiso',
    slug: 'construccion-eje-cafetero-experiencia-compromiso',
    excerpt: 'Nuestra trayectoria en el Eje Cafetero: más de 22 proyectos ejecutados en obras públicas y privadas.',
    content: 'Edificando Ingenieros S.A.S. ha dejado huella en el Eje Cafetero colombiano con más de 22 proyectos ejecutados entre 2018 y 2023, abarcando pavimentos, estructuras, acueductos, estabilización de taludes y obras comunitarias.\n\n## Presencia en Caldas\n\nNuestro trabajo se concentra principalmente en el departamento de Caldas, con proyectos en Manizales, Chinchiná, Villamaría, Palestina y Aranzazu. También hemos extendido nuestra presencia a Pereira en Risaralda.\n\n## Sector Público y Privado\n\nTrabajamos tanto con el sector público (Alcaldías, Empresas de Servicios Públicos como Aquamaná E.S.P.) como con el sector privado (condominios, propietarios particulares y empresas), demostrando nuestra versatilidad y capacidad.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    category: 'Eje Cafetero',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: true,
    createdAt: '2024-01-15',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Estabilidad de Taludes en Manizales: Nuestra Experiencia',
    slug: 'estabilidad-taludes-manizales-experiencia',
    excerpt: 'Conoce nuestra experiencia en obras de contención y estabilización de taludes en el municipio de Manizales.',
    content: 'La topografía accidentada de Manizales requiere soluciones geotécnicas especializadas. En Edificando Ingenieros hemos ejecutado múltiples proyectos de estabilización para la Alcaldía de Manizales.\n\n## Proyectos Ejecutados\n\n- Muro La Carolita (2023)\n- Muro en talud (2018)\n- Muro Morrogacho (2018)\n- Estabilización de talud (2018)\n\n## Técnicas Utilizadas\n\nImplementamos muros de contención en concreto reforzado, sistemas de drenaje y técnicas de estabilización que garantizan la seguridad de las comunidades y la infraestructura cercana.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop',
    category: 'Ingeniería',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: false,
    createdAt: '2024-02-20',
    readTime: '6 min',
  },
  {
    id: '3',
    title: 'Infraestructura Hidrosanitaria con Aquamaná E.S.P.',
    slug: 'infraestructura-hidrosanitaria-aquamana',
    excerpt: 'Nuestros proyectos de acueducto y alcantarillado en alianza con Aquamaná E.S.P. en Manizales.',
    content: 'Edificando Ingenieros ha trabajado de manera continua con Aquamaná E.S.P. en la construcción de infraestructura hidrosanitaria en Manizales, contribuyendo al mejoramiento del saneamiento básico.\n\n## Proyectos Realizados\n\n- Colector San Carlos (2021)\n- Alcantarillado Cll 10 Entre 6 y 7 (2022)\n- Acueducto Cll 10 Entre 6 y 7 (2022)\n- Colector San Carlos - Detalle (2021)\n- Pavimento, alcantarillado y acueducto integral (2022)\n\n## Impacto Social\n\nEstos proyectos benefician a miles de familias manizaleñas, mejorando la cobertura de servicios públicos esenciales.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    category: 'Proyectos',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: true,
    createdAt: '2024-03-10',
    readTime: '5 min',
  },
  {
    id: '4',
    title: 'Obras Comunitarias en Chinchiná: Deporte y Recreación',
    slug: 'obras-comunitarias-chinchina-deporte-recreacion',
    excerpt: 'Gimnasios biosaludables, canchas deportivas y colegios: nuestro aporte a la comunidad chinchinana.',
    content: 'En Edificando Ingenieros creemos en construir comunidad. En Chinchiná hemos ejecutado varios proyectos que mejoran la calidad de vida de sus habitantes.\n\n## Proyectos en Chinchiná\n\n- Colegio vereda El Trábol (2023) - Infraestructura educativa\n- Cancha vereda Naranjal (2023) - Infraestructura deportiva\n- Gimnasios Biosaludables (2023) - Salud y bienestar\n- Gimnasios Biosaludables - Otro sector (2023) - Ampliación de cobertura\n\n## Compromiso Social\n\nCada proyecto comunitario que ejecutamos es una inversión en el futuro de las generaciones venideras del Eje Cafetero.',
    image: 'https://images.unsplash.com/photo-1564429238961-bf8fe1b6d6a4?w=800&h=500&fit=crop',
    category: 'Comunidad',
    author: 'Edificando Ingenieros',
    authorRole: 'Equipo Editorial',
    published: true,
    featured: false,
    createdAt: '2024-04-05',
    readTime: '4 min',
  },
]
