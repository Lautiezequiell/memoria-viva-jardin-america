import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkedAlt } from 'react-icons/fa';
import placesData from '../../data/placesData';

const MapPreview = () => {
  const featuredPlaces = placesData.slice(0, 3);

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

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/mapa" className="group block">
                <div className="card bg-white">
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
            </motion.div>
          ))}
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
