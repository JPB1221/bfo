/*
 * ProfileSection — Partner profiles, press releases, community involvement
 * Design: Navy/gold cards, photo grid, press release list
 */

import { useEffect, useRef, useState } from "react";

const PARTNERS = [
  {
    name: "William A. Hargrove, CPA",
    role: "Founder & Managing Partner",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    bio: "William founded the firm in 1978 and has spent nearly five decades helping individuals and businesses navigate complex tax and financial challenges. His entrepreneurial spirit and dedication to clients define the firm's culture.",
    credential: "Founder",
  },
  {
    name: "Catherine Hargrove-Reyes, CPA",
    role: "Partner",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "Catherine carries on her father's legacy with the same commitment to personal service and financial excellence. She specializes in individual and small business tax planning.",
    credential: "CPA",
  },
  {
    name: "David Chen, EA",
    role: "Partner & Enrolled Agent",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    bio: "David is an IRS Enrolled Agent with extensive experience in tax matters and audit procedures, ensuring clients are properly represented before the IRS.",
    credential: "EA",
  },
  {
    name: "Maria Rodriguez, CPA",
    role: "Partner",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    bio: "Maria brings decades of experience in tax preparation and financial planning, serving the community with the same values instilled by the firm's founder.",
    credential: "Tax Specialist",
  },
  {
    name: "Thomas Park, CFP",
    role: "Partner",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    bio: "Thomas contributes his expertise in financial analysis and retirement planning, helping clients build long-term wealth and security.",
    credential: "CFP",
  },
];

const PRESS_RELEASES = [
  "Premier Accounting Recognized as Top 100 Accounting Firms in the Region",
  "Partner David Chen Earns IRS Enrolled Agent Designation",
  "Firm Celebrates 45 Years of Serving the Community",
  "Premier Accounting Expands Services to Include Virtual CFO Consulting",
  "Catherine Hargrove-Reyes Named to 40 Under 40 Business Leaders List",
];

const COMMUNITY = [
  "American Cancer Society — Annual Fundraising Walk",
  "Local Food Bank — Monthly Volunteer Program",
  "Chamber of Commerce — Board Member",
  "Junior Achievement — Financial Literacy Educator",
  "Habitat for Humanity — Annual Build Day Sponsor",
  "United Way — Corporate Giving Partner",
  "Local Youth Sports League — Proud Sponsor",
];

function PartnerCard({ partner }: { partner: typeof PARTNERS[0] }) {
  const initials = partner.name.split(" ").map(n => n[0]).join("").slice(0, 2);
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Photo or initials */}
      <div className="bg-[#1B4F72] h-40 flex items-center justify-center relative overflow-hidden">
        {partner.photo ? (
          <img
            src={partner.photo}
            alt={partner.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#D4A843]/20 border-2 border-[#D4A843]/40 flex items-center justify-center">
            <span className="text-[#D4A843] text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {initials}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-[#D4A843] text-[#1B4F72] text-xs font-bold px-2 py-0.5 rounded-full" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          {partner.credential}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[#1B4F72] font-semibold text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {partner.name}
        </h3>
        <p className="text-[#D4A843] text-xs font-semibold mb-2" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          {partner.role}
        </p>
        <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          {partner.bio}
        </p>
      </div>
    </div>
  );
}

export default function ProfileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-16 bg-[#D4A843]/60" />
              <span className="text-[#D4A843] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Our Team
              </span>
              <div className="h-px w-16 bg-[#D4A843]/60" />
            </div>
            <h2 className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Partner Profiles
            </h2>
            <blockquote className="mt-4 max-w-xl mx-auto">
              <p className="text-[#1B4F72] text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Honor your goals, monitor your cash flow and keep consistent."
              </p>
              <cite className="text-gray-400 text-sm not-italic" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                — Firm Founder
              </cite>
            </blockquote>
          </div>

          {/* Partner cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
            {PARTNERS.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>

          {/* Relationships paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-[#1B4F72] text-2xl font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Relationships
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              We are your trusted partner in success. Our firm is large enough to offer a full range of professional services at a fair price, but small enough to give you the individual attention that you deserve. Rest assured that when a need arises, our firm is ready and capable to handle everything for you so you can focus on what matters most to you.
            </p>
          </div>

          {/* Press releases + Community involvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Press Releases */}
            <div className="bg-[#1B4F72] rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#D4A843] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1B4F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Press Releases
                </h3>
              </div>
              <ul className="space-y-3">
                {PRESS_RELEASES.map((pr) => (
                  <li key={pr} className="flex items-start gap-3">
                    <span className="text-[#D4A843] mt-1 flex-shrink-0">—</span>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#D4A843] text-sm transition-colors leading-relaxed"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {pr}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Involvement */}
            <div className="bg-[#FAFAF8] rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-[#1B4F72] text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Community Involvement
                </h3>
              </div>
              <ul className="space-y-2">
                {COMMUNITY.map((org) => (
                  <li key={org} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      {org}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
