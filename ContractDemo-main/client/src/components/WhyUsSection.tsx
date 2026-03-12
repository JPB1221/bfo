/* =============================================================
   WHY US SECTION — Industrial Brutalist Precision
   Concrete-textured background, bold reasons with icons
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, ClipboardList, Users, Zap, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Fully Licensed & Insured",
    description:
      "We hold a state-issued Certified General Contractor license, fully bonded and insured. Every project is permitted and inspected to code.",
  },
  {
    icon: <Award size={32} />,
    title: "Top-Rated Contractor",
    description:
      "Our contractor rating ranks us in the top tier of licensed contractors in the state — a testament to our consistent quality and reliability.",
  },
  {
    icon: <ClipboardList size={32} />,
    title: "Full Project Management",
    description:
      "From permit acquisition to final inspection, we manage every aspect of your project. No subcontractor confusion — one point of contact throughout.",
  },
  {
    icon: <Zap size={32} />,
    title: "Regional Climate Expertise",
    description:
      "We understand the unique environmental challenges of the region. Our waterproofing and restoration systems are selected for maximum durability against local climate conditions.",
  },
  {
    icon: <Users size={32} />,
    title: "HOA & Condo Specialists",
    description:
      "Extensive experience working with HOAs, condo associations, and property management companies. We navigate the approval process smoothly and minimize disruption to residents.",
  },
  {
    icon: <MapPin size={32} />,
    title: "Locally Based, Regionally Trusted",
    description:
      "Based locally, we serve the surrounding metro area. Fast response times and deep knowledge of local building codes and requirements.",
  },
];

export default function WhyUsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "oklch(0.93 0.005 80)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            oklch(0.86 0.006 80) 40px,
            oklch(0.86 0.006 80) 41px
          )`,
        }}
      />

      <div className="container relative">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div
            className="section-number mb-3 inline-block"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            — Why Choose Us —
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "oklch(0.18 0.01 260)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 0.95,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            The
            <br />
            <span style={{ color: "oklch(0.62 0.19 42)" }}>Difference</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="p-6 group"
              style={{
                backgroundColor: "white",
                border: "1px solid oklch(0.86 0.006 80)",
                borderRadius: "2px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: "oklch(0.62 0.19 42)",
                }}
              />

              {/* Icon */}
              <div
                className="mb-4"
                style={{
                  color: "oklch(0.62 0.19 42)",
                  display: "inline-flex",
                  padding: "10px",
                  backgroundColor: "oklch(0.97 0.008 42)",
                  borderRadius: "2px",
                }}
              >
                {reason.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "oklch(0.18 0.01 260)",
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.875rem",
                  color: "oklch(0.42 0.012 260)",
                  lineHeight: 1.7,
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
