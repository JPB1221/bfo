/* ==========================================================================
   COMPONENT: HeroSection
   Design: Civic Warmth — full-bleed image, dark overlay, left-anchored text
   ========================================================================== */

import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&q=80";

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-label="Hero — Build Your Future with Hands-On Technical Education"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Students working in a technical training facility — welding, automotive, and electrical labs"
      />

      {/* Gradient overlay — dark left, lighter right for image visibility */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(13,79,92,0.92) 0%, rgba(13,79,92,0.80) 45%, rgba(13,79,92,0.45) 75%, rgba(13,79,92,0.20) 100%)"
        }}
        aria-hidden="true"
      />

      {/* Decorative amber accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E8A020]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 py-36 md:py-48">
        <div className="max-w-2xl">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="w-8 h-0.5 bg-[#E8A020]" aria-hidden="true" />
            <span
              className="text-amber-300 text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Concept Demo — UX/UI Redesign
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 animate-fade-up delay-100"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Build Your Future with{" "}
            <em className="not-italic text-amber-300">Hands-On</em>{" "}
            Technical Education
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up delay-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Earn industry-recognized credentials in as little as one year.
            Real skills. Real instructors. Real careers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 bg-white text-[#0D4F5C] hover:bg-gray-100 font-bold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#E8A020] text-white hover:bg-[#E8A020] hover:text-[#0D4F5C] font-bold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Apply Now
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20 animate-fade-up delay-400">
            {[
              { value: "40+", label: "Programs Offered" },
              { value: "94%", label: "Job Placement Rate" },
              { value: "12mo", label: "Avg. Program Length" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-amber-300"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/70 text-sm mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#programs"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
        aria-label="Scroll to programs section"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Explore
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
