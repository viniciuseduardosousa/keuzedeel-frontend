import mockdataMensen from "../services/mockdataMensen";
import MensenCard from "../components/cards/MensenCard";
import { Link } from "react-router-dom";

const Mensen = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header sectie met foto en titel */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 animate-fadeIn">
        {/* Tekst sectie */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl md:text-4xl font-bold my-3 md:my-6 text-gray-800">Mensen</h1>
          <p className="md:text-xl text-gray-600 max-w-2xl">
            Met meer dan 400 medewerkers heeft het Projectmanagementbureau een schat aan kennis en ervaring in huis. 
            Maak kennis met een aantal van onze mensen:
          </p>
        </div>
      </div>

      {/* MensenCard Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {mockdataMensen.map((person) => (
          <MensenCard 
            key={person.id} 
            image={person.image} 
            name={person.name} 
            link={person.link} 
          />
        ))}
        
      </section>
      <div>
        <h2 className="mt-5 text-xl md:text-3xl font-bold">Meer informatie?</h2>
        <p className="md:text-md text-gray-600 max-w-2xl mt-3">Voor meer informatie over het inhuren van onze projectmanagers, bouwmanagers, planningsadviseurs of topadviseurs van 
        de Wibautgroep kunt u contact opnemen met onze afdeling <Link className="underline text-black-800 hover:text-blue-800" href="mailto:mg_markt_en_capaciteit.pmb@amsterdam.nl">Markt en Capaciteit.</Link></p>
      </div>
    </div>
  );
};

export default Mensen;