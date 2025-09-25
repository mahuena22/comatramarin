import { MapPin, Phone, Clock } from "lucide-react";
import { useGoogleMaps } from "@/hooks/use-google-maps";

export default function AgenciesSection() {
  const { isLoaded, loadError } = useGoogleMaps();

  const agencies = [
    {
      city: "Cotonou",
      country: "Bénin",
      address: "Zone Portuaire de Cotonou\nAvenue Jean-Paul II",
      phone: "+229 XX XX XX XX",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
    },
    {
      city: "Abidjan",
      country: "Côte d'Ivoire",
      address: "Zone Industrielle de Vridi\nBoulevard VGE",
      phone: "+225 XX XX XX XX",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
    },
    {
      city: "Lomé",
      country: "Togo",
      address: "Port Autonome de Lomé\nAvenue du 24 janvier",
      phone: "+228 XX XX XX XX",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <section id="agences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Nos agences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Présents dans 3 pays d'Afrique de l'Ouest pour vous servir au plus près
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {agencies.map((agency, index) => (
            <div key={index} className="card-hover bg-card p-8 rounded-2xl shadow-sm">
              <img 
                src={agency.image}
                alt={`${agency.city} port area with fishing boats and marine activities`} 
                className="rounded-xl mb-6 w-full h-40 object-cover"
                data-testid={`img-agency-${agency.city.toLowerCase()}`}
              />
              <h3 className="text-2xl font-montserrat font-bold text-card-foreground mb-4">
                {agency.city}, {agency.country}
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <strong>Adresse:</strong><br />
                    {agency.address.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span data-testid={`phone-${agency.city.toLowerCase()}`}>{agency.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Lun-Ven: 7h-18h, Sam: 7h-13h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Interactive Map */}
        <div className="bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-montserrat font-bold text-card-foreground text-center mb-6">
            Nos implantations
          </h3>
          <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
            {loadError ? (
              <div className="text-center">
                <div className="text-red-500 mb-2">Erreur de chargement de la carte</div>
                <p className="text-sm text-muted-foreground">
                  Impossible de charger Google Maps. Vérifiez votre connexion internet.
                </p>
              </div>
            ) : !isLoaded ? (
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">Chargement de la carte...</p>
              </div>
            ) : (
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Carte interactive Google Maps</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Visualisez nos 3 agences en Afrique de l'Ouest
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
