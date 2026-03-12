/* =============================================================
   HERO — Miami Vice Customs
   Dark Retrowave Luxury: real McLaren video as background,
   animated display text, gradient CTAs.
   Real footage from the client's portfolio.
   ============================================================= */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/GsDrivRGuA9tY7MMqBSuFF/hero-car-9SVNfyeC3azkBRiwteNLT9.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_BG}
        alt=""
        aria-hidden="true"
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/95 via-[#080c14]/75 to-[#080c14]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-[#080c14]/50" />

      {/* Scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-[#00d4ff] to-[#ff2d78]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00d4ff]">
              Elite Car Styling Studio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[5rem] sm:text-[7rem] lg:text-[9rem] leading-none text-white mb-4"
          >
            YOUR
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BRAND
            </span>
            <br />
            HERE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/70 font-light max-w-xl mb-10 leading-relaxed"
          >
            Cutting-edge designs and high-quality installs. From full vinyl wraps
            to ceramic coatings — we transform your vision into reality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00d4ff]/20"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
              }}
            >
              Get a Free Quote
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white rounded-sm border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {[
              { value: "500+", label: "Vehicles Styled" },
              { value: "5★", label: "Rated Studio" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display text-4xl"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff 0%, #ff2d78 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-white/50 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
