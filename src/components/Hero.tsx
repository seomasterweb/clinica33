import React from 'react';
import { Calendar, Award, Users, Sparkles, ArrowDown, Star, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-32 overflow-hidden">
      {/* Background Elements - Optimizados para móvil */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-60 h-60 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-10 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-900 font-semibold text-sm sm:text-base lg:text-lg border border-blue-200 shadow-lg">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2 sm:mr-3 animate-pulse" />
                Más de 35 años de experiencia médica
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Bienvenidos a la
                <span className="block bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent animate-gradient">
                  Clínica Dra. Mary Carmen
                </span>
                <span className="block text-blue-900 relative">
                  Sánchez Moreno
                  <div className="absolute -bottom-2 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full opacity-30"></div>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl font-light">
                Especialistas en <span className="font-bold text-blue-900 bg-blue-50 px-2 py-1 rounded-lg">Medicina Estética</span>, 
                Tratamientos para la Obesidad y Antienvejecimiento con resultados excepcionales y seguros.
              </p>
            </div>
            
            {/* Stats Grid - Optimizado para móvil */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
              <div className="group text-center p-3 sm:p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 lg:h-14 lg:w-14 text-blue-900 mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">35+</div>
                <div className="text-xs sm:text-sm lg:text-lg text-gray-600 font-semibold">Años de experiencia</div>
              </div>
              <div className="group text-center p-3 sm:p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 lg:h-14 lg:w-14 text-blue-900 mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">2000+</div>
                <div className="text-xs sm:text-sm lg:text-lg text-gray-600 font-semibold">Pacientes satisfechos</div>
              </div>
              <div className="group text-center p-3 sm:p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-14 lg:w-14 text-blue-900 mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg sm:text-xl lg:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm lg:text-lg text-gray-600 font-semibold">Seguridad garantizada</div>
              </div>
            </div>

            {/* CTA Buttons - Optimizados para móvil */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg lg:text-xl hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-2 sm:mr-3" />
                  Solicita tu cita ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-3 sm:border-4 border-blue-900 text-blue-900 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg lg:text-xl hover:bg-blue-900 hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Conoce más sobre mí</span>
                <div className="absolute inset-0 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>

            {/* Trust Indicators - Optimizados para móvil */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6 lg:pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-semibold text-sm sm:text-base">5.0 • 200+ reseñas</span>
              </div>
              <div className="hidden sm:block h-6 lg:h-8 w-px bg-gray-300"></div>
              <div className="text-gray-600 font-semibold text-center sm:text-left text-sm sm:text-base">Presidenta Sección Colegial</div>
            </div>
          </div>
          
          {/* Image Section - Optimizada para móvil */}
          <div className="relative animate-fade-in-right order-1 lg:order-2">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-blue-600/20 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dra. Mary Carmen Sánchez Moreno - Medicina Estética"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] object-cover transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-transform duration-700 border-2 sm:border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-3 sm:p-4 lg:p-6 xl:p-8 rounded-2xl sm:rounded-3xl shadow-xl border-2 sm:border-4 border-white">
                <div className="text-center">
                  <div className="text-sm sm:text-base lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">Presidenta</div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg">Sección Colegial de</div>
                  <div className="text-xs sm:text-sm lg:text-base xl:text-lg">Medicina Estética</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 bg-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-blue-100">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold text-blue-900">35+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Años de</div>
                  <div className="text-xs lg:text-sm text-gray-600">Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Solo visible en desktop */}
        <div className="hidden lg:block absolute bottom-8 xl:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-900 font-semibold">Descubre más</span>
            <ArrowDown className="h-6 w-6 xl:h-8 xl:w-8 text-blue-900" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;