import mockdataOpdrachten from "../services/mockdataOpdrachten";
import ProjectenCard from "../components/cards/ProjectenCard";
import { Helmet } from 'react-helmet';

const Opdrachten = () => {
  return (
    <div className="container mx-auto px-4 py-24 ">
      <Helmet>
        <title>Opdrachten – PMB</title>
        <meta name="description" content="De Opdrachten en projecten lijst van het ProjectmanagementBureau van het Gemeente Amsterdam" />
        <link rel="canonical" href="https://viniciuseduardosousa.github.io/keuzedeel-frontend/#/opdrachten" />
      </Helmet>
      {/* Header sectie met foto en titel */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16 animate-fadeIn">
        {/* Tekst sectie */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold my-6 text-gray-800">Opdrachten en projecten</h1>
          <p className="mb:text-xl text-gray-600 max-w-5xl">
          Het Projectmanagementbureau werkt in opdracht van en samen met andere directies, 
          stadsdelen, wijken en buurten van de gemeente Amsterdam, andere gemeenten en de regio.
          </p>
          <p className="mb:text-xl text-gray-600 max-w-5xl mt-4">
          Onze werkvelden zijn o.a.: gebiedsontwikkeling, verkeer en vervoer, vastgoed (inclusief maatschappelijk vastgoed) 
          en sociaal domein. We lichten hier graag een aantal projecten en programma's toe, zowel uit het heden als uit het 
          verleden, om een beeld te vormen van wat we in de stad doen en gedaan hebben.
          </p>
        </div>
      </section>

      {/* MensenCard Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {mockdataOpdrachten.map((opdracht) => (
          <ProjectenCard
            key={opdracht.id} 
            image={opdracht.image} 
            name={opdracht.name} 
            link={opdracht.link} 
          />
        ))}
        
      </section>
    </div>
  );
};

export default Opdrachten; 