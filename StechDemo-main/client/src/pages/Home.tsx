/* ==========================================================================
   PAGE: Home
   Design: Civic Warmth — single-page concept demo for a technical college
   Sections: Hero → Programs → Resources → Why Us → News → CTA → Footer
   ========================================================================== */

import SkipToContent from "../components/SkipToContent";
import DemoBanner from "../components/DemoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import ResourcesSection from "../components/ResourcesSection";
import WhyUsSection from "../components/WhyUsSection";
import NewsSection from "../components/NewsSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import BFOHero from "../components/BFOHero";
import BFOFooter from "../components/BFOFooter";

export default function Home() {
  return (
    <>
      {/* Accessibility: skip to main content */}
      <SkipToContent />

      {/* Concept demo notice bar */}
      <DemoBanner />
      <BFOHero />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Programs */}
        <ProgramsSection />

        {/* 3. Student Resources */}
        <ResourcesSection />

        {/* 4. Why Choose Us */}
        <WhyUsSection />

        {/* 5. News & Events */}
        <NewsSection />

        {/* 6. CTA Banner */}
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
      <BFOFooter />
    </>
  );
}
