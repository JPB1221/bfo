/*
 * TributeSection — Memorial tribute to firm founder
 * Design: Warm, respectful layout with sepia-toned photo
 * DEMO: Generic placeholder content — no real names or firm details
 */

import { useEffect, useRef, useState } from "react";

export default function TributeSection() {
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
    <section className="py-20 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="max-w-4xl mx-auto transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#D4A843]/60" />
              <span
                className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                In Memoriam
              </span>
              <div className="h-px w-12 bg-[#D4A843]/60" />
            </div>
            <h2
              className="text-[#1B4F72] text-4xl font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Robert A. Mitchell
            </h2>
            <p
              className="text-gray-500 mt-1 text-sm italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Founder, Premier Accounting &amp; Tax Specialists · November 2020
            </p>
          </div>

          {/* Letter card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Photo column */}
              <div className="md:col-span-1 bg-[#1B4F72] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-40 h-48 mx-auto rounded-xl overflow-hidden shadow-xl mb-4 bg-[#0d2d45] flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=380&fit=crop&q=80"
                      alt="Robert A. Mitchell, Founder"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div
                    className="text-[#D4A843] font-semibold text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Robert A. Mitchell
                  </div>
                  <div
                    className="text-white/60 text-xs mt-1"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Founder &amp; President
                  </div>
                  <div
                    className="text-white/60 text-xs"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Premier Accounting
                  </div>
                </div>
              </div>

              {/* Letter content */}
              <div className="md:col-span-2 p-8">
                <p
                  className="text-gray-400 text-sm mb-4 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  November 16, 2020
                </p>
                <p
                  className="text-[#1B4F72] font-semibold mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Dear Clients and Friends,
                </p>

                <div className="space-y-4 text-[#374151] text-sm leading-relaxed" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  <p>
                    It is with great sadness that we announce the passing of Robert A. Mitchell, our firm's founder. Robert passed away peacefully on November 1, 2020, surrounded by his loving family after a courageous battle with illness.
                  </p>
                  <p>
                    Robert was deeply loved by his family and friends, and words cannot fully express the loss that is felt by his passing. He took great pride in building this practice and was grateful for every client relationship formed over nearly six decades. In January, we will celebrate 60 years in business — a milestone he worked his entire life to reach.
                  </p>
                  <p>
                    Robert was an extraordinarily bright and accomplished entrepreneur who built a company that still represents and practices the same principles he used to create this firm. He had an exceptional work ethic, long-term commitments to his clients, and diligence in strong financial practices. His belief that his colleagues were integral to both his personal and the company's success made him truly one of a kind.
                  </p>
                  <p>
                    We thank you heartily for the patronage you have extended to us and sincerely hope that the same will be continued in the future.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p
                    className="text-[#374151] text-sm mb-3"
                    style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    Sincerely,
                  </p>
                  <p
                    className="text-[#1B4F72] font-bold text-base mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Premier Accounting &amp; Family
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      "Jennifer Mitchell",
                      "Michael Mitchell",
                      "Sarah Mitchell-Park",
                      "Laura Mitchell-Chen",
                    ].map((name) => (
                      <div
                        key={name}
                        className="text-gray-500 text-sm italic"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p
              className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Contact the professionals at Premier Accounting &amp; Tax Specialists at{" "}
              <a href="tel:5551234567" className="text-[#1B4F72] font-semibold hover:text-[#D4A843] transition-colors">
                (555) 123-4567
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
