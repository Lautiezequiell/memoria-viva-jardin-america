import React from 'react';
import { motion } from 'framer-motion';
import MediaArchive from '../components/audiovisual/MediaArchive';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Audiovisual = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <MediaArchive />
    </motion.div>
  );
};

export default Audiovisual;
