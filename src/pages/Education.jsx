import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="min-h-screen pt-20">
        <div className="bg-gradient-to-r from-primary-900 to-earth-900 text-white py-16">
          <div className="container-custom">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              Escuela
            </motion.h1>
          </div>
        </div>
        
        <div className="container-custom py-16">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-300 mb-4">SITIO EN CONSTRUCCIÓN</div>
            <p className="text-gray-600 text-lg">Próximamente podrás acceder a nuestros recursos educativos históricos.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
