import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeadphones, FaBookOpen } from 'react-icons/fa';
import storiesData from '../../data/storiesData';

const typeIcons = {
  audio: FaHeadphones,
  text: FaBookOpen,
};

const typeLabels = {
  audio: 'Audio',
  text: 'Historia',
};

const StoriesPreview = () => {
  const featuredStories = storiesData.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-sepia-100 text-sepia-900 px-4 py-2 rounded-full mb-4">
              <FaHeadphones />
              <span className="font-medium">Historias de Vecinos</span>
            </div>
            <h2 className="heading-md text-earth-900">Voces de nuestra comunidad</h2>
          </div>
          <Link
            to="/historias"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-earth-700 hover:text-earth-900 transition-colors font-medium"
          >
            Ver todas las historias <FaArrowRight />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredStories.map((story, index) => {
            const TypeIcon = typeIcons[story.type];
            return (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to="/historias" className="group block h-full">
                  <div className="card h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium flex items-center gap-1">
                          <TypeIcon className="text-xs" />
                          {typeLabels[story.type]}
                        </span>
                        {story.duration && (
                          <span className="px-2 py-1 bg-black/70 text-white rounded text-xs">
                            {story.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                        {story.summary}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{story.author}</p>
                          <p className="text-xs text-gray-500">{story.year}</p>
                        </div>
                        <span className="text-primary-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Escuchar <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-earth-100 to-sepia-100 rounded-2xl p-8 md:p-12">
            <h3 className="font-heading text-2xl font-bold text-earth-900 mb-4">
              ¿Tenés una historia que contar?
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Tu testimonio puede formar parte de la memoria colectiva de Jardín América.
              Compartí tus recuerdos, fotos o anécdotas.
            </p>
            <Link
              to="/participa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-earth-700 text-white font-semibold rounded-full hover:bg-earth-800 transition-colors"
            >
              Compartir mi historia
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoriesPreview;
