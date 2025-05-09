import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import amsterdamLogo from '../../assets/images/amsterdamlogo.webp';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#FFFFFF] z-50 animate-fadeIn overflow-y-auto">
      <div className="flex flex-col h-full p-8">
        {/* Header with Logo and Close */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={amsterdamLogo} alt="amsterdam-logo leading to home page" className='w-4'/>
             </Link>

          <button 
            id="hamburger-menu-open-or-close"
            type="button"
            aria-label="Close menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={onClose}
            className="text-gray-800 hover:rotate-90 transition-all duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col space-y-6">
          <Link 
            to="/Mensen" 
            className="text-2xl py-4 border-b-2 border-gray-800 hover:pl-4 
                     transition-all duration-300 hover:text-gray-600"
            onClick={onClose}
          >
            Mensen
          </Link>
          <Link 
            to="/Expertise" 
            className="text-2xl py-4 border-b-2 border-gray-800 hover:pl-4 
                     transition-all duration-300 hover:text-gray-600"
            onClick={onClose}
          >
            Expertise
          </Link>
          <Link 
            to="/Opdrachten" 
            className="text-2xl py-4 border-b-2 border-gray-800 hover:pl-4 
                     transition-all duration-300 hover:text-gray-600"
            onClick={onClose}
          >
            Opdrachten en projecten
          </Link>
          
        </nav>
        {/* Contact Link */}
        <div className="flex-1 flex flex-col space-y-2 ">
        <Link 
            to="/Contact" 
            className="text-2xl py-4 border-b-2 border-gray-800 hover:pl-4 
                     transition-all duration-300 hover:text-gray-600"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 