/*
 * ValuesStrip — Three value propositions on dark ocean background
 * Design: Dark navy/ocean background, white text, gold icons
 */

import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Direction",
    body: "Our experts are no strangers to these waters. Allow us to help you navigate complex issues without worry.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Stability",
    body: "Our firm is here when you need us most. We are your trusted partner — through every season of life.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Results",
    body: "We are a results-driven firm and work hard every day to save our clients time and money.",
  },
];

export default function ValuesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/Beach1_d03a43e4.jpg'), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=600&fit=crop&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d2d45]/85" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-[#D4A843]/60" />
            <span
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Why Choose Us
            </span>
            <div className="h-px w-16 bg-[#D4A843]/60" />
          </div>
          <h2
            className="text-white text-4xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Commitment to You
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Icon circle */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-[#D4A843]/50 flex items-center justify-center text-[#D4A843]">
                {value.icon}
              </div>
              <h3
                className="text-white text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {value.title}
              </h3>
              <p
                className="text-white/75 leading-relaxed text-sm"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
