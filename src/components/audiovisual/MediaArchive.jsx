import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilm, FaGlassCheers, FaFutbol, FaGraduationCap, FaPalette, FaPlay, FaTimes, FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import mediaData, { mediaCategories } from '../../data/mediaData';

const categoryIcons = {
  documentales: FaFilm,
  fiestas: FaGlassCheers,
  deportes: FaFutbol,
  educacion: FaGraduationCap,
  cultura: FaPalette,
};

const MediaArchive = () => {
  const [activeCategory, setActiveCategory] = useState('documentales');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentData = mediaData[activeCategory] || [];

  const handleClose = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-earth-900 text-white py-16">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Archivo Audiovisual
          </motion.h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            Documentales, fiestas, deportes, educación y cultura en video
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {mediaCategories.map((cat) => {
              const Icon = categoryIcons[cat.id];
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedVideo(null);
                  }}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container-custom py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {currentData.map((video, index) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedVideo(video);
                    setIsPlaying(false);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="card overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-transform">
                          <FaPlay className="ml-1" size={24} />
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/70 text-white text-sm rounded">
                        <FaClock size={12} />
                        {video.duration}
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-sm rounded-full font-medium">
                        {video.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaUser size={12} />
                          {video.director}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {video.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {currentData.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No hay videos en esta categoría</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl mx-4"
            >
              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={selectedVideo.url}
                  poster={selectedVideo.thumbnail}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Video Info */}
              <div className="bg-white rounded-b-lg p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-gray-600">{selectedVideo.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendar />
                      {selectedVideo.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {selectedVideo.duration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Director:</span>
                  <span className="font-medium text-gray-900">{selectedVideo.director}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedVideo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaArchive;
