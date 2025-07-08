import React from 'react';
import { Sparkles, Zap, Droplets, Sun, Scissors, Plus, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Tratamientos para Acné',
      description: 'Soluciones efectivas para el acné juvenil y adulto con las técnicas más avanzadas y personalizadas.',
      features: ['Limpieza profunda especializada', 'Tratamientos personalizados', 'Seguimiento continuo', 'Resultados visibles'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Arrugas de Expresión',
      description: 'Tratamiento de arrugas dinámicas y estáticas con resultados naturales y duraderos.',
      features: ['Toxina botulínica premium', 'Rellenos dérmicos', 'Resultados inmediatos', 'Aspecto natural'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Droplets,
      title: 'Flacidez y Deshidratación',
      description: 'Recupera la firmeza y elasticidad de tu piel con tratamientos no invasivos de última generación.',
      features: ['Radiofrecuencia avanzada', 'Mesoterapia facial', 'Bioestimulación', 'Hidratación profunda'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Manchas y Ojeras',
      description: 'Elimina manchas solares y reduce ojeras para una piel uniforme, luminosa y rejuvenecida.',
      features: ['IPL de última generación', 'Peelings químicos', 'Láser despigmentante', 'Tratamiento integral'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: Scissors,
      title: 'Estrías',
      description: 'Tratamiento integral para reducir y eliminar estrías de diferentes tipos y antigüedad.',
      features: ['Microdermoabrasión', 'Radiofrecuencia fraccionada', 'Factores de crecimiento', 'Resultados progresivos'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Plus,
      title: 'Otros Tratamientos',
      description: 'Consulta por tratamientos adicionales personalizados para tus necesidades específicas.',
      features: ['Evaluación personalizada', 'Protocolos específicos', 'Seguimiento integral', 'Atención exclusiva'],
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 sm:top-40 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 sm:bottom-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-200 rounded-full opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 rounded-full text-blue-900 font-medium text-sm mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Tratamientos especializados
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Nuestros <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Servicios</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En la Clínica Dra. Carmen Sánchez Moreno nos actualizamos constantemente para ofrecer 
            los tratamientos más seguros y efectivos en Medicina Estética. Cada paciente recibe un 
            tratamiento personalizado tras una exhaustiva historia clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-2 sm:hover:-translate-y-4 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 sm:mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{service.description}</p>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 sm:mr-4 flex-shrink-0`}></div>
                      <span className="font-medium text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden text-sm sm:text-base`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Más información
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para transformar tu imagen?
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Agenda tu consulta personalizada y descubre el tratamiento perfecto para ti
              </p>
              <button
                onClick={scrollToContact}
                className="group bg-white text-blue-900 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
              >
                <span className="flex items-center justify-center">
                  Solicita una consulta personalizada
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;