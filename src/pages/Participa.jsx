import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Participa = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-primary-50 to-earth-50 py-20"
    >
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium mb-8">
          <FaArrowLeft /> Volver al inicio
        </Link>
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Participá
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 mb-8"
          >
            ¿Tenés fotos, historias o documentos históricos de Jardín América? ¡Compartilos con nosotros y ayudá a construir la memoria colectiva!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <FaEnvelope className="text-6xl text-primary-600 mx-auto mb-6" />
            <p className="text-gray-700 mb-6">
              Completá el formulario con tus fotos, historias o documentos. Tu aporte es fundamental para preservar nuestra historia.
            </p>
            <a
              href="https://forms.gle/DZuCMCuUuQNZpzZT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <FaEnvelope />
              Completar formulario
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Participa;
