import React from 'react';
import { Star, Quote, Heart, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María García',
      age: '45 años',
      treatment: 'Tratamiento antienvejecimiento',
      text: 'La Dra. Carmen es excepcional. Su profesionalidad y cariño hacen que te sientas en las mejores manos. Los resultados han superado mis expectativas completamente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana López',
      age: '38 años',
      treatment: 'Tratamiento de manchas',
      text: 'Después de años luchando con las manchas en mi rostro, finalmente encontré la solución. La Dra. Carmen es una verdadera profesional con resultados increíbles.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carmen Ruiz',
      age: '52 años',
      treatment: 'Tratamiento integral',
      text: 'La experiencia y conocimiento de la Dra. Carmen se nota en cada consulta. Me siento renovada y con mucha más confianza en mí misma. ¡Recomendable 100%!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Isabel Martín',
      age: '41 años',
      treatment: 'Tratamiento de acné',
      text: 'Increíble transformación en mi piel. La Dra. Carmen no solo trata, sino que educa y acompaña en todo el proceso. Su dedicación es admirable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lucía Fernández',
      age: '35 años',
      treatment: 'Tratamiento de estrías',
      text: 'Resultados que no esperaba conseguir. La atención personalizada y el seguimiento continuo hacen la diferencia. Una profesional excepcional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Patricia Sánchez',
      age: '48 años',
      treatment: 'Tratamiento facial integral',
      text: 'La clínica es un oasis de profesionalidad y calidez. Cada visita es una experiencia única. Los resultados hablan por sí solos.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-900 font-medium text-sm mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Testimonios reales
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">pacientes</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros pacientes es nuestro mayor orgullo. 
            Descubre sus experiencias transformadoras con nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-4 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Quote className="h-12 w-12 text-blue-900 opacity-20 absolute top-6 right-6 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mr-6 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-900 p-2 rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.age}</p>
                    <p className="text-blue-900 font-semibold text-sm">{testimonial.treatment}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Quieres ser el siguiente en compartir tu experiencia?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Únete a cientos de pacientes satisfechos que han confiado en nuestra experiencia y profesionalidad
              </p>
              <button
                onClick={scrollToContact}
                className="group bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
              >
                <span className="flex items-center justify-center">
                  Agenda tu consulta ahora
                  <Heart className="h-6 w-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;