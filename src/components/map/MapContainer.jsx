import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaTree, FaGraduationCap, FaFutbol, FaStore, FaHome, FaFilter } from 'react-icons/fa';
import L from 'leaflet';
import placesData, { categories } from '../../data/placesData';

// Custom marker icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 32px;
      height: 32px;
      background-color: ${color};
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const categoryColors = {
  all: '#15803d',
  plaza: '#22c55e',
  escuela: '#d97706',
  club: '#dc2626',
  comercio: '#7c3aed',
  barrio: '#0891b2',
};

const categoryIcons = {
  all: FaMapMarkerAlt,
  plaza: FaTree,
  escuela: FaGraduationCap,
  club: FaFutbol,
  comercio: FaStore,
  barrio: FaHome,
};

const MapView = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'all') return placesData;
    return placesData.filter(place => place.category === activeCategory);
  }, [activeCategory]);

  const mapCenter = [-27.046, -55.227];
  const mapZoom = 14;

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
            Mapa Histórico
          </motion.h1>
          <p className="text-primary-100">
            Explorá los lugares que marcaron la historia de Jardín América
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <FaFilter className="text-gray-400 mr-2 flex-shrink-0" />
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id];
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="text-sm" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map and Sidebar */}
      <div className="container-custom py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1GswgKngHeyHmrw20zUT9AzN5yIGupVs&ehbc=2E312F" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Sidebar - Places List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] lg:h-[600px] flex flex-col">
              <div className="p-4 bg-gray-50 border-b">
                <h2 className="font-heading font-bold text-lg">
                  Lugares ({filteredPlaces.length})
                </h2>
              </div>
              <div className="overflow-y-auto flex-grow p-4 space-y-3">
                <AnimatePresence mode="popLayout">
                  {filteredPlaces.map((place, index) => (
                    <motion.div
                      key={place.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedPlace(place)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        selectedPlace?.id === place.id
                          ? 'bg-primary-50 border-2 border-primary-200'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: categoryColors[place.category] }}
                        >
                          {React.createElement(categoryIcons[place.category] || FaMapMarkerAlt, { size: 16 })}
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-bold text-gray-900 truncate">{place.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">{place.description}</p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span className="capitalize">{place.category}</span>
                            <span>•</span>
                            <span>{place.timeline.length} épocas</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Place Detail Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlace(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedPlace.media.photos[0]}
                  alt={selectedPlace.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                >
                  ×
                </button>
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium capitalize"
                  style={{ backgroundColor: categoryColors[selectedPlace.category] }}
                >
                  {selectedPlace.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  {selectedPlace.name}
                </h2>
                <p className="text-gray-600 mb-4">{selectedPlace.address}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedPlace.history}
                </p>
                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-900 mb-3">Línea de tiempo</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlace.timeline.map((year) => (
                      <span
                        key={year}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedPlace.media.photos.length > 1 && (
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-bold text-gray-900 mb-3">Galería</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedPlace.media.photos.slice(1).map((photo, idx) => (
                        <img
                          key={idx}
                          src={photo}
                          alt={`${selectedPlace.name} ${idx + 2}`}
                          className="aspect-square object-cover rounded-lg"
                        />
                      ))}
                    </div>
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

export default MapView;
