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
    <footer data-testid="footer" className="bg-[#050810] border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/20">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src="/logo.png" alt="Bare Force One" className="w-7 h-7 object-contain rounded" />
              <span className="font-heading font-bold text-slate-50 text-[0.65rem] uppercase tracking-[0.15em] group-hover:text-blue-400 transition-colors">
                Bare Force One
              </span>
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              Secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Markets</h4>
            <ul className="space-y-2.5">
              {MARKETS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-600 text-xs hover:text-blue-400 transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-600 text-xs hover:text-blue-400 transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <p><a href="mailto:contracts@bareforceone.com" className="hover:text-blue-400 transition-colors duration-300">contracts@bareforceone.com</a></p>
              <p><a href="tel:+19542969953" className="hover:text-blue-400 transition-colors duration-300">954-296-9953</a></p>
              <p>Fort Lauderdale, Florida</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[0.6rem] text-slate-700 space-y-1">
            <p>&copy; {new Date().getFullYear()} Bare Force One LLC. All rights reserved.</p>
            <p>U.S.-Registered Limited Liability Company</p>
          </div>
          <div className="text-[0.6rem] text-slate-700">
            <span className="font-mono">UEI: FJRRJ6JNJ375</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
