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
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Project Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <FaCode className="text-2xl text-primary-600" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Prof. Tecnólogo Benitez Marco Antonio
                </h2>
                <p className="text-lg text-gray-600">Coordinación del proyecto</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Impulsor de los proyectos Camino Histórico Cultural y Memoria Viva Jardín América.
            </p>
          </motion.div>

          {/* Institutional Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-2xl text-earth-600" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Municipalidad de Jardín América
                </h2>
                <p className="text-lg text-gray-600">Acompañamiento institucional y documentación</p>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Apoyo institucional:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sr. Intendente Araujo Cesar Daniel</li>
                <li>Dir. de Cultura Gonzalez Arnaldo</li>
                <li>Miembros del Consejo Deliberante</li>
                <li>Dir. de Dirección de Turismo</li>
                <li>Dir. de Dirección de Prensa</li>
              </ul>
            </div>
          </motion.div>

          {/* Community Participation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-sepia-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-2xl text-sepia-600" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Comunidad de Jardín América
                </h2>
                <p className="text-lg text-gray-600">Participación ciudadana</p>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">Vecinos que contribuyeron con historias, recuerdos y testimonios:</p>
              <div className="grid md:grid-cols-2 gap-4 ml-4">
                <div>
                  <p className="font-medium mb-2">Hijos y nietos de Pioneros:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Flia. Benitez</li>
                    <li>Flia. Siveira</li>
                    <li>Flia. Villaverde</li>
                    <li>Flia. Cuenca</li>
                    <li>Flia. Araujo</li>
                    <li>Flia. Mendoza</li>
                    <li>Flia. Arrieta</li>
                    <li>Flia. Hoster</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Contribuciones especiales:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Dir./Docente Moraiz Graciela</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Developer Card - Mantenido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-primary-50 to-earth-50 rounded-2xl shadow-xl p-8 text-center border border-primary-200"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <FaCode className="text-3xl text-primary-600" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              Desarrollo Web
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
