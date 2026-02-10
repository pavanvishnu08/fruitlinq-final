
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  // Determine if the navbar should have a solid background
  const showSolidBackground = !isHome || isScrolled || isOpen || (isHome && isMobile);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidBackground 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 md:py-3' 
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <img
               src="/logo-1.png"
               alt="Fruitlinq"
               className="h-12 md:h-24 w-full object-contain transition-all"
             />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors text-sm lg:text-base hover:text-primary ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : (isHome && !isScrolled ? 'text-text' : 'text-text')
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/franchise" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md text-sm lg:text-base">
              Get Franchise
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary transition-colors focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transform transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive 
                    ? 'bg-orange-50 text-primary' 
                    : 'text-text hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 px-2">
             <Link to="/franchise" className="block w-full text-center bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-transform">
              Get Franchise
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;