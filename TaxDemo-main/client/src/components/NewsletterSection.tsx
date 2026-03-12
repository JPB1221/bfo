/*
 * NewsletterSection — Latest tax news articles
 * Design: Clean card grid with navy/gold accent, date labels
 */

import { useEffect, useRef, useState } from "react";

const ARTICLES = [
  {
    title: "Tax Documents May Come in Different Formats This Filing Season",
    date: "March 1, 2026",
    excerpt: 'Keep an eye out over the next 2-3 weeks for important documents you will need to file a complete and accurate tax return. These documents may include Form W-2 (Wage and Tax Statement for employees), along with various 1099 forms showing interest, dividend, rental, royalty or self-employment income.',
    content: `Keep an eye out over the next 2-3 weeks for important documents you will need to file a complete and accurate tax return. These documents may include Form W-2 (Wage and Tax Statement for employees), along with various 1099 forms showing interest, dividend, rental, royalty or self-employment income. Traditionally, these forms came in the mail or were distributed to employees at a workplace. However, they may now be sent digitally, or made available through an online system.

Gathering up needed forms may be especially challenging this tax season for people who qualify for the new "No Tax on Tips," "No Tax on Overtime" and/or "No Tax on Car Loan Interest" deductions. In the future, the information needed to claim these deductions will be included on W-2, 1099 or other standard IRS forms. This year, however, employers and lenders may use alternative reporting formats.

In order to claim any of these deductions, or the enhanced deduction for seniors, you will need to file a new tax form just released by the IRS called Schedule 1-A. A tax professional can help you assemble all the needed information, complete this form and file your entire return electronically so you can receive your refund as quickly as possible.`,
    category: "Tax Filing",
    icon: "📄",
  },
  {
    title: 'No Tax on Overtime Deduction',
    date: "March 1, 2026",
    excerpt: 'The IRS has provided additional guidance on the No Tax on Overtime deduction created under the One Big Beautiful Bill Act (OBBBA). In order to claim the deduction, you must be an FLSA overtime-eligible employee.',
    content: `The IRS has provided additional guidance on the No Tax on Overtime deduction created under the One Big Beautiful Bill Act (OBBBA). In order to claim the deduction, you must be an FLSA overtime-eligible employee, where FLSA stands for the Fair Labor Standards Act. Many full-time employees fit this category but some do not, so if you are unsure about your FLSA designation, check with your employer.

You may only claim the No Tax on Overtime deduction if you have a Social Security number (SSN) valid for U.S. employment. If you are married, you must file a joint tax return with your spouse. Note that the deduction applies only to bonus overtime pay above your normal salary or wage rate.

You do not need to itemize deductions in order to deduct overtime pay. The maximum deduction amount is $12,500, or $25,000 for joint filers if both spouses have qualifying overtime pay and valid SSNs. The deduction amount decreases for people with modified adjusted gross incomes above $150,000 (or $300,000 for joint filers). A tax professional can help you determine whether you qualify to deduct overtime, and if so, help you properly figure your deduction amount.`,
    category: "Tax Deductions",
    icon: "💼",
  },
  {
    title: "Upcoming Tax Deadlines",
    date: "March 1, 2026",
    excerpt: 'Staying ahead of important tax deadlines helps ensure smooth operations and avoid unnecessary penalties. Each month, we highlight key due dates so you know exactly what is coming up and can plan accordingly.',
    content: `Staying ahead of important tax deadlines helps ensure smooth operations and avoid unnecessary penalties. Each month, we highlight key due dates so you know exactly what's coming up and can plan accordingly. Be sure to review the items below and contact us if you have any questions about your specific situation.

Key upcoming deadlines include quarterly estimated tax payments, corporate filing deadlines, and individual return extensions. Our team monitors all federal and Florida state tax deadlines to keep you informed and compliant throughout the year.

Contact Premier Accounting today to ensure you never miss an important tax deadline. We provide proactive reminders and guidance to keep your tax obligations on track.`,
    category: "Tax Deadlines",
    icon: "📅",
  },
];

export default function NewsletterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="newsletter" className="py-20 bg-[#EBF5FB]">
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
                Stay Informed
              </span>
              <div className="h-px w-16 bg-[#D4A843]/60" />
            </div>
            <h2 className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Latest Tax News
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Stay up to date with the latest tax news, deadlines, and financial planning tips from our team.
            </p>
          </div>

          {/* Article cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((article, i) => (
              <div
                key={article.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card header */}
                <div className="bg-[#1B4F72] px-5 py-4 flex items-center gap-3">
                  <span className="text-2xl">{article.icon}</span>
                  <span
                    className="text-[#D4A843] text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3
                    className="text-[#1B4F72] font-semibold text-base leading-snug mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-3.5 h-3.5 text-[#D4A843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-400 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                      {article.date}
                    </span>
                  </div>

                  <p
                    className="text-gray-600 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {activeArticle === i ? article.content : article.excerpt}
                  </p>

                  <button
                    onClick={() => setActiveArticle(activeArticle === i ? null : i)}
                    className="mt-4 inline-flex items-center gap-1.5 text-[#1B4F72] hover:text-[#D4A843] text-sm font-semibold transition-colors self-start"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {activeArticle === i ? (
                      <>
                        Read Less
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More →
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
