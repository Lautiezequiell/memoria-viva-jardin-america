import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import timelineData from '../../data/timelineData';

const TimelinePreview = () => {
  const featuredDecades = timelineData.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <FaClock />
              <span className="font-medium">Línea de Tiempo</span>
            </div>
            <h2 className="heading-md text-white">Viajá a través del tiempo</h2>
          </div>
          <Link
            to="/timeline"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors font-medium"
          >
            Ver timeline completo <FaArrowRight />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDecades.map((decade, index) => (
            <motion.div
              key={decade.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/timeline" className="group block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={decade.image}
                    alt={decade.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-5xl font-heading font-bold text-white/90">
                      {decade.decade === 'Ahora' ? decade.decade : `${decade.decade}s`}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{decade.title}</h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">
                      {decade.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-primary-300 text-sm font-medium">
                      {decade.events.length} eventos
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelinePreview;
