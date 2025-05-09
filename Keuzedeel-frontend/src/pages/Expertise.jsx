import ExpertiseSlider from "../components/ExpertiseSlider";
import ExpertiseAccordion from "../components/ExpertiseAccordion";

const Expertise = () => {

  return (
    <div className="container mx-auto px-4 py-24 ">
      <Helmet>
            <title>Expertise – PMB</title>
            <meta name="description" content="De expertise lijst van het ProjectmanagementBureau van het Gemeente Amsterdam" />
            <link rel="canonical" href="https://viniciuseduardosousa.github.io/keuzedeel-frontend/#/expertise" />
      </Helmet>
      {/* Header sectie met foto en titel */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-8 animate-fadeIn">
        {/* Tekst sectie */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-bold mt-6 text-gray-800">Expertise</h1>
        </div>
      </div>
      
      {/* MensenCard Grid */}
      <section className="grid grid-cols-1 flex items-center md:grid-cols-2 gap-16">
        <ExpertiseSlider />
        <div className="text-md  md:text-xl animate-slideDown">
          <p>
          Met meer dan 500 medewerkers verzorgen wij het projectmanagement van complexe multidisciplinaire en integrale projecten in het sociale, fysieke en economische domein. Dat doen wij in opdracht van en samen met andere afdelingen, stadsdelen, wijken en buurten van de gemeente Amsterdam, andere gemeenten en de regio.
          </p>
          <p className="mt-4">
          Ook ontwikkelen we samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen.
          </p>
        </div>
      </section>
      <section className="py-8"><ExpertiseAccordion/></section>
    </div>
  );
};

export default Expertise; 