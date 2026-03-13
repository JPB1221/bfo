/* ==========================================================================
   COMPONENT: Navbar
   Design: Civic Warmth — transparent on hero, solid teal on scroll
   ========================================================================== */

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#resources" },
  { label: "Student Life", href: "#why-us" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0D4F5C] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            aria-label="Southland Technical College — Home"
          >
            <div className="w-9 h-9 rounded-md bg-[#E8A020] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 transition-colors">
              <GraduationCap className="w-5 h-5 text-[#0D4F5C]" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-base tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Southland
              </span>
              <span className="block text-amber-300 text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Technical College
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#resources"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-2 py-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Student Portal
            </a>
            <a
              href="#apply"
              className="bg-[#E8A020] hover:bg-amber-400 text-[#0D4F5C] font-bold text-sm px-5 py-2.5 rounded transition-all duration-150 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden bg-[#0D4F5C] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded text-base font-medium transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
            <a
              href="#resources"
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Student Portal
            </a>
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="bg-[#E8A020] text-[#0D4F5C] font-bold text-sm px-5 py-3 rounded text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
