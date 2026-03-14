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
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" aria-label="Site footer" className="bg-[#050810] border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/20">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src="/logo-sm.webp" alt="Bare Force One LLC" className="w-7 h-7 object-contain rounded" width="28" height="28" loading="lazy" />
              <span className="font-heading font-bold text-slate-50 text-[0.65rem] uppercase tracking-[0.15em] group-hover:text-blue-400 transition-colors">
                Bare Force One
              </span>
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              Secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.
            </p>
          </div>

          <nav aria-label="Markets navigation">
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Markets</h4>
            <ul className="space-y-2.5">
              {MARKETS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-600 text-xs hover:text-blue-400 transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-slate-600 text-xs hover:text-blue-400 transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address>
            <h4 className="font-heading font-bold text-[0.6rem] uppercase tracking-[0.2em] text-slate-400 mb-5">Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <p><a href="mailto:contracts@bareforceone.com" className="hover:text-blue-400 transition-colors duration-300">contracts@bareforceone.com</a></p>
              <p><a href="tel:+19542969953" className="hover:text-blue-400 transition-colors duration-300">954-296-9953</a></p>
              <p>Fort Lauderdale, Florida — Custom Software Development</p>
             </div>
          </address>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[0.6rem] text-slate-700 space-y-1">
            <p>&copy; {new Date().getFullYear()} Bare Force One LLC. All rights reserved.</p>
            <p>U.S.-Registered Limited Liability Company</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[0.6rem] text-slate-700">
              <span className="font-mono">UEI: FJRRJ6JNJ375</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/JPB1221" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://clutch.co/profile/bare-force-one" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors" aria-label="Clutch">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
