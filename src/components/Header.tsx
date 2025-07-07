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
    <header className="bg-white/98 backdrop-blur-md shadow-xl border-b border-blue-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo Section - Left Side */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/src/assets/logo_clinica_dra_mary_carmen_sanchez-removebg-preview.png"
              alt="Dra. Mary Carmen Sánchez Moreno"
              className="h-14 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-2"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-2"
              >
                Sobre Mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-900 font-bold transition-all duration-300 text-lg relative group py-2"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-10 py-4 rounded-full font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg border-2 border-transparent hover:border-blue-300"
              >
                Contacto
              </button>
            </div>
          </nav>

          {/* Contact Info - Right Side (Desktop Only) */}
          <div className="hidden xl:flex flex-col items-end space-y-2 flex-shrink-0">
            <div className="flex items-center text-gray-700 hover:text-blue-900 transition-colors group">
              <Phone className="h-5 w-5 mr-3 text-blue-900 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-lg">659 30 21 39</span>
            </div>
            <div className="flex items-center text-gray-600 hover:text-blue-900 transition-colors group">
              <Mail className="h-4 w-4 mr-3 text-blue-900 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-sm">dra.carmensanchezmoreno@gmail.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-blue-50 transition-colors border border-blue-100"
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
              
              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-blue-100 space-y-4 bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-6 w-6 mr-4 text-blue-900" />
                  <span className="font-bold text-lg">659 30 21 39</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-4 text-blue-900" />
                  <span className="font-semibold">dra.carmensanchezmoreno@gmail.com</span>
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