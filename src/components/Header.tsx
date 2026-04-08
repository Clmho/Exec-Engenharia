import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'EMPRESA', path: '/empresa' },
    { name: 'OBRAS', path: '/obras' },
    { name: 'CLIENTES', path: '/clientes' },
    { name: 'NOTÍCIAS', path: '/noticias' },
    { name: 'CONTATO', path: '/contato' },
  ];

  const headerClasses = isHome
    ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-5' : 'bg-transparent py-10'
      }`
    : 'sticky top-0 left-0 w-full z-50 bg-white shadow-sm py-6 border-b border-border-light';

  const linkClasses = (path: string) => {
    const active = location.pathname === path;
    if (isHome && !isScrolled) {
      return `text-sm font-semibold tracking-wide transition-colors ${
        active ? 'text-white underline underline-offset-8' : 'text-white/80 hover:text-white'
      }`;
    }
    return `text-sm font-semibold tracking-wide transition-colors ${
      active ? 'text-primary-medium underline underline-offset-8' : 'text-text-main hover:text-primary-medium'
    }`;
  };

  const logoColor = (isHome && !isScrolled) ? 'text-white' : 'text-primary-dark';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img 
            src="https://execengenharia.com.br/logo-exec-engenharia.png" 
            alt="Exec Engenharia" 
            className="h-[62px] w-auto transition-all"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className={linkClasses(item.path)}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isHome && !isScrolled ? 'text-white' : 'text-text-main'} />
          ) : (
            <Menu className={isHome && !isScrolled ? 'text-white' : 'text-text-main'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t border-border-light"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-semibold text-text-main hover:text-primary-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
