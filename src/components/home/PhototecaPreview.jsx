import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCamera, FaImages } from 'react-icons/fa';

const PhototecaPreview = () => {
  // Rutas individuales para cada imagen de preview - puedes personalizar cada una
  const previewImages = [
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1946/1erEdificioMunicipal.jpg', // Imagen 1
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1960/ConstruccionPlazaColon.jpg', // Imagen 2
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1980/contruscción-Polideportivo-1er.jpg', // Imagen 3
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio2000/Aerea02.jpg', // Imagen 4
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1980/TerminaldeOmnibus.jpg', // Imagen 5
    'https://lautiezequiell.github.io/memoria-viva-jardin-america/images/anio1946/ComisionJA.JPG', // Imagen 6
  ];

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
              <FaCamera />
              <span className="font-medium">Fototeca</span>
            </div>
            <h2 className="heading-md text-earth-900">Archivo fotográfico histórico</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Explora nuestra colección de fotografías que documentan la evolución de Jardín América a través del tiempo.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://drive.google.com/drive/folders/1scNPellyi8Np_eE1K7IK8s17Q3rtDC80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <FaImages />
              Ver Fototeca completa
            </a>
            <Link
              to="/fototeca"
              className="inline-flex items-center gap-2 text-earth-700 hover:text-earth-900 transition-colors font-medium px-6 py-3 rounded-lg border border-earth-300 hover:border-earth-400"
            >
              Explorar galería <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
        >
          {previewImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image}
                alt={`Foto histórica ${index + 1} de Jardín América`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaCamera className="text-white text-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-600">Fotografías históricas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-earth-600 mb-2">1940-2026</div>
              <p className="text-gray-600">Años documentados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-sepia-600 mb-2">50+</div>
              <p className="text-gray-600">Colecciones familiares</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-earth-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              ¿Tenés fotos históricas de Jardín América?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Ayudanos a enriquecer el archivo fotográfico compartiendo tus imágenes familiares. Cada foto es una pieza valiosa de nuestra historia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/participa"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <FaCamera />
                Compartir fotos
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1scNPellyi8Np_eE1K7IK8s17Q3rtDC80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary-600 font-medium px-6 py-3 rounded-lg border border-primary-300 transition-colors"
              >
                <FaImages />
                Acceder al Drive
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhototecaPreview;
