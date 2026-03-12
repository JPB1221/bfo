/* =============================================================
   HERO SECTION — Industrial Brutalist Precision
   Full-bleed photo, large offset headline, orange CTA, trust badges
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, ShieldCheck, Award, Wrench } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-hero-K2bjJDFuv4hBpkpFNcR4AX.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="S.T.R. Concrete Restoration — Fort Lauderdale FL"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.45)" }}
        />
        {/* Gradient overlay — bottom to top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.14 0.01 260 / 0.98) 0%, oklch(0.14 0.01 260 / 0.6) 40%, transparent 70%)",
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Section label */}
          <div
            className="section-number mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            Your City, State — Est. [Year]
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              lineHeight: 0.92,
              color: "white",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Concrete
            <br />
            <span style={{ color: "oklch(0.62 0.19 42)" }}>Restoration</span>
            <br />
            Experts
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "oklch(0.78 0.008 80)",
              marginTop: "1.5rem",
              maxWidth: "520px",
              lineHeight: 1.65,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            }}
          >
            Your region's trusted licensed general contractor for concrete restoration,
            waterproofing, flatwork, and structural repair. Serving residential and
            commercial clients with quality craftsmanship.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mt-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            <a
              href="tel:0000000000"
              className="flex items-center gap-2 px-7 py-4 btn-sweep"
              style={{
                backgroundColor: "oklch(0.62 0.19 42)",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
              }}
            >
              <Phone size={18} />
              (000) 000-0000
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-7 py-4"
              style={{
                border: "2px solid oklch(0.62 0.19 42)",
                color: "oklch(0.62 0.19 42)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.62 0.19 42)";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.62 0.19 42)";
              }}
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6 mt-10 pt-8"
            style={{
              borderTop: "1px solid oklch(1 0 0 / 0.15)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease 0.65s",
            }}
          >
            {[
              { icon: <ShieldCheck size={18} />, label: "Licensed & Insured", sub: "Fully Bonded & Certified" },
              { icon: <Award size={18} />, label: "Top Rated Contractor", sub: "Consistent Quality & Reliability" },
              { icon: <Wrench size={18} />, label: "10+ Years Experience", sub: "Proven Track Record" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div
                  style={{
                    color: "oklch(0.62 0.19 42)",
                    flexShrink: 0,
                  }}
                >
                  {badge.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "white",
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    {badge.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.72rem",
                      color: "oklch(0.62 0.19 42)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1s ease 1s",
          animation: "bounce 2s infinite",
        }}
      >
        <ChevronDown size={20} style={{ color: "oklch(0.62 0.19 42)" }} />
      </div>
    </section>
  );
}
