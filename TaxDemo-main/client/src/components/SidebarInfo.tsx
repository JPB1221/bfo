/*
 * SidebarInfo — Right sidebar with contact info, quick actions, and helpful links
 * Design: Clean cards with navy/gold accents
 * DEMO: All contact info is fictional — no real addresses, phone numbers, or emails
 */

export default function SidebarInfo() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Anniversary Badge — SVG-based, no external images */}
      <div className="bg-[#1B4F72] rounded-xl p-5 text-center text-white shadow-lg">
        <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center">
          {/* SVG badge — completely original, no external assets */}
          <svg viewBox="0 0 120 120" className="w-full h-full" aria-label="Premier Accounting — Est. 1978">
            <circle cx="60" cy="60" r="56" fill="none" stroke="#D4A843" strokeWidth="3" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="#D4A843" strokeWidth="1" strokeDasharray="4 3" />
            <text x="60" y="44" textAnchor="middle" fill="#D4A843" fontSize="11" fontFamily="serif" fontWeight="bold">PREMIER</text>
            <text x="60" y="60" textAnchor="middle" fill="#ffffff" fontSize="22" fontFamily="serif" fontWeight="bold">48</text>
            <text x="60" y="72" textAnchor="middle" fill="#D4A843" fontSize="8" fontFamily="sans-serif" letterSpacing="1">YEARS</text>
            <text x="60" y="86" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="sans-serif">EST. 1978</text>
          </svg>
        </div>
        <div className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Premier Accounting
        </div>
        <div className="text-white text-sm font-medium" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Serving clients since 1978
        </div>
      </div>

      {/* Enrolled Agent Badge */}
      <div className="bg-white rounded-xl p-5 border-2 border-[#1B4F72] shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1B4F72] flex items-center justify-center">
            <svg className="w-7 h-7 text-[#D4A843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <div className="text-[#1B4F72] font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Enrolled Agent
            </div>
            <div className="text-gray-500 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Admitted to Practice Before the IRS
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="space-y-3">
        <a
          href="https://www.irs.gov/refunds"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#EBF5FB] hover:bg-[#1B4F72] text-[#1B4F72] hover:text-white rounded-xl p-4 transition-all duration-200 group shadow-sm border border-[#1B4F72]/10"
        >
          <div className="w-10 h-10 rounded-lg bg-[#1B4F72] group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Where is my refund?</div>
            <div className="text-xs opacity-70" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Check your IRS refund status</div>
          </div>
          <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-3 bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] rounded-xl p-4 transition-all duration-200 group shadow-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#1B4F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Request an Appointment</div>
            <div className="text-xs opacity-70" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Schedule your consultation</div>
          </div>
          <svg className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Contact Info — all fictional */}
      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
        <h4
          className="text-[#1B4F72] text-lg font-semibold mb-4 pb-2 border-b border-[#D4A843]/30"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Contact Us
        </h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Phone</div>
              <a href="tel:5551234567" className="text-[#1B4F72] font-semibold hover:text-[#D4A843] transition-colors" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                (555) 123-4567
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Fax</div>
              <span className="text-[#374151] text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>(555) 123-4568</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Email</div>
              <a href="mailto:info@premieraccounting.com" className="text-[#1B4F72] font-semibold hover:text-[#D4A843] transition-colors text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                info@premieraccounting.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Address</div>
              <address className="not-italic text-[#374151] text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                123 Main Street, Suite 200<br />
                Your City, FL 33000
              </address>
            </div>
          </div>
        </div>

        {/* Generic social link */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-[#1877F2] hover:text-[#1B4F72] transition-colors text-sm font-semibold"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Find us on Facebook
        </a>
      </div>

      {/* Helpful Links */}
      <div id="resources" className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
        <h4
          className="text-[#1B4F72] text-lg font-semibold mb-4 pb-2 border-b border-[#D4A843]/30"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
                className="flex items-center gap-2 text-[#1B4F72] hover:text-[#D4A843] text-sm transition-colors group"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <svg className="w-3.5 h-3.5 text-[#D4A843] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="group-hover:underline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Translate */}
      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
        <h4
          className="text-[#1B4F72] text-lg font-semibold mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Translate
        </h4>
        <div id="google_translate_element" />
        <p className="text-gray-500 text-xs mt-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Use your browser's built-in translation feature to view this page in your preferred language.
        </p>
      </div>
    </aside>
  );
}
