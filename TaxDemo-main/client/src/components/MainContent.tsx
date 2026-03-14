/*
 * MainContent — Family story section with sidebar
 * Design: Two-column layout, warm white background
 * Left: video + story text | Right: badges, contact, links, translate
 * DEMO: All content is generic placeholder — no real firm details
 */

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const STORY_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80",
    year: "1965",
    label: "Firm Founder",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80",
    year: "1978",
    label: "First Office",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop&q=80",
    year: "1995",
    label: "Growing Team",
  },
];

function StoryPhoto({ src, year, label }: { src: string; year: string; label: string }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md">
      <img
        src={src}
        alt={label}
        className="w-full h-44 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <span className="text-[#D4A843] text-xs font-bold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{year}</span>
        <p className="text-white text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{label}</p>
      </div>
    </div>
  );
}

export default function MainContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          {/* Main content — 2/3 width */}
          <div className="lg:col-span-2">
            {/* Section header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-[#D4A843]" />
                <span className="text-[#D4A843] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Est. 1965
                </span>
              </div>
              <h2 className="text-[#1B4F72] text-4xl font-semibold leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                A Family Business Since 1965!
              </h2>
            </div>

            {/* Video section — branded intro card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 bg-[#1B4F72]">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/Yw6u6YkTgQ4?rel=0&modestbranding=1&color=white"
                  title="Premier Accounting — About Our Firm"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-[#1B4F72]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#D4A843]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-white/80 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    Premier Accounting &amp; Tax Specialists — Serving Our Community Since 1965
                  </span>
                </div>
                <button
                  onClick={() => toast.info("Share feature coming soon")}
                  className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Our Story */}
            <div className="mb-8">
              <h3 className="text-[#1B4F72] text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Our Story
              </h3>

              {/* Story photos */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {STORY_PHOTOS.map((photo) => (
                  <StoryPhoto key={photo.year} {...photo} />
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#D4A843] pl-5 py-2 mb-6 bg-[#1B4F72]/5 rounded-r-lg">
                <p className="text-[#1B4F72] text-lg italic font-medium leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  "We believe that true financial guidance goes beyond the numbers—it's about understanding the people behind them."
                </p>
              </blockquote>

              <div className="space-y-4 text-[#374151] text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                <p>
                  Founded in 1978 by William A. Hargrove, Premier Accounting began with a simple vision: to provide everyday people and local businesses with the same caliber of financial strategy usually reserved for large corporations. William started the firm from a small storefront office, armed with a ledger, a calculator, and an unwavering commitment to his clients' success.
                </p>
                <p>
                  As the financial landscape grew more complex over the decades, so did our firm. We expanded our team to include specialized CPAs, strategic tax planners, and business consultants. Yet, despite our growth, we never lost sight of our founder's original philosophy. We still take the time to sit down with every client, listen to their unique challenges, and craft personalized strategies that protect their assets and foster growth.
                </p>
                <p>
                  Today, Premier Accounting stands as a pillar of stability in the community. Whether you are navigating your first year as a small business owner, planning for retirement, or managing a complex corporate tax structure, our team is here to guide you. We handle the complexities of the tax code so you can focus on what matters most—your family, your business, and your future.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar — 1/3 width */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Anniversary Badge */}
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#0d2d45] border-4 border-[#D4A843] flex flex-col items-center justify-center shadow-xl">
                <span className="text-[#D4A843] text-5xl font-black leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>60</span>
                <span className="text-white text-xs font-bold tracking-widest uppercase mt-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Years</span>
                <span className="text-[#D4A843]/80 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>of Excellence</span>
              </div>
            </div>

            {/* Enrolled Agent badge */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex items-center gap-4">
              <div className="flex-shrink-0 border-2 border-[#1B4F72] rounded p-2 text-center">
                <div className="text-[#1B4F72] text-[9px] font-bold leading-tight" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  ADMITTED TO<br />PRACTICE<br />BEFORE THE IRS
                </div>
              </div>
              <div>
                <div className="text-[#1B4F72] text-2xl font-black leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ENROLLED
                </div>
                <div className="text-[#1B4F72] text-2xl font-black leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  AGENT
                </div>
              </div>
            </div>

            {/* Quick action links */}
            <div className="space-y-3">
              <a
                href="https://www.irs.gov/refunds"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1B4F72] hover:bg-[#154060] text-white rounded-xl p-4 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>IRS Portal</div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Where is my refund?</div>
                    <div className="text-white/60 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Click here</div>
                  </div>
                  <svg className="w-5 h-5 text-[#D4A843] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>

              <a
                href="#contact"
                className="block bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] rounded-xl p-4 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#1B4F72]/70 text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Schedule</div>
                    <div className="text-[#1B4F72] font-semibold text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Request An Appointment</div>
                    <div className="text-[#1B4F72]/70 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>Click here</div>
                  </div>
                  <svg className="w-5 h-5 text-[#1B4F72] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="text-[#1B4F72] font-bold text-sm mb-3 uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="text-gray-500 text-xs">Phone:</span>
                    <a href="tel:5551234567" className="block text-[#1B4F72] font-semibold hover:text-[#D4A843] transition-colors">(555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <div>
                    <span className="text-gray-500 text-xs">Fax:</span>
                    <span className="block text-[#374151]">(555) 123-4568</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <span className="text-gray-500 text-xs">Email:</span>
                    <a href="mailto:info@premieraccounting.com" className="block text-[#1B4F72] hover:text-[#D4A843] transition-colors break-all">info@premieraccounting.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-gray-500 text-xs">Address:</span>
                    <address className="not-italic text-[#374151] text-xs leading-relaxed">
                      123 Main Street, Suite 200<br />
                      Your City, FL 33000
                    </address>
                  </div>
                </div>
              </div>

              {/* Facebook link */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-[#1B4F72] hover:text-[#3b5998] transition-colors text-sm font-semibold"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                Find us on Facebook
              </a>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="text-[#1B4F72] font-bold text-sm mb-3 uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Search
              </h4>
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); toast.info("Search feature coming soon"); }}>
                <input
                  type="search"
                  placeholder="Search…"
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-1 focus:ring-[#1B4F72]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  className="bg-[#1B4F72] hover:bg-[#154060] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Search
                </button>
              </form>
            </div>

            {/* Helpful Links */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="text-[#1B4F72] font-bold text-sm mb-3 uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Helpful Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "IRS Circular 230", href: "https://www.irs.gov/pub/irs-pdf/pcir230.pdf" },
                  { label: "IRS Publications", href: "https://www.irs.gov/forms-pubs" },
                  { label: "Record Retention Guide", href: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" },
                  { label: "Tax Due Dates", href: "https://www.irs.gov/businesses/small-businesses-self-employed/online-learning-and-educational-products" },
                  { label: "Tax Rates", href: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2025" },
                  { label: "Where is my refund?", href: "https://www.irs.gov/refunds" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1B4F72] hover:text-[#D4A843] transition-colors text-sm"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      <svg className="w-3.5 h-3.5 text-[#D4A843] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Translate */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
              <h4 className="text-[#1B4F72] font-bold text-sm mb-2 uppercase tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Translate
              </h4>
              <p className="text-gray-500 text-xs mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Select a language to view this page in your preferred language.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { lang: "Spanish", code: "es", flag: "🇪🇸" },
                  { lang: "French", code: "fr", flag: "🇫🇷" },
                  { lang: "Portuguese", code: "pt", flag: "🇧🇷" },
                  { lang: "Creole", code: "ht", flag: "🇭🇹" },
                ].map((item) => (
                  <a
                    key={item.code}
                    href={`https://translate.google.com/translate?sl=en&tl=${item.code}&u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-[#1B4F72]/5 border border-gray-100 rounded-lg text-xs text-[#1B4F72] font-medium transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    <span>{item.flag}</span>
                    {item.lang}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
