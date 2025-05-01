import { Link } from 'react-router-dom';
import heroImage from '../assets/images/background-hero.webp';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-4xl font-bold leading-tight mb-4">Het Projectmanagementbureau van de gemeente Amsterdam</h1>
      <div className="flex gap-4 px-4 md:px-0">
        <Link to='/mensen' className="bg-red-600 text-white-900 hover:bg-red-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Onze mensen
        </Link>
        <Link to='/expertise' className="bg-red-600 text-white-900 hover:bg-red-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Onze expertise
        </Link>
        <Link to='/expertise' className="bg-red-600 text-white-900 hover:bg-red-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Onze opdrachten en projecten
        </Link>
      </div>
    </div>
  </div>

  );
};

export default Hero;