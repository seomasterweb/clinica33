import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo Section - Optimizado para móvil */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo-clinica.png"
              alt="Dra. Mary Carmen Sánchez Moreno"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.1))',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end flex-1 ml-6">
            <div className="flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base relative group py-2 px-1"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base relative group py-2 px-1"
              >
                Sobre Mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base relative group py-2 px-1"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base"
              >
                Contacto
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors border border-blue-100 flex-shrink-0"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-blue-900" />
            ) : (
              <Menu className="h-5 w-5 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-100 bg-white/98 backdrop-blur-md rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg hover:bg-blue-50 rounded-lg px-3"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg hover:bg-blue-50 rounded-lg px-3"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg hover:bg-blue-50 rounded-lg px-3"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 text-lg shadow-lg transform hover:-translate-y-0.5 mt-2"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;