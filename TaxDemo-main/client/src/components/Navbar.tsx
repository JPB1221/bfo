/*
 * Navbar — Sticky navigation with transparent-to-white scroll behavior
 * Design: Navy logo area, clean white nav on scroll
 */

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-[#1B4F72]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Stylized "S" logo mark */}
            <div className="w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill={scrolled ? "#1B4F72" : "rgba(255,255,255,0.15)"} />
                <text
                  x="50%"
                  y="56%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill={scrolled ? "white" : "white"}
                  fontSize="22"
                  fontFamily="Cormorant Garamond, serif"
                  fontWeight="700"
                >
                  P
                </text>
              </svg>
            </div>
            <div>
              <div
                className={`font-bold text-lg leading-tight tracking-wide transition-colors ${
                  scrolled ? "text-[#1B4F72]" : "text-white"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                PREMIER ACCOUNTING DEMO
              </div>
              <div
                className={`text-xs tracking-widest uppercase transition-colors ${
                  scrolled ? "text-[#D4A843]" : "text-[#D4A843]"
                }`}
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Demonstration Website
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded transition-all duration-200 ${
                  scrolled
                    ? "text-[#1B4F72] hover:text-[#D4A843] hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                scrolled
                  ? "bg-[#1B4F72] text-white hover:bg-[#154060]"
                  : "bg-[#D4A843] text-[#1B4F72] hover:bg-[#c49730]"
              }`}
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Client Portal
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "text-[#1B4F72]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={`md:hidden pb-4 border-t ${scrolled ? "border-gray-100" : "border-white/20"}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-[#1B4F72] hover:text-[#D4A843]"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
