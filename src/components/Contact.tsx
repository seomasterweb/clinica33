import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageCircle, Calendar, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🏥 *SOLICITUD DE CITA - CLÍNICA DRA. CARMEN SÁNCHEZ MORENO*

👤 *Datos del paciente:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Tratamiento de interés: ${formData.treatment || 'Consulta general'}

💬 *Mensaje:*
${formData.message || 'Solicito información sobre los servicios disponibles'}

✨ Gracias por su atención. Espero su respuesta para coordinar la cita.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/34659302139?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300 rounded-full opacity-5 animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-900 font-bold text-lg mb-8 border border-blue-200 shadow-lg">
            <Calendar className="h-6 w-6 mr-3" />
            Agenda tu cita personalizada
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-10 leading-tight">
            Solicita tu <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Cita</span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Agenda tu consulta personalizada y comienza tu camino 
            hacia el bienestar y la belleza que mereces con la confianza de más de 35 años de experiencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
                <MessageCircle className="h-10 w-10 text-blue-900 mr-4" />
                Información de contacto
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-2xl mb-2">Teléfono</h4>
                    <p className="text-blue-900 font-bold text-2xl">659 30 21 39</p>
                    <p className="text-gray-600 text-lg">Atención personalizada</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-2xl mb-2">Email</h4>
                    <p className="text-blue-900 font-bold text-xl">dra.carmensanchezmoreno@gmail.com</p>
                    <p className="text-gray-600 text-lg">Respuesta en 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-2xl mb-2">Dirección</h4>
                    <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                      Carrer de Lorenç Palmireno, 8<br />
                      Camins al Grau<br />
                      46021 València, Valencia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-5 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-2xl mb-4">Horarios de atención</h4>
                    <div className="space-y-2 text-gray-700 font-medium text-lg">
                      <div className="flex justify-between">
                        <span>Lunes:</span>
                        <span>10:00-14:00, 17:00-20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Martes:</span>
                        <span>10:00-14:00, 17:00-20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miércoles:</span>
                        <span>10:00-14:00, 17:00-20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jueves:</span>
                        <span>10:00-14:00, 17:00-20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Viernes:</span>
                        <span>10:30-14:00</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Sábado:</span>
                        <span>Cerrado</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Domingo:</span>
                        <span>Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <Sparkles className="h-8 w-8 mr-4" />
                  ¿Por qué elegirnos?
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-center text-xl">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-6"></div>
                    Más de 35 años de experiencia médica
                  </li>
                  <li className="flex items-center text-xl">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-6"></div>
                    Tratamientos 100% personalizados
                  </li>
                  <li className="flex items-center text-xl">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-6"></div>
                    Tecnología médica de vanguardia
                  </li>
                  <li className="flex items-center text-xl">
                    <div className="w-4 h-4 bg-blue-300 rounded-full mr-6"></div>
                    Máxima seguridad y calidad garantizada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
              <User className="h-10 w-10 text-blue-900 mr-4" />
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-4">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-8 py-5 border-3 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-xl"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-4">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-8 py-5 border-3 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-xl"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-gray-700 mb-4">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-8 py-5 border-3 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-xl"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                
                <div>
                  <label htmlFor="treatment" className="block text-lg font-bold text-gray-700 mb-4">
                    Tratamiento de interés
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full px-8 py-5 border-3 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-xl"
                  >
                    <option value="">Selecciona un tratamiento</option>
                    <option value="Tratamientos para Acné">Tratamientos para Acné</option>
                    <option value="Arrugas de expresión">Arrugas de expresión</option>
                    <option value="Flacidez y deshidratación">Flacidez y deshidratación</option>
                    <option value="Manchas y ojeras">Manchas y ojeras</option>
                    <option value="Estrías">Estrías</option>
                    <option value="Consulta general">Consulta general</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-4">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 border-3 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-xl resize-none"
                  placeholder="Cuéntanos sobre tus necesidades o preguntas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 px-10 rounded-3xl font-bold text-2xl hover:from-blue-800 hover:to-blue-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="h-8 w-8 mr-4 group-hover:translate-x-2 transition-transform duration-300" />
                  Enviar mensaje por WhatsApp
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
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

export default Contact;