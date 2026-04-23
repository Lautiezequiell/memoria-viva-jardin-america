import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const transformations = [
  {
    id: 1,
    title: 'Municipalidad',
    yearBefore: '1940',
    yearAfter: '2026',
    imageBefore: '/images/antes-despues/Municipalidadantigua.jpg',
    imageAfter: '/images/antes-despues/MunicipalidadAhora.jpg',
    description: 'El corazón administrativo de Jardín América',
  },
  {
    id: 2,
    title: 'Plaza Colón',
    yearBefore: '1960',
    yearAfter: '2024',
    imageBefore: '/images/antes-despues/PlazaAntes.jpg',
    imageAfter: '/images/antes-despues/PlazaAhora.jpeg',
    description: 'Plaza Colón, el corazón cívico de Jardín América',
  },
  {
    id: 3,
    title: 'Iglesia',
    yearBefore: '1950',
    yearAfter: '2024',
    imageBefore: '/images/antes-despues/IglesiaAntes.JPG',
    imageAfter: '/images/antes-despues/IglesiaAhora.jpg',
    description: 'El templo parroquial a través del tiempo',
  },
  {
    id: 4,
    title: 'Ruta 12 Aconcagua',
    yearBefore: '1970',
    yearAfter: '2024',
    imageBefore: '/images/antes-despues/Ruta12Antes.jpg',
    imageAfter: '/images/antes-despues/Ruta12Ahora.JPG',
    description: 'La principal vía de conexión',
  },
  {
    id: 5,
    title: 'Saltos del Tabay',
    yearBefore: '1980',
    yearAfter: '2024',
    imageBefore: '/images/antes-despues/SaltoAntes.jpg',
    imageAfter: '/images/antes-despues/SaltoAhora.JPG',
    description: 'El tesoro natural de nuestra tierra',
  },

];

const PhotoTransform = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const current = transformations[currentIndex];

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 bg-stone-100" id="explorar">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-md text-earth-900 mb-4">Antes y Ahora</h2>
          <p className="text-body max-w-2xl mx-auto">
            Deslizá para ver la transformación de Jardín América a través de las décadas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Full width) */}
            <div className="absolute inset-0">
              <img
                src={current.imageAfter}
                alt={`${current.title} ${current.yearAfter}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {current.yearAfter}
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={current.imageBefore}
                alt={`${current.title} ${current.yearBefore}`}
                className="w-full h-full object-cover max-w-none"
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-4 left-4 bg-sepia-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                {current.yearBefore}
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <FaChevronLeft className="text-gray-600 text-sm" />
                  <FaChevronRight className="text-gray-600 text-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="mt-6 text-center">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
              {current.title}
            </h3>
            <p className="text-gray-600">{current.description}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver transformación ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Siguiente"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoTransform;
