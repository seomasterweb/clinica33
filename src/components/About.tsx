import React from 'react';
import { GraduationCap, Shield, Heart, Star, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 font-medium text-sm">
                <Award className="h-4 w-4 mr-2" />
                Profesional de confianza
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conoce a la
                <span className="block bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Dra. Mary Carmen Sánchez Moreno
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <GraduationCap className="h-12 w-12 text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Docente Especializada</h3>
                <p className="text-gray-600">
                  Profesora y directora de Máster en Medicina Estética en Valencia
                </p>
              </div>
              
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Shield className="h-12 w-12 text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Máxima Seguridad</h3>
                <p className="text-gray-600">
                  Presidenta de la Sección Colegial de Medicina Estética
                </p>
              </div>
              
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="h-12 w-12 text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Compromiso Total</h3>
                <p className="text-gray-600">
                  Dedicada al bienestar y salud integral de cada paciente
                </p>
              </div>
              
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Star className="h-12 w-12 text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Excelencia Médica</h3>
                <p className="text-gray-600">
                  Actualización constante en los últimos avances médicos
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Testimonio Profesional</h3>
                    <p className="text-lg font-medium leading-relaxed">
                      "Como Presidenta de la Sección Colegial de Medicina Estética, me aseguro de que cada paciente 
                      reciba el mejor cuidado y seguridad en todos nuestros tratamientos."
                    </p>
                    <p className="text-blue-200 mt-4 font-semibold">— Dra. Mary Carmen Sánchez Moreno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-3xl transform rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Consulta médica profesional"
              className="relative rounded-3xl shadow-3xl w-full h-[700px] object-cover transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">35+</div>
                <div className="text-sm text-gray-600">Años de</div>
                <div className="text-sm text-gray-600">Experiencia</div>
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