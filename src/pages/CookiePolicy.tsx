import React from 'react';
import { ArrowLeft, Cookie, Settings, Info, Shield } from 'lucide-react';

const CookiePolicy = () => {
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
            <Cookie className="h-8 w-8 text-blue-900 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Política de Cookies</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
              <p className="text-lg text-blue-900 font-semibold mb-2">
                Última actualización: Diciembre 2024
              </p>
              <p className="text-gray-700">
                Esta política explica cómo utilizamos las cookies en nuestro sitio web.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="h-6 w-6 mr-3 text-blue-900" />
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                Nos ayudan a mejorar su experiencia de navegación y a proporcionar servicios más personalizados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings className="h-6 w-6 mr-3 text-blue-900" />
                2. Tipos de cookies que utilizamos
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies técnicas (necesarias)</h3>
                  <p className="text-gray-700 mb-3">
                    Son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Cookies de sesión</li>
                    <li>Cookies de seguridad</li>
                    <li>Cookies de funcionalidad básica</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies analíticas</h3>
                  <p className="text-gray-700 mb-3">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Google Analytics (si se utiliza)</li>
                    <li>Cookies de rendimiento</li>
                    <li>Cookies de estadísticas de uso</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cookies de terceros</h3>
                  <p className="text-gray-700 mb-3">
                    Cookies establecidas por servicios de terceros que utilizamos en nuestro sitio.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Voiceflow (chat widget)</li>
                    <li>WhatsApp (integración de mensajería)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad de las cookies</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Garantizar el funcionamiento técnico del sitio web</li>
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso del sitio web</li>
                <li>Mejorar nuestros servicios y contenidos</li>
                <li>Proporcionar funcionalidades de chat y contacto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-blue-900" />
                4. Control de cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Puede controlar y/o eliminar las cookies como desee. Para obtener más información, 
                consulte aboutcookies.org. Puede eliminar todas las cookies que ya están en su 
                ordenador y puede configurar la mayoría de navegadores para evitar que se coloquen.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ Importante: Si desactiva las cookies, es posible que algunas funcionalidades 
                  del sitio web no funcionen correctamente.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Configuración del navegador</h2>
              <p className="text-gray-700 mb-4">
                Puede configurar su navegador para rechazar cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chrome:</strong> Configuración {'>'} Privacidad y seguridad {'>'} Cookies</li>
                <li><strong>Firefox:</strong> Opciones {'>'} Privacidad y seguridad {'>'} Cookies</li>
                <li><strong>Safari:</strong> Preferencias {'>'} Privacidad {'>'} Cookies</li>
                <li><strong>Edge:</strong> Configuración {'>'} Privacidad {'>'} Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <p className="text-gray-700 mb-4">
                  Si tiene preguntas sobre nuestra política de cookies, contáctenos:
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

export default CookiePolicy;