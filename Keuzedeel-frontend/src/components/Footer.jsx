import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] py-16 border-t border-gray-200">
      <div className="container mx-auto px-8">
        {/* Main footer content met verticale dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {/* Logo/Brand section */}
          <div className="relative">
            <h3 className="text-xl font-medium mb-4">Mail</h3>
            <p className="text-gray-700">
              PMB is bereikbaar op werkdagen tussen 8.30 - 17.30 uur. 
              <br />
              <Link to="http://www.linkedin.com/company/projectmanagement-bureau" ><FaLinkedin className='w-7 h-7 mt-2 mb-2' /></Link>
            </p>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 py-2">Contact →</Link>
            {/* Verticale divider rechts */}
            <div className="hidden md:block absolute right-[-1rem] top-0 bottom-0 w-[1px] bg-gray-800/20"></div>
          </div>

          {/* Pagina's section */}
          <div className="relative">
            <h3 className="text-xl font-medium mb-4">Over deze site</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://www.amsterdam.nl/pmb/algemene-onderdelen/colofon/" className="text-gray-700 hover:text-gray-900">Colofon →</Link>
              </li>
              <li>
                <Link to="https://www.amsterdam.nl/pmb/algemene-onderdelen/proclaimer-copyright/" className="text-gray-700 hover:text-gray-900">Proclaimer en Copyright →</Link>
              </li>
              <li>
                <Link to="https://www.amsterdam.nl/pmb/algemene-onderdelen/sitemap/" className="text-gray-700 hover:text-gray-900">Sitemap →</Link>
              </li>
            </ul>
            {/* Verticale divider rechts */}
            <div className="hidden md:block absolute right-[-1rem] top-0 bottom-0 w-[1px] bg-gray-800/20"></div>
          </div>

          {/* Contact section */}
          <div className="relative">
            <h3 className="text-xl font-medium mb-4">Amsterdam.nl</h3>
            <ul className="space-y-2">
              <li>
                <p>Nieuws en publieksinformatie van de gemeente Amsterdam 
                vindt u op amsterdam.nl
                </p>
              </li>
              <li>
              <Link to="https://www.amsterdam.nl/" className="text-gray-700 hover:text-gray-900">Naar amsterdam.nl →</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontale divider boven copyright */}
        <div className="w-full h-[1px] bg-gray-800/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-700">
          <p>&copy; {currentYear} Gemeente Amsterdam. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 