import Maps from '../components/Map';

const Contact = () => {
    return (
        <section className="container mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold mb-6 text-left">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">

        <div className="space-y-4 animate-slideDown">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Bezoekadres</h2>
            <p className="text-gray-600">
            Weesperstraat 432 
            </p>
            <p className="text-gray-600">
            1018 DN Amsterdam
            </p>
          </div>
        </div>

        <div className="space-y-4 animate-slideDown" style={{ animationDelay: '0.2s' }}>
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Postadres</h2>
            <p className="text-gray-600">
            Postbus 1269
            </p>
            <p className="text-gray-600">
            1000 BG Amsterdam
            </p>
          </div>
        </div>
        <div className="space-y-16 animate-slideDown" style={{ animationDelay: '0.2s' }}>
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Informatie over inhuur</h2>
            <p className="text-gray-600 text-sm md:text-base">
            Neem contact op met Matching & Accountmanagement:
            </p>
            <p className="text-blue-500 hover:underline text-sm md:text-base">
            <a href="mailto:pmb.matchingenaccountmanagement@amsterdam.nl">pmb.matchingenaccountmanagement@amsterdam.nl</a>
            </p>
          </div>
        </div>
      </div>
      
            <Maps />

      </section>
    );
  };
  
  export default Contact; 