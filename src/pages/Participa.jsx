import React from 'react';
import { motion } from 'framer-motion';
import ParticipationHub from '../components/participation/ParticipationHub';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Participa = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <ParticipationHub />
    </motion.div>
  );
};

export default Participa;
