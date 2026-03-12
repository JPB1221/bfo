/* =============================================================
   HOME PAGE — Miami Vice Customs
   Dark Retrowave Luxury design system.
   Assembles: Navbar → Hero → Services → Gallery → About → Contact → Footer
   ============================================================= */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#080c14" }}>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
