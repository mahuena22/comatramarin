import { User } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    "Université de Côte d'Ivoire",
    "Université du Bénin", 
    "Université du Togo",
    "Université de Montpellier",
    "IRD Montpellier",
    "INRA"
  ];

  const testimonials = [
    {
      name: "Dr. Pierre Kouassi",
      title: "Université de Montpellier",
      content: "COMATRA FISH MARINE démontre une expertise remarquable en aquaculture durable. Leur approche scientifique rigoureuse et leur engagement environnemental en font un partenaire de choix pour nos projets de recherche."
    },
    {
      name: "Marie Adjovi",
      title: "Directrice - Restaurants Neptune",
      content: "La qualité des produits CFM est exceptionnelle. Leurs poissons nobles et crustacés répondent parfaitement aux exigences de notre clientèle haut de gamme. Un service logistique impeccable!"
    }
  ];

  const achievements = [
    { value: "15+", label: "Partenaires scientifiques" },
    { value: "50+", label: "Clients professionnels" },
    { value: "5", label: "Sites aquacoles" },
    { value: "100%", label: "Qualité garantie" }
  ];

  return (
    <section id="partenaires" className="section-alt py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Partenaires & Références
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un réseau scientifique et industriel consolidé pour garantir notre excellence
          </p>
        </div>
        
        {/* Partner Logos */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-montserrat font-bold text-foreground text-center mb-8">
            Nos partenaires scientifiques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg text-center">
                <div className="text-xs text-muted-foreground font-medium" data-testid={`partner-${index}`}>
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        {/* Key Achievements */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2" data-testid={`achievement-value-${index}`}>
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`achievement-label-${index}`}>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
