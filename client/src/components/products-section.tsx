import { Package, Clock, Truck } from "lucide-react";

export default function ProductsSection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Aerial view of modern fish farm with circular tanks"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Fresh fish market display with variety of catches"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Professional aquaculture facility with modern equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Sea cage fish farming operation in blue waters"
    }
  ];

  return (
    <section id="produits" className="section-alt py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Produits & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de produits aquatiques nobles et de services spécialisés
          </p>
        </div>
        
        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card-hover bg-white p-6 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Fresh noble fish varieties including tilapia and marine fish" 
              className="rounded-xl mb-4 w-full h-48 object-cover"
              data-testid="img-fish-products"
            />
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">Poissons nobles</h3>
            <p className="text-muted-foreground mb-4">Maigre, daurade, carangue, tilapia, silures de haute qualité</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Tilapia d'élevage bio</li>
              <li>• Silures africains</li>
              <li>• Poissons marins frais</li>
            </ul>
          </div>
          
          <div className="card-hover bg-white p-6 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Fresh shrimp, lobster and shellfish selection" 
              className="rounded-xl mb-4 w-full h-48 object-cover"
              data-testid="img-seafood-products"
            />
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">Crustacés & Coquillages</h3>
            <p className="text-muted-foreground mb-4">Sélection premium de produits de la mer</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Gambas fraîches</li>
              <li>• Langouste locale</li>
              <li>• Coquillages variés</li>
            </ul>
          </div>
          
          <div className="card-hover bg-white p-6 rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Professional aquaculture equipment and fish feed systems" 
              className="rounded-xl mb-4 w-full h-48 object-cover"
              data-testid="img-equipment-products"
            />
            <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">Équipements & Aliments</h3>
            <p className="text-muted-foreground mb-4">Solutions complètes pour l'aquaculture</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Aliments pour poissons</li>
              <li>• Équipements aquacoles</li>
              <li>• Systèmes de recirculation</li>
            </ul>
          </div>
        </div>
        
        {/* Services */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">Services annexes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-foreground mb-2">Logistique</h4>
              <p className="text-muted-foreground">Transport spécialisé et sécurisé pour produits frais</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-foreground mb-2">Conditionnement</h4>
              <p className="text-muted-foreground">Emballage professionnel respectant la chaîne du froid</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-foreground mb-2">Livraison</h4>
              <p className="text-muted-foreground">Livraison sous température contrôlée dans les délais</p>
            </div>
          </div>
        </div>
        
        {/* Gallery Slider */}
        <div className="mt-16">
          <h3 className="text-3xl font-montserrat font-bold text-foreground text-center mb-8">Galerie</h3>
          <div className="slider-container overflow-x-auto">
            <div className="flex space-x-4 pb-4" style={{width: 'max-content'}}>
              {galleryImages.map((image, index) => (
                <img 
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-80 h-60 object-cover rounded-xl shadow-lg"
                  data-testid={`gallery-img-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
