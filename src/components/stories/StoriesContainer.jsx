import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeadphones, FaVideo, FaBookOpen, FaPlay, FaPause, FaTimes, FaQuoteLeft } from 'react-icons/fa';
import storiesData, { storyCategories } from '../../data/storiesData';

const typeIcons = {
  audio: FaHeadphones,
  video: FaVideo,
  text: FaBookOpen,
};

const typeLabels = {
  audio: 'Podcast',
  video: 'Video',
  text: 'Historia escrita',
};

const StoriesContainer = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const filteredStories = activeCategory === 'all'
    ? storiesData
    : storiesData.filter((s) => s.type === activeCategory);

  const handleClose = () => {
    setSelectedStory(null);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (selectedStory?.type === 'audio' && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else if (selectedStory?.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Historias de Vecinos
          </motion.h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            Testimonios, entrevistas y anécdotas que dan vida a nuestra historia
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {storyCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, index) => {
              const TypeIcon = typeIcons[story.type];
              return (
                <motion.article
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedStory(story);
                    setIsPlaying(false);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="card h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                        <TypeIcon className="text-primary-600" />
                        {typeLabels[story.type]}
                      </div>

                      {/* Play Button */}
                      {story.type !== 'text' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-600 transform group-hover:scale-110 transition-transform">
                            <FaPlay className="ml-1" size={24} />
                          </div>
                        </div>
                      )}

                      {/* Duration */}
                      {story.duration && (
                        <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-sm rounded">
                          {story.duration}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
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
                        <span className="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Ver más →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No hay historias en esta categoría</p>
          </div>
        )}
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Media Player */}
              {selectedStory.type === 'audio' && (
                <div className="relative h-64 bg-gradient-to-br from-primary-900 to-earth-900 flex items-center justify-center">
                  <img
                    src={selectedStory.thumbnail}
                    alt={selectedStory.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <button
                    onClick={togglePlay}
                    className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-700 hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} className="ml-1" />}
                  </button>
                  <audio
                    ref={audioRef}
                    src={selectedStory.media}
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              )}

              {selectedStory.type === 'video' && (
                <div className="relative aspect-video bg-black">
                  <video
                    ref={videoRef}
                    src={selectedStory.media}
                    poster={selectedStory.thumbnail}
                    className="w-full h-full"
                    onEnded={() => setIsPlaying(false)}
                  />
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary-700 hover:scale-110 transition-transform">
                      {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} className="ml-1" />}
                    </div>
                  </button>
                </div>
              )}

              {selectedStory.type === 'text' && (
                <div className="relative h-48 bg-gradient-to-br from-sepia-100 to-earth-100 flex items-center justify-center">
                  <FaQuoteLeft className="text-6xl text-sepia-300" />
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {React.createElement(typeIcons[selectedStory.type], { className: 'text-primary-600' })}
                      <span className="text-sm text-gray-500">{typeLabels[selectedStory.type]}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
                      {selectedStory.title}
                    </h2>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="font-medium text-gray-900">{selectedStory.author}</span>
                  <span>•</span>
                  <span>{selectedStory.year}</span>
                  {selectedStory.duration && (
                    <>
                      <span>•</span>
                      <span>{selectedStory.duration}</span>
                    </>
                  )}
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedStory.fullText}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                  {selectedStory.tags.map((tag) => (
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

export default StoriesContainer;
