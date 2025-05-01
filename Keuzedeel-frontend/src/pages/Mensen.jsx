const Mensen = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header sectie met foto en titel */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 animate-fadeIn">
        {/* Foto container */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative group">
          <div className="absolute inset-0 bg-gray-400/80 transform translate-x-2 translate-y-2 
                       group-hover:translate-x-1 group-hover:translate-y-1 
                       transition-transform duration-200"></div>
          <img 
            src="/src/assets/images/person.webp" 
            alt="Profielfoto" 
            className="relative w-full h-full object-cover border-2 border-gray-800"
          />
        </div>

        {/* Tekst sectie */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Over Mij</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Welkom op mijn verhalenplatform! Als verhalenverteller en schrijver deel ik graag 
            mijn passie voor woorden en verhalen met jullie.
          </p>
        </div>
      </div>

      {/* Content sectie met animaties */}
      
    </div>
  );
};

export default Mensen; 