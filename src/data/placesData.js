const placesData = [
  {
    id: 'place-001',
    name: 'Plaza Colón',
    category: 'plaza',
    description: 'El corazón cívico de Jardín América',
    history: 'Plaza principal que presenció la historia y el crecimiento del pueblo.',
    location: { lat: -27.0455, lng: -55.2275 },
    address: 'Av. San Martín y Calle 9 de Julio',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/PlazaColon/Construcción Plaza colon.jpg' },
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
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/Turismo/turismo Tabay - antigua entrada.jpg' },
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
    name: 'Parroquia Cristo Redentor',
    category: 'iglesia',
    description: 'Templo católico principal del pueblo',
    history: 'Iglesia construida por la comunidad como centro de fe y reunión.',
    location: { lat: -27.046, lng: -55.228 },
    address: 'Av. San Martín y Calle 25 de Mayo',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1946/ComisionJA.JPG' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1950', '1970', '1990', '2010'],
    active: true,
    features: ['Templo', 'Campanario', 'Salón parroquial'],
  },
  {
    id: 'place-004',
    name: 'Municipalidad',
    category: 'gobierno',
    description: 'Casa de gobierno municipal',
    history: 'Edificio que alberga la administración local y servicios públicos.',
    location: { lat: -27.048, lng: -55.225 },
    address: 'Av. San Martín y Calle 9 de Julio',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1960/MunicipalidadAntigua.jpg' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1960', '1980', '2000', '2020'],
    active: true,
    features: ['Administración', 'Salón de actos', 'Archivo municipal'],
  },
  {
    id: 'place-005',
    name: 'Plaza Belgrano',
    category: 'plaza',
    description: 'Espacio verde familiar',
    history: 'Plaza creada para dar esparcimiento a los vecinos del sector.',
    location: { lat: -27.050, lng: -55.225 },
    address: 'Calle Belgrano y Av. Mitre',
    media: {
      photos: [
        { image: 'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/plazaBelgrano/PlazaBelgranoyMalvinasAntigua.png' },
      ],
      videos: [],
      audios: [],
    },
    timeline: ['1950', '1970', '1990', '2010'],
    active: true,
    features: ['Juegos infantiles', 'Área deportiva', 'Parrillas'],
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
