import { MapPin } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              COMATRA FISH MARINE
            </h1>
            <h2 className="text-2xl lg:text-3xl font-montserrat font-light mb-8 opacity-90">
              Qualité, durabilité et innovation pour une alimentation halieutique saine.
            </h2>
            <p className="text-xl mb-8 opacity-80 leading-relaxed">
              Acteur clé de la pêche durable, aquaculture innovante et distribution de produits aquatiques en Côte d'Ivoire, Bénin, Togo.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 rounded-lg font-montserrat font-semibold text-white shadow-lg"
                data-testid="button-devis"
              >
                Demander un devis
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-montserrat font-semibold text-white border border-white/30 hover:bg-white/30 transition-all"
                data-testid="button-contact"
              >
                Nous contacter
              </button>
            </div>
            
            {/* Agency Locations */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                Cotonou
              </div>
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                Abidjan
              </div>
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                Lomé
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Fish farming cages in marine environment" 
              className="rounded-2xl shadow-2xl"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}
