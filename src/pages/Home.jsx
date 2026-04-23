import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import PhotoTransform from '../components/home/PhotoTransform';
import TimelinePreview from '../components/home/TimelinePreview';
import MapPreview from '../components/home/MapPreview';
import StoriesPreview from '../components/home/StoriesPreview';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <PhotoTransform />
      <TimelinePreview />
      <MapPreview />
      <StoriesPreview />
    </motion.div>
  );
};

export default Home;
