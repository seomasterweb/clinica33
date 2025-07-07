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
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-800 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-blue-700 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-600 rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 mb-8">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-2xl shadow-lg">
                <Stethoscope className="h-12 w-12 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Clínica Dra. Mary Carmen Sánchez Moreno
                </h3>
                <p className="text-blue-200 text-lg lg:text-xl mt-2">Medicina Estética</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg lg:text-xl leading-relaxed">
              Más de 35 años de experiencia en Medicina Estética, dedicados a tu bienestar y belleza 
              con la máxima profesionalidad y seguridad. Presidenta de la Sección Colegial de Medicina Estética.
            </p>
            <div className="flex space-x-6">
              <div className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <Phone className="h-8 w-8" />
              </div>
              <div className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <Mail className="h-8 w-8" />
              </div>
              <div className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-700 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                <MapPin className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center">
              <Heart className="h-6 w-6 mr-3 text-blue-300" />
              Servicios
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Tratamientos para Acné</li>
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Arrugas de expresión</li>
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Flacidez y deshidratación</li>
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Manchas y ojeras</li>
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Estrías</li>
              <li className="hover:text-white transition-colors cursor-pointer text-lg">Consulta personalizada</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center">
              <Phone className="h-6 w-6 mr-3 text-blue-300" />
              Contacto
            </h4>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center hover:text-white transition-colors">
                <Phone className="h-6 w-6 mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-lg">659 30 21 39</span>
              </div>
              <div className="flex items-start hover:text-white transition-colors">
                <Mail className="h-6 w-6 mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-lg break-all">dra.carmensanchezmoreno@gmail.com</span>
              </div>
              <div className="flex items-start hover:text-white transition-colors">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <span className="text-lg">
                  Carrer de Lorenç Palmireno, 8<br />
                  Camins al Grau<br />
                  46021 València, Valencia
                </span>
              </div>
              <div className="flex items-start hover:text-white transition-colors">
                <Clock className="h-6 w-6 mr-4 mt-1 text-blue-300 flex-shrink-0" />
                <div className="text-lg">
                  <div>Lunes-Jueves: 10:00-14:00, 17:00-20:00</div>
                  <div>Viernes: 10:30-14:00</div>
                  <div>Sábado-Domingo: Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Award className="h-12 w-12 text-blue-300" />
              <div>
                <div className="font-bold text-2xl">35+ Años</div>
                <div className="text-lg text-gray-400">de Experiencia</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Shield className="h-12 w-12 text-blue-300" />
              <div>
                <div className="font-bold text-2xl">Presidenta</div>
                <div className="text-lg text-gray-400">Sección Colegial</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Heart className="h-12 w-12 text-blue-300" />
              <div>
                <div className="font-bold text-2xl">2000+</div>
                <div className="text-lg text-gray-400">Pacientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-12 text-center text-gray-400">
          <p className="text-xl mb-6">&copy; 2024 Clínica Dra. Mary Carmen Sánchez Moreno. Todos los derechos reservados.</p>
          <p className="flex flex-wrap justify-center items-center gap-6 text-lg">
            <button 
              onClick={openPrivacyPolicy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={openLegalNotice}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
            <span className="text-gray-600">|</span>
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