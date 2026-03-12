/*
 * ServicesSection — All 12 services with expandable details
 * Design: Clean grid layout, navy/gold accent, accordion expand
 */

import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    title: "Accounting / Bookkeeping",
    icon: "📊",
    summary: "Comprehensive bookkeeping and accounting services to keep your business finances running smoothly.",
    detail: "If your business does not currently have accounting staff or is outgrowing its current bookkeeping system, we can provide comprehensive services to ensure the smooth operation of the financial side of your business. As your business needs grow and change, we can provide input and planning assistance to make sure your accounting and financial systems keep pace with your growth.",
  },
  {
    title: "Audits, Reviews & Compilations",
    icon: "🔍",
    summary: "Non-certified audits, reviews and compilations tailored to your unique business needs.",
    detail: "Our audit, review and compilation capabilities are a core part of our services. We tailor each process to the unique needs of your business. We deliver financial statements and reports that are clear, concise and acceptable to all outside parties and that can provide information and insight to help you run your business more effectively.",
  },
  {
    title: "Business Consulting",
    icon: "💼",
    summary: "Strategic business consulting to help you make the right decisions for your company's future.",
    detail: "As a true business partner, we are available to help you deal with any business problem or opportunity. We stand ready to engage in business consulting projects to help you make the right decisions for the future of your business. Whether you face questions related to expanding, selling or restructuring your business, we have the necessary business acumen and analytical capabilities.",
  },
  {
    title: "Business Entity Selection & Incorporation",
    icon: "🏢",
    summary: "Expert guidance on choosing the right business structure — LLC, S-Corp, C-Corp, Partnership, and more.",
    detail: "The business entity—LLP, LLC, sole proprietorship, partnership, corporation, etc.—that you select for your business has enormous financial and tax implications. It is important that you make the right decision. We can explain each choice and its implications. As your business grows and changes, the type of business entity you choose may need to change also.",
  },
  {
    title: "Estate & Trust Tax Preparation",
    icon: "🏛️",
    summary: "Proactive estate planning to minimize taxes and ensure a smooth transition to your heirs.",
    detail: "Estate matters affect everyone. By taking proactive steps today, you can ease the way for your heirs during a very difficult time. We can work with your legal counsel to help you to structure your estate and trusts to minimize taxes and ensure the smooth transition to your heirs. We are available to handle all estate and trust tax-related matters.",
  },
  {
    title: "Financial Analysis",
    icon: "📈",
    summary: "In-depth financial analysis to support better management, planning, and decision-making.",
    detail: "When a business is able to undertake strong financial analysis, it opens up new opportunities to improve management, planning and decision making. Financial analysis provides the numbers to support, reject or contemplate a course of action. Prospective analysis can show how situations may evolve under various scenarios, providing a new dimension to decision making.",
  },
  {
    title: "Financial Education & Assistance for the Elderly",
    icon: "🤝",
    summary: "Bill pay, organization services, Power of Attorney, and Veterans/Medicaid benefit assistance.",
    detail: "With years of experience, we can help try to take the burden off of you or a loved one. We offer a bill pay and organization service and can also serve as Power of Attorney or as Personal Representative, if needed. If you or your loved one is a U.S. Veteran, we can help try for approval for Veterans Elder Care benefits. Also, if Financial Assistance is needed, we can help try for approval for Medicaid benefits.",
  },
  {
    title: "Financial Statements",
    icon: "📋",
    summary: "Accurate, timely financial statements developed in close collaboration with your key personnel.",
    detail: "Financial statements are an important tool for management decision making. Financial statements also represent your business to lenders, partners, potential buyers and other interested parties. We will work closely with your key personnel to develop and finalize accurate and timely financial statements.",
  },
  {
    title: "IRS Representation",
    icon: "⚖️",
    summary: "Expert IRS audit representation by our Enrolled Agent, admitted to practice before the IRS.",
    detail: "An IRS audit can be an intimidating and complex process. If you or your business face an IRS audit, our Enrolled Agent bears years of experience in dealing with tax matters and IRS audit procedures to ensure that you are properly represented when dealing with the IRS and other tax authorities.",
  },
  {
    title: "Payroll Services",
    icon: "💰",
    summary: "Full payroll management keeping you compliant with ever-changing federal, state, and local laws.",
    detail: "Constantly changing federal, state and local laws and tax regulations make payroll management an ongoing challenge for business owners. Our payroll services professionals are well versed on these laws and regulations. We can proactively alert you to material changes that will affect your business and your employees while also keeping payroll running smoothly.",
  },
  {
    title: "Retirement Planning",
    icon: "🌅",
    summary: "Personalized retirement planning for individuals and businesses in these uncertain times.",
    detail: "Retirement planning is critical in these uncertain times. Whether you are developing a retirement plan for yourself or choosing a retirement plan to offer to your employees, we can help you evaluate the available options. Our focus is on helping you to make the choice that is most appropriate for your own financial situation.",
  },
  {
    title: "Tax Preparation & Planning",
    icon: "📝",
    summary: "Proactive tax planning to minimize your future tax liability — personal and business.",
    detail: "Effective tax preparation and planning can help you to minimize your future tax liability. We can help you proactively manage both your personal and your business tax issues, including understanding how upcoming business opportunities impact your tax status. We understand how the latest federal, state and local tax legislation and other developments affect you and your business.",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
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
                What We Offer
              </span>
              <div className="h-px w-16 bg-[#D4A843]/60" />
            </div>
            <h2 className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Comprehensive accounting and tax services for individuals, families, and businesses across South Florida.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  expanded === i
                    ? "border-[#1B4F72] shadow-lg bg-[#1B4F72] text-white"
                    : "border-gray-100 shadow-sm bg-white hover:border-[#1B4F72]/30 hover:shadow-md"
                }`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{service.icon}</span>
                      <div>
                        <h3
                          className={`font-semibold text-sm leading-snug mb-1 ${expanded === i ? "text-white" : "text-[#1B4F72]"}`}
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-xs leading-relaxed ${expanded === i ? "text-white/80" : "text-gray-500"}`}
                          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                        >
                          {service.summary}
                        </p>
                      </div>
                    </div>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${expanded === i ? "rotate-180 text-[#D4A843]" : "text-gray-400"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Expanded detail */}
                  {expanded === i && (
                    <div
                      className="mt-4 pt-4 border-t border-white/20 text-white/90 text-xs leading-relaxed"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {service.detail}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1B4F72] hover:bg-[#154060] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Request a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
