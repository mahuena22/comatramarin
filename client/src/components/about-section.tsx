import { CheckCircle, Zap, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            À propos de nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 10 ans d'expertise au service de l'aquaculture durable et de la pêche responsable
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern aquaculture facility with recirculation systems" 
              className="rounded-2xl shadow-lg"
              data-testid="img-about-facility"
            />
          </div>
          <div>
            <h3 className="text-3xl font-montserrat font-bold text-foreground mb-6">Notre Histoire</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Créée en 2013 par Mr Roméo David, expert reconnu en pêche durable et aquaculture, 
              COMATRA FISH MARINE s'est imposée comme un acteur majeur de l'industrie halieutique 
              en Afrique de l'Ouest.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre vision est d'assurer une alimentation de qualité via des produits halieutiques 
              issus d'une pêche responsable et d'une aquaculture durable, respectueuse de l'environnement.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-montserrat font-bold text-primary mb-2" data-testid="stat-experience">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-montserrat font-bold text-primary mb-2" data-testid="stat-countries">3</div>
                <div className="text-sm text-muted-foreground">Pays présents</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover bg-card p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-montserrat font-bold text-card-foreground mb-4">Expertise technique</h4>
            <p className="text-muted-foreground">
              Techniques aquacoles innovantes à recirculation bio sécurisée et réseaux fiables d'armateurs.
            </p>
          </div>
          
          <div className="card-hover bg-card p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-montserrat font-bold text-card-foreground mb-4">Innovation durable</h4>
            <p className="text-muted-foreground">
              Projets en aquaculture multi-sites avec collaborations scientifiques internationales.
            </p>
          </div>
          
          <div className="card-hover bg-card p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-montserrat font-bold text-card-foreground mb-4">Réseau consolidé</h4>
            <p className="text-muted-foreground">
              Réseau politique, économique et scientifique consolidé garantissant fiabilité et qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
