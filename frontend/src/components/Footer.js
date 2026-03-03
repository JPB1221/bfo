import React from 'react';
import { Link } from 'react-router-dom';

const MARKETS = [
  { label: 'Government', to: '/government' },
  { label: 'Enterprise', to: '/enterprise' },
  { label: 'Local Business', to: '/local-business' },
];

const COMPANY = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-void border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/40">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Bare Force One" className="w-8 h-8 object-contain rounded" />
              <span className="font-heading font-bold text-slate-50 text-sm uppercase tracking-[0.12em]">
                Bare Force One
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.
            </p>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-5">
              Markets
            </h4>
            <ul className="space-y-3">
              {MARKETS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-500 text-sm hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-500 text-sm hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-slate-300 mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-500">
              <p>
                <a href="mailto:contracts@bareforceone.com" className="hover:text-accent transition-colors">
                  contracts@bareforceone.com
                </a>
              </p>
              <p>954-296-9953</p>
              <p>Fort Lauderdale, Florida</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-slate-600 space-y-1">
            <p>&copy; {new Date().getFullYear()} Bare Force One LLC. All rights reserved.</p>
            <p>U.S.-Registered Limited Liability Company</p>
          </div>
          <div className="text-xs text-slate-600">
            <span className="font-mono">UEI: FJRRJ6JNJ375</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
