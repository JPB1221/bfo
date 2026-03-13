/*
 * FamilyStorySection — Family business story with video and narrative
 * Design: Serif headings, warm gold accents, readable body text
 */

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
            Est. 1961
          </span>
        </div>
        <h2
          className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          A Family Business
          <br />
          <em className="font-normal">Since 1961</em>
        </h2>
      </div>

      {/* Video placeholder */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10 bg-[#1B4F72]">
        <div className="relative w-full flex items-center justify-center" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1B4F72]">
            <svg className="w-14 h-14 text-[#D4A843]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white/60 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Video placeholder — add your video URL here
            </p>
          </div>
        </div>
        <div className="px-4 py-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#D4A843] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-white/80 text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Premier Accounting Demo — Accountants and Income Tax Specialists
          </span>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-10">
        <h3
          className="text-[#1B4F72] text-3xl font-semibold mb-6 pb-3 border-b border-[#D4A843]/30"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Story
        </h3>

        {/* Historic photos row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/1961_311b6c87.jpg", label: "1961" },
            { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/1963_02eea933.jpg", label: "1963" },
            { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/1967_29ab68ff.jpg", label: "1967" },
          ].map(({ src, label }) => (
            <div key={label} className="relative rounded-lg overflow-hidden shadow-md group">
              <div className="aspect-square">
                <img
                  src={src}
                  alt={`Premier Accounting Demo ${label}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
                <span className="text-white/90 text-xs font-semibold" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Story text */}
        <blockquote
          className="text-[#1B4F72] text-xl font-medium italic border-l-4 border-[#D4A843] pl-5 mb-6 leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Fueled by an enterprising spirit that values relationships above all, we're proud to carry on our family business.
        </blockquote>

        <div className="space-y-4 text-[#374151] leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          <p>
            Our firm was founded with a simple belief: every client deserves personal attention and expert guidance. Starting as a small local practice, we built our reputation on trust, accuracy, and a commitment to helping individuals and small businesses navigate complex tax and financial challenges.
          </p>
          <p>
            Over the decades, our team has grown to include certified public accountants, enrolled agents, and financial planners — all united by the same values our founder instilled from day one. Today, we proudly serve multiple generations of families and businesses in our community.
          </p>
          <p className="text-[#1B4F72] font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            JUST ONE LESS THING TO WORRY ABOUT!
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
          Premier Accounting Demo has been filing Income Tax Returns and serving our community for over 60 years while offering convenient appointments at your request. We specialize in:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Personal Income Tax Preparation",
            "Small Business Income Tax Preparation",
            "Business Entity Selection & Incorporation",
            "Certified Financial Planning™",
            "Accounting, Bookkeeping & Write-Up Services",
            "Audits (Non-Certified)",
            "Financial Analysis & Statements",
            "Financial Elder Care",
            "Insurance Services",
            "IRS Representation",
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
