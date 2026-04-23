import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaTag, FaEnvelope, FaUser, FaCheckCircle } from 'react-icons/fa';

const ParticipationHub = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [submitted, setSubmitted] = useState(false);

  const tabs = [
    { id: 'story', label: 'Enviar Historia', icon: FaBook },
    { id: 'identify', label: 'Identificar', icon: FaTag },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            Participá
          </motion.h1>
          <p className="text-lg text-primary-100 max-w-2xl">
            Sumá tu historia, fotos o conocimiento sobre Jardín América. Tu aporte enriquece la memoria colectiva.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSubmitted(false);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Forms */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-16">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">¡Gracias!</h3>
              <p className="text-gray-600">Tu aporte fue recibido y será revisado por el equipo.</p>
            </div>
          ) : (
            <div className="card p-8">
              {activeTab === 'story' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Compartir tu Historia</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                    <input type="text" placeholder="Ej: Mis recuerdos de la escuela" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                        <option>Historia escrita</option>
                        <option>Audio</option>
                        <option>Video</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Año del recuerdo</label>
                      <input type="number" placeholder="1965" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tu historia</label>
                    <textarea rows={6} placeholder="Contanos tu historia..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gray-400" />
                      <input type="text" placeholder="Tu nombre" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-400" />
                      <input type="email" placeholder="Tu email" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Enviar historia
                  </button>
                </form>
              )}

              {activeTab === 'identify' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Identificar Personas o Lugares</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código de la foto</label>
                    <input type="text" placeholder="Ej: photo-001" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué identificás?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" className="text-primary-600" />
                        <span>Personas</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" className="text-primary-600" />
                        <span>Lugar exacto</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" className="text-primary-600" />
                        <span>Fecha</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tu identificación</label>
                    <textarea rows={4} placeholder="Ej: En esta foto aparece mi abuelo José Pérez, segundo de izquierda..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correcciones de datos</label>
                    <textarea rows={3} placeholder="Si encontraste un error en la información publicada, contanos..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gray-400" />
                      <input type="text" placeholder="Tu nombre" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-400" />
                      <input type="email" placeholder="Tu email" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Enviar identificación
                  </button>
                </form>
              )}
            </div>
          )}
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Revisión</h3>
            <p className="text-gray-600 text-sm">Todos los aportes son revisados por el equipo antes de publicarse</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-earth-100 text-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTag />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Atribución</h3>
            <p className="text-gray-600 text-sm">Tu nombre aparecerá como fuente del material aportado</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-sepia-100 text-sepia-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBook />
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Preservación</h3>
            <p className="text-gray-600 text-sm">Tu aporte contribuye a preservar la memoria de nuestra comunidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationHub;
