/* =============================================================
   ABOUT SECTION — Industrial Brutalist Precision
   Text-only layout: headline + body left, highlights + badge right
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Licensed & Certified General Contractor",
  "Serving residential and commercial clients region-wide",
  "Top-rated among licensed contractors in the state",
  "Specializing in residential & commercial concrete restoration",
  "Experienced with HOA, condo associations & property managers",
  "Permit acquisition and full project management included",
];

export default function AboutSection() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ backgroundColor: "white", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <div className="section-number mb-3">03 — About Us</div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: headline + body */}
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: "oklch(0.18 0.01 260)",
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  marginBottom: "1.5rem",
                }}
              >
              Built on
              <br />
              <span style={{ color: "oklch(0.62 0.19 42)" }}>Craftsmanship</span>
              <br />
              &amp; Trust
              </h2>

              <div
                className="space-y-4"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  color: "oklch(0.38 0.012 260)",
                  lineHeight: 1.75,
                }}
              >
                <p>
                Our company was founded by a licensed General Contractor with a passion for
                structural excellence. Based locally, we have built a reputation for delivering
                high-quality concrete restoration and waterproofing services throughout the region.
                </p>
                <p>
                Our company specializes in restoring and protecting concrete structures —
                from condominium balconies and parking garages to residential driveways and
                commercial facades. We understand the unique challenges that coastal and
                regional climates pose to concrete structures, and we apply proven techniques
                and premium materials to ensure lasting results.
                </p>
                <p>
                Our track record speaks for itself. We have successfully completed over
                100 permitted projects, with individual project values reaching hundreds
                of thousands of dollars. Our consistent quality has earned us a top-rated
                ranking among licensed contractors in the state.
                </p>
              </div>
            </div>

            {/* Right: highlights + license badge */}
            <div>
              <ul className="space-y-3 mb-8">
                {highlights.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(16px)",
                      transition: `opacity 0.5s ease ${0.3 + i * 0.07}s, transform 0.5s ease ${0.3 + i * 0.07}s`,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: "3px" }}
                    />
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.9rem",
                        color: "oklch(0.28 0.01 260)",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* License badge */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3"
                style={{
                  border: "2px solid oklch(0.86 0.006 80)",
                  borderLeft: "4px solid oklch(0.62 0.19 42)",
                  borderRadius: "2px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.7rem",
                      color: "oklch(0.62 0.19 42)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                  State Contractor License
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    color: "oklch(0.18 0.01 260)",
                    letterSpacing: "0.04em",
                  }}
                >
                  #XXX-000-0000
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.7rem",
                    color: "oklch(0.52 0.012 260)",
                  }}
                >
                  Certified General Contractor — Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
