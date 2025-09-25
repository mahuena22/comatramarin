import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-montserrat font-bold text-primary">
              CFM
            </div>
            <div className="ml-2 text-sm font-montserrat text-muted-foreground">
              COMATRA FISH MARINE
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-accueil"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-apropos"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('produits')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-produits"
              >
                Produits
              </button>
              <button 
                onClick={() => scrollToSection('agences')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-agences"
              >
                Nos agences
              </button>
              <button 
                onClick={() => scrollToSection('partenaires')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-partenaires"
              >
                Partenaires
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary font-montserrat font-medium transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden bg-white shadow-lg absolute top-16 left-0 w-full ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-accueil"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('apropos')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-apropos"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('produits')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-produits"
          >
            Produits
          </button>
          <button 
            onClick={() => scrollToSection('agences')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-agences"
          >
            Nos agences
          </button>
          <button 
            onClick={() => scrollToSection('partenaires')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-partenaires"
          >
            Partenaires
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-montserrat font-medium"
            data-testid="mobile-nav-contact"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
