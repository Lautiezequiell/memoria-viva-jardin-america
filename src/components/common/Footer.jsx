import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Memoria Viva Jardín América
            </h3>
            <p className="text-primary-100 leading-relaxed mb-6 max-w-md">
              Preservando la historia social, cultural e institucional de nuestra comunidad. 
              Un proyecto colaborativo para las generaciones presentes y futuras.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:memoriavivajardinamerica@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/timeline" className="text-primary-100 hover:text-white transition-colors">
                  Línea de Tiempo
                </Link>
              </li>
              <li>
                <Link to="/mapa" className="text-primary-100 hover:text-white transition-colors">
                  Mapa Histórico
                </Link>
              </li>
              <li>
                <Link to="/fototeca" className="text-primary-100 hover:text-white transition-colors">
                  Fototeca
                </Link>
              </li>
              <li>
                <Link to="/historias" className="text-primary-100 hover:text-white transition-colors">
                  Historias de Vecinos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-100">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Jardín América, Misiones, Argentina</span>
              </li>
              <li>
                <a
                  href="mailto:memoriavivajardinamerica@gmail.com"
                  className="flex items-center gap-3 text-primary-100 hover:text-white transition-colors"
                >
                  <FaEnvelope />
                  <span>memoriavivajardinamerica@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-100 text-sm">
            © {currentYear} Memoria Viva Jardín América. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/participa" className="text-primary-100 hover:text-white transition-colors">
              Participá
            </Link>
            <Link to="/creditos" className="text-primary-100 hover:text-white transition-colors">
              Créditos
            </Link>
            <a href="#" className="text-primary-100 hover:text-white transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
