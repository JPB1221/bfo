/* =============================================================
   NAVBAR — Miami Vice Customs
   Dark Retrowave Luxury: transparent → dark on scroll
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080c14]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col leading-none"
          >
            <span className="font-display text-2xl lg:text-3xl tracking-widest text-white">
              YOUR BRAND
            </span>
            <span
              className="font-display text-sm lg:text-base tracking-[0.35em]"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CUSTOMS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00d4ff] to-[#ff2d78] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="px-5 py-2 text-sm font-semibold tracking-wider uppercase text-white rounded-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
              }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080c14]/98 backdrop-blur-md border-t border-white/5 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-white/80 hover:text-white text-base font-medium tracking-widest uppercase py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="w-full py-3 text-sm font-semibold tracking-wider uppercase text-white rounded-sm"
              style={{ background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)" }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
