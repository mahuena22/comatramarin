import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: "Accueil", sectionId: "accueil" },
    { label: "À propos", sectionId: "apropos" },
    { label: "Produits", sectionId: "produits" },
    { label: "Nos agences", sectionId: "agences" },
    { label: "Partenaires", sectionId: "partenaires" },
    { label: "Contact", sectionId: "contact" }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-montserrat font-bold text-primary mr-3">CFM</div>
              <div className="text-lg font-montserrat">COMATRA FISH MARINE</div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Acteur clé de la pêche durable, aquaculture innovante et distribution de produits 
              aquatiques en Côte d'Ivoire, Bénin, Togo. Plus de 10 ans d'expertise au service 
              de l'alimentation halieutique saine.
            </p>
            <div className="text-white/60 text-sm">
              © 2024 COMATRA FISH MARINE. Tous droits réservés.
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-white/80">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="hover:text-primary transition-colors text-left"
                    data-testid={`footer-link-${link.sectionId}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <div>
                <strong>Email:</strong><br />
                contact@comatra-fm.com
              </div>
              <div>
                <strong>Téléphone:</strong><br />
                +229 XX XX XX XX
              </div>
              <div>
                <strong>WhatsApp:</strong><br />
                +229 XX XX XX XX
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label={social.label}
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
