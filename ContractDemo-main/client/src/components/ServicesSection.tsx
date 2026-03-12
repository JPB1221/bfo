/* =============================================================
   SERVICES SECTION — Industrial Brutalist Precision
   3-column card grid with hover slide-up overlay, section numbers
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Building2, Droplets, Layers, Hammer, RectangleHorizontal, Wrench } from "lucide-react";

const WATERPROOFING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-waterproofing-dTJ3CaCHzqNKcBqUgmNGDG.webp";
const FLATWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-flatwork-9pyptvf8rEAfNUHGVELoTt.webp";
const RESTORATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-restoration-bYxHcZVpbe9fJDz7woXYNC.webp";
const FOUNDATIONS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-foundations-fR3NH8seNztAY8wPgez3L8.webp";
const PAVING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-paving-XcKoYBVJd9WckssNem9Cnt.webp";
const GENERAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ZPwmxekkEKT4zbbsEeYCsE/str-general-contracting-3ogT4K3KaNJvoChrKHZn4d.webp";

const services = [
  {
    number: "01",
    icon: <Building2 size={28} />,
    title: "Concrete Restoration",
    description:
      "Comprehensive structural concrete restoration for residential and commercial buildings. We repair spalling, cracking, delamination, and deteriorated concrete on balconies, columns, beams, and facades.",
    details: [
      "Balcony & deck restoration",
      "Column & beam repair",
      "Facade & exterior restoration",
      "Structural spall repair",
      "Railing replacement",
    ],
    image: RESTORATION_IMG,
  },
  {
    number: "02",
    icon: <Droplets size={28} />,
    title: "Waterproofing",
    description:
      "Advanced waterproofing systems to protect your structure from Florida's harsh coastal environment. We apply industry-leading coatings and membranes to prevent water intrusion and long-term damage.",
    details: [
      "Balcony & deck waterproofing",
      "Exterior wall coatings",
      "Roof deck waterproofing",
      "Expansion joint sealing",
      "Penetrating sealers",
    ],
    image: WATERPROOFING_IMG,
  },
  {
    number: "03",
    icon: <Layers size={28} />,
    title: "Flatwork Concrete",
    description:
      "Expert flatwork concrete installation for driveways, sidewalks, parking lots, pool decks, and catwalks. Our team delivers smooth, durable, and properly finished concrete surfaces.",
    details: [
      "Driveways & parking lots",
      "Sidewalks & walkways",
      "Pool decks",
      "Catwalks & pathways",
      "Concrete toppings",
    ],
    image: FLATWORK_IMG,
  },
  {
    number: "04",
    icon: <Hammer size={28} />,
    title: "Foundations",
    description:
      "Structural foundation work including new pours, repairs, and reinforcement. We ensure the integrity of your building's base with precision concrete work and proper engineering compliance.",
    details: [
      "Foundation pours",
      "Foundation repair",
      "Slab-on-grade",
      "Grade beams",
      "Structural reinforcement",
    ],
    image: FOUNDATIONS_IMG,
  },
  {
    number: "05",
    icon: <RectangleHorizontal size={28} />,
    title: "Paving & Driveways",
    description:
      "Professional paving and driveway installation and repair services. From residential driveways to commercial parking areas, we deliver durable, well-finished concrete paving solutions.",
    details: [
      "Concrete driveway installation",
      "Driveway replacement",
      "Commercial paving",
      "Curb & gutter work",
      "ADA-compliant surfaces",
    ],
    image: PAVING_IMG,
  },
  {
    number: "06",
    icon: <Wrench size={28} />,
    title: "General Contracting",
    description:
      "As a licensed General Contractor, we manage complete restoration projects from permitting through final inspection. We handle all aspects of your project with professionalism.",
    details: [
      "Full project management",
      "Permit acquisition",
      "Subcontractor coordination",
      "Code compliance",
      "Final inspections",
    ],
    image: GENERAL_IMG,
  },
];

function ServiceCard({ service, index, visible }: { service: typeof services[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden group"
      style={{
        backgroundColor: "white",
        border: "1px solid oklch(0.86 0.006 80)",
        borderRadius: "2px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s ease`,
        boxShadow: hovered ? "0 12px 40px oklch(0 0 0 / 0.12)" : "0 2px 8px oklch(0 0 0 / 0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image (if available) */}
      {service.image && (
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 40%, oklch(0 0 0 / 0.4))",
            }}
          />
        </div>
      )}

      {/* No image — colored top bar */}
      {!service.image && (
        <div
          style={{
            height: "6px",
            backgroundColor: "oklch(0.62 0.19 42)",
          }}
        />
      )}

      {/* Card content */}
      <div className="p-6">
        {/* Number + Icon row */}
        <div className="flex items-start justify-between mb-4">
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "2.5rem",
              color: "oklch(0.92 0.004 80)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {service.number}
          </span>
          <div
            style={{
              color: "oklch(0.62 0.19 42)",
              padding: "8px",
              backgroundColor: "oklch(0.97 0.008 42)",
              borderRadius: "2px",
            }}
          >
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: "oklch(0.18 0.01 260)",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "0.875rem",
            color: "oklch(0.42 0.012 260)",
            lineHeight: 1.7,
            marginBottom: "1rem",
          }}
        >
          {service.description}
        </p>

        {/* Details list */}
        <ul className="space-y-1.5">
          {service.details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-2"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.8rem",
                color: "oklch(0.35 0.01 260)",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "1px",
                  backgroundColor: "oklch(0.62 0.19 42)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          backgroundColor: "oklch(0.62 0.19 42)",
          width: hovered ? "100%" : "0%",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}

export default function ServicesSection() {
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
      id="services"
      ref={ref}
      style={{ backgroundColor: "oklch(0.97 0.003 80)", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div
            className="section-number mb-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            02 — What We Do
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="border-accent-left"
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
              Our
              <br />
              <span style={{ color: "oklch(0.62 0.19 42)" }}>Services</span>
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                color: "oklch(0.42 0.012 260)",
                maxWidth: "400px",
                lineHeight: 1.7,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.2s",
              }}
            >
              From structural concrete restoration to waterproofing and flatwork,
              We deliver expert craftsmanship on every project across the region.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
