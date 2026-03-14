/*
 * NewsletterSection — Latest tax news articles
 * Design: Clean card grid with navy/gold accent, date labels
 */

import { useEffect, useRef, useState } from "react";

const ARTICLES = [
  {
    title: "Navigating the Shift to Digital-First Tax Reporting",
    date: "March 1, 2026",
    excerpt: 'As financial institutions and employers increasingly move away from paper statements, taxpayers must adapt to digital document delivery. Learn how to ensure you have all necessary forms before filing.',
    content: `The era of waiting by the mailbox for your W-2s and 1099s is largely behind us. This year, the IRS reports that over 85% of standard tax documents will be delivered electronically. While this shift reduces paper waste and mailing delays, it places a new burden on taxpayers to actively track down their digital forms across multiple portals.

Before you begin your tax preparation, create a checklist of all expected income sources. This includes your primary employer, freelance platforms, investment brokerages, and even peer-to-peer payment apps. Many of these platforms will not send an email notification when your tax documents are ready; you must log in and download them manually from your account dashboard.

If you are missing a document, do not estimate the amounts. The IRS automated matching system will flag discrepancies between what you report and what institutions file, leading to processing delays or audits. Our team at Premier Accounting can help you identify exactly which forms you need based on your financial profile and ensure your return is filed accurately the first time.`,
    category: "Tax Filing",
    icon: "📄",
  },
  {
    title: 'Maximizing Home Office Deductions in the Hybrid Era',
    date: "March 1, 2026",
    excerpt: 'With hybrid work models becoming the permanent standard for many businesses, understanding the strict IRS rules around home office deductions is more critical than ever for self-employed individuals.',
    content: `The shift toward remote and hybrid work has led to widespread confusion regarding home office deductions. The most important rule to remember is that W-2 employees are currently not eligible to claim the home office deduction, regardless of how many days they work from home. This deduction is strictly reserved for self-employed individuals, freelancers, and independent contractors.

If you qualify, the IRS requires that the space be used "exclusively and regularly" as your principal place of business. A desk in the corner of your guest bedroom or kitchen table does not meet the exclusivity test. The space must be a clearly defined area used only for business activities.

Taxpayers can choose between the simplified method (a standard deduction of $5 per square foot, up to 300 square feet) or the regular method (deducting actual expenses based on the percentage of your home used for business). While the simplified method is easier, the regular method often yields a higher deduction if you have significant mortgage interest, rent, or utility costs. Consult with your CPA to determine which method provides the greatest tax benefit for your specific situation.`,
    category: "Tax Deductions",
    icon: "💼",
  },
  {
    title: "Quarterly Estimated Tax Strategies for Small Businesses",
    date: "March 1, 2026",
    excerpt: 'Failing to pay adequate quarterly estimated taxes is one of the most common—and costly—mistakes made by new business owners. Learn how to project your income and avoid underpayment penalties.',
    content: `Unlike W-2 employees who have taxes withheld from every paycheck, small business owners and freelancers are responsible for paying their taxes as they earn income throughout the year. The IRS requires you to make quarterly estimated tax payments if you expect to owe $1,000 or more when your return is filed.

The challenge for many businesses is accurately projecting income in an unpredictable economy. If you underpay your quarterly estimates, you will face underpayment penalties and interest charges. To avoid this, you can use the "safe harbor" rule: pay 100% of the tax shown on your prior year's return (or 110% if your adjusted gross income was over $150,000).

We recommend setting aside 25-30% of your gross business income in a separate savings account specifically designated for taxes. This ensures you always have the funds available when quarterly deadlines approach. If your business experiences significant seasonal fluctuations, our advisors can help you calculate annualized income installment payments to better align your tax payments with your actual cash flow.`,
    category: "Tax Planning",
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
