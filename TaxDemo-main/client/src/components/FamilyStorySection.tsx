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

      {/* Video embed */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10 bg-[#1B4F72]">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/placeholder_demo_video"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Premier Accounting Demo — Our Story"
          />
        </div>
        <div className="px-4 py-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#D4A843] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
