import { Link } from 'react-router-dom';
import { useState } from 'react';

import MobileMenu from './navigation/MobileMenu';
import amsterdamLogo from '../assets/images/amsterdamLogo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Zoeken naar:', searchQuery);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-[#FFFFFF] shadow-sm">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={amsterdamLogo} alt="" className='w-3' />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link 
                to="/Mensen" 
                className="text-xl text-gray-800 relative group"
              >
                <span>Mensen</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/Expertise" 
                className="text-xl text-gray-800 relative group"
              >
                <span>Expertise</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/Opdrachten" 
                className="text-xl text-gray-800 relative group"
              >
                <span>Opdrachten en projecten</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:block relative">
            <Link 
                to="/Contact" 
                className="text-xl text-gray-800 relative group"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button name='hamburger-menu-open-or-close'
              type="button"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              id="hamburger-menu-open-or-close"
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header; 