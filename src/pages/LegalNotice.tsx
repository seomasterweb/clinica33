import React from 'react';
import { ArrowLeft, Scale, Building, FileText, Phone } from 'lucide-react';

const LegalNotice = () => {
  const goBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-12">
          <div className="flex items-center mb-8">
            <button
              onClick={goBack}
              className="flex items-center text-blue-900 hover:text-blue-700 transition-colors mr-6"
            >
              <ArrowLeft className="h-6 w-6 mr-2" />
              Volver
            </button>
            <Scale className="h-8 w-8 text-blue-900 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Aviso Legal</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Building className="h-6 w-6 mr-3 text-blue-900" />
                1. Datos identificativos
              </h2>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Titular:</strong> Dra. Carmen Sánchez Moreno</p>
                  <p><strong>Actividad:</strong> Medicina Estética</p>
                  <p><strong>Dirección:</strong> Carrer de Lorenç Palmireno, 8, Camins al Grau, 46021 València, Valencia</p>
                  <p><strong>Teléfono:</strong> 659 30 21 39</p>
                  <p><strong>Email:</strong> dra.carmensanchezmoreno@gmail.com</p>
                  <p><strong>Colegio Profesional:</strong> Colegio de Médicos de Valencia</p>
                  <p><strong>Número de Colegiado:</strong> [Número de colegiación]</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-900" />
                2. Objeto
              </h2>
              <p className="text-gray-700 mb-4">
                El presente aviso legal regula el uso del sitio web de la Clínica Dra. Carmen Sánchez Moreno, 
                que el propietario pone a disposición de los usuarios de Internet.
              </p>
              <p className="text-gray-700">
                La utilización del sitio web implica la aceptación plena y sin reservas de las disposiciones 
                incluidas en este Aviso Legal en la versión publicada por el propietario en el momento mismo 
                en que el usuario acceda al mismo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de uso</h2>
              <p className="text-gray-700 mb-4">
                El acceso y uso de este sitio web se rige por las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>El uso del sitio web es gratuito</li>
                <li>El acceso al sitio web es responsabilidad exclusiva de los usuarios</li>
                <li>Queda prohibido el uso del sitio web con fines ilícitos o no autorizados</li>
                <li>Los usuarios se comprometen a no dañar, inutilizar o sobrecargar el sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                La Dra. Carmen Sánchez Moreno no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>La continuidad y disponibilidad de los servicios</li>
                <li>La ausencia de errores en el sitio web</li>
                <li>La ausencia de virus y/o demás componentes dañinos</li>
                <li>Los daños o perjuicios causados por terceros mediante intromisiones ilegítimas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, 
                iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen 
                una obra cuya propiedad pertenece a la Dra. Carmen Sánchez Moreno.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Legislación aplicable</h2>
              <p className="text-gray-700">
                El presente Aviso Legal se rige por la legislación española. Para la resolución de 
                cualquier controversia las partes se someterán a los Juzgados y Tribunales de Valencia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="h-6 w-6 mr-3 text-blue-900" />
                7. Contacto
              </h2>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4">
                  Para cualquier consulta relacionada con este aviso legal, puede contactarnos:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> dra.carmensanchezmoreno@gmail.com</p>
                  <p><strong>Teléfono:</strong> 659 30 21 39</p>
                  <p><strong>Dirección:</strong> Carrer de Lorenç Palmireno, 8, Camins al Grau, 46021 València</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;