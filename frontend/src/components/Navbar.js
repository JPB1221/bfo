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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-xl border-b border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <img
              src="/logo.png"
              alt="Bare Force One"
              className="w-9 h-9 object-contain rounded"
            />
            <span className="font-heading font-bold text-slate-50 text-sm uppercase tracking-[0.15em] group-hover:text-accent transition-colors">
              Bare Force One
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] rounded transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-accent bg-accent/10'
                    : 'text-slate-400 hover:text-slate-50 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
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

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-navy/98 backdrop-blur-xl border-b border-slate-800/60"
        >
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`block px-3 py-3 text-sm font-medium uppercase tracking-[0.08em] rounded transition-colors ${
                  location.pathname === link.to
                    ? 'text-accent bg-accent/10'
                    : 'text-slate-400 hover:text-slate-50 hover:bg-white/5'
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
