import React from 'react';
import { motion } from 'framer-motion';
import MapContainer from '../components/map/MapContainer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MapPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <MapContainer />
    </motion.div>
  );
};

export default MapPage;
