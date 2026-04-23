import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes, FaDownload, FaImages } from 'react-icons/fa';
import photosData, { filterOptions } from '../../data/photosData';

const GalleryGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [filters, setFilters] = useState({
    year: '',
    barrio: '',
    evento: '',
    institucion: '',
    search: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredPhotos = useMemo(() => {
    return photosData.filter((photo) => {
      if (filters.year && photo.year !== parseInt(filters.year)) return false;
      if (filters.barrio && photo.barrio !== filters.barrio) return false;
      if (filters.evento && photo.evento !== filters.evento) return false;
      if (filters.institucion && photo.institucion !== filters.institucion) return false;
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchTitle = photo.title.toLowerCase().includes(searchLower);
        const matchDesc = photo.description.toLowerCase().includes(searchLower);
        const matchTags = photo.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchTitle && !matchDesc && !matchTags) return false;
      }
      return true;
    });
  }, [filters]);

  const activeFiltersCount = Object.values(filters).filter((v) => v !== '').length;

  const clearFilters = () => {
    setFilters({
      year: '',
      barrio: '',
      evento: '',
      institucion: '',
      search: '',
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-earth-900 text-white py-12">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-2"
          >
            Fototeca Digital
          </motion.h1>
          <p className="text-primary-100">
            Archivo fotográfico histórico de Jardín América
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar fotos..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showFilters || activeFiltersCount > 0
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaFilter />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-primary-600 text-white rounded-full text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Results count */}
            <div className="flex items-center text-gray-600">
              <FaImages className="mr-2" />
              {filteredPhotos.length} fotos
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Año</label>
                      <select
                        value={filters.year}
                        onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Todos</option>
                        {filterOptions.years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Barrio</label>
                      <select
                        value={filters.barrio}
                        onChange={(e) => setFilters({ ...filters, barrio: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Todos</option>
                        {filterOptions.barrios.map((barrio) => (
                          <option key={barrio} value={barrio}>
                            {barrio.charAt(0).toUpperCase() + barrio.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Evento</label>
                      <select
                        value={filters.evento}
                        onChange={(e) => setFilters({ ...filters, evento: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Todos</option>
                        {filterOptions.eventos.map((evento) => (
                          <option key={evento} value={evento}>
                            {evento.charAt(0).toUpperCase() + evento.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institución</label>
                      <select
                        value={filters.institucion}
                        onChange={(e) => setFilters({ ...filters, institucion: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Todas</option>
                        {filterOptions.instituciones.map((inst) => (
                          <option key={inst} value={inst}>
                            {inst}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="mt-4 text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      <FaTimes />
                      Limpiar filtros
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container-custom py-8">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16">
            <FaImages className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No se encontraron fotos con estos filtros</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    // Redirigir a página externa (ej: Google Drive)
                    window.open('https://drive.google.com/your-link', '_blank');
                  }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="font-bold text-sm line-clamp-1">{photo.title}</p>
                    <p className="text-xs text-white/80">{photo.year}</p>
                  </div>
                  {photo.compareWith && (
                    <div className="absolute top-2 right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs">
                      <FaImages />
                    </div>
                  )}
                  {photo.featured && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-sepia-600 text-white text-xs rounded-full">
                      Destacada
                    </div>
                  )}
                  {/* Indicador de redirección */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Image Area */}
              <div className="relative">
                {compareMode && selectedPhoto.compareWith ? (
                  <CompareView before={selectedPhoto.image} after={selectedPhoto.compareWith} />
                ) : (
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full max-h-[60vh] object-contain bg-black"
                  />
                )}
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                >
                  <FaTimes />
                </button>

                {/* Compare Toggle */}
                {selectedPhoto.compareWith && (
                  <button
                    onClick={() => setCompareMode(!compareMode)}
                    className={`absolute bottom-4 right-4 px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-colors ${
                      compareMode ? 'bg-primary-600 text-white' : 'bg-white/90 text-gray-700'
                    }`}
                  >
                    <FaImages />
                    {compareMode ? 'Ver original' : 'Comparar'}
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900">
                      {selectedPhoto.title}
                    </h2>
                    <p className="text-gray-600">{selectedPhoto.year}</p>
                  </div>
                  {selectedPhoto.downloadable && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      <FaDownload />
                      Descargar
                    </button>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedPhoto.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span><strong>Barrio:</strong> {selectedPhoto.barrio}</span>
                  <span><strong>Evento:</strong> {selectedPhoto.evento}</span>
                  {selectedPhoto.institucion && (
                    <span><strong>Institución:</strong> {selectedPhoto.institucion}</span>
                  )}
                  <span><strong>Fuente:</strong> {selectedPhoto.source}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {selectedPhoto.personas.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Personas en la foto:</strong> {selectedPhoto.personas.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Before/After Comparison Component
const CompareView = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      className="relative h-[60vh] cursor-ew-resize select-none overflow-hidden"
      onMouseMove={(e) => isDragging && handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Full) */}
      <img src={after} alt="Después" className="absolute inset-0 w-full h-full object-contain bg-black" />
      
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Antes" className="w-full h-full object-contain bg-black" />
        <div className="absolute top-4 left-4 px-3 py-1 bg-sepia-700 text-white rounded-full text-sm font-bold">
          Antes
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex text-gray-600 text-sm">◀ ▶</div>
        </div>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-bold">
        Ahora
      </div>
    </div>
  );
};

export default GalleryGrid;
