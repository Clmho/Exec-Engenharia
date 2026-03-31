import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Empresa', path: '/empresa' },
  { name: 'Obras', path: '/obras' },
  { name: 'Clientes', path: '/clientes' },
  { name: 'Notícias', path: '/noticias' },
  { name: 'Contato', path: '/contato' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        (isScrolled || !isHome)
          ? 'bg-white py-2 border-gray-200 shadow-sm' 
          : 'bg-transparent py-4 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://execengenharia.com.br/logo-exec-engenharia.png" 
              alt="Exec Engenharia" 
              className={cn(
                "h-16 w-auto transition-all", 
                (isScrolled || !isHome) ? "h-12" : "h-16"
              )}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-bold transition-colors uppercase tracking-wide',
                  (isScrolled || !isHome)
                    ? (location.pathname === link.path ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600')
                    : (location.pathname === link.path ? 'text-white' : 'text-white/90 hover:text-white underline-offset-8 hover:underline')
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              (isScrolled || !isHome) ? "text-gray-800" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-base font-medium py-2 border-b border-gray-50',
                location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
