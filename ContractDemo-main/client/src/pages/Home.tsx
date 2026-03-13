/* =============================================================
   HOME PAGE — S.T.R. Concrete Restoration LLC
   Design: Industrial Brutalist Precision
   Sections: Navbar → Hero → Stats → Services → About → WhyUs → Projects → Contact → Footer
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BFOBanner from "@/components/BFOBanner";
import BFOFooter from "@/components/BFOFooter";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.003 80)" }}>
      <BFOBanner />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BFOFooter />
    </div>
  );
}
