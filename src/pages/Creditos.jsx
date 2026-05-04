import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCode, FaHeart, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Creditos = () => {
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium transition-colors"
          >
            <FaArrowLeft />
            Volver al inicio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Créditos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Memoria Viva Jardín América es un proyecto colaborativo que honra la historia de nuestra comunidad
          </p>
        </motion.div>

        {/* Credits Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCode className="text-3xl text-primary-600" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              Desarrollo
            </h2>
            <p className="text-lg text-gray-700 font-medium mb-2">
              Lautaro Ezequiel Guerrero
            </p>
            <p className="text-gray-600 mb-6">
              Desarrollador frontend especializado en crear experiencias digitales inmersivas para la preservación histórica.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <a
                href="https://www.instagram.com/lautaro_guerrero_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Lautiezequiell"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lautaro-ezequiel-guerrero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Mentor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeart className="text-3xl text-earth-600" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              Agradecimientos
            </h2>
            <p className="text-gray-600 italic">
              Agradecimientos especiales a mi mentor por el acompañamiento, guía y apoyo constante en el desarrollo de este proyecto.
            </p>
          </motion.div>
        </div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
              Sobre el Proyecto
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Memoria Viva Jardín América es una iniciativa digital para preservar y compartir la historia de nuestra comunidad, 
              documentando los momentos que nos definen como pueblo. A través de fotografías, relatos y testimonios, 
              buscamos mantener viva la memoria colectiva de Jardín América para las generaciones presentes y futuras.
            </p>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Memoria Viva Jardín América. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Creditos;
