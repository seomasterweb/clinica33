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
    <header className="bg-white/98 backdrop-blur-md shadow-xl border-b border-blue-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo Section - Perfectly sized and positioned */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Dra. Mary Carmen Sánchez Moreno"
                  className="h-14 lg:h-18 w-auto object-contain max-w-none"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              <div className="hidden sm:block min-w-0 flex-1">
                <h1 className="text-base lg:text-lg xl:text-xl font-bold text-blue-900 leading-tight truncate">
                  Dra. Mary Carmen Sánchez Moreno
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">Medicina Estética</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Perfectly spaced */}
          <nav className="hidden lg:flex items-center justify-end flex-1 ml-8">
            <div className="flex items-center space-x-8 xl:space-x-12">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-3 px-2"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-3 px-2"
              >
                Sobre Mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-3 px-2"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-3 rounded-full font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg whitespace-nowrap"
              >
                Contacto
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-blue-50 transition-colors border border-blue-100 flex-shrink-0"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 border-t border-blue-100 bg-white/98 backdrop-blur-md rounded-b-3xl shadow-2xl">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-900 font-bold transition-colors py-4 text-xl border-b border-blue-50 hover:bg-blue-50 rounded-lg px-4"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-900 font-bold transition-colors py-4 text-xl border-b border-blue-50 hover:bg-blue-50 rounded-lg px-4"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-900 font-bold transition-colors py-4 text-xl border-b border-blue-50 hover:bg-blue-50 rounded-lg px-4"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-5 rounded-2xl font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 text-xl shadow-xl transform hover:-translate-y-1"
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