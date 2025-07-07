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
          {/* Logo Section - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/src/assets/logo_clinica_dra_mary_carmen_sanchez-removebg-preview.png"
              alt="Dra. Mary Carmen Sánchez Moreno"
              className="h-12 lg:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-900 font-semibold transition-colors text-lg relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-900 font-semibold transition-colors text-lg relative group"
            >
              Sobre Mí
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-900 font-semibold transition-colors text-lg relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-3 rounded-full font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info - Right Side (Desktop Only) */}
          <div className="hidden xl:flex flex-col space-y-1 text-right">
            <div className="flex items-center text-gray-600 hover:text-blue-900 transition-colors">
              <Phone className="h-4 w-4 mr-2 text-blue-900" />
              <span className="font-semibold text-sm">659 30 21 39</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-blue-900 transition-colors">
              <Mail className="h-4 w-4 mr-2 text-blue-900" />
              <span className="font-medium text-xs">dra.carmensanchezmoreno@gmail.com</span>
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
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg border-b border-gray-100"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg border-b border-gray-100"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-900 font-semibold transition-colors py-3 text-lg border-b border-gray-100"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 rounded-2xl font-bold hover:from-blue-800 hover:to-blue-700 transition-colors text-lg shadow-lg"
              >
                Contacto
              </button>
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-900" />
                  <span className="font-semibold">659 30 21 39</span>
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