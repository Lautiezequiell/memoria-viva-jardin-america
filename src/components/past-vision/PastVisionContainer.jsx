import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExpand, FaCompress } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pastVisionData from '../../data/pastVisionData';

const PastVisionContainer = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 50, y: 50 });

  const currentImage = pastVisionData[selectedImage];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPosition({ x: Math.min(Math.max(x, 0), 100), y: Math.min(Math.max(y, 0), 100) });
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    setLensPosition({ x: Math.min(Math.max(x, 0), 100), y: Math.min(Math.max(y, 0), 100) });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % pastVisionData.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + pastVisionData.length) % pastVisionData.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium mb-8">
            <FaArrowLeft /> Volver al inicio
          </Link>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Vea a través del pasado
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mueve el cursor sobre las imágenes en blanco y negro para descubrir cómo se ven hoy en color
          </p>
        </motion.div>

        {/* Main Image Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'max-w-4xl mx-auto'}`}
        >
          {/* Image Container */}
          <div
            className={`relative overflow-hidden rounded-2xl ${isFullscreen ? 'h-full' : 'aspect-[4/3]'}`}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseLeave={() => setLensPosition({ x: 50, y: 50 })}
          >
            {/* Black and White Image */}
            <img
              src={currentImage.blackWhiteImage}
              alt={`${currentImage.title} - Blanco y negro`}
              className="w-full h-full object-cover"
            />
            
            {/* Color Image with Lens Effect */}
            <div className="absolute inset-0">
              <img
                src={currentImage.colorImage}
                alt={`${currentImage.title} - Color`}
                className="w-full h-full object-cover"
                style={{
                  clipPath: `circle(${isFullscreen ? '150px' : '80px'} at ${lensPosition.x}% ${lensPosition.y}%)`,
                }}
              />
            </div>

            {/* Lens Border */}
            <div
              className="absolute pointer-events-none border-4 border-white rounded-full shadow-2xl"
              style={{
                width: isFullscreen ? '300px' : '160px',
                height: isFullscreen ? '300px' : '160px',
                left: `${lensPosition.x}%`,
                top: `${lensPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 0 2px rgba(255,255,255,0.3), 0 0 20px rgba(0,0,0,0.5)',
              }}
            />
          </div>

          {/* Image Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl"
          >
            <h2 className="font-heading text-3xl font-bold mb-2">{currentImage.title}</h2>
            <p className="text-gray-300 mb-1">{currentImage.year}</p>
            <p className="text-gray-400">{currentImage.description}</p>
          </motion.div>

          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
          <button
            onClick={prevImage}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            ← Anterior
          </button>
          
          <div className="flex gap-2">
            {pastVisionData.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextImage}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            Siguiente →
          </button>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="font-heading text-xl font-bold mb-3">¿Cómo funciona?</h3>
            <p className="text-gray-300 mb-2">
              Mueve tu cursor sobre la imagen en blanco y negro para revelar la versión a color a través de una lupa mágica.
            </p>
            <p className="text-gray-400 text-sm">
              Usa las flechas o los puntos para navegar entre diferentes imágenes históricas.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PastVisionContainer;
