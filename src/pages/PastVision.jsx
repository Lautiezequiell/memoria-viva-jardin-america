import React from 'react';
import { motion } from 'framer-motion';
import PastVisionContainer from '../components/past-vision/PastVisionContainer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PastVision = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <PastVisionContainer />
    </motion.div>
  );
};

export default PastVision;
