/*
 * ContactFormSection — Contact form + client testimonials
 * Design: Split layout — form on left, testimonials on right
 * DEMO: Generic placeholder content
 */

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const TESTIMONIALS = [
  {
    name: "Michael T.",
    role: "Small Business Owner",
    text: "Premier Accounting has been our trusted partner for over 15 years. They saved us thousands in taxes and always make us feel like a priority, not just a number. Truly one less thing to worry about.",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Sandra R.",
    role: "Retired Educator",
    text: "I was nervous about my first year filing taxes on my own after my husband passed. The team here was patient, compassionate, and incredibly thorough. I felt completely taken care of.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "James & Carol W.",
    role: "Family Clients",
    text: "We've been coming here since 1998. Three generations of our family now use Premier Accounting. They know our situation inside and out and always find deductions we never knew existed.",
    rating: 5,
    initials: "JW",
  },
  {
    name: "David L.",
    role: "Real Estate Investor",
    text: "Their expertise in real estate tax planning is unmatched. They restructured my portfolio approach and I saved significantly on capital gains. Highly recommend for any investor.",
    rating: 5,
    initials: "DL",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#D4A843]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ContactFormSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Thank you! We'll be in touch within one business day.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#D4A843]/60" />
            <span
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Get In Touch
            </span>
            <div className="h-px w-12 bg-[#D4A843]/60" />
          </div>
          <h2
            className="text-[#1B4F72] text-4xl sm:text-5xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Request a Consultation
          </h2>
          <p
            className="text-gray-500 mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Fill out the form below and one of our tax professionals will contact you within one business day.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3
              className="text-[#1B4F72] text-2xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-semibold text-[#1B4F72] mb-1.5"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/10 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-[#1B4F72] mb-1.5"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/10 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-semibold text-[#1B4F72] mb-1.5"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/10 transition-all"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold text-[#1B4F72] mb-1.5"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/10 transition-all bg-white"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Tax Preparation & Planning</option>
                    <option>Accounting / Bookkeeping</option>
                    <option>Business Consulting</option>
                    <option>IRS Representation</option>
                    <option>Payroll Services</option>
                    <option>Retirement Planning</option>
                    <option>Estate & Trust Tax</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-semibold text-[#1B4F72] mb-1.5"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us a little about your situation or what you need help with…"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1B4F72] focus:ring-2 focus:ring-[#1B4F72]/10 transition-all resize-none"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#1B4F72] hover:bg-[#154060] disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <p
                className="text-gray-400 text-xs text-center"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                We typically respond within one business day. Your information is kept strictly confidential.
              </p>
            </form>
          </div>

          {/* Testimonials */}
          <div className="space-y-5">
            <h3
              className="text-[#1B4F72] text-2xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Our Clients Say
            </h3>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s ease`,
                }}
              >
                <StarRating count={t.rating} />
                <p
                  className="text-gray-600 text-sm leading-relaxed mt-3 mb-4 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-[#D4A843] text-xs font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      className="text-[#1B4F72] font-semibold text-sm"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-gray-400 text-xs"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
