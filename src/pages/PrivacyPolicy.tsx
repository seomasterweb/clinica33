import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-blue-900 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <p className="text-lg text-blue-900 font-semibold mb-2">
                Última actualización: Diciembre 2024
              </p>
              <p className="text-gray-700">
                En la Clínica Dra. Carmen Sánchez Moreno, nos comprometemos a proteger y respetar su privacidad.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-900" />
                1. Información que recopilamos
              </h2>
              <p className="text-gray-700 mb-4">
                Recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Solicita una cita o consulta</li>
                <li>Se registra para recibir información sobre nuestros servicios</li>
                <li>Se comunica con nosotros por teléfono, email o WhatsApp</li>
                <li>Visita nuestra clínica para recibir tratamientos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-900" />
                2. Cómo utilizamos su información
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Proporcionar y mejorar nuestros servicios médicos</li>
                <li>Programar y gestionar citas</li>
                <li>Comunicarnos con usted sobre tratamientos y servicios</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Mantener registros médicos seguros y confidenciales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-blue-900" />
                3. Protección de datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acceso no autorizado</li>
                <li>Alteración, divulgación o destrucción</li>
                <li>Pérdida accidental</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sus derechos</h2>
              <p className="text-gray-700 mb-4">
                Bajo el RGPD, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Limitar el procesamiento de sus datos</li>
                <li>Portabilidad de datos</li>
                <li>Oponerse al procesamiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contacto</h2>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4">
                  Para ejercer sus derechos o si tiene preguntas sobre esta política, contáctenos:
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

export default PrivacyPolicy;