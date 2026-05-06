import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import pastVisionData from '../../data/pastVisionData';

const PastVisionPreview = () => {
  const previewImage = pastVisionData[0]; // Mostrar la primera imagen como preview

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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Preview Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={previewImage.blackWhiteImage}
                alt={`${previewImage.title} - Vista previa`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Preview hint */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaEye className="text-4xl mx-auto mb-2" />
                  <p className="text-lg font-medium">Mueva el cursor para revelar el color</p>
                </div>
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-heading text-2xl font-bold mb-1">
                {previewImage.title}
              </h3>
              <p className="text-white/80 text-sm">
                {previewImage.year} • {previewImage.description}
              </p>
            </div>
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
