import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProductsSection from "@/components/products-section";
import AgenciesSection from "@/components/agencies-section";
import PartnersSection from "@/components/partners-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AgenciesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
