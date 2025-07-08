import React from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Shield, Award, Stethoscope } from 'lucide-react';

const Footer = () => {
  const openPrivacyPolicy = () => {
    window.open('/privacy-policy', '_blank');
  };

  const openLegalNotice = () => {
    window.open('/legal-notice', '_blank');
  };

  const openCookiePolicy = () => {
    window.open('/cookie-policy', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 right-10 sm:top-10 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-blue-800 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-5 left-10 sm:bottom-10 sm:left-20 w-28 h-28 sm:w-56 sm:h-56 bg-blue-700 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-32 sm:h-32 bg-blue-600 rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center sm:items-start lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-6 sm:mb-8">
              <img
                src="/logo.png"
                alt="Dra. Mary Carmen Sánchez Moreno"
                className="h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.1))',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-center sm:text-left">
              Más de 35 años de experiencia en Medicina Estética, dedicados a tu bienestar y belleza 
              con la máxima profesionalidad y seguridad. Presidenta de la Sección Colegial de Medicina Estética.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <div className="bg-blue-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="bg-blue-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="bg-blue-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-blue-300" />
              Servicios
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Tratamientos para Acné</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Arrugas de expresión</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Flacidez y deshidratación</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Manchas y ojeras</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Estrías</li>
              <li className="hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg">Consulta personalizada</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-blue-300" />
              Contacto
            </h4>
            <div className="space-y-4 sm:space-y-6 text-gray-300">
              <div className="flex items-center justify-center sm:justify-start hover:text-white transition-colors">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">659 30 21 39</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start hover:text-white transition-colors">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base break-all">dra.carmensanchezmoreno@gmail.com</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start hover:text-white transition-colors">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">
                  Carrer de Lorenç Palmireno, 8<br />
                  Camins al Grau<br />
                  46021 València, Valencia
                </span>
              </div>
              <div className="flex items-start justify-center sm:justify-start hover:text-white transition-colors">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <div className="text-sm sm:text-base lg:text-lg">
                  <div>Lunes-Jueves: 10:00-14:00, 17:00-20:00</div>
                  <div>Viernes: 10:30-14:00</div>
                  <div>Sábado-Domingo: Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="border-t border-gray-700 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm">
              <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-300" />
              <div>
                <div className="font-bold text-lg sm:text-xl lg:text-2xl">35+ Años</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-400">de Experiencia</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-300" />
              <div>
                <div className="font-bold text-lg sm:text-xl lg:text-2xl">Presidenta</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-400">Sección Colegial</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-300" />
              <div>
                <div className="font-bold text-lg sm:text-xl lg:text-2xl">2000+</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-400">Pacientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 sm:pt-12 text-center text-gray-400">
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">&copy; 2024 Clínica Dra. Mary Carmen Sánchez Moreno. Todos los derechos reservados.</p>
          <p className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base lg:text-lg">
            <button 
              onClick={openPrivacyPolicy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="hidden sm:inline text-gray-600">|</span>
            <button 
              onClick={openLegalNotice}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
            <span className="hidden sm:inline text-gray-600">|</span>
            <button 
              onClick={openCookiePolicy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;