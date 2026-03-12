# Memoria Viva Jardín América - Arquitectura del Proyecto

## 1. ESTRUCTURA DE CARPETAS

```
memoria-viva-jardin-america/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       ├── audio/
│       └── video/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── PhotoTransform.jsx
│   │   │   ├── HistoryOfDay.jsx
│   │   │   ├── TimelinePreview.jsx
│   │   │   ├── MapPreview.jsx
│   │   │   └── StoriesPreview.jsx
│   │   ├── timeline/
│   │   │   ├── TimelineContainer.jsx
│   │   │   ├── DecadeCard.jsx
│   │   │   ├── TimelineEvent.jsx
│   │   │   └── TimelineControls.jsx
│   │   ├── map/
│   │   │   ├── MapContainer.jsx
│   │   │   ├── MapMarker.jsx
│   │   │   ├── PlacePopup.jsx
│   │   │   └── MapFilters.jsx
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.jsx
│   │   │   ├── GalleryCard.jsx
│   │   │   ├── ImageViewer.jsx
│   │   │   ├── CompareSlider.jsx
│   │   │   └── GalleryFilters.jsx
│   │   ├── stories/
│   │   │   ├── StoryCard.jsx
│   │   │   ├── StoryPlayer.jsx
│   │   │   └── StoriesGrid.jsx
│   │   ├── audiovisual/
│   │   │   ├── MediaPlayer.jsx
│   │   │   ├── MediaCard.jsx
│   │   │   └── CategoryFilter.jsx
│   │   ├── participation/
│   │   │   ├── UploadForm.jsx
│   │   │   ├── StorySubmission.jsx
│   │   │   ├── PhotoIdentification.jsx
│   │   │   └── CorrectionForm.jsx
│   │   └── education/
│   │       ├── ResourceCard.jsx
│   │       ├── ActivityList.jsx
│   │       └── TeacherKit.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TimelinePage.jsx
│   │   ├── MapPage.jsx
│   │   ├── Phototeca.jsx
│   │   ├── Stories.jsx
│   │   ├── Audiovisual.jsx
│   │   ├── Participa.jsx
│   │   └── Education.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useMediaQuery.js
│   │   ├── useLocalStorage.js
│   │   └── useAudioPlayer.js
│   ├── context/
│   │   ├── AppContext.jsx
│   │   └── MediaContext.jsx
│   ├── data/
│   │   ├── timelineData.js
│   │   ├── placesData.js
│   │   ├── photosData.js
│   │   ├── storiesData.js
│   │   ├── mediaData.js
│   │   └── categories.js
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── constants.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── .eslintrc.js
├── .prettierrc
└── README.md
```

## 2. LIBRERÍAS A INSTALAR

### Core
```bash
npm install react@18 react-dom@18 react-router-dom@6
```

### Animaciones
```bash
npm install framer-motion
```

### UI Components
```bash
npm install swiper react-icons
```

### Mapas
```bash
npm install leaflet react-leaflet
```

### Multimedia
```bash
npm install react-player react-compare-image
```

### Formularios
```bash
npm install react-hook-form
```

### HTTP Client
```bash
npm install axios
```

### Estilos
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Desarrollo
```bash
npm install -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks
```

## 3. DIAGRAMA DE NAVEGACIÓN

```
                    +----------------+
                    |     HOME       |
                    |    (Hero)      |
                    +--------+-------+
                             |
        +--------------------+--------------------+
        |                    |                    |
        v                    v                    v
+-------+-------+   +--------+-------+   +--------+-------+
|   TIMELINE    |   |   MAP PAGE     |   |   PHOTOTECA    |
|   (History)   |   |   (Places)     |   |   (Gallery)    |
+-------+-------+   +--------+-------+   +--------+-------+
        |                    |                    |
        v                    v                    v
+-------+-------+   +--------+-------+   +--------+-------+
|    STORIES    |   |  AUDIOVISUAL   |   |   PARTICIPA    |
|  (Testimony)  |   |   (Media)      |   |  (Community)   |
+-------+-------+   +--------+-------+   +--------+-------+
        |                    |                    |
        v                    v                    v
+----------------+   +--------+-------+   +----------------+
|   EDUCATION    |   |                |   |   QR LANDING   |
|  (School Mode) |   |                |   |   (External)   |
+----------------+   +----------------+   +----------------+
```

### Rutas React Router
```javascript
const routes = [
  { path: '/', element: <Home /> },
  { path: '/timeline', element: <TimelinePage /> },
  { path: '/mapa', element: <MapPage /> },
  { path: '/fototeca', element: <Phototeca /> },
  { path: '/historias', element: <Stories /> },
  { path: '/audiovisual', element: <Audiovisual /> },
  { path: '/participa', element: <Participa /> },
  { path: '/escuela', element: <Education /> },
];
```

## 4. ESTRATEGIA DE COMPONENTES

### Principios
- **Atomic Design**: Componentes pequeños y reutilizables
- **Container/Presentational**: Separación de lógica y UI
- **Mobile First**: Diseño responsive prioritario
- **Lazy Loading**: Carga diferida de componentes pesados

### Jerarquía de Componentes

#### Nivel 1: Common (Base)
- `Navbar` - Navegación principal responsive
- `Footer` - Pie de página con info institucional
- `LoadingSpinner` - Indicador de carga
- `ErrorBoundary` - Manejo de errores

#### Nivel 2: Feature (Dominio)
- `Hero` - Video hero con call-to-action
- `TimelineContainer` - Línea de tiempo interactiva
- `MapContainer` - Mapa Leaflet con marcadores
- `GalleryGrid` - Grilla de fotos con filtros
- `StoryPlayer` - Reproductor multimedia testimonios

#### Nivel 3: Page (Vistas)
- Cada página ensambla componentes feature
- Maneja el estado de página
- Integra con hooks de datos

### Composición de Páginas

```jsx
// Ejemplo: Home.jsx
<>
  <Navbar />
  <Hero />
  <PhotoTransform />
  <HistoryOfDay />
  <TimelinePreview />
  <MapPreview />
  <StoriesPreview />
  <Footer />
</>
```

## 5. ESTRATEGIA DE DATOS HISTÓRICOS

### Estructura de Datos

#### Timeline Data
```javascript
const timelineData = [
  {
    id: 'decada-1940',
    year: 1940,
    title: 'Los Orígenes',
    description: 'Fundación de Jardín América',
    events: [
      {
        id: 'evt-001',
        year: 1942,
        month: 3,
        title: 'Llegada de los primeros colonos',
        type: 'photo', // photo | video | audio | document
        media: ['/images/1942-fundacion.jpg'],
        description: '...',
        location: { lat: -27.05, lng: -55.23 },
        sources: ['Archivo Municipal'],
        tags: ['fundacion', 'colonos']
      }
    ]
  }
];
```

#### Places Data
```javascript
const placesData = [
  {
    id: 'place-001',
    name: 'Plaza San Martín',
    category: 'plaza', // plaza | escuela | club | comercio | barrio
    location: { lat: -27.045, lng: -55.227 },
    description: '...',
    history: '...',
    media: {
      photos: [...],
      videos: [...],
      audios: [...]
    },
    timeline: ['1945', '1960', '1980', '2020'],
    active: true
  }
];
```

#### Photos Data
```javascript
const photosData = [
  {
    id: 'photo-001',
    title: 'Calle Principal 1950',
    year: 1950,
    decade: 1950,
    location: { lat: -27.045, lng: -55.227 },
    barrio: 'centro',
    evento: 'calles',
    institucion: null,
    personas: ['Juan Pérez', 'María González'],
    image: '/images/1950-calle-principal.jpg',
    compareWith: '/images/2024-calle-principal.jpg',
    description: '...',
    source: 'Familia Pérez',
    tags: ['calle', 'transporte', 'centro'],
    downloadable: true
  }
];
```

#### Stories Data
```javascript
const storiesData = [
  {
    id: 'story-001',
    type: 'video', // video | audio | text
    title: 'Recuerdos de la escuela N° 12',
    author: 'Roberto García',
    year: 1965,
    media: '/video/roberto-escuela-12.mp4',
    thumbnail: '/images/thumb-roberto.jpg',
    duration: '3:45',
    summary: '...',
    fullText: '...',
    tags: ['educacion', 'escuela-12']
  }
];
```

### Gestión de Estado

#### Context API Estructura
```javascript
// AppContext.jsx - Estado global
{
  navigation: {
    currentPage,
    history
  },
  ui: {
    theme,
    sidebarOpen,
    modalOpen
  },
  filters: {
    timelineDecade,
    mapCategory,
    galleryFilters
  }
}

// MediaContext.jsx - Estado multimedia
{
  player: {
    isPlaying,
    currentMedia,
    volume
  },
  gallery: {
    selectedPhoto,
    compareMode
  }
}
```

## 6. DISEÑO UX GENERAL

### Paleta de Colores (CSS Variables)
```css
:root {
  /* Colores primarios - Naturaleza */
  --color-primary-900: #14532d;
  --color-primary-700: #15803d;
  --color-primary-500: #22c55e;
  --color-primary-300: #86efac;
  --color-primary-100: #dcfce7;
  
  /* Colores tierra - Raíces */
  --color-earth-900: #451a03;
  --color-earth-700: #92400e;
  --color-earth-500: #d97706;
  --color-earth-300: #fcd34d;
  --color-earth-100: #fef3c7;
  
  /* Colores sepia - Memoria */
  --color-sepia-900: #78350f;
  --color-sepia-700: #b45309;
  --color-sepia-500: #f59e0b;
  --color-sepia-300: #fbbf24;
  --color-sepia-100: #fef3c7;
  
  /* Neutros */
  --color-white: #ffffff;
  --color-gray-100: #f3f4f6;
  --color-gray-500: #6b7280;
  --color-gray-900: #111827;
  
  /* Semantic */
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-500);
  --color-background: var(--color-white);
  --color-background-warm: #fafaf9;
}
```

### Tipografía
```css
:root {
  /* Familias */
  --font-heading: 'Merriweather', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-accent: 'Playfair Display', serif;
  
  /* Tamaños */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
}
```

### Espaciado
```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

### Breakpoints
```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Tablets */
--breakpoint-md: 768px;   /* Tablets landscape */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large screens */
--breakpoint-2xl: 1536px; /* Extra large */
```

### Animaciones (Framer Motion)
```javascript
// Variantes reutilizables
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};
```

### Patrones de UI

#### 1. Cards
- Bordes suaves (8px radius)
- Sombra sutil en hover
- Imagen con overlay degradado
- Info ordenada por jerarquía

#### 2. Botones
- Primary: Verde sólido, texto blanco
- Secondary: Borde tierra, texto tierra
- Ghost: Sin fondo, subrayado animado
- Icon: Circular, hover con background

#### 3. Navegación
- Navbar fijo con backdrop blur
- Logo + Links + CTA móvil (hamburguesa)
- Indicador de sección activa
- Mobile: Drawer slide desde derecha

#### 4. Modales
- Overlay oscurecido
- Cierre con X, ESC, o click fuera
- Animación scale + fade
- Contenido scrollable

#### 5. Formularios
- Labels flotantes
- Validación inline
- Estados: default, focus, error, success
- Botón submit con loading state

### Accesibilidad
- ARIA labels en elementos interactivos
- Skip to content link
- Focus rings visibles
- Contraste mínimo 4.5:1
- Alt text en todas las imágenes
- Keyboard navigation completa
- Reduced motion support

### Performance
- Lazy loading de imágenes
- Code splitting por ruta
- Optimización de assets multimedia
- Prefetch de rutas críticas
- Service worker para cache

## 7. INTEGRACIÓN API (Futura)

### Endpoints Previstos
```javascript
const API_ENDPOINTS = {
  timeline: '/api/timeline',
  places: '/api/places',
  photos: '/api/photos',
  stories: '/api/stories',
  media: '/api/media',
  upload: '/api/upload',
  submissions: '/api/submissions'
};
```

### Servicios (Preparados)
```javascript
// services/api.js
class ApiService {
  async getTimeline(decade = null) { }
  async getPlaces(category = null) { }
  async getPhotos(filters = {}) { }
  async submitStory(data) { }
  async uploadPhoto(formData) { }
}
```

## 8. CHECKLIST DE CALIDAD

### Antes de cada fase:
- [ ] Código linteado (ESLint)
- [ ] Formateado (Prettier)
- [ ] Componente documentado
- [ ] Responsive testeado
- [ ] Accesible (WAI-ARIA)
- [ ] Performance auditada

### Métricas objetivo:
- Lighthouse Score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Accessibility Score 100

---

**Documento preparado para Fase 2: Setup del proyecto React**

**Para continuar, indica: "Continuar con Fase 2"**
