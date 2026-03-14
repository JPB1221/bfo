/* =============================================================
   FOOTER — Industrial Brutalist Precision
   Dark charcoal footer with orange accents and license info
   ============================================================= */

import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.10 0.008 260)" }}>
      {/* CTA band */}
      <div
        style={{
          backgroundColor: "oklch(0.62 0.19 42)",
          padding: "2rem 0",
        }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.6rem",
                color: "white",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Ready to Start Your Project?
            </div>
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9rem",
                color: "oklch(1 0 0 / 0.8)",
                marginTop: "4px",
              }}
            >
              Contact us today for a free consultation and estimate.
            </div>
          </div>
          <a
            href="tel:0000000000"
            className="flex items-center gap-2 px-8 py-3 whitespace-nowrap"
            style={{
              backgroundColor: "white",
              color: "oklch(0.62 0.19 42)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.14 0.01 260)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "white";
              (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.62 0.19 42)";
            }}
          >
            <Phone size={16} />
            (000) 000-0000
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "white",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                C.R.S.
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.6rem",
                  color: "oklch(0.62 0.19 42)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Restoration Specialists
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.82rem",
                color: "oklch(0.45 0.01 260)",
                lineHeight: 1.7,
              }}
            >
              Licensed General Contractor specializing in concrete restoration,
              waterproofing, and flatwork throughout the region.
            </p>
            <div
              className="mt-4 inline-block px-3 py-1.5"
              style={{
                border: "1px solid oklch(0.28 0.01 260)",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.65rem",
                  color: "oklch(0.62 0.19 42)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                License #XXX-000-0000
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "oklch(0.62 0.19 42)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Concrete Restoration",
                "Waterproofing",
                "Flatwork Concrete",
                "Foundations",
                "Paving & Driveways",
                "General Contracting",
              ].map((service) => (
                <li key={service}>
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      color: "oklch(0.52 0.01 260)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        backgroundColor: "oklch(0.62 0.19 42)",
                        borderRadius: "1px",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "oklch(0.62 0.19 42)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      color: "oklch(0.52 0.01 260)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.52 0.01 260)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "oklch(0.62 0.19 42)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={14} style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a
                    href="tel:9547882533"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      color: "oklch(0.52 0.01 260)",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.52 0.01 260)")}
                  >
                    (000) 000-0000
                  </a>
                  <a
                    href="tel:0000000001"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      color: "oklch(0.52 0.01 260)",
                      textDecoration: "none",
                      display: "block",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.52 0.01 260)")}
                  >
                    (000) 000-0001
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: "2px" }} />
                <a
                  href="https://maps.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.52 0.01 260)",
                    textDecoration: "none",
                    lineHeight: 1.5,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.52 0.01 260)")}
                >
                  123 Main Street, Suite 1<br />
                  Your City, State 00000
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: "2px" }} />
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.52 0.01 260)",
                    lineHeight: 1.5,
                  }}
                >
                  Mon–Fri: 8:00 AM – 4:30 PM<br />
                  Sat–Sun: By Appointment
                </div>
              </div>
            </div>

            {/* External profile links */}
            <div className="mt-5 space-y-2">
              <a
                href="#"
                className="flex items-center gap-1.5"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.75rem",
                  color: "oklch(0.40 0.01 260)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.01 260)")}
              >
                <ExternalLink size={11} />
                Contractor Profile
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.75rem",
                  color: "oklch(0.40 0.01 260)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.40 0.01 260)")}
              >
                <ExternalLink size={11} />
                Verify License (DBPR)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid oklch(0.18 0.01 260)",
          padding: "1.25rem 0",
        }}
      >
        <div
          className="container flex flex-col md:flex-row items-center justify-between gap-2"
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.72rem",
              color: "oklch(0.35 0.01 260)",
              letterSpacing: "0.03em",
            }}
          >
            © {currentYear} Concrete Pro. All rights reserved.
            License #XXX-000-0000
          </p>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.72rem",
              color: "oklch(0.30 0.01 260)",
              letterSpacing: "0.03em",
            }}
          >
            Serving Residential & Commercial Clients Region-Wide
          </p>
        </div>
      </div>
    </footer>
  );
}
