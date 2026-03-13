/*
 * Home.tsx — Main page for Premier Accounting & Tax Specialists (Demo Site)
 * Design: Warm Heritage Modernism — deep navy #1B4F72, gold #D4A843
 * Fonts: Cormorant Garamond (headings) + Nunito Sans (body)
 */

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import ServicesSection from "@/components/ServicesSection";
import ValuesStrip from "@/components/ValuesStrip";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import ProfileSection from "@/components/ProfileSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import TributeSection from "@/components/TributeSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import BFOBanner from "@/components/BFOBanner";
import BFOHero from "@/components/BFOHero";
import BFOFooter from "@/components/BFOFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <BFOBanner />
      <BFOHero />
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      {/* Wave divider */}
      <div className="relative -mt-1 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FAFAF8" />
        </svg>
      </div>
      <main>
        <MainContent />
        <ServicesSection />
        <ValuesStrip />
        <MapSection />
        <CTASection />
        <NewsletterSection />
        <ProfileSection />
        <VisionMissionSection />
        <TributeSection />
        <ContactFormSection />
      </main>
      <Footer />
      <BFOFooter />
    </div>
  );
}
