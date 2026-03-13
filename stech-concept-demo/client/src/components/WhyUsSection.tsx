/* ==========================================================================
   COMPONENT: WhyUsSection
   Design: Civic Warmth — split layout, teal background left, feature list right
   ========================================================================== */

import { CheckCircle2, Users, Briefcase, DollarSign, BookOpen, Award } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    icon: BookOpen,
    title: "Hands-On Training",
    description:
      "Learn by doing in our industry-grade labs. Every program emphasizes practical, real-world skills from day one.",
  },
  {
    icon: Briefcase,
    title: "Industry Partnerships",
    description:
      "We partner with 200+ local employers to ensure our curriculum meets current workforce demands and opens hiring pipelines.",
  },
  {
    icon: Users,
    title: "Job Placement Support",
    description:
      "Our dedicated career services team connects graduates with employers through job fairs, resume workshops, and direct referrals.",
  },
  {
    icon: DollarSign,
    title: "Affordable Tuition",
    description:
      "Technical education shouldn't break the bank. We offer competitive tuition, payment plans, and extensive financial aid.",
  },
  {
    icon: Award,
    title: "Accredited Programs",
    description:
      "Our programs are accredited and recognized by industry certifying bodies, giving your credentials real-world value.",
  },
  {
    icon: CheckCircle2,
    title: "Flexible Scheduling",
    description:
      "Day, evening, and hybrid options let you balance school with work and family responsibilities.",
  },
];

const stats = [
  { value: "1,200+", label: "Students Enrolled" },
  { value: "200+", label: "Employer Partners" },
  { value: "94%", label: "Job Placement Rate" },
  { value: "25+", label: "Years Serving the Community" },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 md:py-28 bg-white"
    >
      <div className="container" ref={ref}>
        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-8 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="text-3xl md:text-4xl font-bold text-[#0D4F5C] mb-1"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#52647A] text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + teal card */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="section-label mb-4">Why Choose Us</div>
            <h2
              id="why-us-heading"
              className="text-4xl md:text-5xl text-[#1C2B3A] mb-6"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              A College Built Around Your Career
            </h2>
            <p
              className="text-[#52647A] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We're not a traditional four-year university. We're a focused,
              career-driven institution where every program, every instructor,
              and every piece of equipment is chosen to get you job-ready fast.
            </p>

            {/* Teal testimonial card */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ backgroundColor: "#0D4F5C" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: "#E8A020", transform: "translate(30%, -30%)" }}
                aria-hidden="true"
              />
              <blockquote>
                <p
                  className="text-white/90 text-lg leading-relaxed mb-4 italic"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  "I enrolled in the Welding program and had a job offer before
                  I even graduated. The instructors have real industry experience
                  — they teach you exactly what employers want."
                </p>
                <footer>
                  <cite
                    className="not-italic text-amber-300 text-sm font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    — Marcus T., Welding Technology Graduate, Class of 2024
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right: feature grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-3 p-5 rounded-xl border border-gray-100 hover:border-[#0D4F5C]/20 hover:shadow-sm transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 70}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#EBF5F7" }}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-[#0D4F5C]" />
                  </div>
                  <h3
                    className="text-base font-semibold text-[#1C2B3A]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[#52647A] text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
