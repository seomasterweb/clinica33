import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
            <div className="flex-shrink-0">
              <img
                src="/src/assets/logo_clinica_dra_mary_carmen_sanchez-removebg-preview.png"
                alt="Dra. Mary Carmen Sánchez Moreno"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-blue-900 leading-tight">
                Dra. Mary Carmen Sánchez Moreno
              </h1>
              <p className="text-sm lg:text-base text-gray-600 font-medium">Medicina Estética</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base xl:text-lg"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base xl:text-lg"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors text-base xl:text-lg"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base xl:text-lg"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info - Desktop Only */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center text-gray-600 hover:text-blue-900 transition-colors">
              <Phone className="h-4 w-4 mr-2 text-blue-900" />
              <span className="font-medium text-sm">659 30 21 39</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-blue-900 transition-colors">
              <Mail className="h-4 w-4 mr-2 text-blue-900" />
              <span className="font-medium text-sm">dra.carmensanchezmoreno@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 text-lg"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 text-lg"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 text-lg"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-colors"
              >
                Contacto
              </button>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-900" />
                  <span className="font-medium">659 30 21 39</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-900" />
                  <span className="font-medium text-sm">dra.carmensanchezmoreno@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;