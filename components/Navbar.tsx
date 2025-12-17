import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Button } from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for smooth scrolling that works reliably
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { label: t.nav.mission, href: "#mission" },
    { label: t.nav.directions, href: "#directions" },
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={(e) => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <div className="flex items-center gap-3 group">
              {/* CSS Filter hack: brightness-0 invert makes any colored image pure white */}
              <img 
                className={`h-10 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert opacity-90'}`} 
                src={CONTACT_INFO.logoUrl} 
                alt="Turin Startup Accelerator" 
              />
              <div className={`hidden sm:block h-8 w-[1px] transition-colors duration-300 ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
              <span className={`hidden sm:block font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand' : 'text-white'}`}>
                TSA
              </span>
            </div>
          </div>

          {/* Desktop Nav - Visible only on Large screens (lg and up) */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-medium transition-colors hover:text-blue-400 text-sm tracking-wide ${
                  scrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions - Visible only on Large screens (lg and up) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium transition-colors text-sm px-3 py-2 rounded-full ${
                  scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-200 hover:bg-white/10'
                }`}>
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>
              {/* Language Dropdown */}
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right p-1">
                {['ru', 'uz', 'en'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang as Language)}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-xl hover:bg-gray-50 ${
                      language === lang ? 'text-brand font-bold bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              onClick={(e) => scrollToSection(e, 'apply')} 
              variant={scrolled ? "primary" : "white"} 
              className="py-2 px-6 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              {t.nav.apply}
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button - Visible up to Large screens (lg) */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
                onClick={() => {
                   const langs: Language[] = ['ru', 'uz', 'en'];
                   const nextIndex = (langs.indexOf(language) + 1) % langs.length;
                   setLanguage(langs[nextIndex]);
                }}
                className={`font-bold uppercase text-sm px-3 py-1 rounded-full border ${scrolled ? 'text-brand border-brand' : 'text-white border-white/30'}`}
             >
                {language}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-light focus:outline-none p-1`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl min-h-screen animate-fade-in">
          <div className="px-6 pt-8 pb-6 space-y-4 sm:max-w-md sm:mx-auto">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-2xl text-xl font-medium text-gray-700 hover:text-brand hover:bg-blue-50 transition-all"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8 px-2">
               <Button onClick={(e) => scrollToSection(e, 'apply')} fullWidth className="py-4 text-lg shadow-xl">
                 {t.nav.apply}
               </Button>
            </div>
            
            {/* Explicit Language Selector for Mobile Menu (Optional, but good for UX) */}
            <div className="pt-8 flex justify-center gap-4">
                {['ru', 'uz', 'en'].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang as Language)}
                        className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition-colors ${
                            language === lang 
                            ? 'bg-brand text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                    >
                        {lang}
                    </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};