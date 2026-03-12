/* =============================================================
   CONTACT SECTION — Industrial Brutalist Precision
   Diagonal split layout, contact form, business info
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend or email service
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    backgroundColor: "oklch(0.22 0.01 260)",
    border: "1px solid oklch(0.30 0.01 260)",
    borderRadius: "2px",
    color: "white",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 600,
    fontSize: "0.72rem",
    color: "oklch(0.62 0.19 42)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "6px",
  };

  return (
    <section
      id="contact"
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
            05 — Get in Touch
          </div>
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
            Request a
            <br />
            <span style={{ color: "oklch(0.62 0.19 42)" }}>Free Quote</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info — left */}
          <div
            className="lg:col-span-2 space-y-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                color: "oklch(0.60 0.008 260)",
                lineHeight: 1.75,
              }}
            >
              Ready to restore and protect your concrete structure? Contact us today
              for a free consultation and estimate. We serve the entire region
              with prompt, professional service.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "(000) 000-0000",
                  href: "tel:0000000000",
                },
                {
                  icon: <Phone size={18} />,
                  label: "Alternate",
                  value: "(000) 000-0001",
                  href: "tel:0000000001",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Address",
                  value: "123 Main Street, Suite 1\nYour City, State 00000",
                  href: "https://maps.google.com/",
                },
                {
                  icon: <Clock size={18} />,
                  label: "Hours",
                  value: "Mon–Fri: 8:00 AM – 4:30 PM\nSat–Sun: By Appointment",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    style={{
                      color: "oklch(0.62 0.19 42)",
                      backgroundColor: "oklch(0.62 0.19 42 / 0.12)",
                      padding: "10px",
                      borderRadius: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        color: "oklch(0.62 0.19 42)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "white",
                          textDecoration: "none",
                          whiteSpace: "pre-line",
                          display: "block",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.62 0.19 42)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "white",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* License info */}
            <div
              className="p-4"
              style={{
                border: "1px solid oklch(0.28 0.01 260)",
                borderLeft: "3px solid oklch(0.62 0.19 42)",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  color: "oklch(0.62 0.19 42)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                State License
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "white",
                  letterSpacing: "0.04em",
                }}
              >
                XXX-000-0000
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.72rem",
                  color: "oklch(0.52 0.012 260)",
                  marginTop: "2px",
                }}
              >
                Certified General Contractor — Active
              </div>
            </div>
          </div>

          {/* Contact form — right */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12 h-full"
                style={{
                  backgroundColor: "oklch(0.18 0.01 260)",
                  border: "1px solid oklch(0.28 0.01 260)",
                  borderRadius: "2px",
                  minHeight: "400px",
                }}
              >
                <CheckCircle size={48} style={{ color: "oklch(0.62 0.19 42)", marginBottom: "1rem" }} />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.95rem",
                    color: "oklch(0.60 0.008 260)",
                    lineHeight: 1.7,
                    maxWidth: "320px",
                  }}
                >
                  Thank you for reaching out. We'll review your request and get back to you
                  within one business day. For urgent matters, call us directly at{" "}
                  <a
                    href="tel:0000000000"
                    style={{ color: "oklch(0.62 0.19 42)", textDecoration: "none" }}
                  >
                    (000) 000-0000
                  </a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-5"
                style={{
                  backgroundColor: "oklch(0.18 0.01 260)",
                  border: "1px solid oklch(0.28 0.01 260)",
                  borderRadius: "2px",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.19 42)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.30 0.01 260)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(954) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.19 42)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.30 0.01 260)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.19 42)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.30 0.01 260)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service Needed *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.19 42)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.30 0.01 260)")}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="concrete-restoration">Concrete Restoration</option>
                    <option value="waterproofing">Waterproofing</option>
                    <option value="flatwork">Flatwork Concrete</option>
                    <option value="foundations">Foundations</option>
                    <option value="paving">Paving & Driveways</option>
                    <option value="general">General Contracting</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please describe your project, location, and any specific concerns..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.62 0.19 42)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.30 0.01 260)")}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 btn-sweep"
                  style={{
                    backgroundColor: "oklch(0.62 0.19 42)",
                    color: "white",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                  }}
                >
                  <Send size={16} />
                  Send Request
                </button>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.72rem",
                    color: "oklch(0.40 0.01 260)",
                    textAlign: "center",
                    letterSpacing: "0.02em",
                  }}
                >
                  We typically respond within 1 business day. For immediate assistance,
                  call (000) 000-0000.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
