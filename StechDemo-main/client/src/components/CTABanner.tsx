/* ==========================================================================
   COMPONENT: CTABanner
   Design: Civic Warmth — full-bleed campus image with teal overlay, dual CTAs
   ========================================================================== */

import { ArrowRight, CalendarCheck } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CTA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/euod9L2oubRzMbrTSbdEXv/cta-banner-2YvJxi2ysHt6shhPZ5Z8yG.webp";

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="apply"
      aria-labelledby="cta-heading"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CTA_IMAGE})` }}
        role="img"
        aria-label="Aerial view of the STech campus at golden hour"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(13,79,92,0.93) 0%, rgba(13,79,92,0.82) 60%, rgba(13,79,92,0.70) 100%)" }}
        aria-hidden="true"
      />

      {/* Decorative circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#E8A020", transform: "translate(40%, -50%)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10" ref={ref}>
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#E8A020]" aria-hidden="true" />
            <span
              className="text-amber-300 text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Take the First Step
            </span>
            <div className="w-8 h-0.5 bg-[#E8A020]" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Start Your Career Training Today
          </h2>

          {/* Sub-copy */}
          <p
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Applications for Fall 2026 are now open. Seats fill fast — take the
            next step toward a rewarding career.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-[#E8A020] hover:bg-amber-400 text-[#0D4F5C] font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white inline-flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Request Information
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0D4F5C] font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 inline-flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Schedule a Tour
            </a>
          </div>

          {/* Trust note */}
          <p
            className="text-white/50 text-sm mt-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            No application fee. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
