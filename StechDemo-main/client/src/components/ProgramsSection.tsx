/* ==========================================================================
   COMPONENT: ProgramsSection
   Design: Civic Warmth — 3-column card grid, teal accent borders, icon headers
   ========================================================================== */

import { ArrowRight, Flame, Car, Zap, Monitor, HeartPulse, BarChart3 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const programs = [
  {
    id: 1,
    icon: Flame,
    title: "Welding Technology",
    description:
      "Master MIG, TIG, and stick welding techniques used in construction, manufacturing, and pipeline industries. Includes AWS certification prep.",
    badge: "High Demand",
    color: "#E8A020",
    href: "#programs",
  },
  {
    id: 2,
    icon: Car,
    title: "Automotive Technology",
    description:
      "Diagnose and repair modern vehicles using industry-standard tools. ASE certification preparation included with hands-on shop time.",
    badge: "ASE Certified",
    color: "#0D4F5C",
    href: "#programs",
  },
  {
    id: 3,
    icon: Zap,
    title: "Electrical Apprenticeship",
    description:
      "Train for a career as a licensed electrician. Covers residential, commercial, and industrial wiring with NEC code compliance.",
    badge: "Apprenticeship",
    color: "#E8A020",
    href: "#programs",
  },
  {
    id: 4,
    icon: Monitor,
    title: "Information Technology",
    description:
      "Build skills in networking, cybersecurity, cloud computing, and help desk support. CompTIA A+, Network+, and Security+ prep included.",
    badge: "Growing Field",
    color: "#0D4F5C",
    href: "#programs",
  },
  {
    id: 5,
    icon: HeartPulse,
    title: "Nursing / Healthcare",
    description:
      "Prepare for a career in patient care through our CNA, Medical Assistant, and Practical Nursing programs in a state-of-the-art simulation lab.",
    badge: "NCLEX Prep",
    color: "#E8A020",
    href: "#programs",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Business & Accounting",
    description:
      "Develop practical skills in bookkeeping, QuickBooks, business communications, and office management for today's workplace.",
    badge: "Flexible Schedule",
    color: "#0D4F5C",
    href: "#programs",
  },
];

export default function ProgramsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container" ref={ref}>
        {/* Section header */}
        <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="section-label mb-4">Academic Programs</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              id="programs-heading"
              className="text-4xl md:text-5xl text-[#1C2B3A] max-w-lg"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Find Your Path to a Career
            </h2>
            <a
              href="#programs"
              className="flex items-center gap-2 text-[#0D4F5C] font-semibold text-sm hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View All Programs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Program cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Available programs"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article
                key={program.id}
                role="listitem"
                className={`program-card bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col shadow-sm hover:border-[#0D4F5C]/20 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Card top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: program.color }}
                  aria-hidden="true"
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${program.color}18` }}
                      aria-hidden="true"
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: program.color }}
                      />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${program.color}15`,
                        color: program.color,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {program.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl text-[#1C2B3A] mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#52647A] text-sm leading-relaxed flex-1 mb-5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {program.description}
                  </p>

                  {/* Learn more link */}
                  <a
                    href={program.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D4F5C] hover:gap-3 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    aria-label={`Learn more about ${program.title}`}
                  >
                    Learn More
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
