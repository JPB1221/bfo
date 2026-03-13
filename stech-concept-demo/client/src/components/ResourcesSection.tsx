/* ==========================================================================
   COMPONENT: ResourcesSection
   Design: Civic Warmth — three large horizontal panels on cream background
   ========================================================================== */

import { DollarSign, ClipboardList, MapPin, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const resources = [
  {
    icon: DollarSign,
    title: "Financial Aid",
    description:
      "Explore grants, scholarships, and federal aid options. Our financial aid advisors help you find the funding to make your education affordable.",
    cta: "Explore Aid Options",
    href: "#resources",
    color: "#0D4F5C",
    bgColor: "#EBF5F7",
  },
  {
    icon: ClipboardList,
    title: "Admissions",
    description:
      "Ready to start? Our streamlined admissions process gets you enrolled quickly. Apply online, submit transcripts, and register for classes.",
    cta: "Start Your Application",
    href: "#apply",
    color: "#E8A020",
    bgColor: "#FDF5E6",
  },
  {
    icon: MapPin,
    title: "Campus Tours",
    description:
      "See our state-of-the-art labs and facilities in person. Schedule a guided tour with a current student or attend an open house event.",
    cta: "Schedule a Tour",
    href: "#contact",
    color: "#0D4F5C",
    bgColor: "#EBF5F7",
  },
];

export default function ResourcesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FAF8F4" }}
    >
      <div className="container" ref={ref}>
        {/* Section header */}
        <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="section-label mb-4">Student Resources</div>
          <h2
            id="resources-heading"
            className="text-4xl md:text-5xl text-[#1C2B3A] max-w-lg"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Everything You Need to Get Started
          </h2>
        </div>

        {/* Resource panels */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Student resources"
        >
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                role="listitem"
                className={`rounded-2xl p-8 flex flex-col gap-5 border border-transparent hover:border-[#0D4F5C]/15 transition-all duration-700 group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  backgroundColor: resource.bgColor,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${resource.color}20` }}
                  aria-hidden="true"
                >
                  <Icon className="w-7 h-7" style={{ color: resource.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl text-[#1C2B3A]"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {resource.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#52647A] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {resource.description}
                </p>

                {/* CTA */}
                <a
                  href={resource.href}
                  className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
                  style={{ color: resource.color, fontFamily: "'DM Sans', sans-serif" }}
                  aria-label={resource.cta}
                >
                  {resource.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
