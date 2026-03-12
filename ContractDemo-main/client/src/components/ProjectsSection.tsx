/* =============================================================
   PROJECTS SECTION — Industrial Brutalist Precision
   Notable permit-based project showcase with dark background
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { MapPin, DollarSign, Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    address: "Oceanfront Condominium Complex",
    city: "Metro Area",
    scope: "Exterior Concrete Restoration, Waterproofing & Painting",
    value: "$480,000",
    year: "2025",
    status: "Filed",
    permit: "BLD-GEN-00001",
    type: "Structural",
  },
  {
    address: "Waterfront Residential Tower",
    city: "Metro Area",
    scope: "Concrete Restoration & Waterproofing",
    value: "$710,000",
    year: "2023",
    status: "Complete",
    permit: "BLD-CRES-00002",
    type: "Concrete Restoration",
  },
  {
    address: "Marina District Condo Building",
    city: "Metro Area",
    scope: "Concrete Restoration, Railings, Waterproofing & Painting",
    value: "$74,000",
    year: "2023",
    status: "Issued",
    permit: "BLD-CRES-00003",
    type: "Concrete Restoration",
  },
  {
    address: "Coastal Apartment Complex",
    city: "Metro Area",
    scope: "Concrete Restoration, Railings, Waterproofing & Painting",
    value: "$71,000",
    year: "2023",
    status: "Issued",
    permit: "BLD-CRES-00004",
    type: "Concrete Restoration",
  },
  {
    address: "Luxury Condo — Balcony Restoration",
    city: "Metro Area",
    scope: "Balcony Concrete Restoration & Waterproofing",
    value: "$18,000",
    year: "2023",
    status: "Issued",
    permit: "BLD-CRES-00005",
    type: "Concrete Restoration",
  },
  {
    address: "Commercial Parking Structure",
    city: "Metro Area",
    scope: "Concrete Restoration, Railings, Waterproofing & Painting",
    value: "$66,000",
    year: "2023",
    status: "Complete",
    permit: "BLD-CRES-00006",
    type: "Concrete Restoration",
  },
];

const statusColor: Record<string, string> = {
  Complete: "oklch(0.45 0.15 145)",
  Issued: "oklch(0.55 0.18 200)",
  Filed: "oklch(0.62 0.19 42)",
  Approved: "oklch(0.50 0.18 145)",
};

export default function ProjectsSection() {
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
      id="projects"
      ref={ref}
      style={{ backgroundColor: "oklch(0.14 0.01 260)", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div
            className="section-number mb-3"
            style={{
              color: "oklch(0.62 0.19 42)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          >
            04 — Our Work
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "white",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.95,
                borderLeft: "4px solid oklch(0.62 0.19 42)",
                paddingLeft: "1rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              Notable
              <br />
              <span style={{ color: "oklch(0.62 0.19 42)" }}>Projects</span>
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.95rem",
                color: "oklch(0.60 0.008 260)",
                maxWidth: "380px",
                lineHeight: 1.7,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.2s",
              }}
            >
              A selection of our permitted projects across the region.
              Over 100 projects completed with a typical project value of $70,000+.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.permit}
              className="p-5 relative overflow-hidden"
              style={{
                backgroundColor: "oklch(0.18 0.01 260)",
                border: "1px solid oklch(0.24 0.01 260)",
                borderRadius: "2px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              {/* Type badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.65rem",
                    color: "oklch(0.62 0.19 42)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backgroundColor: "oklch(0.62 0.19 42 / 0.12)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                  }}
                >
                  {project.type}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.65rem",
                    color: statusColor[project.status] || "white",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <CheckCircle size={10} />
                  {project.status}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 mb-2">
                <MapPin size={14} style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "white",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {project.address}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.75rem",
                      color: "oklch(0.52 0.012 260)",
                    }}
                  >
                    {project.city}
                  </div>
                </div>
              </div>

              {/* Scope */}
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.82rem",
                  color: "oklch(0.65 0.008 260)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid oklch(0.24 0.01 260)",
                }}
              >
                {project.scope}
              </p>

              {/* Meta row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <DollarSign size={13} style={{ color: "oklch(0.62 0.19 42)" }} />
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "oklch(0.62 0.19 42)",
                    }}
                  >
                    {project.value}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} style={{ color: "oklch(0.45 0.01 260)" }} />
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.75rem",
                      color: "oklch(0.45 0.01 260)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Permit number */}
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.65rem",
                  color: "oklch(0.35 0.01 260)",
                  marginTop: "0.5rem",
                  letterSpacing: "0.04em",
                }}
              >
                Permit: {project.permit}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-8 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.85rem",
              color: "oklch(0.45 0.01 260)",
              letterSpacing: "0.03em",
            }}
          >
            100+ permitted projects completed across the region.
            Project data sourced from public building permit records.
          </p>
        </div>
      </div>
    </section>
  );
}
