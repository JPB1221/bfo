/* =============================================================
   NAVBAR — Industrial Brutalist Precision
   Sticky dark charcoal header with orange accent on active/hover
   ============================================================= */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(0.14 0.01 260)" : "oklch(0.14 0.01 260 / 0.95)",
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.3)" : "none",
      }}
    >
      {/* Top bar — phone number */}
      <div
        className="hidden md:block text-xs py-1.5 px-4"
        style={{
          backgroundColor: "oklch(0.62 0.19 42)",
          color: "white",
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.05em",
        }}
      >
        <div className="container flex justify-between items-center">
          <span>Licensed General Contractor — Fully Bonded &amp; Insured</span>
          <a
            href="tel:0000000000"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Phone size={12} />
            (000) 000-0000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex flex-col leading-none"
        >
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            CONCRETE
            PRO
          </span>
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: "0.6rem",
              color: "oklch(0.62 0.19 42)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            Restoration Specialists
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="link-underline"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "oklch(0.85 0.005 80)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0000000000"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 btn-sweep whitespace-nowrap"
            style={{
              backgroundColor: "oklch(0.62 0.19 42)",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              flexShrink: 0,
            }}
          >
            <Phone size={14} />
            Get a Free Quote
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: "white" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "oklch(0.14 0.01 260)",
            borderColor: "oklch(0.28 0.01 260)",
          }}
        >
          <ul className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block py-3 px-2"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "oklch(0.85 0.005 80)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderBottom: "1px solid oklch(0.28 0.01 260)",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:0000000000"
                className="flex items-center justify-center gap-2 py-3 w-full"
                style={{
                  backgroundColor: "oklch(0.62 0.19 42)",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                }}
              >
                <Phone size={16} />
                (000) 000-0000
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
