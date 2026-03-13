/*
 * HeroSection — Full-bleed hero with coastal imagery and animated text
 * Design: Dark overlay gradient, white text, gold accent tagline
 */

import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/Everglades1_ab21cca9.jpg",
    fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=700&fit=crop&q=80",
    headline: "Relax. We are here to help.",
    subline: "Get the personalized attention you deserve.",
    body: "Worry-free tax & accounting services.",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GAny9ryeuRBMRWCTBX4hrw/Beach1_d03a43e4.jpg",
    fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&q=80",
    headline: "A Family Business Since 1965.",
    subline: "Trusted by our community for over 60 years.",
    body: "Accountants and Income Tax Specialists.",
  },
  {
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=700&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=700&fit=crop&q=80",
    headline: "Just one less thing to worry about.",
    subline: "Strategic financial planning for your family and business.",
    body: "Your City, FL · Serving the Greater Metro Area.",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=700&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=700&fit=crop&q=80",
    headline: "Your trusted financial partner.",
    subline: "Enrolled Agents admitted to practice before the IRS.",
    body: "Income Tax Specialists since 1965.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative h-[70vh] min-h-[480px] max-h-[700px] overflow-hidden">
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d45]/85 via-[#1B4F72]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2d45]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="max-w-2xl transition-all duration-500"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            {/* Gold accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#D4A843]" />
              <span
                className="text-[#D4A843] text-xs font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Premier Accounting Demo · Est. 1965
              </span>
            </div>

            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {slide.headline}
            </h1>

            <p
              className="text-white/90 text-lg sm:text-xl mb-2 font-light"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {slide.subline}
            </p>
            <p
              className="text-white/70 text-base mb-8"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              {slide.body}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#D4A843] hover:bg-[#c49730] text-[#1B4F72] font-bold px-6 py-3 rounded transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Request an Appointment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:5551234567"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded transition-all duration-200 border border-white/30"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 300); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#D4A843]" : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={() => { setVisible(false); setTimeout(() => { setCurrent((current - 1 + heroSlides.length) % heroSlides.length); setVisible(true); }, 300); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => { setVisible(false); setTimeout(() => { setCurrent((current + 1) % heroSlides.length); setVisible(true); }, 300); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
