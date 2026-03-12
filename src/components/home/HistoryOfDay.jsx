import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const todayStory = {
  date: '12 de Marzo',
  year: 1953,
  title: 'Fundación del Club Social y Deportivo',
  description: 'Un grupo de vecinos visionarios se reunió en la casa de José González para dar nacimiento al que sería el centro deportivo y social más importante de la comunidad. Con apenas 15 socios fundadores y un terreno donado por la municipalidad, comenzaba la historia de una institución que marcaría generaciones.',
  image: '/assets/images/places/club-1953.jpg',
  author: 'Archivo Club Social',
  location: 'Av. Libertad 890',
  tags: ['deporte', 'fundacion', 'comunidad'],
};

const HistoryOfDay = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-sepia-100 text-sepia-900 px-4 py-2 rounded-full mb-4">
            <FaCalendarAlt />
            <span className="font-medium">Historia del Día</span>
          </div>
          <h2 className="heading-md text-earth-900">Un día como hoy...</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={todayStory.image}
                alt={todayStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-sepia-700 text-white px-4 py-2 rounded-lg font-bold text-lg">
                {todayStory.year}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
                {todayStory.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt />
                  {todayStory.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  {todayStory.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser />
                  {todayStory.author}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {todayStory.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {todayStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="btn-primary mt-4">
                Leer historia completa
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryOfDay;
