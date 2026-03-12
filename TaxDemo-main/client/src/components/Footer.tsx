/*
 * Footer — Site footer with navigation, contact, and copyright
 * Design: Dark navy background, gold accents, clean layout
 */

export default function Footer() {
  return (
    <footer className="bg-[#0d2d45] text-white">
      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4A843]/20 border border-[#D4A843]/30 flex items-center justify-center">
                <span
                  className="text-[#D4A843] text-xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  P
                </span>
              </div>
              <div>
                <div
                  className="text-white font-bold text-sm leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  PREMIER ACCOUNTING
                </div>
                <div
                  className="text-[#D4A843] text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  & Tax Specialists
                </div>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Accountants and Income Tax Specialists serving our community since 1965.
            </p>
            <p
              className="text-[#D4A843] text-sm italic font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Just one less thing to worry about.℠"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Profile", href: "#story" },
                { label: "Services", href: "#services" },
                { label: "Resources", href: "#resources" },
                { label: "Newsletter", href: "#newsletter" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#D4A843] text-sm transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Helpful Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "IRS Circular 230", href: "https://www.irs.gov/pub/irs-pdf/pcir230.pdf" },
                { label: "IRS Publications", href: "https://www.irs.gov/publications" },
                { label: "Record Retention Guide", href: "#" },
                { label: "Tax Due Dates", href: "https://www.irs.gov/businesses/small-businesses-self-employed/irs-tax-calendar" },
                { label: "Tax Rates", href: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2024" },
                { label: "Where is my refund?", href: "https://www.irs.gov/refunds" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#D4A843] text-sm transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Phone</div>
                <a href="tel:5551234567" className="text-white hover:text-[#D4A843] font-semibold transition-colors text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  (555) 123-4567
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Fax</div>
                <span className="text-white/70 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>(555) 123-4568</span>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Email</div>
                <a href="mailto:info@premieraccounting.com" className="text-white hover:text-[#D4A843] transition-colors text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  info@premieraccounting.com
                </a>
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Address</div>
                <address className="not-italic text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  123 Main Street, Suite 200<br />
                  Your City, FL 33000
                </address>
              </div>
            </div>

            {/* Social */}
            <div className="mt-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4A843] transition-colors text-sm"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            © 2026 Premier Accounting & Tax Specialists and/or its licensors
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Accessibility / Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
