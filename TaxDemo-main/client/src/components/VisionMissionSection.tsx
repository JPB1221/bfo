/*
 * VisionMissionSection — Vision, Mission, and Core Values
 * Design: Clean white section with navy/gold accents, card layout
 */

import { useEffect, useRef, useState } from "react";

const coreValues = [
  {
    title: "Integrity",
    body: "We encourage ethical behavior, and practice being accountable to you, our client.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    body: "We strive to maintain the highest level of customer service and in the stewardship of your personal data.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Effectiveness",
    body: "We seek out new ideas and we adapt to the changing needs of our clients, community and constituents by creating and implementing win-win solutions. We are client results orientated and try to help you to adapt to your ever changing goals and needs… and we are thankful for the opportunities to be of service to you, your family and friends!",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Commitment",
    body: "We are committed to save you time and money, to work with you to develop the best book-keeping strategy for YOU or your company, and to answer your questions at anytime.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function VisionMissionSection() {
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
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#D4A843]/60" />
            <span
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Who We Are
            </span>
            <div className="h-px w-12 bg-[#D4A843]/60" />
          </div>
          <h2
            className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Vision, Mission & Values
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Vision */}
          <div
            className="bg-[#1B4F72] rounded-2xl p-8 text-white transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: "0ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#D4A843]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#D4A843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3
                className="text-[#D4A843] text-2xl font-semibold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Vision
              </h3>
            </div>
            <p
              className="text-white/85 leading-relaxed"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <strong className="text-white">Our Vision is…</strong> to improve your quality of life by saving you tax dollars while forming a personal relationship with our firm as your income tax preparer and partner.
            </p>
          </div>

          {/* Mission */}
          <div
            className="bg-[#EBF5FB] rounded-2xl p-8 border border-[#1B4F72]/10 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: "150ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#1B4F72]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1B4F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3
                className="text-[#1B4F72] text-2xl font-semibold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Mission
              </h3>
            </div>
            <p
              className="text-[#374151] leading-relaxed"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              <strong className="text-[#1B4F72]">Our Mission is to…</strong> help clients become aware of the options available to them, making a difference through strategic financial planning.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3
            className="text-[#1B4F72] text-3xl font-semibold text-center mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#D4A843]/30 transition-all duration-300 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${(i + 2) * 100}ms`,
                  transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B4F72] text-[#D4A843] flex items-center justify-center mb-4 group-hover:bg-[#D4A843] group-hover:text-[#1B4F72] transition-colors">
                  {value.icon}
                </div>
                <h4
                  className="text-[#1B4F72] text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
