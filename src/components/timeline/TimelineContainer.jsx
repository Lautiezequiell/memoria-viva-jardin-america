import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaImage, FaVideo, FaMusic } from 'react-icons/fa';
import timelineData from '../../data/timelineData';

const typeIcons = {
  photo: FaImage,
  video: FaVideo,
  audio: FaMusic,
  compare: FaImage,
};

const TimelineContainer = () => {
  const [activeDecade, setActiveDecade] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentDecade = timelineData[activeDecade];

  const nextDecade = () => {
    if (activeDecade < timelineData.length - 1) {
      setActiveDecade(prev => prev + 1);
      setSelectedEvent(null);
    }
  };

  const prevDecade = () => {
    if (activeDecade > 0) {
      setActiveDecade(prev => prev - 1);
      setSelectedEvent(null);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-earth-900 text-white py-16">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-lg mb-4"
          >
            Línea de Tiempo
          </motion.h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            Explorá la historia de Jardín América década por década.
          </p>
        </div>
      </div>

      {/* Decade Navigation */}
      <div className="bg-stone-100 border-b border-stone-200 sticky top-20 z-30">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {timelineData.map((decade, index) => (
              <button
                key={decade.id}
                onClick={() => {
                  setActiveDecade(index);
                  setSelectedEvent(null);
                }}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-heading font-bold text-lg transition-all ${
                  index === activeDecade
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {decade.decade === 'Ahora' ? decade.decade : `${decade.decade}s`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decade Content */}
      <div className="container-custom py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDecade.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decade Hero */}
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
              <img
                src={currentDecade.image}
                alt={currentDecade.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="text-6xl md:text-8xl font-heading font-bold text-white/20">
                  {currentDecade.decade}s
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white -mt-8 mb-2">
                  {currentDecade.title}
                </h2>
                <p className="text-white/80 text-lg max-w-2xl">
                  {currentDecade.description}
                </p>
              </div>
            </div>

            {/* Events Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200" />

              {/* Events */}
              <div className="space-y-8">
                {currentDecade.events.map((event, index) => {
                  const TypeIcon = typeIcons[event.type];
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-start gap-8 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md z-10" />

                      {/* Content */}
                      <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                      }`}>
                        <button
                          onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                          className="w-full text-left"
                        >
                          <div className="card p-6 hover:shadow-xl transition-all">
                            {/* Imagen informativa */}
                            {event.media && (
                              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                <img
                                  src={Array.isArray(event.media) ? event.media[0] : event.media.before || event.media}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className={`flex items-center gap-3 mb-3 ${
                              isEven ? 'md:justify-end' : ''
                            }`}>
                              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-bold">
                                {event.year}
                              </span>
                              <span className="flex items-center gap-1 text-gray-500 text-sm">
                                <TypeIcon />
                                {event.type === 'compare' ? 'Comparación' : event.type}
                              </span>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {event.description}
                            </p>
                            {/* Botón de acceso */}
                            <a
                              href="#"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                // Aquí puedes agregar la URL que desees
                                window.open('https://ejemplo.com', '_blank');
                              }}
                            >
                              Ver más información
                            </a>
                          </div>
                        </button>

                        {/* Expanded Event Details */}
                        <AnimatePresence>
                          {selectedEvent === event.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 overflow-hidden"
                            >
                              <div className="card p-6 bg-stone-50">
                                <p className="text-gray-700 mb-4">
                                  {event.description}
                                </p>
                                {event.media && (
                                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                    <img
                                      src={Array.isArray(event.media) ? event.media[0] : event.media.before || event.media}
                                      alt={event.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                                <div className="flex flex-wrap gap-2">
                                  {event.tags?.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-white text-gray-600 rounded text-xs">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                                {event.sources && (
                                  <p className="text-xs text-gray-500 mt-3">
                                    Fuente: {event.sources.join(', ')}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevDecade}
                disabled={activeDecade === 0}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextDecade}
                disabled={activeDecade === timelineData.length - 1}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineContainer;
