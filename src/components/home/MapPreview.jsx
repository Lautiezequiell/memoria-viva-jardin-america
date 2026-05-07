import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkedAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import placesData from '../../data/placesData';

const MapPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPlaces = placesData.slice(0, 5); // Mostrar los 5 lugares en orden

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPlaces.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [featuredPlaces.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredPlaces.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPlaces.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-stone-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-earth-100 text-earth-900 px-4 py-2 rounded-full mb-4">
              <FaMapMarkedAlt />
              <span className="font-medium">Mapa Histórico</span>
            </div>
            <h2 className="heading-md text-earth-900">Descubrí los lugares con historia</h2>
          </div>
          <Link
            to="/mapa"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-earth-700 hover:text-earth-900 transition-colors font-medium"
          >
            Explorar mapa completo <FaArrowRight />
          </Link>
        </motion.div>

        {/* Carrusel de Lugares */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredPlaces.map((place, index) => (
                <div key={place.id} className="w-full flex-shrink-0 px-2">
                  <Link to="/mapa" className="group block">
                    <div className="card bg-white h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={place.media.photos[0].image}
                          alt={place.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-earth-800 rounded-full text-sm font-medium capitalize">
                            {place.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                          {place.name}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {place.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {place.timeline.length} épocas documentadas
                          </span>
                          <span className="text-primary-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                            Ver lugar <FaArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de Navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-earth-700 hover:bg-white hover:text-earth-900 transition-all shadow-lg"
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-earth-700 hover:bg-white hover:text-earth-900 transition-all shadow-lg"
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>

          {/* Indicadores de posición */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredPlaces.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-earth-600 w-8' 
                    : 'bg-earth-300 hover:bg-earth-400'
                }`}
                aria-label={`Ir al lugar ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps iframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1GswgKngHeyHmrw20zUT9AzN5yIGupVs&ehbc=2E312F" 
              width="100%" 
              height="480" 
              className="w-full border-0"
              title="Mapa interactivo de Jardín América"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapPreview;
