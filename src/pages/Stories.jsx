import React from 'react';
import { motion } from 'framer-motion';
import StoriesContainer from '../components/stories/StoriesContainer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Stories = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <StoriesContainer />
    </motion.div>
  );
};

export default Stories;
