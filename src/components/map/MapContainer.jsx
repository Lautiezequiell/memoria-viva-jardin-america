import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const MapView = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  
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

      {/* Map Only */}
      <div className="container-custom py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[600px] rounded-2xl overflow-hidden shadow-xl"
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
                  className="absolute bottom-4 left-4 px-3 py-1 bg-primary-600 rounded-full text-white text-sm font-medium capitalize"
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
