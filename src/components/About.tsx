import React from 'react';
import { GraduationCap, Shield, Heart, Star, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-24 h-24 sm:w-48 sm:h-48 bg-blue-200 rounded-full opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 rounded-full text-blue-900 font-medium text-sm sm:text-base">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Profesional de confianza
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Conoce a la
                <span className="block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Dra. Mary Carmen Sánchez Moreno
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                <p>
                  Soy la Dra. Mary Carmen Sánchez Moreno y llevo <span className="font-bold text-blue-900">35 años</span> 
                  dedicándome a la Medicina Estética, el Tratamiento de la Obesidad y el Antienvejecimiento.
                </p>
                <p>
                  Mi objetivo es cuidar de las personas, ayudarlas a mantenerse jóvenes y saludables, 
                  y ofrecer tratamientos de la más alta calidad con la máxima seguridad y profesionalidad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Docente Especializada</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Profesora y directora de Máster en Medicina Estética en Valencia
                </p>
              </div>
              
              <div className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Máxima Seguridad</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Presidenta de la Sección Colegial de Medicina Estética
                </p>
              </div>
              
              <div className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Compromiso Total</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Dedicada al bienestar y salud integral de cada paciente
                </p>
              </div>
              
              <div className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Star className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Excelencia Médica</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Actualización constante en los últimos avances médicos
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Testimonio Profesional</h3>
                    <p className="text-base sm:text-lg font-medium leading-relaxed">
                      "Como Presidenta de la Sección Colegial de Medicina Estética, me aseguro de que cada paciente 
                      reciba el mejor cuidado y seguridad en todos nuestros tratamientos."
                    </p>
                    <p className="text-blue-200 mt-3 sm:mt-4 font-semibold text-sm sm:text-base">— Dra. Mary Carmen Sánchez Moreno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default About;