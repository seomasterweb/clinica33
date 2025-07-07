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
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 lg:pt-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-10 animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-l from-blue-200 to-blue-300 rounded-full opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-900 font-bold text-lg border border-blue-200 shadow-lg">
                <Sparkles className="h-6 w-6 mr-3 animate-pulse" />
                Más de 35 años de experiencia médica
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Bienvenidos a la
                <span className="block bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent animate-gradient">
                  Clínica Dra. Mary Carmen
                </span>
                <span className="block text-blue-900 relative">
                  Sánchez Moreno
                  <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full opacity-30"></div>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-3xl font-light">
                Especialistas en <span className="font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-lg">Medicina Estética</span>, 
                Tratamientos para la Obesidad y Antienvejecimiento con resultados excepcionales y seguros.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="group text-center p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <Award className="h-10 lg:h-14 w-10 lg:w-14 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl lg:text-4xl font-bold text-blue-900 mb-2">35+</div>
                <div className="text-sm lg:text-lg text-gray-600 font-semibold">Años de experiencia</div>
              </div>
              <div className="group text-center p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <Users className="h-10 lg:h-14 w-10 lg:w-14 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl lg:text-4xl font-bold text-blue-900 mb-2">2000+</div>
                <div className="text-sm lg:text-lg text-gray-600 font-semibold">Pacientes satisfechos</div>
              </div>
              <div className="group text-center p-4 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <Shield className="h-10 lg:h-14 w-10 lg:w-14 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl lg:text-4xl font-bold text-blue-900 mb-2">100%</div>
                <div className="text-sm lg:text-lg text-gray-600 font-semibold">Seguridad garantizada</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-3xl font-bold text-lg lg:text-xl hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="h-6 lg:h-7 w-6 lg:w-7 mr-3" />
                  Solicita tu cita ahora
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-4 border-blue-900 text-blue-900 px-8 lg:px-12 py-4 lg:py-6 rounded-3xl font-bold text-lg lg:text-xl hover:bg-blue-900 hover:text-white transition-all duration-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Conoce más sobre mí</span>
                <div className="absolute inset-0 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-semibold">5.0 • 200+ reseñas</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
              <div className="text-gray-600 font-semibold text-center sm:text-left">Presidenta Sección Colegial</div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-blue-600/20 rounded-3xl transform rotate-6 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dra. Mary Carmen Sánchez Moreno - Medicina Estética"
                className="relative rounded-3xl shadow-3xl w-full h-[600px] lg:h-[700px] object-cover transform -rotate-6 hover:rotate-0 transition-transform duration-700 border-4 border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 lg:p-8 rounded-3xl shadow-2xl border-4 border-white">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-2">Presidenta</div>
                  <div className="text-base lg:text-lg">Sección Colegial de</div>
                  <div className="text-base lg:text-lg">Medicina Estética</div>
                </div>
              </div>
              <div className="absolute -top-8 -left-8 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-blue-100">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-900">35+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Años de</div>
                  <div className="text-xs lg:text-sm text-gray-600">Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-900 font-semibold">Descubre más</span>
            <ArrowDown className="h-8 w-8 text-blue-900" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
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
          animation: fade-in-up 1.2s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1.2s ease-out 0.4s both;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;