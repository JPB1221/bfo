/*
 * MapSection — Google Maps embed with office location
 * Design: Clean white section with map and address overlay
 */

import { useState } from "react";

export default function MapSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="py-16 bg-[#EBF5FB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-[#D4A843]/60" />
            <span
              className="text-[#D4A843] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Find Us
            </span>
            <div className="h-px w-12 bg-[#D4A843]/60" />
          </div>
          <h2
            className="text-[#1B4F72] text-4xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Location
          </h2>
          <p
            className="text-gray-600 mt-2 text-sm"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Conveniently located in the heart of the city, serving the greater metropolitan area
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {!showMap ? (
            /* Map placeholder with address */
            <div
              className="relative h-80 flex items-center justify-center cursor-pointer group"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=400&fit=crop&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setShowMap(true)}
            >
              <div className="absolute inset-0 bg-[#1B4F72]/70 group-hover:bg-[#1B4F72]/60 transition-colors" />
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A843] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#1B4F72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p
                  className="text-white font-bold text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  123 Main Street, Suite 200
                </p>
                <p
                  className="text-white/80 text-sm mb-4"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Your City, FL 33000
                </p>
                <button
                  className="bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
                  style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                >
                  Show Map
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-80.19!3d25.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzEyLjAiTiA4MMKwMTEnMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Premier Accounting Location"
            />
          )}

          {/* Address bar */}
          <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[#1B4F72] text-sm" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  123 Main Street, Suite 200
                </div>
                <div className="text-gray-500 text-xs" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                  Your City, FL 33000
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=123+Main+Street+Suite+200+Your+City+FL+33000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B4F72] hover:text-[#D4A843] text-sm font-semibold flex items-center gap-1 transition-colors"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
