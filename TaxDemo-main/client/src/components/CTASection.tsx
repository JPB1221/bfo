/*
 * CTASection — "Ease your mind. Get in touch today." call to action
 * Design: Sunset/warm background image, centered text, gold button
 */

import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/Everglades1_ab21cca9.jpg'), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=600&fit=crop&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2d45]/70 via-[#1B4F72]/60 to-[#0d2d45]/80" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-16 bg-[#D4A843]/60" />
          <span
            className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Get in Touch
          </span>
          <div className="h-px w-16 bg-[#D4A843]/60" />
        </div>

        <h2
          className="text-white text-4xl sm:text-5xl font-semibold mb-4 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Ease your mind.
          <br />
          <em className="font-normal">Get in touch today.</em>
        </h2>

        <p
          className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Contact the professionals at Premier Accounting & Tax Specialists. We are here to help you achieve your financial goals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@premieraccounting.com"
            className="inline-flex items-center gap-2 bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] font-bold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </a>
          <a
            href="tel:5551234567"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 border border-white/30 text-base"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
