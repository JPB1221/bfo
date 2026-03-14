/* ==========================================================================
   COMPONENT: FamilyStorySection
   Design: Premier Accounting — fictional firm history, completely original
   ========================================================================== */

import { useEffect, useRef, useState } from "react";

export default function FamilyStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="story"
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
    >
      {/* Section header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-[#D4A843]" />
          <span
            className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Est. 1978
          </span>
        </div>
        <h2
          className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          A Family Business
          <br />
          <em className="font-normal">Since 1978</em>
        </h2>
      </div>

      {/* Our Story */}
      <div className="mb-10">
        <h3
          className="text-[#1B4F72] text-3xl font-semibold mb-6 pb-3 border-b border-[#D4A843]/30"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Story
        </h3>

        {/* Milestone cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Founded", year: "1978" },
            { label: "Expanded", year: "1995" },
            { label: "Today", year: "2026" },
          ].map(({ label, year }) => (
            <div key={label} className="relative rounded-lg overflow-hidden shadow-md bg-[#1B4F72] flex flex-col items-center justify-center py-8">
              <span className="text-[#D4A843] text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{year}</span>
              <span className="text-white/70 text-xs mt-1 tracking-widest uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Story text */}
        <blockquote
          className="text-[#1B4F72] text-xl font-medium italic border-l-4 border-[#D4A843] pl-5 mb-6 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Built on trust, grown through relationships — we've been part of this community for nearly five decades.
        </blockquote>

        <div className="space-y-4 text-[#374151] leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <p>
            Premier Accounting & Tax Specialists was founded in 1978 by William A. Hargrove, a licensed CPA who spent his early career at regional accounting firms before deciding to build something of his own. Starting with a small office and a handful of clients, William's philosophy was simple: treat every client like family, stay available year-round, and never stop learning.
          </p>
          <p>
            Over the decades, the firm grew steadily through referrals and community involvement. In 1995, William's daughter, Catherine Hargrove-Reyes, joined the practice after earning her CPA license, bringing fresh expertise in small business accounting and financial planning. Together, they expanded the firm's services and client base while maintaining the personal touch that had always defined the practice.
          </p>
          <p>
            Today, Premier Accounting serves hundreds of families and businesses across the region. The next generation is actively involved, carrying forward the same commitment to accuracy, integrity, and genuine client care that William established nearly 50 years ago.
          </p>
          <p className="text-[#1B4F72] font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            RELAX. WE ARE HERE TO HELP.
          </p>
        </div>
      </div>

      {/* Services summary */}
      <div id="services" className="bg-[#EBF5FB] rounded-xl p-6 border border-[#1B4F72]/10">
        <h4
          className="text-[#1B4F72] text-xl font-semibold mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Services
        </h4>
        <p className="text-[#374151] text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Premier Accounting & Tax Specialists has been serving individuals and businesses for nearly 50 years. We offer convenient appointments and year-round support. We specialize in:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Personal Income Tax Preparation",
            "Small Business Tax Preparation",
            "Business Entity Formation",
            "Financial Planning & Retirement",
            "Bookkeeping & Write-Up Services",
            "IRS Representation",
            "Financial Statements & Analysis",
            "Payroll Services",
            "Estate & Trust Tax Returns",
            "Nonprofit Tax Compliance",
          ].map((service) => (
            <div key={service} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#D4A843] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[#374151] text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
