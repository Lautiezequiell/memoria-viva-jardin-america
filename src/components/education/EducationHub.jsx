import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaPuzzlePiece, FaFileDownload, FaUsers, FaMapMarked, FaImages, FaVideo, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const educationResources = [
  {
    id: 'kit-1',
    title: 'Kit de Historia Local',
    description: 'Material completo para docentes sobre la historia de Jardín América',
    icon: FaBook,
    items: ['Guía didáctica', 'Línea de tiempo imprimible', 'Mapa histórico', 'Fichas de personajes'],
    color: 'primary',
  },
  {
    id: 'kit-2',
    title: 'Actividades Interactivas',
    description: 'Juegos y actividades para el aula sobre nuestra historia',
    icon: FaPuzzlePiece,
    items: ['Crucigrama histórico', 'Sopa de letras', 'Juego de memoria', 'Quiz interactivo'],
    color: 'earth',
  },
  {
    id: 'kit-3',
    title: 'Recursos Multimedia',
    description: 'Videos y audios seleccionados para proyectar en clase',
    icon: FaVideo,
    items: ['Videos cortos', 'Testimonios audio', 'Presentación PowerPoint', 'Imágenes de alta resolución'],
    color: 'sepia',
  },
];

const activities = [
  {
    title: 'Exploradores del Pasado',
    grade: 'Primaria - 4° a 6°',
    duration: '2 horas',
    description: 'Los alumnos exploran el mapa histórico y descubren lugares emblemáticos de su ciudad.',
    skills: ['Geografía', 'Historia local', 'Trabajo en equipo'],
  },
  {
    title: 'Entrevistamos a Nuestros Abuelos',
    grade: 'Secundaria - 1° a 3°',
    duration: '4 horas (2 encuentros)',
    description: 'Proyecto de entrevistas orales donde los estudiantes registran testimonios familiares.',
    skills: ['Comunicación oral', 'Registro histórico', 'Empatía'],
  },
  {
    title: 'Cronistas del Barrio',
    grade: 'Secundaria - todos los años',
    duration: '6 horas (3 encuentros)',
    description: 'Creación de una crónica periodística sobre un evento histórico local.',
    skills: ['Redacción', 'Investigación', 'Pensamiento crítico'],
  },
  {
    title: 'Arqueólogos Urbanos',
    grade: 'Primaria - todos los años',
    duration: '1 hora 30 min',
    description: 'Recorrida virtual por la fototeca comparando antes y ahora.',
    skills: ['Observación', 'Comparación', 'Patrimonio'],
  },
];

const EducationHub = () => {
  const [activeTab, setActiveTab] = useState('resources');

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 to-earth-900 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <FaGraduationCap size={24} />
            </div>
            <span className="text-primary-100 font-medium">Recursos Educativos</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Modo Escuela
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-100 max-w-2xl"
          >
            Material educativo sobre historia local para docentes y estudiantes de Jardín América
          </motion.p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'resources'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Recursos para Docentes
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'activities'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Actividades para el Aula
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Teacher Kits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {educationResources.map((kit, index) => {
                const Icon = kit.icon;
                const colorClasses = {
                  primary: 'bg-primary-50 border-primary-200',
                  earth: 'bg-earth-50 border-earth-200',
                  sepia: 'bg-sepia-50 border-sepia-200',
                }[kit.color];

                return (
                  <motion.div
                    key={kit.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`card p-6 ${colorClasses}`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      kit.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                      kit.color === 'earth' ? 'bg-earth-100 text-earth-600' :
                      'bg-sepia-100 text-sepia-600'
                    }`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {kit.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{kit.description}</p>
                    <ul className="space-y-2 mb-6">
                      {kit.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <FaCheckCircle size={14} className="text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-current rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      <FaFileDownload />
                      Descargar kit
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Access */}
            <div className="bg-gradient-to-r from-primary-900 to-earth-900 rounded-2xl p-8 text-white">
              <h2 className="font-heading text-2xl font-bold mb-6">Accesos Rápidos para el Aula</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/timeline" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaBook />
                  </div>
                  <div>
                    <p className="font-medium">Línea de Tiempo</p>
                    <p className="text-sm text-white/70">Explorar historia</p>
                  </div>
                </a>
                <a href="/mapa" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaMapMarked />
                  </div>
                  <div>
                    <p className="font-medium">Mapa Histórico</p>
                    <p className="text-sm text-white/70">Lugares con historia</p>
                  </div>
                </a>
                <a href="/fototeca" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaImages />
                  </div>
                  <div>
                    <p className="font-medium">Fototeca</p>
                    <p className="text-sm text-white/70">Imágenes históricas</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'activities' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-2">
                        {activity.grade}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {activity.title}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500">{activity.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
                    Ver planificación <FaArrowRight />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Teacher Resources Banner */}
            <div className="mt-12 p-8 bg-earth-50 rounded-2xl border border-earth-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-earth-100 text-earth-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers size={32} />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    ¿Sos docente de Jardín América?
                  </h3>
                  <p className="text-gray-600">
                    Contactanos para acceder a material exclusivo, visitas guiadas virtuales y capacitaciones.
                  </p>
                </div>
                <button className="btn-primary flex-shrink-0">
                  Contactar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EducationHub;
