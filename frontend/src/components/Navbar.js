import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Government', to: '/government' },
  { label: 'Enterprise', to: '/enterprise' },
  { label: 'Local Business', to: '/local-business' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070b16]/90 backdrop-blur-xl border-b border-slate-800/40 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <img src="/logo.png" alt="Bare Force One" className="w-8 h-8 object-contain rounded" />
            <span className="font-heading font-bold text-slate-50 text-[0.7rem] uppercase tracking-[0.18em] group-hover:text-blue-400 transition-colors duration-300">
              Bare Force One
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`relative px-3 py-2 text-[0.65rem] font-heading font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-blue-400'
                    : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500" />
                )}
              </Link>
            ))}
          </div>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-400 hover:text-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="nav-mobile-menu" className="lg:hidden bg-[#070b16]/98 backdrop-blur-xl border-b border-slate-800/40">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`block px-3 py-3 text-sm font-heading font-bold uppercase tracking-[0.1em] transition-colors ${
                  location.pathname === link.to
                    ? 'text-blue-400'
                    : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
