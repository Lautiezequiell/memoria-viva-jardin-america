import React from 'react';
import { motion } from 'framer-motion';
import TimelineContainer from '../components/timeline/TimelineContainer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const TimelinePage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <TimelineContainer />
    </motion.div>
  );
};

export default TimelinePage;
