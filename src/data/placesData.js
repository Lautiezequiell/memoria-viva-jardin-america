const placesData = [
  {
    id: 'place-001',
    name: 'Plaza Colón',
    category: 'plaza',
    description: 'El corazón cívico de Jardín América',
    history: 'Plaza principal que见证了 la historia y el crecimiento del pueblo.',
    location: { lat: -27.0455, lng: -55.2275 },
    address: 'Av. San Martín y Calle 9 de Julio',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/places/plaza-colon.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1946', '1960', '1980', '2000'],
    active: true,
    features: ['Monumento', 'Fuentes', 'Juegos infantiles'],
  },
  {
    id: 'place-002',
    name: 'Saltos del Tabay',
    category: 'naturaleza',
    description: 'El tesoro natural de nuestra tierra',
    history: 'Cascadas naturales que son un atractivo turístico importante.',
    location: { lat: -27.040, lng: -55.230 },
    address: 'Ruta Provincial 2, Km 15',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/places/saltos-tabay.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1946', '1960', '1980', '2000'],
    active: true,
    features: ['Cascadas', 'Senderos', 'Área de picnic'],
  },
  {
    id: 'place-003',
    name: 'Plaza Belgrano',
    category: 'plaza',
    description: 'Espacio verde familiar del barrio sur',
    history: 'Plaza creada para dar esparcimiento a los vecinos del sector.',
    location: { lat: -27.050, lng: -55.225 },
    address: 'Calle Belgrano y Av. Mitre',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/places/plaza-belgrano.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1950', '1970', '1990', '2010'],
    active: true,
    features: ['Juegos infantiles', 'Área deportiva', 'Parrillas'],
  },
  {
    id: 'place-004',
    name: 'Plazoletas de las Colectividades',
    category: 'plaza',
    description: 'Homenaje a las comunidades inmigrantes',
    history: 'Espacios que celebran la diversidad cultural de nuestros fundadores.',
    location: { lat: -27.047, lng: -55.226 },
    address: 'Av. San Martín entre Calle 25 de Mayo y 9 de Julio',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/places/plazoletas-colectividades.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1960', '1980', '2000'],
    active: true,
    features: ['Monumentos', 'Plantales', 'Bancos'],
  },
  {
    id: 'place-005',
    name: 'Polideportivo',
    category: 'deporte',
    description: 'Centro deportivo municipal',
    history: 'Complejo polideportivo construido para promover el deporte local.',
    location: { lat: -27.043, lng: -55.229 },
    address: 'Ruta Nacional 12, Km 1230',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/places/municipalidad.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['2000', '2010', '2020'],
    active: true,
    features: ['Canchas', 'Pileta', 'Gimnasio'],
  },
];

export const categories = [
  { id: 'all', name: 'Todos', icon: 'FaMapMarkedAlt' },
  { id: 'plaza', name: 'Plazas', icon: 'FaTree' },
  { id: 'escuela', name: 'Escuelas', icon: 'FaGraduationCap' },
  { id: 'club', name: 'Clubes', icon: 'FaFutbol' },
  { id: 'comercio', name: 'Comercios', icon: 'FaStore' },
  { id: 'barrio', name: 'Barrios', icon: 'FaHome' },
];

export default placesData;
