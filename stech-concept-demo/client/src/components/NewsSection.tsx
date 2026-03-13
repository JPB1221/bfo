/* ==========================================================================
   COMPONENT: NewsSection
   Design: Civic Warmth — card layout on cream background, image + text
   ========================================================================== */

import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const NEWS_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/euod9L2oubRzMbrTSbdEXv/news-1-9gs3MYBJRHcmNgEhb5WPjq.webp";
const NEWS_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/euod9L2oubRzMbrTSbdEXv/news-2-FULSEVMiZ4BmGeCBRMaBbv.webp";
const NEWS_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/euod9L2oubRzMbrTSbdEXv/news-3-LGCgpJiTD8Lq6oUrxh9Fgc.webp";

const newsItems = [
  {
    id: 1,
    category: "Events",
    date: "March 22, 2026",
    title: "Spring Open House — Tour Our Labs & Meet Instructors",
    excerpt:
      "Join us for our annual Spring Open House on March 22nd. Explore our welding, automotive, healthcare, and IT labs. Advisors will be on hand to answer questions about enrollment and financial aid.",
    image: NEWS_3,
    imageAlt: "Students celebrating at graduation ceremony",
    href: "#news",
  },
  {
    id: 2,
    category: "Program News",
    date: "March 10, 2026",
    title: "New Cybersecurity Track Added to IT Program",
    excerpt:
      "Starting Fall 2026, our Information Technology program will include a dedicated Cybersecurity track with CompTIA Security+ and CySA+ certification preparation.",
    image: NEWS_2,
    imageAlt: "Student working at computer in IT lab",
    href: "#news",
  },
  {
    id: 3,
    category: "Student Success",
    date: "February 28, 2026",
    title: "Healthcare Simulation Lab Receives $500K Equipment Grant",
    excerpt:
      "Our Nursing and Healthcare programs will benefit from a major equipment upgrade funded by a state workforce development grant, including new high-fidelity patient simulators.",
    image: NEWS_1,
    imageAlt: "Nursing student practicing with medical simulation mannequin",
    href: "#news",
  },
];

const categoryColors: Record<string, string> = {
  Events: "#0D4F5C",
  "Program News": "#E8A020",
  "Student Success": "#2E7D32",
};

export default function NewsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#FAF8F4" }}
    >
      <div className="container" ref={ref}>
        {/* Section header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="section-label mb-4">News &amp; Events</div>
            <h2
              id="news-heading"
              className="text-4xl md:text-5xl text-[#1C2B3A]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Stay in the Loop
            </h2>
          </div>
          <a
            href="#news"
            className="flex items-center gap-2 text-[#0D4F5C] font-semibold text-sm hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            All News &amp; Events
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* News cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Recent news and events"
        >
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              role="listitem"
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 group flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category badge overlay */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{
                      backgroundColor: categoryColors[item.category] ?? "#0D4F5C",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Date */}
                <div
                  className="flex items-center gap-1.5 text-[#52647A] text-xs mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={item.date}>{item.date}</time>
                </div>

                {/* Title */}
                <h3
                  className="text-lg text-[#1C2B3A] mb-3 leading-snug"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-[#52647A] text-sm leading-relaxed flex-1 mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.excerpt}
                </p>

                {/* Read more */}
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D4F5C] hover:gap-3 transition-all group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4F5C] rounded"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  aria-label={`Read more about: ${item.title}`}
                >
                  Read More
                  <ArrowRight
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
