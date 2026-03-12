import React from 'react';
import { motion } from 'framer-motion';
import EducationHub from '../components/education/EducationHub';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Education = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <EducationHub />
    </motion.div>
  );
};

export default Education;
