import Hero from '../components/Hero';
import Divider from '../components/decorative/Divider';
import TextBlock from '../components/TextBlock';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] ">
      <Helmet>
        <title>Home | PMB</title>
        <meta name="description" content="Dit is de home pagina van het Projectmanagementbureau Amsterdam" />
      </Helmet>
      <Hero />
      <Divider />
      <TextBlock
        title="Wat wij doen"
        description="Bij het Projectmanagementbureau verzorgen vakmensen het project-, programma- en procesmanagement in de stad. We doen dat voor sociale, fysieke en economische projecten en programma’s. Daarnaast ontwikkelen wij samen met opdrachtgevers en maatschappelijke partners nieuwe kennis en werkwijzen die passen bij de vraagstukken van vandaag en morgen. Onze opdrachtgevers zijn: stad, stadsdelen, wijken, buurten en de regio.
        Het Projectmanagementbureau is een open, lerende en flexibele organisatie met ruim 500 medewerkers. Er werken projectmanagers, bouwmanagers, adviseurs maatschappelijk vastgoed, planningsadviseurs en topadviseurs, die in opdracht de functie van manager, regisseur en project- of programmadirecteur vervullen. Met talent als basis en diversiteit als kracht werken we samen aan de ontwikkeling en de toekomst van Amsterdam."
      />
      <Divider />
      <TextBlock
        title="Werken bij het Projectmanagementbureau"
        description="Naast ca 500 medewerkers in vaste dienst heeft het Projectmanagementbureau een flexibele schil om pieken in het werk goed te kunnen opvangen. We huren regelmatig junior projectmanagers en managementondersteuning in via uitzendbureaus. De gemeente Amsterdam doet zaken met drie uitzendbureaus: Randstad, Tempo Team en Olympia. Heb je interesse? Neem dan vooral een kijkje op hun websites.
        Volg ons op LinkedIn om daarnaast altijd op de hoogte te blijven van openstaande vacatures!"
      />
      <Divider />
      <TextBlock
        title="Meer informatie"
        description="Voor meer informatie over het inhuren van onze topadviseurs van team Wibaut, projectmanagers, programmamanagers, bouwmanagers, adviseurs maatschappelijk vastgoed en planningsadviseurs kunt u contact opnemen met onze afdeling Matching & Accountmanagement via: "
        email="mg_pmb.matchingenaccountmanagement@amsterdam.nl"
        />
      {/* <HighlightedStories />
      <Divider />
      <Categories />
      <Divider />
      <FeaturedStory 
        title="De Verloren Brief"
        description="Een meeslepend verhaal over een brief die vijftig jaar te laat werd bezorgd. Het onthult een vergeten liefdesverhaal en verbindt twee generaties door een toevallige ontdekking. De brief, vergeeld door de tijd maar perfect bewaard, brengt lang bewaarde geheimen aan het licht en zet een reeks gebeurtenissen in gang die niemand had kunnen voorzien. Een verhaal over tijd, herinneringen en de onverwachte manieren waarop het verleden ons heden kan vormgeven."
        imageUrl="/path/to/image.jpg"
      />
      <Divider /> */}
      
    </div>
  );
};

export default Home; 