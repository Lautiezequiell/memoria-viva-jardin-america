import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import pastVisionData from '../../data/pastVisionData';

const PastVisionPreview = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });
  const [showInstructions, setShowInstructions] = useState(true);
  const previewImage = pastVisionData[selectedImage];

  const handleMouseMove = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevenir que afecte el scroll general
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPosition({ x: Math.min(Math.max(x, 0), 100), y: Math.min(Math.max(y, 0), 100) });
    if (showInstructions) setShowInstructions(false); // Ocultar instrucciones al mover la lupa
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevenir que afecte el scroll general
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setLensPosition({ x: Math.min(Math.max(x, 0), 100), y: Math.min(Math.max(y, 0), 100) });
    if (showInstructions) setShowInstructions(false); // Ocultar instrucciones al mover la lupa
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % pastVisionData.length);
    setLensPosition({ x: 50, y: 50 });
    setShowInstructions(true); // Mostrar instrucciones al cambiar de imagen
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + pastVisionData.length) % pastVisionData.length);
    setLensPosition({ x: 50, y: 50 });
    setShowInstructions(true); // Mostrar instrucciones al cambiar de imagen
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-earth-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 px-4 py-2 rounded-full mb-4">
              <FaEye />
              <span className="font-medium">Pasado a Color</span>
            </div>
            <h2 className="heading-md text-primary-900">Descubrí la historia en color</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Mueva el cursor sobre fotos antiguas en blanco y negro para revelar cómo se ven esos lugares hoy en día.
            </p>
          </div>
          <Link
            to="/vea-a-traves-del-pasado"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Explorar fotos <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Interactive Image with Lens */}
            <div
              className="relative aspect-[4/3] overflow-hidden touch-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setLensPosition({ x: 50, y: 50 })}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setLensPosition({ x: 50, y: 50 })}
              style={{ touchAction: 'none' }}
            >
              {/* Black and White Image */}
              <img
                src={previewImage.blackWhiteImage}
                alt={`${previewImage.title} - Blanco y negro`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Color Image with Lens Effect */}
              <div className="absolute inset-0">
                <img
                  src={previewImage.colorImage}
                  alt={`${previewImage.title} - Color`}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: `circle(60px at ${lensPosition.x}% ${lensPosition.y}%)`,
                  }}
                />
              </div>

              {/* Lens Border */}
              <div
                className="absolute pointer-events-none border-4 border-white rounded-full shadow-2xl"
                style={{
                  width: '120px',
                  height: '120px',
                  left: `${lensPosition.x}%`,
                  top: `${lensPosition.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 0 2px rgba(255,255,255,0.3), 0 0 20px rgba(0,0,0,0.5)',
                }}
              />

              {/* Instructions overlay */}
              {showInstructions && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white bg-black/50 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-4 opacity-75 transition-opacity duration-300">
                    <FaEye className="text-3xl mx-auto mb-2" />
                    <p className="text-sm font-medium">Mueva el cursor para revelar el color</p>
                  </div>
                </div>
              )}
            </div>

            {/* Image Info - Outside the interactive area */}
            <div className="p-6 bg-white">
              <h3 className="font-heading text-2xl font-bold mb-1 text-gray-900">
                {previewImage.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {previewImage.year} • {previewImage.description}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevImage}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors flex items-center gap-2 font-medium text-sm"
            >
              ← Anterior
            </button>
            
            <div className="flex gap-2">
              {pastVisionData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                    setLensPosition({ x: 50, y: 50 });
                    setShowInstructions(true); // Mostrar instrucciones al seleccionar imagen
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImage ? 'bg-primary-700 w-6' : 'bg-primary-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextImage}
              className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors flex items-center gap-2 font-medium text-sm"
            >
              Siguiente →
            </button>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-primary-600 text-2xl" />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Experiencia Interactiva</h3>
            <p className="text-gray-600 text-sm">
              Explore las imágenes con una lupa mágica que revela el presente
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-earth-600 text-2xl" />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Antes y Después</h3>
            <p className="text-gray-600 text-sm">
              Compare el pasado histórico con el presente en color
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sepia-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEye className="text-sepia-600 text-2xl" />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Patrimonio Visual</h3>
            <p className="text-gray-600 text-sm">
              Descubra la evolución de los lugares más emblemáticos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastVisionPreview;
